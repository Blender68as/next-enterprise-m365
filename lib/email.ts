import { ClientSecretCredential } from '@azure/identity'
import { Client } from '@microsoft/microsoft-graph-client'
import 'isomorphic-fetch'

const tenantId = process.env.AZURE_TENANT_ID!
const clientId = process.env.AZURE_CLIENT_ID!
const clientSecret = process.env.AZURE_CLIENT_SECRET!
const user = process.env.SMTP_USER!               // your user principal
const sharedMailbox = process.env.CONTACT_RECEIVER_EMAIL! // e.g. shared@behördedigital.de

function getCredential() {
  return new ClientSecretCredential(tenantId, clientId, clientSecret)
}

async function getGraphClient() {
  const cred = getCredential()
  const authProvider = {
    getAccessToken: async () => {
      const t = await cred.getToken('https://graph.microsoft.com/.default')
      if (!t) throw new Error('No Graph token')
      return t.token
    },
  }
  return Client.initWithMiddleware({ authProvider })
}

export async function sendMail({
  to,
  subject,
  text,
  html,
}: {
  to: string
  subject: string
  text?: string
  html?: string
}) {
  const client = await getGraphClient()
  // send as shared mailbox, but target your service principal’s mailbox endpoint
  await client.api(`/users/${user}/sendMail`).post({
    message: {
      subject,
      body: {
        contentType: html ? 'HTML' : 'Text',
        content: html ?? text,
      },
      toRecipients: [
        { emailAddress: { address: to } }
      ],
    },
    saveToSentItems: 'true',
  })
  return true
}
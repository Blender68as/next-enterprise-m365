import "styles/tailwind.css"
import "styles/global.css"
import "@radix-ui/themes/styles.css"

import { Theme } from "@radix-ui/themes"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Theme className="background">{children}</Theme>
      </body>
    </html>
  )
}

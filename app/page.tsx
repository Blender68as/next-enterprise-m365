import HomePageClient from "./Homepage"

export const metadata = {
  title: "Behörde.Digital | Microsoft 365 für Behörden",
  description:
    "Behörde.Digital unterstützt Behörden bei der sicheren Cloud-Migration und Implementierung moderner Microsoft 365-Lösungen. Jetzt erstes kostenloses Beratungsgespräch sichern!",
  keywords:
    "Digitalisierung, Behörden, Cloud-Migration, Microsoft 365, Office365, Behörde.Digital, SharePoint, IT-Beratung, IT-Lösungen",
  authors: [{ name: "Behörde.Digital" }],
  robots: "index, follow",
  icons: {
    icon: "/logo-full.webp",
  },
}

export default function Page() {
  return <HomePageClient />
}

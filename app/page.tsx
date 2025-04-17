import HomePageClient from "./Homepage"

export const metadata = {
  title: "BehördeDigital | Microsoft 365 für Behörden",
  description:
    "BehördeDigital unterstützt Behörden bei der sicheren Cloud-Migration und Implementierung moderner Microsoft 365-Lösungen. Erfahren Sie in einem kostenfreien Erstgespräch, wie wir Ihre digitale Transformation durch maßgeschneiderte IT-Konzepte vorantreiben.",
  keywords:
    "Digitalisierung, Behörden, Cloud-Migration, Microsoft 365, Office365, BehördeDigital, SharePoint, IT-Beratung, IT-Lösungen",
  authors: [{ name: "BehördeDigital" }],
  robots: "index, follow",
  icons: {
    icon: "/logo-full.webp",
  },
}

export default function Page() {
  return <HomePageClient />
}

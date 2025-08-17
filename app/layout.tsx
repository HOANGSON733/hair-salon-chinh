import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/header"
import Footer from "@/components/footer"
import FloatingContact from "@/components/floating-contact"

export const metadata: Metadata = {
  title: "Hair Salon Chính - Salon Tóc Chuyên Nghiệp",
  description:
    "Hair Salon Chính - Salon tóc chuyên nghiệp với đội ngũ stylist giàu kinh nghiệm. Dịch vụ cắt tóc, nhuộm, uốn, chăm sóc tóc chất lượng cao.",
  keywords: "salon tóc, cắt tóc, nhuộm tóc, uốn tóc, chăm sóc tóc, stylist chuyên nghiệp",
  openGraph: {
    title: "Hair Salon Chính - Salon Tóc Chuyên Nghiệp",
    description: "Salon tóc chuyên nghiệp với dịch vụ chất lượng cao",
    url: "https://hair-salon-chinh-fe.vercel.app/Logo-Chinh.png",
  },
  // generator: "v0.dev",
  metadataBase: new URL("https://hair-salon-chinh-fe.vercel.app/"),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <head>
        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400..900;1,400..900&display=swap"
          rel="stylesheet"
        />

        {/* Favicon and Icons */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Additional favicon support */}
        <meta name="msapplication-TileColor" content="#ffffff" />
        <meta name="theme-color" content="#ffffff" />

        {/* Meta tags */}
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Salon tóc chuyên nghiệp với đội ngũ stylist giàu kinh nghiệm. Dịch vụ cắt tóc, nhuộm, uốn, chăm sóc tóc chất lượng cao."
        />
        <meta
          name="keywords"
          content="salon tóc, cắt tóc, nhuộm tóc, uốn tóc, chăm sóc tóc, stylist chuyên nghiệp"
        />
        <meta name="author" content="Hair Salon Chính" />
        <meta property="og:title" content="Hair Salon Chính - Salon Tóc Chuyên Nghiệp" />
        <meta property="og:description" content="Salon tóc chuyên nghiệp với dịch vụ chất lượng cao" />
        <meta property="og:image" content="/images/salon-hero.jpg" />
        <meta property="og:url" content="https://hairsalonchinh.com" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
      </head>
      <body suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingContact
          facebookPage="hairchinhsalon"
          zaloNumber="0967100552"
          phoneNumber="0967100552"
        />
      </body>
    </html>
  )
}

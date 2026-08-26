import { Poppins } from "next/font/google";
import "./globals.css";
const pop = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Paul Renzo Gonzales | Portafolio Web",
  description:
    "Portafolio de Paul Renzo Gonzales Asencios — Desarrollador Full Stack especializado en React, Next.js, Angular, NestJS y bases de datos. Estudiante de Ingeniería Informática.",
  keywords: [
    "desarrollador full stack",
    "React",
    "Next.js",
    "Angular",
    "NestJS",
    "TypeScript",
    "PostgreSQL",
    "portafolio",
    "Lima Peru",
  ],
  authors: [{ name: "Paul Renzo Gonzales Asencios" }],
  openGraph: {
    title: "Paul Renzo Gonzales | Portafolio Web",
    description:
      "Desarrollador Full Stack especializado en React, Next.js, Angular, NestJS y bases de datos.",
    url: "https://cv-5h4r.onrender.com",
    siteName: "Portafolio Renzo Gonzales",
    locale: "es_PE",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paul Renzo Gonzales | Portafolio Web",
    description:
      "Desarrollador Full Stack especializado en React, Next.js, Angular, NestJS y bases de datos.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        ></link>
      </head>
      <body className={pop.className}>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}

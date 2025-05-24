import "./globals.css";

export const metadata = {
  title: "janbiernacik.com",
  description: "Tech enthusiast and self-taught frontend developer",
  keywords: "janbiernacik, frontend developer, web development, tech enthusiast",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}

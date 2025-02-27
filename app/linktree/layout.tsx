export const metadata = {
  title: "LINKS | TAURA",
  description: "SOUL-FUELED | SPIRIT-DRIVEN",
};

import "../globals.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script data-collect-dnt="true" async src="https://scripts.simpleanalyticscdn.com/latest.js"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
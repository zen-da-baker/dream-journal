// Import the meta data type from Next
import type { Metadata } from "next";

// Export the metadata object for use throughout the app
export const metadata: Metadata = {
  title: "ByteSized Dreams",
  description: "This is a dream journaling app.",
};

// Import styles
import "../styles/global.css";
import "../styles/typography.css";
import "../styles/flex.css";
import "../styles/header.css";
import "../styles/button.css";
import "../styles/card.css";
import "../styles/footer.css";
import "../styles/main.css";

// Export root layout
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">

      <body>

        { children }

      </body>

    </html>
  );

}

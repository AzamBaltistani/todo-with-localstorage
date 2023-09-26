import Header from "./components/Header/Header";
import MyThemeProvider from "./components/MyThemeProvider";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "Todo App with local storage",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <MyThemeProvider>
          <Header>{children}</Header>
        </MyThemeProvider>
      </body>
    </html>
  );
}

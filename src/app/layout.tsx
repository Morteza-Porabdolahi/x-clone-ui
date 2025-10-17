import { RightBar } from "@/components/RightBar";
import "./globals.css";
import { LeftBar } from "@/components/LeftBar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <section className="flex justify-between max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl xxl:max-w-screen-xxl mx-auto">
          <section className="px-2 xsm:px-4 xxl:px-8">
            <LeftBar />
          </section>
          <section className="flex-grow lg:min-w-[600px] border-x-[1px] border-gray-100">{children}</section>
          <section className="hidden lg:flex lg:ml-4 md:ml-8 flex-1">
            <RightBar />
          </section>
        </section>
      </body>
    </html>
  );
}

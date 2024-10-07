import Footer from "@/components/Footer";
import Header from "@/components/Header";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <main className="flex-1 py-28 mx-10 lg:mx-24">{children}</main>
      <Footer />
    </>
  );
}

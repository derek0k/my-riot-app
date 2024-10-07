import Footer from "@/components/Footer";
import Header from "@/components/Header";

export async function generateMetadata() {
  return {
    title: `404 Not Found`,
    description: `404 Not Found`,
  };
}
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="flex-1 py-28 mx-10 lg:mx-24">
        <h2>404 Page Not Found</h2>
      </main>
      <Footer />
    </>
  );
}

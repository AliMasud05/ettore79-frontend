import Footer from "@/components/shared/Footer";
import Navbar from "@/components/shared/Navbar";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main className="grid grid-rows-[auto,1fr,auto] min-h-screen">
        <Navbar />
        {children}
        <Footer />
      </main>
    </>
  );
};

export default CommonLayout;

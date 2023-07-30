import Navbar from "@/components/Navbar";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="min-h-screen bg-[#111827]">
      <Navbar></Navbar>
      {children}
    </section>
  );
};

export default Layout;

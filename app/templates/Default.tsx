import Header from "../components/Header";
import Footer from "../components/Footer";

export default function({
    className,
    children,
}: {
    className?: string;
    children: React.ReactNode;
}) {
  return (
    <div className ="flex flex-col min-h-dvh border">
      <Header />
      <main className ={"container mx-auto p-5 flex-1"}>{children}</main>
      <Footer />
      </div>
  );
}
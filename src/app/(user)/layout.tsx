import "@ant-design/v5-patch-for-react-19";
import Footer from "@/components/shared/footer";
import Navbar from "@/components/shared/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const user = { name: "Saint Josef" };
  return (
    <>
      <Navbar user={user} />
      {children}
      <Footer />
    </>
  );
}

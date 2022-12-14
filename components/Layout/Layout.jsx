import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";

export default function Layout({ children }) {
  return (
    <div className="wrapper">
      <Header />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

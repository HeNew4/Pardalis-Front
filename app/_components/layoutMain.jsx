import Footer from "./Footer";
import NavBar from "./NavBar";

 
export default function LayoutMain({ children }) {
  return (
    <div className="fondo-especial">
      <NavBar />
      <main className="min-h-screen grid place-content-center">{children}</main>
      <Footer />
    </div>
  )
}
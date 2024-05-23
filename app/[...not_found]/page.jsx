import Image from "next/image";
import NavBar from "../_components/NavBar";

export default function Custom404() {
  return (
    <div className="h-svh error text-center">
      <NavBar />

      <main className="grid place-content-center ">
        <Image
          src="img/Logo/Error.svg"
          alt="Logo Error"
          width={800}
          height={800}
        />

        <br />

        <p className="text-3xl font-bold text-black">Error algo salio mal</p>
      </main>
    </div>
  );
}

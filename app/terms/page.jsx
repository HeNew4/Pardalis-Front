import Footer from "../_components/Footer";
import NavBar from "../_components/NavBar";

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col fondo-especial">
            <NavBar />

            <main className="grid center flex-1 p-4">
                <section className="grid place-content-center p-6 bg-background rounded-lg hover:bg-background dark:bg-background m-1">
                    <h2 className=" text-4xl font-extrabold ml-2">Términos y Condiciones</h2>
                    <p className="ml-3">Actualizado el 2024-05-23</p>
                    <h2 className=" text-4xl font-extrabold m-2">Términos generales</h2>

                    <p className="m-3 mt-2">
                        El equipo de desarrollo, denominado Ponchoides, presenta la propuesta de la aplicación web Pardalis
                        como una solución para apoyar de manera integral a los estudiantes de primaria baja, con un enfoque
                        específico en aquellos que se encuentran en el rango de edades de 6 a 9 años, durante su proceso de
                        aprendizaje del idioma inglés. Pardalis se distingue por ofrecer una experiencia de aprendizaje única y
                        natural, donde los niños pueden desarrollar sus habilidades lingüísticas de manera lúdica y efectiva.
                    </p>
                </section>
            </main>

            

            <Footer />
        </div>
    )
}

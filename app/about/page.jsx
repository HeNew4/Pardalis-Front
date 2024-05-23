import Footer from "../_components/SpFooter";
import NavBar from "../_components/NavBar";

export default function Page() {
    return (
        <div className="min-h-screen flex flex-col fondo">
            <NavBar />

            <main className="grid grid-cols-2 flex-1 p-4">
                <section className="grid place-content-center p-6 bg-background rounded-lg hover:bg-background dark:bg-background m-4">
                    <h2 className="text-center text-4xl font-extrabold">¿Qué es Pardalis?</h2>
                    <p className="m-2 mt-5">
                        El equipo de desarrollo, denominado Ponchoides, presenta la propuesta de la aplicación web Pardalis
                        como una solución para apoyar de manera integral a los estudiantes de primaria baja, con un enfoque
                        específico en aquellos que se encuentran en el rango de edades de 6 a 9 años, durante su proceso de
                        aprendizaje del idioma inglés. Pardalis se distingue por ofrecer una experiencia de aprendizaje única y
                        natural, donde los niños pueden desarrollar sus habilidades lingüísticas de manera lúdica y efectiva.
                    </p>
                </section>

                <section className="grid place-content-center p-6 bg-background rounded-lg hover:bg-background dark:bg-background m-4">
                    <h2 className="text-center text-4xl font-extrabold">¿Por qué elegir Pardalis?</h2>
                    <p className="m-2 mt-5">
                        La aplicación está diseñada con una interfaz amigable y atractiva, adaptada a las necesidades y preferencias
                        de los usuarios más jóvenes, con el objetivo de convertir el aprendizaje del inglés en una experiencia divertida
                        y motivadora. Pardalis integra diversos recursos didácticos interactivos, juegos educativos y actividades
                        dinámicas que buscan estimular el interés y la participación de los niños, favoreciendo así un aprendizaje más
                        significativo.
                        
                    </p>
                </section>
            </main>

            <Footer />
        </div>
    )
}

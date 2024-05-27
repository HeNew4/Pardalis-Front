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

                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Términos generales</h2>
                    <p className="m-3 mt-2">
                    Al acceder y realizar un pedido con Pardalis, usted confirma que està de acuerdo y sujeto a los términos de servicio contenidos en los Términos y condiciones que se describen a continuación. Estos términos se aplican a todo el sitio web y a cualquier correo electrónico u otro tipo de comunicación entre usted y Pardalis.
                    </p>
                    <p className="m-3 mt-2">
                    Bajo ninguna circunstancia el equipo de Pardalis será responsable de ningún daño directo, indirecto, especial, incidental o consecuente, que incluye, entre otros, la pérdida de datos o ganancias que surjan del uso o la incapacidad de usar, los materiales de este sitio, incluso si el equipo de Pardalis o un representante autorizado han sido informados de la posibilidad de tales daños. Si su uso de materiales de este sitio resulta en la necesidad de servicio, reparación o corrección de equipos o datos, usted asume los costos de los mismos.
                    </p>
                    <p className="m-3 mt-2">
                    Pardalis no será responsable de ningún resultado que pueda ocurrir durante el curso del uso de nuestros recursos. Nos reservamos el derecho de cambiar los precios y revisar la política de uso de recursos en cualquier momento.
                    </p>

                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Licencia</h2>
                    <p className="m-3 mt-2">
                    Pardalis le otorga una licencia revocable, no exclusiva, intransferible y limitada para descargar, instalar y usar la website estrictamente de acuerdo con los términos de este Acuerdo. Estos Términos y condiciones son un contrato entre usted y Pardalis ("nosotros", "nuestro" o "nos") le otorga una licencia revocable, no exclusiva, intransferible y limitada para descargar, instalar y utilizar el sitio web estrictamente de acuerdo con los términos de este Acuerdo.    
                    </p>
                    
                    <h2 className=" text-4xl font-extrabold m-2">Definiciones y términos clave</h2>
                    <p>
                    Para ayudar a explicar las cosas de la manera más clara posible en estos Términos y Condiciones, cada vez que se hace referencia a cualquiera de estos términos, se definen estrictamente como:
                    </p>
                    <ul className="m-3 mt-2 ml-10 list-disc">
                        <li>
                            <strong>Cookie:</strong> Pequeña cantidad de datos generados por un sitio web y guardados por su navegador web. Se utiliza para identificar su navegador, proporcionar análisis, recordar información sobre
                             usted, como su preferencia de idioma o información de inicio de sesión.
                        </li>
                        <li>
                            <strong>Compañía:</strong> Cuando estos Terminos mencionan "Compañia", "nosotros", "nos" o "nuestro", se refiere a Pardalis que es responsable de su información en virtud de estos Términos y Condiciones.
                        </li>
                        <li>
                            <strong>Plataforma:</strong> Sitio web de Internet, aplicación web o aplicación digital de cara al público de Pardalis.
                        </li>
                        <li>
                            <strong>País:</strong> Donde se encuentra Pardalis o los propietarios/fundadores de Pardalis en este caso es México.
                        </li>
                        <li>
                            <strong>Dispositivo:</strong> Cualquier dispositivo conectado a Internet, como un teléfono, tablet, computadora o cualquier otro dispositivo que se pueda usar para visitar Pardalis y usar los servicios.
                        </li>
                        <li>
                            <strong>Servicio:</strong> Se refiere al servicio brindado por Pardalis como se describe en los términos relativos (si están disponibles) y en esta plataforma.
                        </li>
                        <li>
                            <strong>Terceros:</strong> Se refiere a anunciantes, patrocinadores de concursos, socios promocionales y de marketing, y otros que brindan nuestro contenido o cuyos productas o servicios que creemos que pueden interesarle.
                        </li>
                        <li>
                            <strong>Sitio web:</strong> El sitio de Pardalis que se puede accerder a través de esta URL:.
                        </li>
                        <li>
                            <strong>Usted:</strong> Una persona o entidad que está registrada con Pardalis para utilizar los Servicios.
                        </li>
                    </ul>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Restricciones</h2>
                    <p className="m-3 mt-2">
                        Usted acepta no hacerlo y no permitirá que otros:
                    </p>
                    <ul className="m-3 mt-2 ml-10 list-disc">
                        <li>
                            Licenciar, vender, alquilar, arrendar, asignar, distribuir, transmitir, alojar, subcontratar, divulgar o explotar comercialmente la plataforma o poner la plataforma a disposición de terceros.
                        </li>
                        <li>
                            Modificar, realizar trabajos derivados, desensamblar, descifrar, realizar una compilación inversa o realizar ingeniería inversa de cualquier parte de la plataforma.
                        </li>
                        <li>
                            Eliminar, alterar u ocultar cualquier aviso de propiedad (incluido cualquier aviso de derechos de autor o marca registrada) de sus afiliados, socios, proveedores o licenciatarios de la plataforma.
                        </li>
                    </ul>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Política de Devolución y Reembolso</h2>
                    <p className="m-3 mt-2">
                        Gracias por comprar en Pardalis. Apreciamos el hecho de que le guste comprar las cosas que construimos. También queremos asegurarnos de que tenga una experiencia gratificante mientras explora, evalúa y compra nuestros productos.
                        Al igual que con cualquier experiencia de compra, existen términos y condiciones que se aplican a las transacciones en Pardalis. Seremos tan breves como lo permitan nuestros abogados. Lo principal que debe recordar es que al realizar
                         un pedido o realizar una compra en Pardalis, acepta los términos junto con la Política de privacidad de Pardalis.
                         Si por alguna razón no está completamente satisfecho con algún bien o servicio que brindamos, no dude en contactarnos y discutiremos cualquiera de los problemas que esté atravesando con nuestro producto.
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Tus sugerencias</h2>
                    <p className="m-3 mt-2">
                        Cualquier, comentario, idea, mejora o sugerencia (colectivamente, "Sugerencias") que usted proporcione a Pardalis con respecto a la plataforma seguirá siendo propiedad única y exclusiva de Pardalis.
                        Pardalis tendrá la libertad de usar, copiar, modificar, publicar o redistribuir las Sugerencias para cualquier propósito y de cualquier manera sin ningún crédito o compensación para usted.
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Tu consentimiento</h2>
                    <p>
                        Hemos actualizado nuestros Términos y condiciones para brindarie total transparencia sobre lo que se establece cuando visita nuestro sitio y como se utiliza. Al utilizar nuestra plataforma, registrar
                         una cuenta o realizar una compra, por la presente acepta nuestros Términos y condiciones.
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Enlaces a otros Sitios web</h2>
                    <p className="m-3 mt-2">
                    Estos Términos y Condiciones se aplican solo a los Servicios. Los Servicios pueden contener enlaces a obos sitios web que Pardalis no opera ni controls. No somos responsables por el contenido, la precisión
                     o las opiniones expresadas en dichas sitios web, y dichos. sitios web no son investigados, monitoreados o verificados por nuestra precisión o integridad. Flecuerde que cuando utiliza un enlace para ir de 
                     los Servicios a otro sitio web, nuestros Términos y condiciones dejan de estar vigentes. Su navegación e interacción en cualquier otro sitio web, incluidos aquellos que tienen un enlace en nuestra plataforma,
                      están sujetos a las propias reglas y politicas de ese sitio web. Dichos terceros pueden utilizar sus propias cookies u otros métodos para recopilar información sobre usted.
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Cookies</h2>
                    <p className="m-3 mt-2">
                        Pardalis utiliza "cookies" para identificar las áreas de nuestro sitio web que ha visitado. Una cookie es una pequeña porción de datos que su navegador web almacena en su computadora o dispositivo móvil.
                         Usamos cookies para mejorar el rendimiento y la funcionalidad de nuestra plataforma, pero no son esenciales para su uso, Sin embargo, sin estas cookies, es posible que ciertas funciones, como los vídeos,
                          no estén disponibles o se le solicitará que ingrese sus datos de inicio de sesión cada vez que visite la plataforma, ya que no podríamos recordar que había iniciado sesión anteriormente. La mayoría de 
                          los navegadores web se pueden configurar para desactivar el uso de cookies. Sin embargo, si desactiva las cookies, es posible que no pueda acceder a la funcionalidad de nuestro sitio web correctamente 
                          o en absoluto. Nunca colocamos información de identificación personal en cookies.  
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Cambios en nuestros Términos y Condiciones</h2>
                    <p className="m-3 mt-2">
                        Usted reconoce y acepta que Pardalis puede dejar de brindarle (de forma permanente o temporal) el Servicio (o cualquier función dentro del Servicio) a usted o a los usuarios en general, a discreción 
                        exclusiva de Pardalis, sin previo aviso. Puede dejar de utilizar el Servicio en cualquier momento. No es necesario que informe específicamente a Pardalis cuando deje de usar el Servicio. Usted reconoce 
                        y acepta que si Pardalis deshabilita el acceso a su cuenta, es posible que no pueda acceder al Servicio, los detalles de su cuenta o cualquier archivo u otro material contenido en su cuenta. Si decidimos 
                        cambiar nuestros Términos y condiciones, publicaremos esos cambios en esta página y / o actualizaremos la fecha de modificación de los Términos y condiciones a continuación.
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Modificaciones a nuestra plataforma</h2>
                    <p className="m-3 mt-2">
                        Pardalis se reserva el derecho de modificar, suspender o interrumpir, temporal o permanentemente, la plataforma o cualquier servicio al que se conecte, con o sin previo aviso y sin resposabilidad ante usted.
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Actualizaciones a nuestra plataforma</h2>
                    <p className="m-3 mt-2">
                        Pardalis puede, de vez en cuando, proporcionar mejoras a las características / funcionalidad de la plataforma, que pueden incluir parches, correción de errores, actualizaciones, mejoras y otras modificaciones
                         ("Actualizaciones"). Las actualizaciones pueden modificar o eliminar características y / o funcionalidades de la plataforma. Usted acepta que Pardalis no tiene la obligación de (i) proporcionar Actualizaciones, 
                         o (ii) continuar proporcionándole o habilitando características y / o funcionalidades particualres de la plataforma. Además, acepta que todas las Actualizaciones (i) se considerarán una parte integral de la 
                         plataforma y (ii) estarán sujetas a los términos y condiciones de este Acuerdo.
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Servicios de Terceros</h2>
                    <p className="m-3 mt-2">
                        Podemos mostrar, incluir o poner a disposición contenido de terceros (incluidos datos, información, aplicaciones y otros servicios productos) o proporcionar enlaces a sitios web o servicios de terceros 
                        ("Servicios de terceros."). Usted reconoce y acepta que Pardalis no será responsable de ningún Servicio de terceros, incluida su precisión, integridad, puntualidad, validez, cumplimiento de los derechos
                         de autos, legalidad, decencia, calidad o cualquier otro aspecto de los mismos. Pardalis no asume ni tendrá ninguna obligación o responsabilidad ante usted o cualquier otra persona o entidad por los 
                         Servicios de terceros. Los Servicios de terceros y los enlaces a los mismos se brindan únicamente para su conveniencia y usted accede a ellos y los usa completamente bajo su propio riesgo y sujeto a 
                         los términos y condiciones de dichos terceros.
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Duración y Terminación</h2>
                    <p className="m-3 mt-2">
                        
                    </p>
                </section>
            </main>

            

            <Footer />
        </div>
    )
}

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
                        Este Acuerdo permanecerá en vigor hasta que usted o Pardalis lo rescindan. Pardalis puede, a su entera discreción, en cualquier momento y por cualquier motivo o sin él, 
                        suspender o rescindir este Acuerdo con o sin previo aviso. Este Acuerdo terminará inmediatamente, sin previo aviso de Pardalis, en caso de que no cumpla con alguna de las disposiciones de este Acuerdo. 
                        Tambén puede rescindir este Acuerdo eliminando su cuenta de la plataforma y todas las copias de la misma en su computadora. Tras la rescisión de este Acuerdo no limitará ninguno de  los derechos o recursos 
                        de Pardalis por ley o equidad en caso de incumplimiento por su parte (durante la vigencia de este Acuerdo) de cualquiera de sus oblicaciones en virtud del presente Acuerdo. 
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Aviso de infracción de Derechos de Autor</h2>
                    <p className="m-3 mt-2">
                        Si usted es propietario de los derechos de auito o el agente de dicho propietario y cree que cualquier materal de nuestra plataforma constituye una infracción de sus derechos de autor, 
                        comuníquese con nostros y proporcione la siguiente información:(a) una firma física o eletrónica del propietario de los derechos de autor o una persona autorizada para actuar en su nombre; 
                        (b) identificación del material que se alega infringe; (c) si información de contacto, incluida su dirección, número de teléfono y un correo electrónico; (d) una declaración suya de que 
                        cree de buena fe que el uso del material no está atuorizado por los propietarios de los derechos de autor; y (e) la declaración de que la información en la notificación es precisa y, bajo 
                        pena de perjurio, usted está autorizado a actuar en nombre del propietario.
                    </p>

                    <br />
                    <br />
                    
                    <h2 className=" text-4xl font-extrabold m-2">Indemnización</h2>
                    <p className="m-3 mt-2">
                        Usted acepta indemnizar y eximir de responsabilidad a Pardalis y a sus empresas matrices, subsidiarias, afiliadas, funcionarios, empleados, agentes, socios y otorgantes de licencias (si corresponde)
                         de cualquier reclamo o demanda, incluidos los honorarios razonables de abogados, debido a que surja de su: (a) uso de la plataforma; (b) violación de este Acuerdo o cualquier ley o reglamento; o 
                         (c) violación de cualquier derecho de un tercero.
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Sin garantías</h2>
                    <p className="m-3 mt-2">
                        La platadorma se le proporcial "TAL CUAL" y "SEGÚN DISPONIBILIDAD" y con todas las fallas y defectos sin garantía de ningún tipo. En la medida máxima permitida por la ley aplicable, Pardalis, 
                        en su propio nombre y en nombre de sus afiliados y sus respectivos licenciantes y proveedores de servicios, renuncia expresamente a todas las garantías, ya sean expresas, implícitas, legales 
                        o de otro tipo, con respecto a la plataforma, incluidas todas las garantías implícitas de comerciabilidad, idoneidad para un propósito particular, título y no infracción, y garantías que 
                        puedan surgir del curso del trato, el curso del desempeño, el uso o la práctica comercial. Sin limitación a lo anterior, Pardalis no ofrece garantía ni compromiso, y no hace ninguna representación 
                        de ningún tipo tipo de que la plataforma cumplirá con sus requisitos, logrará los resultados previstos, será compatible o funcionará con cualquier otro software, sitio web, sistemas o servicios, 
                        operen sin interrupciones, cumplan con los estándares de reindimiento o confiabilidad o que no tengan errores o que cualquier error o defecto puede o será corregido.
                    </p>
                    <p className="m-3 mt-2">
                        Sin limitar o anterior, ni Pardalis ni ningún proveedor de Pardalis hace ninguna representación o garantía de ningún tipo, expresa o implícita: (i) en cuanto al funcionamiento o disponibilidad de 
                        la plataforma, o la información, contenido y materiales o productos incluidos en el mismo; (ii) que la plataforma será interrumpida o libre de errores; (iii) en cuanto a la precisión, confiabilidad 
                        o vigencia de cualquier información o contenido proporcionado a través de la plataforma; o (iv) que la plataforma, sus servidores, el contenido o los correos electrónicos enviados desde o en nombre 
                        de Pardalis están libres de virus, scripts, troyanos, gusanos, malware, bombas de tiempo u otros componentes nocivos. Algunas jurisdicciones no permiten la exclusión o las limitaciones de las garantías 
                        implícitas o las limitaciones de los derechos legales aplicables de un consumidor, por lo que algunas o todas las exclusiones y limitaciones anteriores pueden no aplicarse en su caso.
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Limitación de Responsabilidad</h2>
                    <p className="m-3 mt-2">
                        Sin perjuicio de los daños en los que pueda incurrir, la responsabilidad total de Pardalis y cualquiera de sus proveedores en virtud de cualquier disposición de este Acuerdo y su recurso exclusivo 
                        por todo lo anterior se limitará al monto realmente pagado por usted para la plataforma. En la máxima medida permitida por la ley aplicable, en ningún caso Pardalis o sus proveedores serán 
                        responsables de ningún daño especial, incidental, indirecto o consecuente de ningún tipo (incluidos, entre todos, daños por lucro cesante, por pérdida de datos u otra información, por 
                        interrupción del negocio, por lesiones personales, por la pérdida de privacidad que surja de alguna manera relacionada con el uso o la imposibilidad de usar la plataforma, software de terceros 
                        y / o - hardware de terceros utilizado con la plataforma, o de otro modo en relación con cualquier disposición de este Acuerdo), incluso si Pardalis o cualquier proveedor ha sido informado de la 
                        posibilidad de tales daños e incluso si el recurso no cumple con su propósito esencial. Algunos estados /bjurisdicciones no permiten la exclusión o limitación de daños incidentales o consecuentes, 
                        por lo que es posible que la limitación o exclusión anterior no se aplique en su caso. 
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Divisibilidad</h2>
                    <p className="m-3 mt-2">
                        Si alguna disposición de este Acuerdo se considera inaplicable o inválida, dicha disposición se cambiará e interpretará para lograr los objetivos de dicha disposiciónen la mayor medida posible según 
                        la ley aplicable y las disposiciones restantes continuarán en preno vigor y efecto. Este Acuerdo, junto con la Política de privacidad y cualquier otro aviso legal publicado por Pardalis en los 
                        Servicios, constituirá el acuerdo completo entre usted y Pardalis con respecto a los Servicios. Si alguna disposición de este Acuerdo es considerada inválida por un tribunal de jurisdicción competente, 
                        la invalidez de dicha disposición no afectará la validez de las disposiciones restantes de este Acuerdo, que permanecerán en pleno vigor y efecto. Ninguna renuncia a cualquier término de este Acuerdo 
                        se considerará una renuncia adioconal o continua de dicho término o cualquier otro término, y el hecho de que no haga valer ningún derecho o disposición en virtud de este Acuerdo no constituirá una 
                        renuncia a dicho derecho. O provisión. USTED Y ACEPTAN QUE CUALQUIER CAUSA DE ACCIÓN QUE SURJA O ESTÉ RELACIONADA CON LOS SERVICIOS DEBE COMENZAR DENTRO DE (1) AÑO DESPUÉS DE QUE LA CAUSA DE ACCIÓN SE 
                        ACUERDA. DE LO CONTRARIO, DICHA CAUSA DE ACCIÓN ESTÁ PERMANENTEMENTE PROHIBIDA.
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Renuncia</h2>
                    <p className="m-3 mt-2">
                        Salvo lo dispuesto en el presente, el hecho de no ejercer un derecho o exigir el cumplimiento de una obligación en virtud de este Acuerdo no afectará la capacidad de una de las partes para ejercer 
                        dicho derecho o requerir dicho cumplimiento en cualquier momento posterior, ni constituirá la renuncia a una infracción, cualquier incumplimiento posterior.
                    </p>
                    <p className="m-3 mt-2">
                        Ninguna falla en el ejercicio, ni demora en el ejercicio, por parte de cualquiera de las partes, de cualquier derecho o poder bajo este Acuerdo operará como una renuncia a ese derecho o poder. El 
                        ejercicio único o parcial de cualquier derecho o poder en virtud de este Acuerdo tampoco impedirá el ejercicio posterior de ese o cualquier otro derecho otorgado en este documento. En caso de 
                        conflicto entre este Acuerdo y cualquier compra u otros términos aplicables. regirán los términos de este Acuerdo.
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Enmiendas a este Acuerdo</h2>
                    <p className="m-3 mt-2">
                        Pardalis se reserva el derecho, a su entera discreción, de modificar o reemplazar este Acuerdo en cualquier momento. Si una revisión es importante, proporcionaremos un aviso de al menos 30 días 
                        antes de que entren en vigencia los nuevos términso. Lo que constituye un cambio material se determinará a nuestro exclusivo criterio. Si continúa accediendo o utilizando nuestra plataforma 
                        después de que las revisiones entren en vigencia, usted acepta estar sujeto a los términos revisados. Si no está de acuerdo con los nuevos términos, ya no está autorizado para usar Pardalis.
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Acuerdo completo</h2>
                    <p className="m-3 mt-2">
                        El Acuerdo constituye el acuerdo completo entre usted y Pardalis con respecto a su uso de la plataforma y reemplaza todos los acuerdos escritos u orales anteriores y contemporáneos entre usted y Pardalis.
                        Es posible que esté sujeto a términos y condiciones adicionales que se aplican cuando usa o compra otros servicios de Pardalis, que Pardalis le proporcionará en el momento de dicho uso o compra. 
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Actualizaciones de nuestros Términos</h2>
                    <p className="m-3 mt-2">
                        Podemos cambiar nuestro Servicio y nuestras políticas, y es posible que debamos realizar cambios en estos Términos para que reflejen con precisión nuestro Servicio y nuestras políticas. A menos que la 
                        ley exija lo contrario, le notificaremos (por ejemplo, a través de nuestro Servicio) antes de realizar cambios en estos Términos y le daremos la oportunidad de revisarlos antes de que entren en vigencia.
                         Luego, si continúa utilizando el Servicio, estará sujeto a los Términos actualizados. Si no desea aceptar estos o alguno de los Términos actualizados. Puede eliminar su cuenta.
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Propiedad intelectual</h2>
                    <p className="m-3 mt-2">
                        La plataforma y todo su contenido, características y funcionalidad (que incluyen, entre otros, toda la información, software, texto, pantallas, imágenes, video y audio, y el diseño, selección y disposición 
                        de los mismos), son propiedad de Pardalis, sus licenciantes u otros proveedores de dicho material y están protegidos por México y leyes internacionales de derechos de autor, marcas registradas, patentes, 
                        secretos comerciales y otras leyes de propiedad intelectual o derechos de propiedad. El material no puede ser copiado, modificado, reproducido, descargado o distribuido de ninguna manera, en su totalidad 
                        o en parte, sin el permiso previo expreso por escrito de Pardalis, a menos que y excepto que se indique expresamente en estos Términos y Condiciones. Se prohíbe cualquier uso no autorizado del material.
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Acuerdo de Arbitraje</h2>
                    <p className="m-3 mt-2">
                        Esta sección se aplica a cualquier disputa, EXCEPTO QUE NO INCLUYE UNA DISPUTA RELACIONADA CON RECLAMOS POR RECURSOS INJUNTIVOS O EQUITATIVOS CON RESPECTO A LA EJECUCIÓN O VALIDEZ DE SUS DERECHOS DE 
                        PROPIEDAD INTELECTUAL O DE Pardalis. El término "disputa" significa cualquier disputa, acción u otra controversia entre usted y Pardalis en relación con los Servicios o este acuerdo, ya sea en contrato, 
                        garantía, agravio, estatuto, regulación, ordenanza o cualquier orta base legal o equitativa. "Disputa" tendrá el significado más amplio posible permitido por la ley.
                    </p>

                    <br/>
                    <br/>

                    <h2 className=" text-4xl font-extrabold m-2">Aviso de Disputa</h2>
                    <p className="m-3 mt-2">
                        En el caso de una disputa, usted o Pardalis deben darle al otro un Aviso de Disputa, que es una declaración escrita que establece el nombre, la dirección y la información de contacto de la parte que 
                        la proporcionó los hechos que dieron lugar a la disputa y la reparación solicitada. Debe enviar cualquier Aviso de disputa por correo electrónico a: contacto@pardalis.com. Pardalis le enviará cualquier 
                        Aviso de disputa por correo a su dirección si la tenemos, o de otra manera a su dirección de correo electrónico. Usted y Pardalis intentarán resolver cualquier disputa mediante una negociación informal 
                        dentro de los sesenta(60) días a partir de la fecha en que se reciba el Aviso de disputa. Después de sesenta (60) días, usted o Pardalis pueden comenzar el arbitraje.
                    </p>

                    <br />
                    <br />

                    <h2 className=" text-4xl font-extrabold m-2">Arbitraje Obligatorio</h2>
                    <p className="m-3 mt-2">
                    </p>
                </section>
            </main>

            

            <Footer />
        </div>
    )
}

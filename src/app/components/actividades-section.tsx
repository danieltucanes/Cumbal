import { useRef, useState } from "react";
import Slider from "react-slick";
import { DecorativeBorder } from "./indigenous-pattern";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ChevronLeft, ChevronRight, Calendar } from "lucide-react";
import { ActivityModal } from "./activity-modal";

const activities = [
  {
    id: 1,
    title: "“Guardianes del agua y de los páramos”",
    description: "Concientización sobre la importancia de los ecosistemas de páramo y en la conservación del agua",
    detailedDescription: "La actividad “Guardianes del agua y de los páramos” se llevó a cabo con el objetivo de concienciar a los estudiantes sobre la importancia de los ecosistemas de páramo y el papel fundamental que desempeñan los frailejones en la conservación del agua. Durante esta jornada educativa, se realizaron diversas actividades diseñadas para fomentar el respeto y cuidado por estos frágiles ecosistemas ",
    date: "Enero 2026",
    image: "src/assets/Guardianes del agua.jpeg",
    participants: "Estudiantes del Centro educativo San José de Cumbal",
    location: "Centro Educativo San José",
  },
  {
    id: 2,
    title: "Exploradores de Cumbal",
    description: "Jornada de conocimiento y reconocimiento del territorio del municipio de Cumbal a través de herramientas digitales.",
    detailedDescription: "En primer lugar, se presentó a los estudiantes un video ilustrativo que mostraba los principales sitios turísticos y sagrados de la región, con el objetivo de despertar su interés y brindarles un contexto visual.A continuación, utilizando la herramienta digital Google Earth, cada niño realizó un recorrido virtual por el territorio de Cumbal, identificando los sitios previamente observados y explorando de forma interactiva su ubicación geográfica ",
    date: "Julio 2025",
    image: "src/assets/Exploradores-de-Cumbal.jpeg",
    participants: "Estudiantes del Centro educativo San José de Cumbal",
    location: "Centro Educativo San José",
  },
  {
    id: 3,
    title: "Creación de la Shagra Estudiantil",
    description: "La shagra es un sistema tradicional de cultivo propio de las comunidades andinas donde se integran diversas especies de plantas.",
    detailedDescription: "Con el propósito de poner en práctica lo aprendido en torno a la memoria alimentaria y la agricultura tradicional, se inició el proceso de adecuación de un espacio dentro del Centro Educativo para la creación de una pequeña shagra. El primer paso consistió en la recolección de llantas usadas, que serían reutilizadas como cercado perimetral para delimitar el área de cultivo. Se recolectaron aproximadamente 15 llantas que fueron adquiridas en los diferentes vulcanizadoras que se encuentran en el municipio, las cuales fueron transportadas junto con herramientas de trabajo hasta la institución. En la jornada, y con la colaboración de los estudiantes y el apoyo de los docentes, se colocaron las llantas alrededor del espacio previamente designado, asegurando una disposición ordenada y funcional que marcara el inicio de este proyecto escolar de carácter ambiental, cultural y comunitario.",
    date: "Julio 2025",
    image: "src/assets/shagra.jpeg",
    participants: "Estudiantes y profesores del Centro educativo San José de Cumbal",
    location: "Centro Educativo San José",
  },
  {
    id: 4,
    title: "Restauración del Mural de Símbolos Culturales del Pueblo de los Pastos",
    description: "Restauración de los símbolos representativos del pueblo indígena de los Pastos",
    detailedDescription: "Los ceramistas mayores de la comunidad compartieron las técnicas milenarias de trabajo con arcilla. Se enseñó desde la recolección y preparación del barro, hasta el modelado manual sin torno, el uso de pigmentos naturales para decoración, y el proceso de cocción en hornos tradicionales de leña. Cada pieza creada lleva los diseños simbólicos que identifican a nuestra cultura y que hablan de nuestra relación con los elementos de la naturaleza.",
    date: "Enero 2025",
    image: "src/assets/restauración.jpeg",
    participants: "Profesores del Centro educativo San José de Cumbal",
    location: "Patio del Centro Educativo San José",
  },
  {
    id: 5,
    title: "Taller de Lectoescritura",
    description: "Este programa interactivo fue diseñado específicamente para fomentar y desarrollar habilidades fonéticas esenciales en los primeros años de aprendizaje.",
    detailedDescription: "Entre los elementos destacados del mural se encontraban: Wiphalas: símbolo de la diversidad cultural y la unión de los pueblos andinos. Churo cósmico: representación del conocimiento ancestral y la conexión con el cosmos. Sol de los Pastos: símbolo de fuerza, luz y renovación espiritual para la comunidad. La palabra \"Napaykunakuy\", que significa \"saludo recíproco\" en lengua quechua, un gesto de respeto y fraternidad entre las personas. El proceso de restauración incluyó la limpieza de la pared para eliminar residuos acumulados y el deterioro previo, seguido de la aplicación de pintura en colores vivos y duraderos, manteniendo la fidelidad a los diseños originales. Esta actividad no solo recuperó la estética del mural, sino que también fortaleció el valor cultural del espacio, convirtiéndolo en un recordatorio constante de las raíces y tradiciones del pueblo de los Pastos para quienes transitan por el centro educativo.",
    date: "Julio 2024",
    image: "src/assets/lectoescritura.jpeg",
    participants: "Estudiantes del Centro educativo San José de Cumbal",
    location: "Centro Educativo San José",
  },
   {
    id: 6,
    title: "Taller de Lectoescritura y Matemáticas con el Software GCompis",
    description: "Esta actividad se realizó utilizando el software GCompis para reforzar sus habilidades en lectoescritura y matemáticas.",
    detailedDescription: "GCompis es un programa educativo que incluye una variedad de ejercicios interactivos, adaptados para mejorar el aprendizaje de manera integral en los primeros años de escolaridad. Para la parte de lectoescritura, los niños participaron en actividades como el “teclado para niños”, donde aprendieron a familiarizarse con las partes básicas del computador y a practicar la escritura de letras en el teclado. También dibujaron letras en la pantalla, lo que les permitió conectar el aprendizaje digital con el desarrollo de la motricidad fina. En el área de matemáticas, GCompis ofreció una serie de actividades que hicieron del aprendizaje de conceptos numéricos algo accesible y entretenido. Los niños trabajaron en ejercicios como contar y colorear círculos, juegos de memoria de numeración, y la práctica de números mediante dados. También participaron en actividades de suma y resta, contaron elementos en pantalla y dibujaron números, fortaleciendo su comprensión de los conceptos matemáticos básicos de una manera lúdica. Estas actividades favorecen la familiarización con los números y las operaciones, permitiéndoles practicar habilidades de conteo y cálculo de forma interactiva",
    date: "Julio 2024",
    image: "src/assets/matematicas.jpeg",
    participants: "Estudiantes del Centro educativo San José de Cumbal",
    location: "Centro Educativo San José",
  },
   {
    id: 7,
    title: "Taller de Manualidades con Materiales Reciclados",
    description: "En esta actividad, se llevó a cabo un taller de manualidades donde los niños utilizaron materiales reciclados para crear portalápices personalizados.",
    detailedDescription: "Se proporcionaron envases vacíos de gaseosa, pinturas, pinceles, marcadores y ojos animados, dándoles a los estudiantes la oportunidad de expresar su creatividad y aprender sobre la reutilización de materiales. Cada niño eligió un diseño de animal para su portalápices, y a partir de ahí, decoraron y personalizaron su envase. Usaron pinturas para darle color y detalles al diseño, y añadieron elementos decorativos como ojos animados para darles un toque divertido. Una vez que la pintura estuvo completamente seca, los niños pudieron llevarse su creación y utilizarla como un portalápices para organizar sus útiles escolares. Esta actividad no solo estimuló la creatividad, sino que también promovió valores de sostenibilidad, enseñándoles a darle una nueva vida a materiales que normalmente serían desechados.",
    date: "Julio 2024",
    image: "src/assets/manualidades.jpeg",
    participants: "Estudiantes del Centro educativo San José de Cumbal",
    location: "Centro Educativo San José",
  },
   {
    id: 8,
    title: "Taller de Dibujo y Exploración con Tuxpaint",
    description: "En esta actividad, se utilizó la herramienta Tuxpaint para incentivar la creatividad de los niños a través del dibujo digital.",
    detailedDescription: "Tuxpaint es un programa diseñado para que los niños aprendan a dibujar y colorear usando una variedad de herramientas interactivas, como pinceles, efectos de estampado, herramientas de relleno, formas y colores, que facilitan su expresión artística en un entorno digital. Durante la sesión, los niños tuvieron la oportunidad de explorar libremente todas las funcionalidades del software, familiarizándose con las herramientas disponibles y probando diferentes formas de dibujar y colorear en la pantalla. Luego, como actividad principal, se les pidió que realizaran un dibujo de su entorno, representando cómo es el lugar en donde viven. Esta actividad no solo les permitió practicar el uso de las herramientas digitales sino también desarrollar su creatividad y expresión artística.",
    date: "Julio 2024",
    image: "src/assets/tuxpaint.jpeg",
    participants: "Estudiantes del Centro educativo San José de Cumbal",
    location: "Centro Educativo San José",
  },
   {
    id: 9,
    title: "Taller de Introducción al Inglés con Duolingo",
    description: "En esta actividad, se utilizó la herramienta Duolingo para introducir a los niños a las bases del idioma inglés de una manera divertida e interactiva",
    detailedDescription: "A través de esta herramienta, los estudiantes comenzaron a familiarizarse con expresiones y vocabulario básicos, tales como saludos, colores y las letras del abecedario. Además de aprender a pronunciar las palabras, la aplicación les permitió asociar cada palabra con una imagen, facilitando la comprensión y retención del nuevo vocabulario. Esta experiencia ayudó a los niños a iniciar el reconocimiento auditivo y visual del inglés, promoviendo una base sólida para el aprendizaje de una segunda lengua.",
    date: "Julio 2024",
    image: "src/assets/ingles.jpeg",
    participants: "Estudiantes del Centro educativo San José de Cumbal",
    location: "Centro Educativo San José",
  },
    {
    id: 10,
    title: "Restauración ecológica",
    description: "Se organizó una jornada de reforestación en la vereda Tasmag, sector Guel, como parte de un esfuerzo por contribuir a la conservación ambiental",
    detailedDescription: "Los estudiantes, junto con miembros de la comunidad, participamos activamente en la plantación de árboles en áreas identificadas como altamente deforestadas. Cada participante recibió un árbol para plantar Al final de la jornada, se resaltó el compromiso de realizar seguimiento a los árboles plantados para garantizar su crecimiento y sostenibilidad a largo plazo. ",
    date: "Julio 2024",
    image: "src/assets/restauracion.jpeg",
    participants: "Estudiantes del Centro educativo San José de Cumbal",
    location: "Centro Educativo San José",
  },
  {
    id: 11,
    title: "Alfabetización digital",
    description: "Se organizó una jornada de alfabetización digital para los estudiantes del centro educativo San José de Cumbal",
    detailedDescription: "Durante esta actividad, se impartieron talleres prácticos sobre el uso seguro y eficiente de las tecnologías digitales. Los estudiantes aprendieron a navegar por internet, utilizar herramientas educativas en línea y proteger su privacidad digital. Esta iniciativa busca preparar a los niños para un entorno cada vez más digitalizado.",
    date: "Enero 2024",
    image: "src/assets/alfabetizacion.jpeg",
    participants: "Estudiantes del Centro educativo San José de Cumbal",
    location: "Centro Educativo San José",
  },
  {
    id: 12,
    title: "Siembra de árboles",
    description: "Como parte de las iniciativas de embellecimiento y conciencia ambiental en la institución, se llevó a cabo la siembra de árboles decorativos en sus instalaciones.",
    detailedDescription: "Esta actividad implicó la selección cuidadosa de especies arbóreas ornamentales que no solo agregaran belleza visual al entorno, sino que también contribuyeran al mejoramiento del medio ambiente y al bienestar de la comunidad escolar. Se asignaron áreas específicas dentro de la institución para la siembra de los árboles, teniendo en cuenta aspectos como la disponibilidad de espacio, la accesibilidad y la estética del entorno. Se realizaron preparativos adecuados del suelo y se proporcionó el cuidado necesario para garantizar el crecimiento saludable de los árboles recién plantados. Esta actividad buscaba mejorar el aspecto estético de la institución y promover la importancia de la conservación del medio ambiente y la responsabilidad ambiental entre estudiantes, personal y comunidad.",
    date: "Enero 2024",
    image: "src/assets/siembra.jpeg",
    participants: "Estudiantes del Centro educativo San José de Cumbal",
    location: "Centro Educativo San José",
  },
  {
    id: 13,
    title: "Encuestas a la comunidad",
    description: "Encuesta dirigida a los habitantes de la comunidad indígena con el objetivo de evaluar su nivel de conocimiento sobre las nuevas tecnologías y su disposición o alcance dentro de la comunidad.",
    detailedDescription: "La encuesta se diseñó de manera cuidadosa, incluyendo preguntas que abordaban diversos aspectos relacionados con el uso y la percepción de la tecnología en el contexto comunitario. Se garantizó la confidencialidad y el anonimato de las respuestas para promover la sinceridad y la participación de los encuestados. El análisis de los resultados de la encuesta proporcionó información valiosa sobre el grado de familiaridad de la comunidad indígena con las nuevas tecnologías, así como sus percepciones, necesidades y expectativas en relación con su uso y aplicación dentro de la comunidad.",
    date: "Enero 2024",
    image: "src/assets/encuesta.jpeg",
    participants: "Habitantes de la comunidad indígena de Cumbal",
    location: "Comunidad indígena de Cumbal",
  }
];

export function ActividadesSection() {
  const sliderRef = useRef<Slider>(null);
  const [selectedActivity, setSelectedActivity] = useState<typeof activities[0] | null>(null);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section
      id="actividades"
      className="py-20 px-4 sm:px-6 lg:px-8"
      style={{ backgroundColor: "var(--beige-light)" }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl mb-4 inline-block"
            style={{ color: "var(--terracotta-dark)" }}
          >
            Últimas Actividades
          </h2>
          <DecorativeBorder className="mt-6" />
          <p className="mt-6 text-lg max-w-2xl mx-auto" style={{ color: "var(--brown)" }}>
            Un recorrido por las actividades más recientes realizadas con la comunidad
          </p>
        </div>

        <div className="relative">
          {/* Navigation Buttons */}
          <button
            onClick={() => sliderRef.current?.slickPrev()}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform -ml-6"
            style={{ backgroundColor: "var(--terracotta)", color: "white" }}
          >
            <ChevronLeft size={24} />
          </button>

          <button
            onClick={() => sliderRef.current?.slickNext()}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform -mr-6"
            style={{ backgroundColor: "var(--terracotta)", color: "white" }}
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel */}
          <Slider ref={sliderRef} {...settings}>
            {activities.map((activity) => (
              <div key={activity.id} className="px-3">
                <div
                  className="rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                  style={{
                    backgroundColor: "white",
                    border: "3px solid var(--sand)",
                  }}
                  onClick={() => setSelectedActivity(activity)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <ImageWithFallback
                      src={activity.image}
                      alt={activity.title}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                    />
                    <div
                      className="absolute top-4 right-4 px-3 py-1 rounded-full flex items-center gap-2 backdrop-blur-sm"
                      style={{ backgroundColor: "rgba(200, 90, 62, 0.9)", color: "white" }}
                    >
                      <Calendar size={14} />
                      <span className="text-xs">{activity.date}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl mb-3" style={{ color: "var(--terracotta-dark)" }}>
                      {activity.title}
                    </h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--brown)" }}>
                      {activity.description}
                    </p>

                    {/* Decorative border at bottom */}
                    <div
                      className="mt-4 pt-4 border-t flex justify-center"
                      style={{ borderColor: "var(--sand)" }}
                    >
                      <div className="flex gap-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: "var(--terracotta)" }}
                          />
                        ))}
                      </div>
                    </div>

                    {/* Click to view more indicator */}
                    <p className="text-xs text-center mt-3" style={{ color: "var(--ochre)" }}>
                      Click para ver más
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Modal */}
      {selectedActivity && (
        <ActivityModal
          activity={selectedActivity}
          onClose={() => setSelectedActivity(null)}
        />
      )}
    </section>
  );
}
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";

export default function Home() {
    return (
        <div className="w-full animate-fade-in-up animate-duration-1000">
            <div className="bg-gray-dark p-3 mb-6 rounded-lg text-center">
                <p>!Hola, soy un Analista de Datos de Colombia!</p>
            </div>
            <h1 className="text-3xl font-bold">Jeferson Hernandez</h1>
            <p>Artesano Digital ( Analisis / Desarrollo / 3D )</p>

            <div className="mb-6">
                <h3 className="text-xl font-bold my-4">Sobre mi</h3>
                <p className="mb-4">Analista de datos junior con conocimientos en SQL, Python, Excel, Power BI, orientado a la limpieza, análisis y
                    visualización de datos para apoyar la toma de decisiones. He desarrollado proyectos personales y académicos
                    aplicando métodos de estadística y probabilidad. Soy una persona apasionada por la tecnología, analítica,
                    organizada e interesada en el aprendizaje continuo</p>
                <div className="flex justify-center items-center gap-2">
                    <Link
                        href="/analisis-projects"
                        className="bg-blue px-2 py-1 rounded-lg hover:bg-blue-dark transition-colors"
                    >
                        Analisis Portafolio
                    </Link>
                    <Link 
                        href="/dev-projects" 
                        className="bg-blue px-2 py-1 rounded-lg hover:bg-blue-dark transition-colors"
                    >
                        Desarrollo Portafolio
                    </Link>
                </div>
            </div>
            <div className="mb-6">
                <h3 className="text-xl font-bold my-4">Biografía</h3>
                <div className="relative mb-2">
                    <span className="absolute font-bold">1999</span>
                    <p className="pl-14">Naci en Itagui, Colombia.</p>
                </div>
                <div className="relative mb-2">
                    <span className="absolute font-bold">2017</span>
                    <p className="pl-14">Bachillerato Finalizado</p>
                </div>
                <div className="relative mb-2">
                    <span className="absolute font-bold">2022</span>
                    <p className="pl-14">Tecnologia ADSI (Analisis y Desarrollo en los Sistemas de Informacion) finalizada</p>
                </div>
            </div>
            <div className="mb-6">
                <h3 className="text-xl font-bold my-4">I ♥</h3>
                <p>&emsp;Tecnologia, Video Juegos, Musica, Gym, Cine</p>
            </div>
            <div className="mb-6">
                <h3 className="text-xl font-bold my-4">Redes Sociales</h3>
                <ul>
                    <li className="bg-blue-dark w-fit px-2 py-1 rounded ml-4 mb-3">
                        <Link 
                            href="https://github.com/jeferson-hernandez" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3"
                        >
                            <FaGithub/>
                            @Jeferson-Hernandez
                        </Link>
                    </li>
                    <li className="bg-blue-dark w-fit px-2 py-1 rounded ml-4 mb-3">
                        <Link 
                            href="https://www.linkedin.com/in/jefer-hernandez/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3"
                        >
                            <FaLinkedin/>
                            @Jeferson-Hernandez
                        </Link>
                    </li>
                    <li className="bg-blue-dark w-fit px-2 py-1 rounded ml-4 mb-3">
                        <Link 
                            href="https://www.linkedin.com/in/jefer-hernandez/" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-3"
                        >
                            <FaSquareXTwitter/>
                            @Blakintk
                        </Link>
                    </li>
                </ul>
            </div>
        </div>
    );
}

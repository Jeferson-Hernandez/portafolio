import { ANALISIS_PROJECTS } from "@/consts/analisis-projects"
import Image from "next/image"
import Link from "next/link"

export default function page() {
    return (
        <div className="animate-fade-in-up animate-duration-1000">
            <h1 className="text-xl font-bold my-4">Analisis de Datos</h1>
            <div className="grid md:grid-cols-2 gap-6" >
                {
                    ANALISIS_PROJECTS.map((project, index) => (
                        <div 
                            key={project.id}
                            className="animate-fade-in-up animate-duration-1000 " 
                        >
                            <Link href={`/analisis-projects/${project.id}`}>
                                <Image
                                    src={project.imgs[0]}
                                    width={500}
                                    height={500}
                                    alt={project.name}
                                    loading="lazy"
                                    className="w-full rounded-lg"
                                />
                            </Link>
                            <h2 className="text-center text-lg pt-2">{project.name}</h2>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

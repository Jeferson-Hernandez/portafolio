import { ANALISIS_PROJECTS } from "@/consts/analisis-projects"
import Image from "next/image"
import Link from "next/link"

export default function page() {
    return (
        <div>
            <h1 className="text-xl font-bold my-4">Analisis de Datos</h1>
            <div className="grid md:grid-cols-2 gap-6" >
                {
                    ANALISIS_PROJECTS.map((project) => (
                        <div key={project.id}>
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

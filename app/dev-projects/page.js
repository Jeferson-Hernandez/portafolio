import { DEV_PROJECTS } from "@/consts/dev-projects"
import Image from "next/image"
import Link from "next/link"

export default function page() {
    return (
        <div className="bg-dark">
            <h1 className="text-xl font-bold my-4">Desarrollo Web</h1>
            <div className="grid md:grid-cols-2 gap-6" >
                {
                    DEV_PROJECTS.map((project) => (
                        <div key={project.id}>
                            <Link href={`/dev-projects/${project.id}`}>
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

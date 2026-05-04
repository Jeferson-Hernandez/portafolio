import { DEV_PROJECTS } from "@/consts/dev-projects"
import Image from "next/image"
import Link from "next/link"
import { IoIosArrowForward } from "react-icons/io"

const DevProject = async ({ params }) => {
    const { projectid } = await params
    const project = DEV_PROJECTS.find((p) => p.id == projectid)

    return (
        <div className="bg-dark animate-fade-in-up animate-duration-1000">
            <div className="flex items-center gap-1 mb-4">
                <Link
                    href="/dev-projects"
                    className="text-blue"
                >
                    Desarrollo
                </Link>
                <IoIosArrowForward />
                <h2 className="text-center font-bold text-lg">
                    {project.name}
                    <span className="text-xs ml-2 py-0.5 px-1 bg-gray-darker rounded">{project.year}</span>
                </h2>
            </div>
            <p className="mb-6">
                {project.bio}
            </p>
            <ul className="pl-4 mb-6">
                <li className="pb-1">
                    <span className="text-xs font-bold bg-blue-dark py-0.5 px-1 rounded mr-2">
                        WEBSITE
                    </span>
                    <Link
                        href={project.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue"
                    >
                        {project.website}
                    </Link>
                </li>
                <li className="pb-1">
                    <span className="text-xs font-bold bg-blue-dark py-0.5 px-1 rounded mr-2">
                        GITHUB
                    </span>
                    <Link
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue"
                    >
                        {project.github}
                    </Link>
                </li>
                <li className="pb-1">
                    <span className="text-xs font-bold bg-blue-dark py-0.5 px-1 rounded mr-2">
                        HERRAMIENTAS
                    </span>
                    <span className="text-wrap">{project.stack.join(", ")}</span>
                </li>
            </ul>
            <div className="grid gap-5">
                {
                    project.imgs.map((img) => (
                        <Image
                            key={img}
                            src={img}
                            width={900}
                            height={900}
                            alt=""
                            loading="lazy"
                            className="w-full rounded-lg"
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default DevProject
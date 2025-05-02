import { projectsList } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="w-9/10 mx-auto pt-8">
        <ul className="flex flex-col gap-y-4 w-fit">
          {projectsList.map((project, index) => (

          <Link key={index} href={project.href} className="font-bold bg-[#e4e4e4] rounded-md px-4 py-4 hover:bg-blue-600 hover:text-white transition-all duration-250 delay-50">
            {index + 1}){" "}
            <span>
              {project.title}
            </span>
          </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

import { projectsList } from "@/constants";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="w-9/10 mx-auto pt-8">
        <ul className="flex flex-col gap-y-4">
          {projectsList.map((project, index) => (

          <Link key={index} href={project.href} className="font-bold">
            {index + 1}){" "}
            <span className="hover:text-red-500 hover:underline ">
              {project.title}
            </span>
          </Link>
          ))}
        </ul>
      </div>
    </div>
  );
}

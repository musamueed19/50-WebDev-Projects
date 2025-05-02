import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen w-screen">
      <div className="w-9/10 mx-auto pt-8">
        <ul>
          <Link href={"1-expandingcards"} className="font-bold">
            1){" "}
            <span className="hover:text-red-500 hover:underline ">
              Expanding Cards
            </span>
          </Link>
        </ul>
      </div>
    </div>
  );
}

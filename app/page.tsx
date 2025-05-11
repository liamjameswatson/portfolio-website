import Image from "next/image";
import profileImage from "@/public/placeholderImage.jpg";

export default function Home() {
  return (
    <div className="h-full flex flex-col lg:flex-row! w-screen px-4 sm:px-8 lg:px-20 xl:px-48 text-xl">
      {/* Image Container - Takes exactly half height */}
      <div className="flex flex-center flex-1 ">
        <div className="relative h-40 w-40 lg:h-100 lg:w-100 flex-center">
          <Image
            src={profileImage}
            alt="Profile Picture"
            fill
            className="object-cover rounded-full"
          />
          <div className="absolute inset-0 bg-accent-500/0 rounded-full" />
        </div>
      </div>

      {/* Text Container - Takes exactly half height */}
      <div className="flex flex-1 flex-col gap-4 lg:gap-8 pb-4 justify-center items-center">
        {/* Title Group */}

        <h1 className="text-3xl sm:text-4xl font-bold md:text-5xl ">
          Crafting digital experiences, designing tomorrow
        </h1>
        <p className="text:md sm:text-lg md:text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae
          nulla in sapien facilisis malesuada. Curabitur ut metus vel nisl
          sollicitudin cursus. Sed euismod, justo non malesuada posuere, velit
          lectus congue velit, non condimentum quam elit sit amet turpis.
          Vivamus euismod, lorem a facilisis viverra, odio nunc tempor quam, a
          pulvinar leo ex a justo.
        </p>

        {/* Buttons */}
        <div className="flex gap-4 w-full">
          <button className="p-2 rounded-lg ring-1 ring-accent-900 bg-accent-800 text-white hover:bg-accent-700 transition">
            View my work
          </button>
          <button className="p-2 rounded-lg ring-1 ring-accent-900 hover:bg-primary-600 transition">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
}

import Image from "next/image";
import { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="shadow-sm p-3 mb-12 sticky top-0 z-10 bg-white">
      <header className="flex flex-col sm:flex-row justify-between items-center h-auto first:ml-5 last:mr-12 px-12">
        <div>
          <Image
            src="/images/gotbanner.png"
            alt="Logo"
            width={200}
            height={60}
            className="object-contain"
          />
        </div>
        <a
          href="https://web.fmovies.to/series/game-of-thrones-92p7q"
          target="__blank"
          className="bg-purple-500 text-purple-50 py-3 px-6 rounded-sm shadow-sm hover:bg-purple-700 text-sm"
        >
          Watch now
        </a>
      </header>
    </div>
  );
};

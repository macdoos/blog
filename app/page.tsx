import Link from "next/link";
import Image from "next/image";
import avatar from "../public/avatar.jpg";
import MacdoosArabic from "./macdoos-arabic";

export const revalidate = 60;

export default async function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <section className="rounded-2xl p-4">
        <figure className="flex flex-row items-center">
          <figcaption className="font-mono font-bold relative flex-grow">
            <div className="absolute inset-0 flex flex-col justify-center items-center">
              <p className="text-2xl z-10" lang="en">
                macdoos
              </p>
            </div>
            <MacdoosArabic className="w-24 h-24 mt-20 ml-6" />
          </figcaption>
          <Image
            alt="macdoos avatar"
            fetchPriority="high"
            width={96}
            height={59}
            decoding="async"
            className="select-none rounded-full border border-gray-500 border-opacity-[0.15] bg-white shadow-inner dark:bg-black mt-10"
            src={avatar}
          />
        </figure>

        <div className="space-y-0.5 text-gray-700 mlb-3 dark:text-gray-300">
          <p className="flex items-center gap-1 text-sm tabular-nums">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              aria-hidden="true"
              data-slot="icon"
              aria-label="💼"
              className="inline-block h-4 w-auto"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 0 0 .75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 0 0-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0 1 12 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 0 1-.673-.38m0 0A2.18 2.18 0 0 1 3 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 0 1 3.413-.387m7.5 0V5.25A2.25 2.25 0 0 0 13.5 3h-3a2.25 2.25 0 0 0-2.25 2.25v.894m7.5 0a48.667 48.667 0 0 0-7.5 0M12 12.75h.008v.008H12v-.008Z"
              ></path>
            </svg>
            <span>🐱 💻 hacker larping as swe</span>
          </p>
        </div>
        <ul className="text-sm leading-relaxed">
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              href="https://twitter.com/macdoos"
            >
              <span className="font-medium">twitter</span>
              <span className="text-gray-500">:</span>{" "}
              <span className="text-gray-700 group-hover:underline dark:text-gray-300">
                @macdoos
              </span>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
              href="https://github.com/macdoos"
            >
              <span className="font-medium">github</span>
              <span className="text-gray-500">:</span>{" "}
              <span className="text-gray-700 group-hover:underline dark:text-gray-300">
                @macdoos
              </span>
            </a>
          </li>
        </ul>
        <Link href="/blog" passHref className="text-xs text-gray-500">
          also have a &quot;blog&quot;
        </Link>
      </section>
    </div>
  );
}

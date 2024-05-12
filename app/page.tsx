import Link from "next/link";
import Avatar from "./avatar";
import MacdoosArabic from "./macdoos-arabic";
import { F } from "@upstash/redis/zmscore-4382faf4";
import { Footer } from "./blog/footer";

export const revalidate = 60;

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center py-2">
      <section className="flex flex-row items-center justify-center w-full max-w-4xl">
        <div className="flex-none mr-10">
          <Avatar height={240} />
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col items-start mb-5">
            <p className="text-4xl font-mono font-bold" lang="en">
              macdoos
            </p>
            <MacdoosArabic height={30} />
          </div>
          <ul className="text-sm leading-relaxed">
            <li className="flex items-center gap-1 text-sm tabular-nums mb-3">
              <span>i am just a hacker larping as a swe, this is my home on the internet</span>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
                href="https://twitter.com/macdoos"
              >
                <span>twttr</span>
                <span>:</span>{" "}
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
                <span>github</span>
                <span>:</span>{" "}
                <span className="text-gray-700 group-hover:underline dark:text-gray-300">
                  @macdoos
                </span>
              </a>
            </li>
            <li className="mt-3">
              <Link href="/blog" passHref className="text-gray-500 text-xs">
                i also have a poorly written &quot;blog&quot;
              </Link>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

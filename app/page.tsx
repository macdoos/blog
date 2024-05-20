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
          <ul className="flex flex-wrap gap-1.5 max-is-[22.8rem] mb-3">
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer external"
                title="github: macdoos"
                className="inline-flex items-center justify-center gap-1 rounded-full border p-1 pr-2 hover:border-gray-400"
                href="https://github.com/macdoos"
              >
                <figure className="flex items-center justify-center">
                  <GHIcon />
                </figure>
                <span className="select-none text-sm text-gray-700 dark:text-white">
                  @macdoos
                </span>
              </a>
            </li>
            <li>
              <a
                target="_blank"
                rel="noopener noreferrer external"
                title="X: macdoos"
                className="inline-flex items-center justify-center gap-1 rounded-full border p-1 pl-2 pr-2 hover:border-gray-400"
                href="https://x.com/macdoos"
              >
                <figure className="flex size-2 items-center justify-center">
                  <TweetIcon />
                </figure>
                <span className="select-none text-sm text-gray-700 dark:text-white">
                  @macdoos
                </span>
              </a>
            </li>
          </ul>

          <ul className="text-sm leading-relaxed">
            <li className="flex items-center gap-1 text-sm tabular-nums mb-3">
              <span>
                i am just a hacker larping as a swe, this is my home on the
                internet
              </span>
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

function TweetIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={16}
      height={16}
      viewBox="0 0 1200 1227"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="nonzero"
        stroke="none"
        strokeWidth={1}
        d="M714.163 519.284L1160.89 0H1055.03L667.137 450.887L357.328 0H0L468.492 681.821L0 1226.37H105.866L515.491 750.218L842.672 1226.37H1200L714.137 519.284H714.163ZM569.165 687.828L521.697 619.934L144.011 79.6944H306.615L611.412 515.685L658.88 583.579L1055.08 1150.3H892.476L569.165 687.854V687.828Z"
      />
    </svg>
  );
}

function GHIcon(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={18}
      height={18}
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill="currentColor"
        d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"
      />
    </svg>
  );
}

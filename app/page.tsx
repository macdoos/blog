import Link from "next/link";
import Image from "next/image";
import avatar from "./avatar.jpg";
import macdoos_ar from "./macdoos-ar.svg";

export const revalidate = 60;

export default async function Home() {
  return (
    <>
  <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <section className="p-4">
          <figure className="flex flex-col-reverse gap-3 sm:flex-row">
            <figcaption className="font-serif font-bold">
              {/* <p className="text-lg" lang="en">macdoos</p> */}
              <Image
              alt="macdoos typography logo in arabic"
              src={macdoos_ar}
              priority
              width={120}
            />
            </figcaption>
            <Image
              alt="🙋🏻"
              src={avatar}
              width={140}
              height={140}
              priority
              className="rounded-3xl border border-gray-500 border-opacity-20 shadow-inner"
            />
          </figure>
          <div className="mlb-3">
            <p className="flex items-center gap-1 text-sm opacity-70">
              <span>hacker larping as swe</span>
            </p>
            <Link href="/blog">blog</Link>
          </div>
        </section>
      </div>
  </>
  )
}

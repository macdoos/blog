import Link from "next/link";

export const revalidate = 60;

export default async function Home() {
  return (
    <>
  <h1>Home</h1>
  <Link href="/blog">Blog</Link>
  </>
  )
}

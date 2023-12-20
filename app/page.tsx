import Link from "next/link";

export default function Home() {
  return (
    <main className="p-16 flex justify-center items-center flex-col">
      <h1>Home page</h1>
      <p>
        <Link href={"./users"}>Users</Link>
      </p>
    </main>
  );
}

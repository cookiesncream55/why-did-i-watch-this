import Link from "next/link";
import Image from "next/image";

export default function RomancePage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-12">
        Romance Movies
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <Link
          href="/reviews/pride-and-prejudice"
          className="bg-gray-900 p-5 rounded-lg hover:bg-gray-800 transition"
        >
          <Image
            src="/images/pride.jpg"
            alt="Pride and Prejudice poster"
            width={300}
            height={450}
            className="w-full h-[400px] object-cover rounded-lg"
          />

          <h2 className="text-2xl font-bold mt-4">
            Pride & Prejudice
          </h2>

          <p className="text-red-400">Romance / Drama</p>

          <p className="mt-3 text-gray-300">
            "10/10 hand flex."
          </p>
        </Link>

        <Link
          href="/reviews/la-la-land"
          className="bg-gray-900 p-5 rounded-lg hover:bg-gray-800 transition"
        >
          <Image
            src="/images/lalaland.jpg"
            alt="La La Land poster"
            width={300}
            height={450}
            className="w-full h-[400px] object-cover rounded-lg"
          />

          <h2 className="text-2xl font-bold mt-4">
            La La Land
          </h2>

          <p className="text-pink-400">Musical / Romance</p>

          <p className="mt-3 text-gray-300">
            "Emotionally attacked by jazz."
          </p>
        </Link>

        <Link
          href="/reviews/fifty-first-dates"
          className="bg-gray-900 p-5 rounded-lg hover:bg-gray-800 transition"
        >
          <Image
            src="/images/fiftyfirstdates.jpg"
            alt="50 First Dates poster"
            width={300}
            height={450}
            className="w-full h-[400px] object-cover rounded-lg"
          />

          <h2 className="text-2xl font-bold mt-4">
            50 First Dates
          </h2>

          <p className="text-yellow-400">Rom-Com</p>

          <p className="mt-3 text-gray-300">
            "This is secretly horror."
          </p>
        </Link>

      </div>
    </main>
  );
}
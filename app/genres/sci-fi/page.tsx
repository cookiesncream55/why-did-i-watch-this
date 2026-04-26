import Link from "next/link";
import Image from "next/image";

export default function SciFiPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-12">
        Sci-Fi Reviews
      </h1>

      <div className="grid md:grid-cols-3 gap-8">

        <Link
          href="/reviews/white-bear"
          className="bg-gray-900 p-5 rounded-lg hover:bg-gray-800 transition"
        >
          <Image
            src="/images/wb.jpg"
            alt="White Bear poster"
            width={300}
            height={450}
            className="w-full h-[400px] object-cover rounded-lg"
          />

          <h2 className="text-2xl font-bold mt-4">
            White Bear
          </h2>

          <p className="text-purple-400">
            Sci-Fi / Thriller
          </p>

          <p className="mt-3 text-gray-300">
            "Very normal society behavior."
          </p>
        </Link>

      </div>
    </main>
  );
}
import Link from "next/link";
import Image from "next/image";

export default function HorrorPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold text-center mb-12">
        Horror Reviews
      </h1>

      <div className="grid md:grid-cols-3 gap-8">
        
        <Link
          href="/reviews/bring-her-back"
          className="bg-gray-900 p-5 rounded-lg hover:bg-gray-800 transition"
        >
          <Image
            src="/images/bhb.jpg"
            alt="Bring Her Back poster"
            width={300}
            height={450}
            className="w-full h-[400px] object-cover rounded-lg"
          />

          <h2 className="text-2xl font-bold mt-4">
            Bring Her Back
          </h2>

          <p className="text-red-400">
            Horror
          </p>

          <p className="mt-3 text-gray-300">
            "That watermelon scene deserves jail time."
          </p>
        </Link>

      </div>
    </main>
  );
}
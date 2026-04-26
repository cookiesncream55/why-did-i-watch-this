"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const movies = [
  {
    title: "La La Land",
    genre: "Musical / Romance",
    image: "/images/lalaland.jpg",
    href: "/reviews/la-la-land",
  },
  {
    title: "White Bear",
    genre: "Sci-Fi / Thriller",
    image: "/images/wb.jpg",
    href: "/reviews/white-bear",
  },
  {
    title: "Pride & Prejudice",
    genre: "Romance / Drama",
    image: "/images/pride.jpg",
    href: "/reviews/pride-and-prejudice",
  },
  {
    title: "50 First Dates",
    genre: "Romance / Drama",
    image: "/images/fiftyfirstdates.jpg",
    href: "/reviews/fifty-first-dates",
  },
  {
    title: "Bring Her Back",
    genre: "Horror",
    image: "/images/bhb.jpg",
    href: "/reviews/bring-her-back",
  },
];

export default function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-gray-900 to-black text-white">
      
      {/* Header */}

      <header className="text-center py-20">
  <p className="text-pink-400 uppercase tracking-[0.3em] mb-4">
    Movie Reviews & Unhinged Opinions
  </p>

  <h1 className="text-7xl font-bold mb-6">
    Why Did I Watch This?
  </h1>

  <p className="text-gray-400 text-xl max-w-2xl mx-auto">
    Honest reviews about movies that made me cry, scream,
    laugh, or question my life decisions.
  </p>
</header>
      <section className="max-w-6xl mx-auto px-10 mb-20">
  <div className="bg-gray-900 rounded-3xl p-10 border border-gray-800">
    <p className="text-red-400 mb-3">Featured Review</p>

    <h2 className="text-4xl font-bold mb-4">
      Bring Her Back
    </h2>

    <p className="text-gray-300 text-lg">
      "That watermelon scene deserves jail time."
    </p>
  </div>
</section>

<section className="max-w-6xl mx-auto px-8 mb-16">
  <div className="relative rounded-3xl overflow-hidden border border-gray-800">

    <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent z-10" />

    <Image
      src="/images/lalaland.jpg"
      alt="Featured Movie"
      width={1200}
      height={500}
      className="w-full h-[400px] object-cover"
    />

    <div className="absolute bottom-10 left-10 z-20 max-w-md">
      <h2 className="text-4xl font-bold mb-2">Featured: La La Land</h2>
      <p className="text-gray-300">
        A movie that made me rethink life, love, and emotional damage.
      </p>
    </div>

  </div>
</section>

      {/* Navigation */}
      <nav className="flex justify-center gap-10 py-6 border-b border-gray-800 text-lg font-semibold">
        <Link href="/">Home</Link>
        <Link href="/genres/romance">Romance</Link>
        <Link href="/genres/horror">Horror</Link>
        <Link href="/genres/sci-fi">Sci-Fi</Link>
        <Link href="/about">About</Link>
      </nav>

      {/* Intro Section */}
      <section className="max-w-4xl mx-auto px-8 py-20 leading-relaxed text-xl">
        <p className="mb-8">
          Welcome to my little corner of movie chaos where I review films
          that made me laugh, cry, scream, or question my life decisions.
        </p>

        <p className="mb-8">
          I watch everything from romantic movies that raise my standards
          to horror films that destroy my peace. Sometimes I leave inspired.
          Sometimes I leave emotionally damaged.
        </p>

        <p className="mb-8">
          This blog exists because my friends got tired of my unsolicited
          movie opinions.
        </p>

        <h2 className="text-3xl font-bold mt-12 mb-6">
          What You'll Find Here:
        </h2>

        <ul className="list-disc pl-8 space-y-4">
          <li>
            <strong>Reviews:</strong> Honest opinions on movies and shows I watch.
          </li>

          <li>
            <strong>Unhinged Reactions:</strong> Especially when a movie emotionally
            ruins me.
          </li>

          <li>
            <strong>Ratings:</strong> Because sometimes a movie deserves 5 stars.
            Sometimes it deserves jail.
          </li>
        </ul>
      </section>

      {/* Featured Reviews */}
      <section className="max-w-6xl mx-auto px-8 pb-20">
        <h2 className="text-3xl font-bold mb-8">
          Recent Reviews
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4 scroll-smooth">
          className="min-w-[260px] group bg-gray-900/70 backdrop-blur-lg p-4 rounded-3xl border border-gray-800 hover:border-pink-500/50 transition"
          
          {movies
          .filter((movie) => {
          const matchSearch = movie.title.toLowerCase().includes(search.toLowerCase());
          const matchCategory =
          category === "All" || movie.genre.includes(category);

          return matchSearch && matchCategory;
          })
          .map((movie, index) => (
          <Link
            key={index}
            href={movie.href}
            className="min-w-[250px] group bg-gray-900/70 backdrop-blur-lg p-4 rounded-3xl border border-gray-800 hover:border-pink-500/50 hover:scale-105 transition-all duration-300"
          >
          <div className="overflow-hidden rounded-2xl mb-4">
          <Image
            src={movie.image}
            alt={movie.title}
            width={400}
            height={250}
            className="w-full h-40 object-cover rounded-2xl group-hover:scale-110 transition duration-500"
          />
          </div>

          <h3 className="text-2xl font-bold group-hover:text-pink-400 transition">
            {movie.title}
          </h3>

          <p className="text-gray-400">{movie.genre}</p>
          </Link>
          ))}

        </div>
      </section>

      <div className="max-w-2xl mx-auto mb-10 px-8">
      <input
        type="text"
        placeholder="Search movies..."
        className="w-full p-4 rounded-2xl bg-gray-900 border border-gray-700 text-white"
        onChange={(e) => setSearch(e.target.value)}
      />
      </div>

      <div className="flex justify-center gap-4 mb-10 flex-wrap">
  {["All", "Romance", "Horror", "Sci-Fi"].map((cat) => (
    <button
      key={cat}
      onClick={() => setCategory(cat)}
      className="px-4 py-2 rounded-full border border-gray-700 hover:border-pink-500"
    >
      {cat}
    </button>
  ))}
</div>

    </main>
  );
}
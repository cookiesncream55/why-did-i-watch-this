import Link from "next/link";

export default function Home() {
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

        <div className="grid md:grid-cols-3 gap-8">
          
          <Link
            href="/reviews/la-la-land"
            className="bg-gray-900/70 backdrop-blur-lg p-5 rounded-3xl border border-gray-800 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold">La La Land</h3>
            <p className="text-gray-400">Musical / Romance</p>
          </Link>

          <Link
            href="/reviews/white-bear"
            className="bg-gray-900/70 backdrop-blur-lg p-5 rounded-3xl border border-gray-800 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold">White Bear</h3>
            <p className="text-gray-400">Sci-Fi / Thriller</p>
          </Link>

          <Link
            href="/reviews/pride-and-prejudice"
            className="bg-gray-900/70 backdrop-blur-lg p-5 rounded-3xl border border-gray-800 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold">Pride & Prejudice</h3>
            <p className="text-gray-400">Romance / Drama</p>
          </Link>

          <Link
            href="/reviews/fifty-first-dates"
            className="bg-gray-900/70 backdrop-blur-lg p-5 rounded-3xl border border-gray-800 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold">50 First Dates</h3>
            <p className="text-gray-400">Romance / Drama</p>
          </Link>

          <Link
            href="/reviews/bring-her-back"
            className="bg-gray-900/70 backdrop-blur-lg p-5 rounded-3xl border border-gray-800 hover:scale-105 transition"
          >
            <h3 className="text-2xl font-bold">Bring Her Back</h3>
            <p className="text-gray-400">Horror</p>
          </Link>
        </div>
      </section>

    </main>
  );
}
import Link from "next/link";
import Image from "next/image";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      
      {/* Hero Section */}
      <section className="text-center mb-16">
        <p className="text-pink-400 uppercase tracking-[0.3em] mb-4">
          Meet the Reviewer
        </p>

        <div className="mb-6 flex justify-center">
        <Image
          src="/images/coleen.jpg"
          alt="Coleen"
          width={120}
          height={120}
          className="rounded-full object-cover border-4 border-pink-400"
        />
        </div>

        <h1 className="text-4xl font-bold mb-4">
          Hi, I'm Coleen
        </h1>

        <p className="text-gray-400 text-xl max-w-2xl mx-auto">
          Professional movie watcher. Unprofessional emotional reactor.
        </p>
      </section>

      {/* About Card */}
      <section className="max-w-4xl mx-auto bg-gray-900 rounded-3xl p-10 shadow-lg border border-gray-800">
        
        <p className="text-lg leading-relaxed mb-6">
          Welcome to my little corner of the internet where you can read my
          honest reviews about the movies I've watched and hopefully relate to
          my thoughts.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          I'm Coleen, and I’ve loved watching movies ever since I was a kid.
          I even keep a list of every movie I've watched on my phone because I
          refuse to forget them.
        </p>

        <p className="text-lg leading-relaxed mb-6">
          Over time, I started exploring different genres, but based on my
          reviews, it’s pretty obvious that I’m a huge fan of romance movies.
        </p>

        <p className="text-lg leading-relaxed">
          I hope my reviews don’t bore you, and maybe you'll discover your next
          favorite movie here.
        </p>
      </section>

      {/* Socials */}
      <section className="text-center mt-16">
        <h2 className="text-2xl font-bold mb-6">
          Let's be mutuals ✨
        </h2>

        <div className="flex justify-center gap-6">
          <a
            href="https://www.facebook.com/moewaiii"
            target="_blank"
            className="bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-full transition font-semibold"
          >
            Facebook
          </a>

          <a
            href="https://www.instagram.com/cooleeeeeeen/"
            target="_blank"
            className="bg-pink-600 hover:bg-pink-500 px-8 py-3 rounded-full transition font-semibold"
          >
            Instagram
          </a>
        </div>
      </section>

    </main>
  );
}
import Image from "next/image";

export default function LaLaLandReview() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <Image
        src="/images/lalaland.jpg"
        alt="La La Land poster"
        width={300}
        height={450}
      />

      <h1 className="text-4xl font-bold mt-5">
        La La Land
      </h1>

      <p>⭐⭐⭐⭐⭐</p>
      <p className="text-pink-400">
        Emotionally attacked by jazz
      </p>

      <p className="mt-4">
  <strong>Would I watch again?</strong> Yes, but only when I feel like crying aesthetically.
</p>

<p className="mt-4">
  Look, I get it. The colors are pretty. The music is catchy. But did it
  really need to make me cry in the last 10 minutes? I went into La La Land
  expecting a cute musical where attractive people sing, dance, and fall in
  love.
</p>

<p className="mt-4">
  What I got was emotional betrayal wrapped in jazz music and beautiful
  cinematography.
</p>

<p className="mt-4">
  Ryan Gosling and Emma Stone had great chemistry, and somehow made eye
  contact feel deeply romantic. And that scene where they danced near the
  lamppost? Unreal. When I argue with someone, I just go home, but when they
  argue, they break into flawless choreography under the night sky. The visuals? Stunning. Every scene looked like it belonged on Pinterest.
</p>

<p className="mt-4">
  And the soundtrack? Don't even get me started. City of Stars has been emotionally haunting people, including me, since 2016. It's like every time I hear that song, it makes me remember the last scene where Sebastian was singing and Mia was watching him from the audience. I am in tears.
</p>

<p className="mt-4">
  The ending rips your heart out as you see what their life could have been
  together. I sat there staring at my screen like I personally got dumped.
</p>

<p className="mt-4">
  Was it amazing? Yes.
  <br />
  Was I emotionally prepared? Absolutely not.
</p>

<p className="mt-4">
  This film will always have a special place in my heart.
</p>

<p className="mt-4 font-bold text-pink-400">
  Final thoughts:
  <br />
  10/10 visuals.
  <br />
  10/10 music.
  <br />
  0/10 for protecting my feelings.
</p>

<p className="mt-4 italic text-gray-400">
  <em>"Welcome to Seb's."</em>
</p>
    </main>
  );
}
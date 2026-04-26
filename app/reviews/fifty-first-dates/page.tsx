import Image from "next/image";

export default function FiftyFirstDatesReview() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <Image
        src="/images/fiftyfirstdates.jpg"
        alt="50 First Dates poster"
        width={300}
        height={450}
        className="rounded-lg"
      />

      <h1 className="text-4xl font-bold mt-5">
        50 First Dates
      </h1>

      <p className="text-pink-400 mt-2">
        Rom-Com
      </p>

      <p className="mt-4">⭐⭐⭐⭐☆</p>

      <p className="mt-4">
        <strong>Would I watch again?</strong> Yes, but now with trust issues.
      </p>

      <p className="mt-4">
        At first glance, 50 First Dates looks like your typical early 2000s
        rom-com. Adam Sandler falls in love with Drew Barrymore, cute breakfast dates
        involving pancake art, goofy side characters, and somehow a lot of
        animal-related chaos. It gets even funnier whenever Willy the penguin and Jocko the walrus
        appear on screen.
      </p>

      <p className="mt-4">
        Sounds sweet, right?
      </p>

      <p className="mt-4 font-bold text-red-400">
        Wrong.
      </p>

      <p className="mt-4">
        Because when you think about it, this movie is lowkey terrifying.
      </p>

      <p className="mt-4">
        Imagine my horror when I found out that her memory after her dad's
        birthday gets wiped out every time she falls asleep.
      </p>

      <p className="mt-4">
        Like you wake up every single day thinking it's the same date, only to
        discover you've lost years of your life, you're married, and you have a
        child.
      </p>

      <p className="mt-4 font-bold text-yellow-400">
        A CHILD.
      </p>

      <p className="mt-4">
        And people just casually hand you a videotape every morning like:
      </p>

      <p className="mt-4 italic">
        "Good morning. Here's all the life-changing information your brain
        forgot overnight. Have fun processing that."
      </p>

      <p className="mt-4">
        And kudos to Henry for his dedication in making Lucy fall in love with
        him every single day. Which is both romantic and alarming the longer you think about it. The way he commits to loving her even though she won't remember him made
        me bawl my eyes out. It is emotionally devastating.
      </p>

      <p className="mt-4">
        That being said, the movie is genuinely funny and charming. Drew Barrymore is lovable, Adam Sandler is surprisingly sweet, and
        somehow the movie makes this unsettling concept feel heartwarming. Also, the soundtrack slaps. "Wouldn't It Be Nice" by The Beach Boys now permanently reminds me of
        this movie.
      </p>

      <p className="mt-4 font-bold text-pink-400">
        Final thoughts:
        <br />
        10/10 chemistry.
        <br />
        10/10 laughs.
        <br />
        2/10 emotional safety.
      </p>
    </main>
  );
}
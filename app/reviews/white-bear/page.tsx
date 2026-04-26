import Image from "next/image";

export default function WhiteBearReview() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <Image
        src="/images/wb.jpg"
        alt="White Bear poster"
        width={300}
        height={450}
      />

      <h1 className="text-4xl font-bold mt-5">
        White Bear
      </h1>

      <p className="text-purple-400 mt-2">
        Sci-Fi / Thriller
      </p>

      <p className="mt-4">⭐⭐⭐⭐⭐</p>

      <p className="mt-4">
        <strong>Would I watch again?</strong> Absolutely not... but maybe.
      </p>

      <p className="mt-4 italic">
        "Okay, this looks like a survival mystery."
      </p>

      <p className="mt-4">
        Ten minutes in, I was confused.
        <br />
        Twenty minutes in, I was stressed.
        <br />
        By the end, I was staring at my screen like I had just been betrayed.
      </p>

      <p className="mt-4">
        The episode follows a woman who wakes up with no memory while random
        people around her just stand there recording her on their phones
        instead of helping. Made me question faith in humanity, honestly.
      </p>

      <p className="mt-4">
        Imagine running for your life while strangers treat your trauma like
        content.
      </p>

      <p className="mt-4">
        Very normal society behavior.
      </p>

      <p className="mt-4">
        The tension in this episode never lets you relax. Every scene feels
        chaotic and uncomfortable in the best way possible. You keep trying to
        figure out what's happening, but the episode keeps making things worse.
        That's Black Mirror for you.
      </p>

      <p className="mt-4">
        And then the twist happened.
      </p>

      <p className="mt-4">
        I genuinely had to pause and process what I just watched.
      </p>

      <p className="mt-4">
        The ending completely changes how you see everything. Suddenly you're
        questioning justice, punishment, and whether people can become just as
        cruel as the person they claim to hate. It doesn't sit right with me when they show us the people behind the
        scenes whose motive may be fame, money, or sadism rather than justice.
      </p>

      <p className="mt-4">
        I have no sympathy for a murderer, and I kind of wished they did not
        erase her memories so that she will always remember what she did. But I do get the point that it was for her to know what it feels like
        to be a clueless, unsure, trusting child being surrounded by bad
        people, feeling stuck.
      </p>

      <p className="mt-4">
        That is what makes this one of the best episodes of Black Mirror. It
        shocks you, but it also leaves you thinking long after it ends.
      </p>

      <p className="mt-4 font-bold text-purple-400">
        Final thoughts:
        <br />
        10/10 twist.
        <br />
        10/10 storytelling.
        <br />
        0/10 trust in humanity.
      </p>
    </main>
  );
}
import Image from "next/image";

export default function PrideAndPrejudiceReview() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <Image
        src="/images/pride.jpg"
        alt="Pride and Prejudice poster"
        width={300}
        height={450}
        className="rounded-lg"
      />

      <h1 className="text-4xl font-bold mt-5">
        Pride & Prejudice
      </h1>

      <p className="text-red-400 mt-2">
        Romance / Period Drama
      </p>

      <p className="mt-4">⭐⭐⭐⭐⭐</p>

     <p className="mt-4">
  <strong>Would I watch again?</strong> Yes, every time I want unrealistic standards.
</p>

<p className="mt-4">
  I have seen a lot of people making good reviews about this and it made me
  watch it too, and the movie did not disappoint.
</p>

<p className="mt-4">
  It had me giggling and kicking my feet every time they had interactions,
  especially the rain scene. It feels very intimate. I am WEAK.
</p>

<p className="mt-4">
  Keira Knightley as Elizabeth Bennet was smart, stubborn, and stronger than me
  because if Matthew Macfadyen stared at me like that, I would have folded
  immediately.
</p>

<p className="mt-4">
  Matthew Macfadyen as Mr. Darcy is perfect. The way he looks at Elizabeth. The way he struggles to express basic emotions.
  Beautiful. And that hand flex scene after he helps her into the carriage? Pure cinema.
  This man said more with one hand movement than most people say in entire
  conversations.
</p>

<p className="mt-4">
  And don't even get me started on the tension.
</p>

<p className="mt-4">
  These two looked at each other like they were about to kiss or start an
  argument. Their banter is top-tier, and I love watching them slowly fall for each other.
</p>

<p className="mt-4">
  The cinematography was stunningly beautiful. Every frame looks like it came
  straight out of a painting. And the soundtrack made everything feel ten times more emotional, and the
  slow burn romance absolutely delivered.
</p>

<p className="mt-4">
  Definitely one of my comfort movies.
</p>

<p className="mt-4 font-bold text-red-400">
  Final thoughts:
  <br />
  10/10 hand flex.
  <br />
  10/10 yearning.
  <br />
  10/10 Mr. Darcy.
</p>
    </main>
  );
}
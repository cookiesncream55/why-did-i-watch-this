import Image from "next/image";

export default function BringHerBackReview() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <Image
        src="/images/bhb.jpg"
        alt="Bring Her Back poster"
        width={300}
        height={450}
        className="rounded-lg"
      />

      <h1 className="text-4xl font-bold mt-5">
        Bring Her Back
      </h1>

      <p className="text-gray-400 mt-2">
        Horror
      </p>

      <p className="mt-4">⭐⭐⭐⭐⭐</p>

      <p className="mt-4">
        <strong>Would I watch it again?</strong> NO.
      </p>

      <p className="mt-4">
        I watched Bring Her Back thinking it's just your typical horror movie.
      </p>

      <p className="mt-4">
        Big mistake.
      </p>

      <p className="mt-4">
        It gave me emotional damage, body horror, and trust issues.
      </p>

      <p className="mt-4">
        You mean to tell me they made Sally Hawkins look very sweet just for
        her to end up actually being so evil? Had me stressing for real. That woman stressed me out every time she appeared on screen. I was basically shouting at my screen when she does something bad to
        the siblings and to poor Oliver.
      </p>

      <p className="mt-4 font-bold text-red-400">
        And then came the watermelon scene.
      </p>

      <p className="mt-4">
        I was basically uncomfortable the entire time because I knew that the
        moment he started eating into that watermelon, the movie was preparing
        me for something disgusting. And I was right.
      </p>

      <p className="mt-4">
        It transitioned into THAT knife scene.
      </p>

      <p className="mt-4">
        Got me screaming for an entire minute and I genuinely had to cover my
        mouth because of how gruesome it was. That scene alone deserves jail time.
      </p>

      <p className="mt-4">
        What makes this movie even better is that underneath all the disturbing
        scenes, it is actually really sad. It's about grief, obsession, and how far people will go when they
        cannot let go of someone they lost.
      </p>

      <p className="mt-4">
        Unfortunately, it is deeply horrifying.
      </p>

      <p className="mt-4 font-bold text-gray-400">
        Final thoughts:
        <br />
        10/10 horror.
        <br />
        10/10 scream factor.
        <br />
        0/10 comfort.
      </p>
    </main>
  );
}
import Image from "next/image";

export default function About() {
  return (
    <>
      <main>
        <div className="mx-7 py-12 max-w-[800px] xl:m-0 lg:w-[55vw] lg:max-w-[1100px] xl:p-32 overflow-auto xl:box-border">
          <div>
            <div className="uppercase tracking-widest text-sm mb-12 xl:mb-20 xl:mt-16 text-black">
              something
            </div>

            <h1 className="text-black font-serif mb-12 text-5xl xl:text-8xl tracking-tight">
              John Doe
            </h1>
            <div className="text-xl mb-12 leading-loose text-black">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
              ab officia quam sequi, necessitatibus aut delectus error, eveniet
              qui, corporis mollitia veniam exercitationem quod recusandae odio
              at. Atque, at ut!
            </div>
            <div className="prose max-w-none text-black text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
              autem minus, debitis sit accusamus fugit doloribus culpa nam sed
              nemo asperiores error fuga voluptas quaerat. Eos officiis incidunt
              placeat aut!
            </div>
          </div>
          <blockquote className="mt-10 text-black">
            <p className="text-2xl font-light">
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit
              amet nulla auctor, vestibulum magna sed, convallis ex."
            </p>
            <cite className="text-lg font-bold">- John Doe, CEO @ Company</cite>
          </blockquote>
          <div className="text-xl mb-12 leading-loose text-black mt-10">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ab
            officia quam sequi, necessitatibus aut delectus error, eveniet qui,
            corporis mollitia veniam exercitationem quod recusandae odio at.
            Atque, at ut!
          </div>
          <div className="text-xl mb-12 leading-loose text-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit ab
            officia quam sequi, necessitatibus aut delectus error, eveniet qui,
            corporis mollitia veniam exercitationem quod recusandae odio at.
            Atque, at ut!
          </div>
          <div className="hidden xl:block fixed inset-0 left-auto w-[45vw] 2xl:w-[50vw]">
            <Image
              src="/img/profile.jpg"
              alt="profile picture"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="xl:hidden">
            <Image
              src="/img/profile.jpg"
              alt="profile picture"
              layout="responsive"
              objectFit="cover"
              objectPosition="center"
              width={2000}
              height={2000}
            />
          </div>
        </div>
      </main>
    </>
  );
}

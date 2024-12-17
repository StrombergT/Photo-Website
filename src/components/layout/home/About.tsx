import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="px-8 py-16 container mx-auto">
      <div className="text-center">
        <h3 className="text-3xl font-bold">ABOUT ME</h3>
        <p className="text-gray-500 italic mt-2">I love photography</p>
      </div>
      <p className="mt-6">
        We have created a fictional "personal" website/blog, and our fictional
        character is a hobby photographer. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
        dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
        proident, sunt in culpa qui officia deserunt mollit anim id est laborum
        consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
        <div className="flex flex-col items-center">
          <p className="font-bold mb-4">
            <i className="fa fa-user mr-2"></i>My Name
          </p>
          <Image
            src="/img/profile.jpg"
            alt="Photo of Me"
            className="shadow-lg rounded-lg"
            width={1000}
            height={1000}
          />
        </div>
        <div>
          <p className="mt-10">
            Welcome to my website. I am lorem ipsum consectetur adipiscing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip ex ea commodo
            consequat.
          </p>
        </div>
      </div>
    </section>
  );
}

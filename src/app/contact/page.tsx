import ContactForm from "@/src/components/ContactForm";

export default function Contact() {
  return (
    <main className="lg:fixed lg:inset-0 lg:flex lg:items-center lg:justify-center">
      <div className="mx-7 py-12 max-w-[600px] lg:m-0 lg:pr-32 lg:box-border">
        <div>
          <div className="uppercase tracking-widest text-sm mb-12 xl:mb-20 text-secondary">
            Let&lsquo;s get it touch
          </div>
          <h1 className="text-primary font-serif mb-12 text-5xl lg:text-8xl tracking-tight">
            Lorem!
          </h1>
          <div className="prose max-w-none text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            commodi labore nihil sit possimus ipsum similique, dicta ad sed
            vitae dolores perspiciatis, suscipit corporis excepturi debitis
            molestiae eos ut ea!
          </div>

          <div className="mt-5">
            <a className="w-full font-bold flex space-x-4 items-center text-[#128c7e] underline underline-offset-2 decoration-[#128c7e]"></a>
          </div>
        </div>
      </div>
      <div className="mx-7 py-12 lg:mx-0 lg:py-0 lg:flex lg:items-center lg:justify-center">
        <ContactForm />
      </div>
    </main>
  );
}

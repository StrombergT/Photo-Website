import GalleryComponent from "@/src/components/GalleryComponent";

export default function Gallery() {
  return (
    <main className="lg:flex lg:flex-col lg:items-center lg:justify-center">
      <div className=" py-32 max-w-4xl ">
        <div>
          <h1 className="text-primary font-serif mb-12 text-5xl lg:text-8xl tracking-tight text-center">
            Lorem!
          </h1>
          <div className="prose max-w-none text-secondary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            commodi labore nihil sit possimus ipsum similique, dicta ad sed
            vitae dolores perspiciatis, suscipit corporis excepturi debitis
            molestiae eos ut ea!
          </div>
        </div>
      </div>
      <GalleryComponent />
    </main>
  );
}

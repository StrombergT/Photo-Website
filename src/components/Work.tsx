import Image from "next/image";
import Link from "next/link";

type WorkProps = {
  category: { title: string; items: { image: string; slug: string }[] };
};

export default function WorkComponent({ category }: WorkProps) {
  return (
    <>
      <div key={category.title} className="p-4 flex flex-col items-center">
        <h2 className="text-2xl font-semibold mb-4 text-primary">
          {category.title}
        </h2>

        <div className="grid grid-cols-1 gap-4">
          {category.items.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-lg cursor-pointer"
            >
              <Link href={`/work/${item.slug}`}>
                <div className="relative w-[500px] h-[680px]">
                  <Image
                    src={item.image}
                    alt={`${category.title} ${index + 1}`}
                    layout="fill"
                    objectFit="cover"
                    className="transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-75"
                  />
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

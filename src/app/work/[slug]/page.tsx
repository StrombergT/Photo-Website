// pages/work.tsx
import { notFound } from "next/navigation";
import { GridComponent } from "@/src/components/GridComponent"; // Importera GridComponent
import Image from "next/image";

type PricePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export default async function WorkPage({ params }: PricePageProps) {
  const { slug } = await params;

  const content = {
    wedding: {
      description: "",
      items: [
        { image: "/img/work/wedding.jpg" },
        { image: "/img/banner.jpg" },
        { image: "/img/snow.jpg" },
        { image: "/img/leaf.jpg" },
        { image: "/img/profile.jpg" },
        { image: "/img/water.jpg" },
      ],
    },
    portrait: {
      description: "",
      items: [
        { image: "/img/work/portrait.jpg" },
        { image: "/img/banner.jpg" },
        { image: "/img/snow.jpg" },
        { image: "/img/leaf.jpg" },
        { image: "/img/profile.jpg" },
        { image: "/img/water.jpg" },
      ],
    },
    family: {
      description: "",
      items: [
        { image: "/img/work/family_photo.jpg" },
        { image: "/img/banner.jpg" },
        { image: "/img/snow.jpg" },
        { image: "/img/leaf.jpg" },
        { image: "/img/profile.jpg" },
        { image: "/img/water.jpg" },
      ],
    },
  };

  const pageContent = content[slug as keyof typeof content];

  if (!pageContent) {
    notFound();
  }

  return (
    <div className="container mx-auto mt-36 p-8">
      <h1 className="text-5xl font-bold capitalize text-primary">{slug}</h1>
      <p className="text-xl mt-4 text-secondary">{pageContent.description}</p>
      <GridComponent>
        {pageContent.items.map((item, index) => (
          <div key={index} className="relative w-full h-full flex flex-col">
            <Image
              src={item.image}
              alt={`Image for ${slug} ${index + 1}`}
              fill
              className="object-cover transition-all duration-500 ease-in-out hover:scale-105 hover:brightness-75"
              objectFit="cover"
              objectPosition="center"
            />
          </div>
        ))}
      </GridComponent>
    </div>
  );
}

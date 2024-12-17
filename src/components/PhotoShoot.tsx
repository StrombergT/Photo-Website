import Image from "next/image";

interface PhotoshootProps {
  total: number;
}

const images = [
  "/img/profile.jpg",
  "/img/leaf.jpg",
  "/img/water.jpg",
  "/img/snow.jpg",
];

export function Photoshoot({ total }: PhotoshootProps) {
  return (
    <div
      className="relative"
      style={{ counterIncrement: "photoshoot-counter" }}
    >
      <div className="xl:px-10 flex">
        {images.map((src, index) => (
          <div
            key={index}
            className="xl:min-w-[50vw] xl:h-screen relative xl:mr-20"
          >
            <Image
              src={src}
              alt={`Banner ${index + 1}`}
              width={2000}
              height={2000}
              objectFit="cover"
              objectPosition="center"
              className="h-full object-cover w-full"
            />
            {/* Flytta ID-information utanför bilden */}
            <div
              className="hidden xl:flex absolute z-10 bottom-[250px] left-[-40px] -rotate-90 origin-top-left items-center text-black"
              id={`image-id-${index + 1}`}
            >
              <div>{index + 1}</div> {/* Visar dynamiskt ID */}
              <div className="h-[2px] w-[100px] mx-4 bg-black" />
              <div>{total}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

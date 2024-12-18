import Image from "next/image";

interface PhotoshootProps {
  total: number;
  imageSrc: string;
}

export function Photoshoot({ total, imageSrc }: PhotoshootProps) {
  return (
    <div
      className="relative"
      style={{ counterIncrement: "photoshoot-counter" }}
    >
      <div className="xl:px-10 flex">
        <div className="xl:min-w-[50vw] xl:h-screen relative">
          <Image
            src={imageSrc}
            alt={`Banner`}
            width={2000}
            height={2000}
            objectFit="cover"
            objectPosition="center"
            className="h-full object-cover w-full"
          />
          <div className="hidden xl:flex absolute z-10 bottom-[250px] left-[-40px] -rotate-90 origin-top-left items-center text-secondary">
            <div className="before:content-[counter(photoshoot-counter)] text-secondary" />
            <div className="h-[2px] w-[100px] mx-4 bg-secondary" />
            <div>{total}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

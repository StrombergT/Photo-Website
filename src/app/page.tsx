/* import GalleryComponent from "../components/layout/home/GalleryComponent";

export default function Home() {
  return (
    <div>
      <GalleryComponent />
    </div>
  );
}
 */
import { HorizontalScroller } from "../components/HorizontalScroller";
import { Tile } from "../components/Tile";
import { Photoshoot } from "../components/PhotoShoot";

const images = [
  "/img/profile.jpg",
  "/img/leaf.jpg",
  "/img/water.jpg",
  "/img/snow.jpg",
];

export default function Home() {
  return (
    <main style={{ counterReset: "photoshoot-counter" }}>
      <HorizontalScroller>
        {images.map((imageSrc, index) => (
          <Tile key={index}>
            <div className="mx-7 py-12 xl:m-0 xl:w-[60vw] xl:max-w-[900px] xl:flex xl:items-center xl:justify-items-center xl:p-32">
              <div>
                <div className="uppercase tracking-widest text-sm mb-12 xl:mb-20 text-black">
                  John Doe Photography
                </div>
                <h1 className="text-black font-serif mb-12 text-5xl xl:text-8xl tracking-tight">
                  Fångar ögonblicken som varar för evigt.
                </h1>
                <div className="leading-loose prose max-w-none text-black">
                  Fotografering handlar inte bara om bilder – det är att fånga
                  din berättelse och förvandla den till något unikt och
                  minnesvärt. Låt mig hjälpa dig att berätta din historia genom
                  min lins.
                </div>
              </div>
            </div>
            <Photoshoot total={images.length} />
          </Tile>
        ))}
      </HorizontalScroller>
    </main>
  );
}

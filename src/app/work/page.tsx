import WorkComponent from "@/src/components/Work";
import { aboutMyWork, content } from "@/src/constants/content";

export default function Work() {
  return (
    <>
      <div className="max-w-3xl mx-auto mt-36">
        <div className="mb-12">
          <h1 className="text-5xl text-primary mb-4 text-center py-12">
            My Work
          </h1>
          <p className="text-lg text-gray-600">{aboutMyWork.text}</p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
        {Object.entries(content).map(([key, category]) => (
          <WorkComponent key={key} category={category} />
        ))}
      </div>
    </>
  );
}

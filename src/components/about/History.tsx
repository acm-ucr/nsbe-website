import Image from "next/image";
const History = () => {
  return (
    <div className="flex min-h-screen items-center justify-center px-6">
      <div className="flex w-full max-w-4xl items-center gap-10">
      <div className="flex w-1/3 justify-center">
        <Image
          src="/Logo.webp"
          alt="NSBE Logo"
          width={400}
          height={400}
          className="w-full max-w-md rounded-md shadow-md"
        />
      </div>
      <div className="flex w-2/3 justify-start">
        <div className="bg-nsbe-gray-100/50 flex w-full flex-col items-center rounded-md border border-amber-50 p-5 shadow-md">
          <div className="text-nsbe-yellow-100 w-full text-left text-lg font-extrabold">
            HISTORY
          </div>

          <p className="text-sm leading-relaxed text-white">
            The UC Riverside chapter was established in the early 2000s and grew
            rapidly as more students of color entered the university and sought
            out resources to thrive academically and connect with research and
            career opportunities. Our members keep an ongoing commitment to
            excellence that appears in our various programs and outreach
            initiatives to positively impact students both inside and outside
            the university.
          </p>
        </div>
      </div>
    </div>
    </div>
  );
};

export default History;

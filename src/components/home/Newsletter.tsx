import NewsletterCard from "./NewsletterCard";

const newsletterInfos = [
  { name: "Resource Name" },
  { name: "Resource Name" },
  { name: "Resource Name" },
];

const Newsletter = () => {
  return (
    <div className="mx-auto w-9/10 pb-8 md:w-5/6">
      <h1 className="mb-8 text-2xl font-black text-nsbe-yellow-100">
        OUR NEWSLETTER
      </h1>

      <div className="flex flex-wrap justify-center gap-6">
        {newsletterInfos.map(({ name }, index) => (
          <NewsletterCard key={index} name={name} />
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <button className="rounded-md border border-nsbe-yellow-100 px-6 py-3 font-semibold text-nsbe-yellow-100 hover:bg-nsbe-yellow-100 hover:text-black transition-colors">
          SUBSCRIBE HERE
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
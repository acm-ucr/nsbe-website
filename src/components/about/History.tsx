const History = () => {
  return (
    <div className="flex min-h-screen items-start gap-10 px-6">
      <div className="flex w-1/4 justify-center">
        <img
          src="Logo.webp"
          alt="NSBE Logo"
          className="w-full max-w-md rounded-md shadow-md"
        />
      </div>
      <div className="flex w-1/2 justify-start">
        <div className="bg-nsbe-gray-100 m-5 flex w-full max-w-xl flex-col items-center rounded-md border border-amber-50 p-5 shadow-md">
          <h2 className="text-nsbe-yellow-100 w-full text-left text-lg font-extrabold">
            HISTORY
          </h2>

          <p className="text-sm leading-relaxed text-white">
            The UC Riverside chapter was established in the early 2000s and grew
            rapidly as more students of color entered the university and sought
            out resources to thrive academically and connect with research and
            career opportunities. Our members keep an ongoing commmitment to
            excellence that appears in our various programs and outreach
            initiaitves to positively impact students both inside and outside
            the universty.
          </p>
        </div>
      </div>
    </div>
  );
};

export default History;

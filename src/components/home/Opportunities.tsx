import Link from "next/link";

const Opportunities = () => {
  return (
    <div className="px-6 py-10 pb-20 md:pb-30">
      <div className="mx-auto max-w-6xl">
        <p className="text-nsbe-yellow-100 mb-10 text-center text-3xl font-bold md:mb-0 md:text-right md:text-4xl">
          OPPORTUNITIES
        </p>

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-2 md:gap-24">
          <div className="relative">
            <div className="bg-nsbe-red-100 absolute inset-0 translate-x-3 translate-y-3 rounded-2xl md:translate-x-4 md:translate-y-4" />
            <div className="bg-nsbe-gray-50 relative rounded-2xl border p-6 md:p-10">
              <p className="mb-4 text-2xl font-extrabold text-white md:mb-6 md:text-3xl">
                NSBE FALL REGIONAL CONFERENCE
              </p>
              <p className="mb-8 text-base text-gray-400 md:mb-10 md:text-lg">
                Excited to dip your toes in professional development and have
                the chance to meet students and recruiters from schools across
                the southwest? The Region VI Fall Conference is for you!
              </p>
              <div className="self-start">
                <Link
                  href="#"
                  className="inline-block rounded-lg border-2 border-white px-6 py-2 font-bold text-white transition-colors hover:bg-white hover:text-black md:px-8"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
          <div className="relative mt-4 md:mt-32">
            <div className="bg-nsbe-green-100 absolute inset-0 translate-x-3 translate-y-3 rounded-2xl md:translate-x-4 md:translate-y-4" />

            <div className="bg-nsbe-gray-50 relative flex flex-col rounded-2xl border p-6 md:p-10">
              <p className="mb-4 text-2xl font-extrabold text-white md:mb-6 md:text-3xl">
                NSBE ANNUAL CONVENTION
              </p>
              <p className="mb-8 text-base text-gray-400 md:mb-10 md:text-lg">
                Ready for a larger career fair? NSBE's annual convention exposes
                students to hundreds of companies hiring both interns and
                full-time new grads; there are limitless opportunities to
                connect with ambitious students and professionals in various
                engineering and financial fields!
              </p>
              <div className="self-start md:self-end">
                <Link
                  href="#"
                  className="inline-block rounded-lg border-2 border-white px-6 py-2 font-extrabold text-white transition-colors hover:bg-white hover:text-black md:px-8"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Opportunities;

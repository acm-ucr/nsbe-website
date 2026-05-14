import Link from "next/link";

const Opportunities = () => {
  return (
    <div className="px-6 py-10 pb-30">
      <div className="mx-auto max-w-6xl">
        <p className="text-nsbe-yellow-100 text-right text-4xl font-bold">
          OPPORTUNITIES
        </p>

        <div className="grid grid-cols-2 items-start gap-24">
          <div className="relative">
            <div className="bg-nsbe-red-100 absolute inset-0 translate-x-4 translate-y-4 rounded-2xl" />

            <div className="bg-nsbe-gray-50 relative rounded-2xl border p-10">
              <p className="mb-6 text-3xl font-extrabold text-white">
                NSBE FALL REGIONAL CONFERENCE
              </p>
              <p className="mb-10 text-lg text-gray-400">
                Excited to dip your toes in professional development and have
                the chance to meet students and recruiters from schools across
                the southwest? The Region VI Fall Conference is for you!
              </p>
              <div className="self-start">
                <Link
                  href="#"
                  className="inline-block rounded-lg border-2 border-white px-8 py-2 font-bold text-white hover:bg-white hover:text-black"
                >
                  LEARN MORE
                </Link>
              </div>
            </div>
          </div>

          <div className="relative mt-32">
            <div className="bg-nsbe-green-100 absolute inset-0 translate-x-4 translate-y-4 rounded-2xl" />

            <div className="bg-nsbe-gray-50 relative flex flex-col rounded-2xl border p-10">
              <p className="mb-6 text-3xl font-extrabold text-white">
                NSBE ANNUAL CONVENTION
              </p>
              <p className="mb-10 text-lg text-gray-400">
                Ready for a larger career fair? NSBE's annual convention exposes
                students to hundreds of companies hiring both interns and
                full-time new grads; there are limitless opportunities to
                connect with ambitious students and professionals in various
                engineering and financial fields!
              </p>
              <div className="self-end">
                <Link
                  href="#"
                  className="inline-block rounded-lg border-2 border-white px-8 py-2 font-extrabold text-white hover:bg-white hover:text-black"
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

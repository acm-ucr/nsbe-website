import Link from "next/link";

const OurMission = () => {
  return (
    <div className="bg-nsbe-black-100 flex flex-col items-center justify-center px-8 py-16 text-center">
      <div className="text-nsbe-yellow-100 mb-6 text-3xl font-bold">
        OUR MISSION
      </div>

      <p className="text-nsbe-yellow-100 max-w-4xl text-xl">
        As the organization has grown, advancing the professional prospects and
        development of Black engineers, our purpose has remained the same.
      </p>

      <p className="text-nsbe-yellow-100 max-w-4xl text-xl">
        We aim "to increase the number of culturally responsible Black Engineers
        who excel academically, succeed professionally, and positively impact
        the community".
      </p>

      <Link
        href="https://nsbe.org"
        target="_blank"
        className="border-nsbe-yellow-100 text-nsbe-yellow-100 mt-12 rounded-xl border-3 px-5 py-2 text-xl transition-opacity hover:opacity-60"
      >
        LEARN MORE
      </Link>
    </div>
  );
};

export default OurMission;

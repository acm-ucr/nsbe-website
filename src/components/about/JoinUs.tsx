import Link from "next/link";

const JoinUs = () => {
  return (
    <div className="bg-nsbe-gray-50 flex flex-col items-center justify-center px-4 py-16 text-center">
      <div className="text-nsbe-yellow-100 mb-8 text-4xl font-black">
        JOIN US
      </div>
      <p className="text-xl text-white">
        Join us on{" "}
        <Link
          href="https://highlanderlink.ucr.edu/organization/nsbe"
          target="_blank"
          className="text-nsbe-yellow-100 font-bold underline decoration-2"
        >
          Highlander Link
        </Link>{" "}
        and get to know us by attending events posted on our Instagram!
      </p>
    </div>
  );
};

export default JoinUs;

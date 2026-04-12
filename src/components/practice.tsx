const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-nsbe-yellow-100 flex w-2/3 flex-col items-center gap-6 justify-self-center rounded-3xl p-8">
      <div className="bg-nsbe-gray-900 w-1/2 p-5 text-center text-3xl text-white">
        {props.text1}
      </div>

      <div className="flex w-1/2 flex-row gap-4">
        <div className="bg-nsbe-gray-100 w-full rounded-full p-5 text-center text-3xl">
          {props.text2}
        </div>
        <div className="bg-nsbe-green-100 w-full rounded-full p-5 text-center text-3xl">
          Click
        </div>
      </div>

      <div className="bg-nsbe-red-100 w-1/2 p-5 text-center text-3xl">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;

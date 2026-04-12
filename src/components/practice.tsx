const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-nsbe-yellow-100 mx-auto flex w-5/6 flex-col items-center gap-4 rounded-2xl p-8">
      <div className="bg-nsbe-gray-50 m-3 w-full rounded-sm p-5 text-center text-amber-50">
        {props.text1}
      </div>

      <div className="flex w-full flex-row justify-center gap-1">
        <div className="bg-nsbe-gray-100 m-0 w-1/2 rounded-full p-5 text-center">
          {props.text2}
        </div>
        <div className="bg-nsbe-green-100 m-0 w-1/2 rounded-full p-5 text-center">
          {props.text2}
        </div>
      </div>

      <div className="bg-nsbe-red-100 m-5 w-full rounded-sm p-5 text-center">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;

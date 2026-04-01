const Example = (props: { text1: string; text2: string; text3: string }) => {
    return (
      <div className="bg-nsbe-yellow-100 flex w-3/4 items-center gap-1 justify-self-center p-8">
        <div className="bg-nsbe-gray-100 w-1/2 p-5 text-left">
          {props.text1}
        </div>
  
        <div className="flex w-1/2 flex-row gap-1">
          <div className="bg-nsbe-red-100 w-full p-5 text-left">
            {props.text2}
          </div>
        </div>
  
        <div className="bg-nsbe-green-100 w-1/2 p-5">{props.text3}</div>
      </div>
    );
  };
  
  export default Example;

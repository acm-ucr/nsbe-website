const Example = (props: { text1: string; text2: string; text3: string }) => {
  return (
    <div className="bg-nsbe-yellow-100 flex w-2/3 flex-col items-center gap-6 justify-self-center rounded-lg p-8">
      <div className="bg-nsbe-gray-50 w-1/2 p-5 text-center text-2xl text-white">
        {props.text1}
      </div>

      <div className="flex w-1/2 flex-row gap-1">
        <div className="bg-nsbe-gray-100 w-full rounded-full p-5 text-center text-2xl">
          {props.text2}
        </div>
        <div className="bg-nsbe-green-100 w-full rounded-full p-5 text-center text-2xl">
          {props.text2}
        </div>
      </div>

      <div className="bg-nsbe-red-100 w-1/2 p-5 text-center text-2xl">
        {props.text3}
      </div>
    </div>
  );
};

export default Example;

// const Example = (props: {
//   text1: string;
//   text2: string;
//   text3: string;
//   text4: string;
// }) => {
//   return (
//     <div className="bg-nsbe-yellow-100 flex flex-col w-2/3 items-center justify-center gap-6 p-10 rounded-xl mx-auto">

//       {/* Top box */}
//       <div className="bg-nsbe-gray-100 w-1/2 p-5 text-center text-white text-xl rounded-md">
//         {props.text1}
//       </div>

//       {/* Middle row (2 buttons) */}
//       <div className="flex flex-row gap-6">
//         <div className="bg-nsbe-gray-100 px-10 py-4 text-center rounded-full text-lg">
//           {props.text2}
//         </div>
//         <div className="bg-nsbe-green-100 px-10 py-4 text-center rounded-full text-lg">
//           {props.text3}
//         </div>
//       </div>

//       {/* Bottom box */}
//       <div className="bg-nsbe-red-100 w-1/2 p-5 text-center text-lg rounded-md">
//         {props.text4}
//       </div>

//     </div>
//   );
// };

// export default Example;

import BoardCard from "@/components/board/BoardCard";
import board from "@/data/board";

const BoardGrid = () => {
  return (
    <div className="flex flex-col items-center gap-4 px-2 py-16 pb-32 md:px-6">
      <p className="text-nsbe-yellow-100 text-center text-5xl font-extrabold">
        MEET THE BOARD
      </p>
      <p className="text-nsbe-yellow-100 mb-10 text-center text-3xl font-extrabold">
        2026 - 2027
      </p>
      <div className="flex w-full flex-col items-center gap-16 lg:gap-40">
        <div className="grid grid-cols-1 justify-items-center gap-16 md:grid-cols-2 lg:gap-x-30">
          {board[0].members.map(
            ({ image, name, position, linkedin }, index) => (
              <BoardCard
                key={index}
                image={image}
                name={name}
                position={position}
                linkedin={linkedin}
              />
            ),
          )}
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-16 md:grid-cols-3 lg:gap-x-30">
          {board[1].members.map(
            ({ image, name, position, linkedin }, index) => (
              <BoardCard
                key={index}
                image={image}
                name={name}
                position={position}
                linkedin={linkedin}
              />
            ),
          )}
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-16 md:grid-cols-3 lg:gap-x-30">
          {board[2].members.map(
            ({ image, name, position, linkedin }, index) => (
              <BoardCard
                key={index}
                image={image}
                name={name}
                position={position}
                linkedin={linkedin}
              />
            ),
          )}
        </div>
        <div className="grid grid-cols-1 justify-items-center gap-16 md:grid-cols-4 lg:gap-x-30">
          {board[3].members.map(
            ({ image, name, position, linkedin }, index) => (
              <BoardCard
                key={index}
                image={image}
                name={name}
                position={position}
                linkedin={linkedin}
              />
            ),
          )}
        </div>
      </div>
    </div>
  );
};

export default BoardGrid;

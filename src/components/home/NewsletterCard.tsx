interface NewsletterCardProps {
  name: string;
}

const NewsletterCard = ({ name }: NewsletterCardProps) => {
  return (
    <div className="bg-nsbe-gray-50 flex w-50 flex-col overflow-hidden rounded-lg p-4 shadow-xl">
      <div className="bg-nsbe-gray-100 h-35 w-full" />
      <p className="mt-2 py-1 pb-8 text-sm text-white">{name}</p>
    </div>
  );
};

export default NewsletterCard;

import { Dream } from "../lib/data";

type DreamCardProps = {
  dream: Dream;
  onClick: () => void;
};

const DreamCard = ({ dream, onClick }: DreamCardProps) => {
  return (
    <div 
      className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer" 
      onClick={onClick}
    >
      <div className="flex justify-between">
        <h4 className="text-lg font-medium mb-2">{dream.title}</h4>
        <span className="text-sm text-gray-500">{dream.category}</span>
      </div>
      <p className="text-gray-700 line-clamp-3">
        {dream.content.substring(0, 180)}... 
        <span className="text-primary">read more</span>
      </p>
    </div>
  );
};

export default DreamCard;

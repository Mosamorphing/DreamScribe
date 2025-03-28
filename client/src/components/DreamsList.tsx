import DreamCard from "./DreamCard";
import { Dream } from "../lib/data";

type DreamsListProps = {
  dreams: Dream[];
  onDreamClick: (dream: Dream) => void;
};

const DreamsList = ({ dreams, onDreamClick }: DreamsListProps) => {
  return (
    <section className="pb-16 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto">
        <h3 className="text-xl font-semibold text-primary mb-6">Featured Dreams</h3>
        
        <div className="space-y-4">
          {dreams.map((dream) => (
            <DreamCard 
              key={dream.id} 
              dream={dream} 
              onClick={() => onDreamClick(dream)} 
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default DreamsList;

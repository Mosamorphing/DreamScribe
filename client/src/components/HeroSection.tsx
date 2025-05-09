import { Button } from "@/components/ui/button";

type CategoryTabProps = {
  name: string;
  isActive: boolean;
  onClick: () => void;
};

const CategoryTab = ({ name, isActive, onClick }: CategoryTabProps) => {
  return (
    <Button
      variant="ghost"
      className={`text-xs sm:text-sm font-medium px-2 sm:px-3 py-1 h-auto font-dynapuff no-underline hover:no-underline ${
        isActive
          ? "text-primary border-b-2 border-primary"
          : "text-gray-500 hover:text-gray-700"
      }`}
      onClick={onClick}
    >
      {name}
    </Button>
  );
};

type HeroSectionProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

const HeroSection = ({ activeCategory, setActiveCategory }: HeroSectionProps) => {
  const categories = [
    "All dreams",
    "Science",
    "Arts",
    "Finance",
    "Sports",
    "Governance",
    "Technology"
  ];

  return (
    <section className="py-8 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl md:text-3xl lg:text-5xl font-regular mb-3 sm:mb-4 font-hedvig">Share your dreams,<br></br>Meet your collaborators. </h1>
        <p className="text-sm sm:text-base text-gray-700 mb-6 sm:mb-8 max-w-2xl mx-auto">
          From daydreams to night dreams, share ideas and meet co-dreamers to help materialize them.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 sm:gap-4 mb-4 sm:mb-6">
          {categories.map((category) => (
            <CategoryTab
              key={category}
              name={category}
              isActive={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

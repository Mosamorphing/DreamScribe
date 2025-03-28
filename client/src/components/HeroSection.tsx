import { Button } from "@/components/ui/button";

type CategoryTabProps = {
  name: string;
  isActive: boolean;
  onClick: () => void;
};

const CategoryTab = ({ name, isActive, onClick }: CategoryTabProps) => {
  return (
    <Button
      variant="link"
      className={`text-sm font-medium px-3 py-1 h-auto font-dynapuff ${
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
    <section className="py-12 px-6 sm:px-10">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-3xl sm:text-5xl font-regular mb-4 font-hedvig">Share your dreams</h1>
        <h2 className="text-3xl sm:text-5xl font-regular mb-6 font-hedvig">Find your collaborators</h2>
        <p className="text-gray-700 mb-8 max-w-2xl mx-auto">
          Connect with dreamers and turn your visions into reality. From 
          daydreams to night dreams, share ideas and find partners to help materialize them.
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 mb-12">
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

import { useState } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import DreamsList from "./components/DreamsList";
import Footer from "./components/Footer";
import DreamModal from "./components/DreamModal";
import { Dream, dreams } from "./lib/data";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDream, setSelectedDream] = useState<Dream | null>(null);
  const [activeCategory, setActiveCategory] = useState("All dreams");
  
  const filteredDreams = activeCategory === "All dreams" 
    ? dreams 
    : dreams.filter(dream => dream.category === activeCategory);
  
  const handleOpenDreamModal = (dream: Dream) => {
    setSelectedDream(dream);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <HeroSection 
          activeCategory={activeCategory} 
          setActiveCategory={setActiveCategory} 
        />
        <DreamsList 
          dreams={filteredDreams} 
          onDreamClick={handleOpenDreamModal} 
        />
        <Footer />
        {isModalOpen && selectedDream && (
          <DreamModal 
            dream={selectedDream} 
            onClose={handleCloseModal}
          />
        )}
      </main>
    </div>
  );
}

export default App;

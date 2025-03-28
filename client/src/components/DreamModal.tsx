import { useEffect } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dream } from "../lib/data";

type DreamModalProps = {
  dream: Dream;
  onClose: () => void;
};

const DreamModal = ({ dream, onClose }: DreamModalProps) => {
  // Prevent body scrolling when modal is open
  useEffect(() => {
    document.body.classList.add("overflow-hidden");
    
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, []);
  
  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={handleBackdropClick}
    >
      <div 
        className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto mx-4"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h2 className="text-xl font-semibold">{dream.title}</h2>
              <p className="text-sm text-gray-500">{dream.category}</p>
            </div>
            <button 
              className="text-gray-500 hover:text-gray-700"
              onClick={onClose}
            >
              <X className="h-6 w-6" />
            </button>
          </div>
          <div className="prose max-w-none">
            {dream.content.split('\n\n').map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-100">
            <h3 className="text-lg font-medium mb-2">Looking for collaborators in:</h3>
            <div className="flex flex-wrap gap-2">
              {dream.collaborators.map((tag, index) => (
                <span 
                  key={index} 
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-6 flex justify-between">
            <Button variant="ghost" className="text-primary font-medium flex items-center gap-1">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
              Favorite
            </Button>
            <Button className="rounded-full">
              Connect with dreamer
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DreamModal;

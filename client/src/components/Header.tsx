import { Button } from "@/components/ui/button";

const Header = () => {
  const openGoogleForm = () => {
    window.open('https://forms.gle/6Rz9GxQpwUKzTrCLA', '_blank');
  };

  return (
    <header className="border-b border-gray-100 py-3 px-4 sm:py-4 sm:px-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-primary text-base sm:text-xl font-bold font-dynapuff">Dreamville</a>
        <Button 
          className="rounded-full text-xs px-3 py-1 sm:text-sm sm:px-4 sm:py-2 font-medium font-dynapuff"
          variant="default"
          onClick={openGoogleForm}
        >
          Share your dreams
        </Button>
      </div>
    </header>
  );
};

export default Header;

import { Button } from "@/components/ui/button";

const Header = () => {
  const openGoogleForm = () => {
    window.open('https://forms.gle/your-google-form-link', '_blank');
  };

  return (
    <header className="border-b border-gray-100 py-4 px-6 sm:px-10">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-primary text-xl font-bold font-dynapuff">dreamville</a>
        <Button 
          className="rounded-full px-4 py-2 font-medium font-dynapuff"
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

import { Button } from "@/components/ui/button";

const Footer = () => {
  const openFeedbackForm = () => {
    window.open('https://forms.gle/TtSGf55r78Ey4z1Q7', '_blank');
  };

  return (
    <footer className="py-4 sm:py-6 px-4 sm:px-10 text-center text-gray-600 text-xs sm:text-sm">
      <p className="font-dynapuff">
        Brought to you by{" "}
        <a 
          href="https://mosadoluwafasasi.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:underline cursor-pointer"
        >
          mofasasi
        </a>
      </p>
      <Button 
        className="mt-2 rounded-full text-xs px-3 py-1 sm:text-sm sm:px-4 sm:py-2 font-dynapuff"
        onClick={openFeedbackForm}
        variant="outline"
        size="sm"
      >
        Submit feedback
      </Button>
    </footer>
  );
};

export default Footer;

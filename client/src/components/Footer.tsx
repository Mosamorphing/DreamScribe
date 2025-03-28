import { Button } from "@/components/ui/button";

const Footer = () => {
  const openFeedbackForm = () => {
    window.open('https://docs.google.com/forms/d/e/1FAIpQLSe85pmnu8KoMFK-S2ATfzx9lu-U_RplOldi2OB6UnAR55pYjQ/viewform?usp=sharing', '_blank');
  };

  return (
    <footer className="py-6 px-6 sm:px-10 text-center text-gray-600 text-sm">
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
        className="mt-2 rounded-full font-dynapuff"
        onClick={openFeedbackForm}
      >
        Submit feedback
      </Button>
    </footer>
  );
};

export default Footer;

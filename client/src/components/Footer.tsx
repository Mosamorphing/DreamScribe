import { Button } from "@/components/ui/button";

const Footer = () => {
  const openFeedbackForm = () => {
    window.open('https://forms.gle/TtSGf55r78Ey4z1Q7', '_blank');
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

import { Button } from "@/components/ui/button";

const Footer = () => {
  const openFeedbackForm = () => {
    window.open('https://forms.gle/your-feedback-form-link', '_blank');
  };

  return (
    <footer className="py-6 px-6 sm:px-10 text-center text-gray-600 text-sm">
      <p className="font-dynapuff">Brought to you by mofasasi</p>
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

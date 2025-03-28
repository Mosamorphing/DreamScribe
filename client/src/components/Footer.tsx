import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="py-6 px-6 sm:px-10 text-center text-gray-600 text-sm">
      <p>Brought to you by mofasasi</p>
      <Button className="mt-2 rounded-full">
        Submit feedback
      </Button>
    </footer>
  );
};

export default Footer;

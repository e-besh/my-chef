import { ChefHat } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <ChefHat size={20} />
          <span>My Chef</span>
        </div>
        <p className="footer-copy">
          © {new Date().getFullYear()} My Chef · Made with React
        </p>
      </div>
    </footer>
  );
}

export default Footer;

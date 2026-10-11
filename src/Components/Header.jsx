import { ChefHat } from "lucide-react";
const Header = () => {
  return (
    <header>
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "11px",
        }}
      >
        <ChefHat size={35} />
        <h1>My Chef</h1>
      </div>
    </header>
  );
};

export default Header;

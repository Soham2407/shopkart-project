import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center">
      <h1 className="text-4xl font-bold">ShopKart</h1>

      <nav className="flex gap-4 items-center">
        <p className="text-lg">About</p>
        <p className="text-lg">logout</p>
      </nav>
    </header>
  );
};

export default Header;

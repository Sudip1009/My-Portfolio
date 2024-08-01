import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 mt-auto border-t-2 border-zinc-500">
      <div className="container mx-auto text-center text-white">
        &copy; {new Date().getFullYear()} My Portfolio. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

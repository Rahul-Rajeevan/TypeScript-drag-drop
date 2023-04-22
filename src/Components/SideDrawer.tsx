import React, { useState } from 'react';
import './SideDrawer.css';


const SideDrawer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button onClick={handleToggle}>Toggle Drawer</button>
      <div className={`side-drawer ${isOpen ? 'open' : ''}`}>
        <ul>
          <li>Item 1</li>
          <li>Item 2</li>
          <li>Item 3</li>
        </ul>
      </div>
    </>
  );
};

export default SideDrawer;

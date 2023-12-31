import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import downArrowSvg from "../assets/svg/chevron-down-solid.svg";

function DropdownButton({ children, dropdownContent }) {
  const [isOpen, setIsOpen] = useState(false);
  const buttonRef = useRef();
  useEffect(() => {
    const handler = (e) => {
      if (buttonRef.current && !buttonRef.current.contains(e.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block" ref={buttonRef}>
      <button
        onClick={toggleDropdown}
        className="px-4 py-2 bg-[#D9D9D9] flex items-center justify-between text-lg rounded-full dropdown-button-size"
      >
        {children}
        <img
          src={downArrowSvg}
          alt="downArrowSvg"
          className={`ml-4 svg-size transform ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
        />
      </button>
      {isOpen && (
        <div className="p-2 w-[150px] absolute top-full left-0 mt-2 bg-white border border-gray-300 rounded-lg shadow-lg">
          <ul>
            {dropdownContent.map((item) => (
              <li key={item.id}>
                <Link to="/">{item.type}</Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default DropdownButton;

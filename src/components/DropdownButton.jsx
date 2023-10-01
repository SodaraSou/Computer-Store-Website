import downArrowSvg from "../assets/svg/chevron-down-solid.svg";

function DropdownButton({ children }) {
  return (
    <button className="px-4 py-2 bg-[#D9D9D9] flex items-center justify-between text-lg rounded-full dropdown-button-size">
      {children}
      <img src={downArrowSvg} alt="downArrowSvg" className="ml-4 svg-size" />
    </button>
  );
}

export default DropdownButton;

import { useState, useEffect, useRef, useCallback } from "react";

interface DropdownProps {
  options?: string[];
  onSelect?: (option: string) => void;
}

const Dropdown = ({ options = ["Illinois"], onSelect }: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = useCallback(() => setIsOpen(prev => !prev), []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Handle option selection
  const handleOptionClick = useCallback((option: string) => {
    if (onSelect) {
      onSelect(option);
    }
    setIsOpen(false);
  }, [onSelect]);

  return (
    <div ref={dropdownRef} className="relative inline-block text-left">
      <button
        type="button"
        onClick={toggleDropdown}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="hover:text-[#6f55f2] font-semibold py-2 md:py-0 block md:inline"
      >
        States Approved {isOpen ? '▲' : '▼'}
      </button>

      {isOpen && (
        <div 
          className="absolute mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
          role="menu"
        >
          <ul className="py-2">
            {options.map((option) => (
              <li
                key={option}
                onClick={() => handleOptionClick(option)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                role="menuitem"
              >
                {option}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
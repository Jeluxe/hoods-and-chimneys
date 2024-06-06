import { MouseEvent, useEffect, useState } from 'react';
import {
  ArrowUp,
  ArrowDown
} from "../../assets/icons"
import './Dropdown.css'

interface DropdownProps {
  types: { [key: string]: string },
  selectedOption: string,
  setSelectedOption: React.Dispatch<string>
}

const Dropdown = ({ types, selectedOption, setSelectedOption }: DropdownProps) => {
  const [dropdownOpen, setDropdownOpen] = useState<boolean>(false)

  useEffect(() => {
    const closeDropdown = () => {
      setDropdownOpen(false)
    };

    document.addEventListener("click", closeDropdown);

    return () => {
      document.removeEventListener("click", closeDropdown);
    }
  }, [])

  const chooseSortingType = (type: string) => {
    setSelectedOption(type)
    setDropdownOpen(false)
  }

  const openCloseDropdown = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    setDropdownOpen(!dropdownOpen)
  }

  return (
    <div className="dropdown-menu">
      <div className="dropdown-menu-wrapper">
        סידור לפי:
        <div
          className="selected-option"
          onClick={(e) => openCloseDropdown(e)}>
          {types[selectedOption]}
          <span>{dropdownOpen ? <ArrowUp /> : <ArrowDown />}</span>
        </div>
      </div>
      {dropdownOpen &&
        <div className="dropdown-box">
          {Object.keys(types).map((key, idx) =>
            <div
              key={idx}
              className="dropdown-option"
              onClick={() => chooseSortingType(key)}
            >
              {types[key]}
            </div>
          )}
        </div>
      }
    </div>
  )
};

export default Dropdown;
import { ChangeEvent, MouseEvent, useState, } from 'react';
import { ArrowDown, ArrowUp } from '../../assets/icons';
import './FilterMenu.css'

interface FilterMenuProps {
  isSmallDevice: boolean;
  showFilterMenu: boolean;
  isOpen: boolean;
  selectedSection: string;
  setShowFilterMenu: React.Dispatch<boolean>;
  openCloseSection: (e: MouseEvent<HTMLDivElement>, type: string) => void;
}

const FilterMenu = ({ isSmallDevice, showFilterMenu, setShowFilterMenu, isOpen, selectedSection, openCloseSection }: FilterMenuProps) => {
  const [filterOptions, setFilterOptions] = useState<{ type: { id: string, name: string, checked: boolean }[], price: { min: number, max: number } }>({
    type: [
      { id: "coal", name: "פחם", checked: false },
      { id: "filter", name: "מסנן", checked: false },
    ],
    price: {
      min: 1,
      max: 9999
    }
  })
  const [leftValue, setLeftValue] = useState<number>(filterOptions.price.min)
  const [rightValue, setRightValue] = useState<number>(filterOptions.price.max)


  const selectFilterOption = (e: ChangeEvent, id: string) => {
    stopPropagation(e);

    setFilterOptions(prev => ({
      ...prev, type: prev.type.map((opt) => {
        if (opt.id === id) {
          return {
            ...opt,
            checked: !opt.checked
          }
        }
        return opt
      })
    }))
    console.log("selected");
  }

  const closeMenu = () => {
    if (isSmallDevice) {
      setShowFilterMenu(false)
    }
  }

  const stopPropagation = (e: MouseEvent | ChangeEvent) => e.stopPropagation();

  const onChange = (e: ChangeEvent<HTMLInputElement>, position: "right" | "left") => {
    if (/\D/g.test(e.target.value)) return "";

    if (position === "right") {
      setRightValue(Number(e.target.value))
    } else {
      setLeftValue(Number(e.target.value))
    }
  }

  return (
    <>
      {
        <div className={`filter-section ${isSmallDevice ? "sm" : ""} ${isSmallDevice && !showFilterMenu ? "hide" : ""}`}>
          <div className={`filters-wrapper ${isSmallDevice ? "sm" : ""}`}>
            <div className="filters-header">סינון</div>
            <div className="filters-body">
              <div className="type-filter" onClick={(e) => openCloseSection(e, "type")}>
                <div className="filter-wrapper">
                  <span>סוג</span>
                  <span>{isOpen ? <ArrowUp /> : <ArrowDown />}</span>
                </div>
                {
                  isOpen && selectedSection == "type" ?
                    <>
                      {filterOptions.type.map(({ id, name, checked }) => {
                        return <label
                          key={id}
                          className="filter-option"
                          htmlFor={id}
                          onClick={(e) => stopPropagation(e)}
                        >
                          <span >{name}</span>
                          <input type='checkbox'
                            checked={checked}
                            id={id}
                            onChange={(e) => selectFilterOption(e, id)}
                          />
                        </label>
                      }
                      )}
                    </> : null
                }
              </div>
              <div className="price-filter">
                מחיר:
                <br />
                <div className="price-input-container">
                  <input
                    type='number'
                    className="price-inputs"
                    onChange={(e) => onChange(e, "left")}
                    min={1}
                    max={rightValue}
                    maxLength={4}
                  />
                  <span>-</span>
                  <input
                    type='number'
                    className="price-inputs"
                    onChange={(e) => onChange(e, "right")}
                    min={leftValue}
                    max={9999}
                    maxLength={4}
                  />
                </div>
              </div>
            </div>
            <div className="button-wrapper">
              <button className="filter-button" onClick={closeMenu}>סינון</button>
            </div>
          </div>
        </div >
      }
    </>
  )
};

export default FilterMenu;
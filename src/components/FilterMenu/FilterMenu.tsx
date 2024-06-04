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
  const [filterOptions, setFilterOptions] = useState({
    type: [
      { id: "coal", name: "פחם", checked: false },
      { id: "filter", name: "מסנן", checked: false },
    ],
    price: {
      min: 1,
      max: 9999
    }
  })
  const [leftValue, setLeftValue] = useState(filterOptions.price.min)
  const [rightValue, setRightValue] = useState(filterOptions.price.max)


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

  const openCloseMenu = () => {
    console.log("here")
    setShowFilterMenu(false)
  }

  const stopPropagation = (e: MouseEvent | ChangeEvent) => e.stopPropagation();

  const onChange = (e: ChangeEvent<HTMLInputElement>, type: "right" | "left") => {
    if (/\D/g.test(e.target.value)) return "";

    if (type === "right") {
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
                <div style={{ display: "flex", justifyContent: "space-between", paddingLeft: 20 }}>
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
                  <input type='number' className="price-inputs left" onChange={(e) => onChange(e, "left")} min={1} max={rightValue} maxLength={4} />
                  <span>-</span>
                  <input type='number' className="price-inputs right" onChange={(e) => onChange(e, "right")} min={leftValue} max={9999} maxLength={4} />
                </div>
              </div>
            </div>
            <div className="button-wrapper">
              <button className="filter-button" onClick={openCloseMenu}>סינון</button>
            </div>
          </div>
        </div >
      }
    </>
  )
};

export default FilterMenu;
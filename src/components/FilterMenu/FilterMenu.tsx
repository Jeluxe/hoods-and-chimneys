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
    const val = Number(e.target.value.replace(/[^0-9]/g, ''));
    console.log(val)

    if (position === "right") {
      setFilterOptions(prev => ({ ...prev, price: { ...prev.price, min: val } }))
    } else {
      setFilterOptions(prev => ({ ...prev, price: { ...prev.price, max: val } }))
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
                    type='text'
                    id='left'
                    className='price-inputs'
                    value={filterOptions.price.max}
                    onChange={(e) => onChange(e, "left")}
                    maxLength={4}
                    pattern='\d*'
                  />
                  <label htmlFor='right'>עד</label>
                  <input
                    type='text'
                    id='right'
                    className='price-inputs'
                    value={filterOptions.price.min}
                    onChange={(e) => onChange(e, "right")}
                    maxLength={4}
                    pattern='\d*'
                  />
                  <label htmlFor='right'>מ</label>
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
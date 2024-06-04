import { MouseEvent, useEffect, useState } from 'react';
import { Cards, Dropdown, FilterMenu } from '../components'
import "./products.css"
import { Filter } from '../assets/icons';

const sortingTypes: { [key: string]: string } = {
  "popularity": "פופולרי",
  "lowToHigh": "נמוך לגבוה",
  "highToLow": "גבוה לנמוך"
}

const Products = () => {
  const [isSmallDevice, setIsSmallDevice] = useState<boolean>(false)
  const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false)
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const [selectedSection, setSelectedSection] = useState<string>("type")
  const [selectedSortingType, setSelectedSortingType] = useState<string>("popularity");

  useEffect(() => {
    const handleResize = () => {
      const winWidth = window.innerWidth;
      if (winWidth <= 768) {
        setIsSmallDevice(true)
      } else {
        setIsSmallDevice(false)
      }
    }
    handleResize()

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  const openCloseSection = (e: MouseEvent, type: string) => {
    e.stopPropagation();

    setIsOpen(!isOpen);
    setSelectedSection(type);
  }

  return (
    <div className="products-container">
      <FilterMenu
        isSmallDevice={isSmallDevice}
        showFilterMenu={showFilterMenu}
        setShowFilterMenu={setShowFilterMenu}
        isOpen={isOpen}
        selectedSection={selectedSection}
        openCloseSection={openCloseSection}
      />
      <div className="products-section">
        <div className="products-section-header">
          {
            isSmallDevice ?
              <div className="filter-menu-button" onClick={() => setShowFilterMenu(true)}>
                <Filter />
                סינון
              </div> :
              null
          }
          <Dropdown
            types={sortingTypes}
            selectedOption={selectedSortingType}
            setSelectedOption={setSelectedSortingType}
          />
        </div>
        <Cards />
      </div>
    </div>
  )
}

export default Products
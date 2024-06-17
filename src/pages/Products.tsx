import { MouseEvent, useEffect, useState } from 'react';
import { Cards, Dropdown, FilterMenu } from '../components'
import "./products.css"
import { Filter } from '../assets/icons';
import { FilterOptions, displayedProductProps } from '../types';

const sortingTypes: { [key: string]: string } = {
  "lowToHigh": "נמוך לגבוה",
  "highToLow": "גבוה לנמוך"
}

const Products = () => {
  const [products, setProducts] = useState<displayedProductProps[]>([]);
  const [isSmallDevice, setIsSmallDevice] = useState<boolean>(false);
  const [showFilterMenu, setShowFilterMenu] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedSection, setSelectedSection] = useState<string>("type");
  const [selectedSortingType, setSelectedSortingType] = useState<string>("lowToHigh");
  const [filterOptions, setFilterOptions] = useState<FilterOptions>({
    type: [
      { id: "coal", name: "פחם", checked: false },
      { id: "filter", name: "מסנן", checked: false },
    ],
    price: {
      min: 1,
      max: 9999
    }
  })

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(`http://localhost:8000/products`);
      return await res.json();
    }

    fetchProducts().then((data: displayedProductProps[]) => setProducts(data))

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
        filterOptions={filterOptions}
        setFilterOptions={setFilterOptions}
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
        <Cards products={products} />
      </div>
    </div>
  )
}

export default Products
import { useState } from 'react';
import { Navigate, useLoaderData } from 'react-router-dom';
import { Cards, Dropdown } from '../components';
import { displayedProductProps } from '../types/product';
import "./products.css";

const sortingTypes: { [key: string]: string } = {
  "lowToHigh": "נמוך לגבוה",
  "highToLow": "גבוה לנמוך"
}

const Products = () => {
  const products = useLoaderData() as displayedProductProps[]
  const [selectedSortingType, setSelectedSortingType] = useState<string>("lowToHigh");

  if (!products) {
    return <Navigate to={"/404"} replace />
  }

  const sortingPlan = (a: displayedProductProps, b: displayedProductProps, type: string) => {
    switch (type) {
      case "lowToHigh":
        return a.price - b.price;
      case "highToLow":
        return b.price - a.price;
      default:
        return 0;
    }
  }

  const sortedProducts = products.sort((a: displayedProductProps, b: displayedProductProps) => sortingPlan(a, b, selectedSortingType))

  return (
    <div className="products-container">
      <div className="products-section">
        <div className="products-section-header">
          <Dropdown
            types={sortingTypes}
            selectedOption={selectedSortingType}
            setSelectedOption={setSelectedSortingType}
          />
        </div>
        <Cards products={sortedProducts} />
      </div>
    </div>
  )
}

export default Products
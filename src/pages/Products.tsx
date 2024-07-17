import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Cards, Dropdown } from '../components';
import { displayedProductProps } from '../types/product';
import "./products.css";

const sortingTypes: { [key: string]: string } = {
  "lowToHigh": "נמוך לגבוה",
  "highToLow": "גבוה לנמוך"
}

const Products = () => {
  const { category } = useParams()
  const [products, setProducts] = useState<displayedProductProps[]>([]);
  const [selectedSortingType, setSelectedSortingType] = useState<string>("lowToHigh");

  useEffect(() => {
    const fetchProducts = async (category: string) => {
      const res = await fetch(`http://localhost:8000/${category}`);
      return await res.json();
    }

    if (category) {
      fetchProducts(category).then((data: displayedProductProps[]) => setProducts(data))
    }
  }, [category])

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
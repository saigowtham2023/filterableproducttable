import { useState } from "react";

function ProductRow({ product }) {
  const name = product.stocked ? product.name :
    <span style={{ color: 'red' }}>
      {product.name}
    </span>
  return (
    <tr>
      <td>{name}</td>
      <td>{product.price}</td>
    </tr>
  );

}

function ProductCategoryRow({ product }) {
  return (
    <tr>
      <th>
        {product.category}
      </th>
    </tr>

  );

}


function ProductTable({ products, searchText, ticked }) {
  const rows = []
  let lastCatogery = null
  products.forEach(product => {
    if (ticked === true && product.stocked === false) {
    }
    else {
      if (searchText !== '') {
        let sample = ''
        let count = 0;
        for (let i = 0; i < product.name.length - searchText.length + 1; i++) {
          for (let j = 0; j < searchText.length; j++) {
            sample = product.name[i + j]
            if ('product.name[i + j]'.charCodeAt(0) === 'searchText[j]'.charCodeAt(0)) {
              count++;
            }
            else {
              break
            }
          }
          if (count === searchText.length) {
            count = 1
            break
          }
          else {
            count = 0
          }
        }
        if (count) {
          if (lastCatogery !== product.category) {
            rows.push(<ProductCategoryRow product={product} />)
          }
          rows.push(<ProductRow product={product} />)
          lastCatogery = product.category
        }
      }
      else {
        if (lastCatogery !== product.category) {
          rows.push(<ProductCategoryRow product={product} />)
        }
        rows.push(<ProductRow product={product} />)
        lastCatogery = product.category
      }
    }
  })
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        {rows}
      </tbody>
    </table>
  );
}


function SearchBar({ searchText, ticked }) {
  return (
    <form>
      <input
        type="text"
        value={searchText}
        placeholder="Search..." />
      <label>
        <input
          type="checkbox"
          checked={ticked} />
        {' '}Only display avalable stock
      </label>
    </form>
  );
}


function FilterableProductTable({ products }) {
  const [searchText, setSearchText] = useState('fruit');
  const [ticked, setTicked] = useState(false);
  return (
    <>
      <SearchBar
        searchText={searchText}
        ticked={ticked}
      />
      <ProductTable
        products={products}
        searchText={searchText}
        ticked={ticked}
      />
    </>
  );
}


const PRODUCTS = [
  { category: "Fruits", price: "$1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "$1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]


export default function App() {
  return <FilterableProductTable products={PRODUCTS} />;
}
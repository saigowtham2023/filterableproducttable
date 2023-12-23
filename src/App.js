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


function ProductTable({ products }) {
  const rows = []
  let lastCatogery = null
  products.forEach(product => {
    if (lastCatogery !== product.category) {
      rows.push(<ProductCategoryRow product={product} />)
    }
    rows.push(<ProductRow product={product} />)
    lastCatogery = product.category
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


function SearchBar() {
  return (
    <form>
      <input type="text" placeholder="Search..." />
      <label>
        <input type="checkbox" />
        {' '}Only display avalable stock
      </label>
    </form>
  );
}


function FilterableProductTable({ products }) {
  return (
    <>
      <SearchBar />
      <ProductTable products={products} />
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
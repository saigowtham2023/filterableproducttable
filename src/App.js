function ProductRow({ product }) {
  return (
    <tr>
      <td>{product.name}</td>
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
      <th>
        <tr>
          <td>Name</td>
          <td>Price</td>
        </tr>
      </th>
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
      <lable>
        <input type="checkbox" />
        {' '}Only display avalable stock
      </lable>
    </form>
  );
}


function FilterableProductTable({ PRODUCTS }) {
  return (
    <>
      <SearchBar />
      <ProductTable products={PRODUCTS} />
    </>
  );
}


const PRODUCTS = [
  { category: "Fruits", price: "S1", stocked: true, name: "Apple" },
  { category: "Fruits", price: "S1", stocked: true, name: "Dragonfruit" },
  { category: "Fruits", price: "$2", stocked: false, name: "Passionfruit" },
  { category: "Vegetables", price: "$2", stocked: true, name: "Spinach" },
  { category: "Vegetables", price: "$4", stocked: false, name: "Pumpkin" },
  { category: "Vegetables", price: "$1", stocked: true, name: "Peas" }
]


export default function App() {
  return <FilterableProductTable pruduct={PRODUCTS} />;
}
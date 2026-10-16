import ProductList from "./ProductList";

function Dashboard1({ products, loading }) {
  return (
    <div>
      <h1 >Product Dashboard</h1>
     
      {loading ? <p>Loading products...</p> : <ProductList products={products} />}
  
      </div>

  );
}

export default Dashboard1
;
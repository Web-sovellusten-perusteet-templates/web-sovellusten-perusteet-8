import ProductList from './components/ProductList.jsx';
import { products } from './data/products.js';

function App() {
  return (
    <main className="app">
      <h1>Verkkokaupan tuotteet</h1>
      <p>Sama React-komponentti voidaan renderöidä monta kertaa eri datalla.</p>

      <ProductList products={products} />
    </main>
  );
}

export default App;

import ProductCard from './ProductCard.jsx';

function ProductList({ products }) {
  // TEHTÄVÄ 4:
  // Jos products-taulukko on tyhjä, näytä teksti:
  // "Ei tuotteita".

  // TEHTÄVÄ 5:
  // Renderöi kaikki products-taulukon tuotteet ProductCard-komponenteiksi.
  // Käytä Array.map()-metodia.
  // Muista antaa jokaiselle listan komponentille yksilöllinen key.

  return (
    <section>
      <h2>Tuotelista</h2>
      <div className="product-list">
        {/* Renderöi ProductCard-komponentit tähän. */}
      </div>
    </section>
  );
}

export default ProductList;

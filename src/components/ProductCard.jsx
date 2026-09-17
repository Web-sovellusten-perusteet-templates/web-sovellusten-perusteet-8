function ProductCard({ product }) {
  // TEHTÄVÄ 1:
  // Renderöi tuotteen nimi, kategoria ja hinta.
  // Käytä product-olion propertyjä propsin kautta.

  // TEHTÄVÄ 2:
  // Jos product.inStock on true, näytä teksti "Varastossa".
  // Muussa tapauksessa näytä teksti "Loppunut".

  // TEHTÄVÄ 3:
  // Jos product.discountPercent on suurempi kuin 0,
  // näytä teksti "Alennus X %", jossa X tulee datasta.

  return (
    <article className="product-card" data-testid="product-card">
      <h2>Tuotteen nimi</h2>
      <p>Kategoria</p>
      <p>Hinta</p>
    </article>
  );
}

export default ProductCard;

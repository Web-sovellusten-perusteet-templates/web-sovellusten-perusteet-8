# W4L1 – React: komponentit, propsit ja listan renderöinti

## Tavoite

Tässä harjoituksessa rakennat yksinkertaisen verkkokaupan tuotelistauksen Reactilla.

Harjoituksen jälkeen osaat:

- tehdä React-komponentin
- välittää dataa komponentille propsien avulla
- käyttää samaa komponenttia useita kertoja eri datalla
- renderöidä taulukon alkioita `map()`-metodilla
- käyttää `key`-propia listan renderöinnissä
- tehdä yksinkertaista ehdollista renderöintiä

Tässä harjoituksessa **ei käytetä statea eikä `useState`-hookia**.

---

## Sovelluksen rakenne

```text
App
└── ProductList
    ├── ProductCard
    ├── ProductCard
    └── ProductCard
```

`App` omistaa tuotedatan ja välittää sen `ProductList`-komponentille.
`ProductList` muodostaa jokaisesta tuotteesta oman `ProductCard`-komponentin.

Tämä vastaa tavallista verkkokaupan rakennetta: sama tuotekorttikomponentti voidaan näyttää monta kertaa eri tuotteen tiedoilla.

---

## Käynnistäminen

Asenna riippuvuudet:

```bash
npm install
```

Käynnistä kehityspalvelin:

```bash
npm run dev
```

Aja testit:

```bash
npm test
```

---

# Tehtävät

## 1. ProductCard ja propsit

Avaa:

```text
src/components/ProductCard.jsx
```

Komponentti saa yhden propsin:

```jsx
product
```

Näytä kortissa vähintään:

- tuotteen nimi
- kategoria
- hinta

Älä kirjoita arvoja suoraan JSX:ään, vaan hae ne `product`-oliosta.

Esimerkiksi tuotteen nimi löytyy:

```js
product.name
```

---

## 2. Saatavuuden ehdollinen renderöinti

Jos:

```js
product.inStock === true
```

näytä:

```text
Varastossa
```

Muussa tapauksessa näytä:

```text
Loppunut
```

Voit toteuttaa tämän esimerkiksi ternary-operaattorilla:

```jsx
condition ? valueIfTrue : valueIfFalse
```

---

## 3. Alennuksen ehdollinen renderöinti

Jos tuotteen `discountPercent` on suurempi kuin 0, näytä:

```text
Alennus 15 %
```

Prosenttiluvun pitää tulla tuotteen datasta.

Jos alennus on 0, alennustekstiä ei saa näyttää.

---

## 4. ProductList ja map()

Avaa:

```text
src/components/ProductList.jsx
```

Komponentti saa propsina `products`-taulukon.

Renderöi jokainen taulukon alkio `ProductCard`-komponentiksi käyttäen `map()`-metodia.

Perusidea:

```jsx
products.map((product) => (
  // palauta komponentti
))
```

`map()` käy taulukon jokaisen alkion läpi ja muodostaa uuden taulukon palautetuista arvoista.

Dokumentaatio:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

---

## 5. key-prop

Kun React renderöi listan komponentteja, jokaisella komponentilla pitää olla yksilöllinen `key`.

Käytä tuotteen `id`-arvoa:

```jsx
key={product.id}
```

`key` auttaa Reactia tunnistamaan, mikä listan alkio on mikäkin renderöintien välillä.

Dokumentaatio:
https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key

---

## 6. Tyhjä lista

Jos `products`-taulukossa ei ole yhtään tuotetta, näytä:

```text
Ei tuotteita
```

Tällöin tuotekortteja ei tarvitse renderöidä.

---

# Valmis sovellus

Kun tehtävä on valmis:

- sivulla näkyy kolme tuotetta
- jokainen tuote näkyy omassa `ProductCard`-komponentissaan
- kortin sisältö tulee propsien kautta
- saatavuus näytetään tuotteen datan perusteella
- alennus näytetään vain tarvittaessa
- lista muodostetaan `map()`-metodilla
- listan komponenteilla on `key`
- tyhjälle listalle on oma näkymä

Aja lopuksi:

```bash
npm test
```

Kaikkien testien tulee mennä läpi.

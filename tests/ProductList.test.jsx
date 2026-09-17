import { render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ProductList from '../src/components/ProductList.jsx';

const products = [
  { id: 1, name: 'Tuote A', price: 10, category: 'A', inStock: true, discountPercent: 0 },
  { id: 2, name: 'Tuote B', price: 20, category: 'B', inStock: false, discountPercent: 0 },
  { id: 3, name: 'Tuote C', price: 30, category: 'C', inStock: true, discountPercent: 5 }
];

describe('ProductList', () => {
  it('renderöi yhden ProductCard-komponentin jokaista tuotetta kohti', () => {
    render(<ProductList products={products} />);
    expect(screen.getAllByTestId('product-card')).toHaveLength(3);
  });

  it('näyttää kaikkien tuotteiden nimet', () => {
    render(<ProductList products={products} />);
    expect(screen.getByText('Tuote A')).toBeInTheDocument();
    expect(screen.getByText('Tuote B')).toBeInTheDocument();
    expect(screen.getByText('Tuote C')).toBeInTheDocument();
  });

  it('näyttää tyhjälle listalle tekstin Ei tuotteita', () => {
    render(<ProductList products={[]} />);
    expect(screen.getByText('Ei tuotteita')).toBeInTheDocument();
  });

  it('ei aiheuta Reactin key-varoitusta listaa renderöitäessä', () => {
    const errorSpy = vi.spyOn(console, 'error').mockImplementation(() => {});
    render(<ProductList products={products} />);

    const keyWarnings = errorSpy.mock.calls
      .flat()
      .filter((message) => typeof message === 'string' && message.includes('unique "key" prop'));

    expect(keyWarnings).toHaveLength(0);
    errorSpy.mockRestore();
  });
});

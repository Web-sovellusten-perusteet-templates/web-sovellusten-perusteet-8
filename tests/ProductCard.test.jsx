import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import ProductCard from '../src/components/ProductCard.jsx';

const product = {
  id: 10,
  name: 'Testikamera',
  price: 499,
  category: 'Kamerat',
  inStock: true,
  discountPercent: 15
};

describe('ProductCard', () => {
  it('näyttää tuotteen nimen propsista', () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText('Testikamera')).toBeInTheDocument();
  });

  it('näyttää tuotteen kategorian', () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText('Kamerat')).toBeInTheDocument();
  });

  it('näyttää tuotteen hinnan', () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText(/499/)).toBeInTheDocument();
  });

  it('näyttää Varastossa kun tuotetta on varastossa', () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText('Varastossa')).toBeInTheDocument();
  });

  it('näyttää Loppunut kun tuotetta ei ole varastossa', () => {
    render(<ProductCard product={{ ...product, inStock: false }} />);
    expect(screen.getByText('Loppunut')).toBeInTheDocument();
  });

  it('näyttää alennuksen kun discountPercent on suurempi kuin 0', () => {
    render(<ProductCard product={product} />);
    expect(screen.getByText('Alennus 15 %')).toBeInTheDocument();
  });

  it('ei näytä alennustekstiä kun alennusta ei ole', () => {
    render(<ProductCard product={{ ...product, discountPercent: 0 }} />);
    expect(screen.queryByText(/Alennus/)).not.toBeInTheDocument();
  });
});

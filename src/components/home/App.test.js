import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders BOM API testing header', () => {
    render(<App />);
    const linkElement = screen.getByText(/bom api testing website/i);
    expect(linkElement).toBeInTheDocument();
});

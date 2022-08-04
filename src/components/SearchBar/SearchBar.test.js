import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SearchBar from './SearchBar'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'
import { screen } from '@testing-library/react'

describe('SearchBar component', () => {
    it('should render the component onto the screen', () => {
        render(<BrowserRouter><SearchBar /></BrowserRouter>);
        expect(screen.getByTestId('search-input')).toBeInTheDocument();
        expect(screen.getByTestId('search-button')).toBeInTheDocument();
    });
 });

describe('Input value', () => {
    it('updates input value on change', () => {
      const handleSearch = jest.fn((value) => {})
      const { queryByPlaceholderText } = render(<BrowserRouter><SearchBar setSearch={handleSearch}/></BrowserRouter>)
      const searchInput = queryByPlaceholderText('Nunca dejes de buscar')
      fireEvent.change(searchInput, { target: { value: 'test' } })
      expect(searchInput.value).toBe('test')
    })
  })

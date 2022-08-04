import React from 'react'
import { render, fireEvent } from '@testing-library/react'
import SearchBar from './SearchBar'
import '@testing-library/jest-dom/extend-expect'
import { BrowserRouter } from 'react-router-dom'
import { screen } from '@testing-library/react'

// const mockedUsedNavigate = jest.fn();

// jest.mock('react-router-dom', () => ({
//    ...jest.requireActual('react-router-dom'),
//   useNavigate: () => mockedUsedNavigate,
// }));

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

  describe('Make search', () => {
    // it('handleSearch function should not be callen when making an empty search', () => {
    //     // render(<BrowserRouter><SearchBar /></BrowserRouter>);

    //     const wrapper = shallow((<SearchBar />));

    //     wrapper.find('search-button').simulate('click');

    //     // const input = screen.getByTestId('search-input');
    //     // const button = screen.getByTestId('search-button');
    //     // var spy = jest.spyOn(SearchBar.prototype, 'handleSearch');

    //     // console.log(button)

    //     // fireEvent.change(input, {target: {value: ''}});
    //     // fireEvent.click(button);

    //     // expect(spy).toHaveBeenCalledTimes(1);
    // });

    // it('searches pushes search route with search query', () => {
    //     const container = mount(
    //         <SearchBar router={{ query: {}, route: '/search' }} />
    //     );

    //     act(() => {
    //         container.find('Form').props().onChange({
    //             values: { search: 'test val' }
    //         });
    //     });

    //     expect(Router.router.push).toHaveBeenCalledTimes(1);
    //     expect(Router.router.push).toHaveBeenCalledWith('/search?q=test val');
    // });

  })
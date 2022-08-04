import React from 'react'
import { render } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Product from './Product'
import '@testing-library/jest-dom/extend-expect'
import { screen } from '@testing-library/react'
 import { ApiFetch } from '../api/api';

 jest.mock('../api/api');

describe('Products component', () => {
    it('should render the component onto the screen', () => {
        render(<Product />);
        expect(screen.getByTestId('item-details-container')).toBeInTheDocument();
    });
 });


 describe('Component should call ApiFetch functions', () => {

    it('Component call ApiFetch functions', async () =>{
        ApiFetch.getItemDescription.mockResolvedValueOnce('item description mock')
        ApiFetch.getItemDetails.mockResolvedValueOnce( {
            title: 'Ipad 32 GB',
            pictures: [''],
            price: '1999'
        })

        await act( async () => render(<Product/>));

        expect(ApiFetch.getItemDescription).toHaveBeenCalled();
        expect(ApiFetch.getItemDescription).toHaveBeenCalled();
    });  


    it('API returns item with data complete', async () =>{
        ApiFetch.getItemDescription.mockResolvedValueOnce('item description mock')
        ApiFetch.getItemDetails.mockResolvedValueOnce( {
            sold_quantity: 50,
            title: 'Ipad 32 GB',
            pictures: [''],
            price: '1999'
        })

        await act( async () => render(<Product/>));

        const quantitySpan = await screen.findByTestId('product-data-quantity')
        expect(quantitySpan).toHaveTextContent('Nuevo - 50 vendidos')

        const titleSpan = await screen.findByTestId('product-data-title')
        expect(titleSpan).toHaveTextContent('Ipad 32 GB')

        const priceSpan = await screen.findByTestId('product-data-price')
        expect(priceSpan).toHaveTextContent('$1,999')

        const descriptionSpan = await screen.findByTestId('product-data-decription')
        expect(descriptionSpan).toHaveTextContent('item description mock')
    });  

    it('API returns error', async () =>{
        ApiFetch.getItemDescription.mockResolvedValueOnce('item description mock')
        ApiFetch.getItemDetails.mockImplementation(() => {
            throw new Error();
          });
        console.error = jest.fn();


        await act( async () => render(<Product/>));

        expect(console.error.mock.calls.length).toBe(1);

    }); 
});
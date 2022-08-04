import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import NumberFormat from 'react-number-format';
import { ApiFetch } from '../api/api';
import { utils } from '../components/utils/utils.js'

function Product() {
    const params = useParams();    
    const [product, setProduct] = useState()
    const [description, setDescription] = useState()


    const loadDescription = async(id) => {
        try{
            const res = await ApiFetch.getItemDescription(id);
            if (res)
                setDescription(res)
        }
        catch{
            console.warn('Error on API')
            utils.redirectoToErrorPage();
        }
    }

    const loadDetails = async(id) => {
        try{
            const res = await ApiFetch.getItemDetails(id);
            if (res)
                setProduct(res)
        }
        catch{
            console.warn('Error on API')
            utils.redirectoToErrorPage();
        }
    }

    useEffect(() => {
        loadDetails(params.itemId)
        loadDescription(params.itemId)
    },[])

    return (
        <div className='details' data-testid="item-details-container">
            {product && 
            <>
                <div className='details__top' data-testid="product-data">
                    <div className='details__top--image'>
                        {<img src={product?.pictures[0].url} alt="cover"/>}
                    </div>
                    <div className='details__top--details'>
                        <div className='item-sold' data-testid="product-data-quantity">Nuevo - {product.sold_quantity} vendidos</div>
                        <div className='item-title' data-testid="product-data-title">{product.title}</div>
                        <div className='item-price' data-testid="product-data-price">
                            <NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                        </div>
                        <button className='item-button'>Comprar</button>
                    </div>
                </div>
                <div className='details__bottom'>
                    <div className='details__bottom--title'>Descripción del producto</div>
                    <div className='details__bottom--content' data-testid="product-data-decription">{description && description}</div>
                </div>
            </>
        }
        </div>
    );
}

export default Product;

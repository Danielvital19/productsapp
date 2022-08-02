import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import axios from 'axios';

function Product() {
    const params = useParams();    
    const [product, setProduct] = useState()
    const [description, setDescription] = useState()


    console.log(params)

    useEffect(()=>{
        axios.get(`https://api.mercadolibre.com/items/${params.itemId}`)
        .then((response) => {
            setProduct({...response.data})
        });

        axios.get(`https://api.mercadolibre.com/items/${params.itemId}/description`)
        .then((response) => {
            setDescription(response.data.plain_text)
        });
    },[])

    console.log(description)

    return (
        <div className='details'>
            {product && 
            <>
                <div className='details__top'>
                    <div className='details__top--image'>
                        <img src={product?.pictures[0].url}/>
                    </div>
                    <div className='details__top--details'>
                        <div className='item-sold'>Nuevo - {product.sold_quantity} vendidos</div>
                        <div className='item-title'>{product.title}</div>
                        <div className='item-price'>${product.price}</div>
                        <button className='item-button'>Comprar</button>
                    </div>
                </div>
                <div className='details__bottom'>
                    <div className='details__bottom--title'>Descripción del producto</div>
                    <div className='details__bottom--content'>{description && description}</div>
                </div>
            </>
        }
        </div>
    );
}

export default Product;

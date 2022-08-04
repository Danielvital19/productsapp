import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import {useSearchParams} from 'react-router-dom';
import { ApiFetch } from '../../api/api';
import { utils } from '../../components/utils/utils.js'

function Search() {
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState([]);

    const makeSearch = async() => {
        try{
            const response = await ApiFetch.getSearchByQuery(searchParams.get('search'));
            if (response)
                setProducts([...response])
        }
        catch{
            console.warn('Error on API')
            utils.redirectoToErrorPage();
        }
    }

    useEffect(() =>{
        makeSearch();
    },[searchParams])

    return (
        <>
            {products?.length > 0 
                ?   products.map((product, index) => 
                        <div key={index} className="results__container--product">
                            <div className="product-image">
                                <Link to={`/items/${product.id}`}>
                                    <div>
                                        <img className="image" src={product.thumbnail} alt="" />
                                    </div>
                                </Link>
                            </div>
                            <div className="product-description">
                                <div className="product-description__price">
                                    <NumberFormat value={product.price} displayType={'text'} thousandSeparator={true} prefix={'$'} />
                                    {product.shipping?.free_shipping && 
                                    <img src={require('../../assets/ic_shipping@2x.png')} alt="free shipping" title="Free Shipping" />
                                    }
                                </div>
                                <div className="product-description__title">{product.title}</div>
                            </div>
                            <div className="product-address">{product.address?.city_name}</div>
                        </div>
                    )
                : <div>Sin resultados</div>          
            }
        </>

    );
}

export default Search;


import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';
import NumberFormat from 'react-number-format';
import {useSearchParams} from 'react-router-dom';


function Search({text, change}) {
    const [searchParams] = useSearchParams();
    const [products, setProducts] = useState([]);

    const makeSearch = () => {
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=:${searchParams.get('search')}`)
        .then((response) => {
          setProducts([...response.data.results])
        });
    }

    useEffect(() =>{
        makeSearch();
    },[searchParams])

    useEffect(() => {
        makeSearch();
    }, [text])

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
                                    <img src={require('../assets/ic_shipping@2x.png')} alt="free shipping" title="Free Shipping" />
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


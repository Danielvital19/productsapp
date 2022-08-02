import { useEffect, useState } from "react";
import axios from "axios";
import { change } from "../store/search/action";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const mapStateToProps = (state) => {
    return {
        text: state.searchReducer.text
    }
}


function Search({text, change}) {
    const [products, setProducts] = useState([]);
    const makeSearch = () => {
        axios.get(`https://api.mercadolibre.com/sites/MLA/search?q=:${text}`)
        .then((response) => {
          console.log(response.data.results);
          setProducts([...response.data.results])
        });
    }

    useEffect(() => {
        makeSearch();
    }, [text])

    return (
        <>
            {/* <div className="results">
                <div className="results__route">{'Electrónica, audio y video > iPod > Reproductores > iPod touch > 32GB'} </div>
                <div className="results__container"> */}
                    {products?.length > 0 
                        ?   products.map((product) => 
                                <div className="results__container--product">
                                    <div className="product-image">
                                        <Link to={`/items/${product.id}`}>
                                            <div>
                                                <img className="image" src={product.thumbnail} alt="" />
                                            </div>
                                        </Link>
                                    </div>
                                    <div className="product-description">
                                        <div className="product-description__price">
                                            ${product.price}
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
                {/* </div>
            </div> */}
        </>

    );
}

export default connect(mapStateToProps,{change})(Search);;


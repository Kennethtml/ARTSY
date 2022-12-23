import React from "react";
import "./productpages.scss"
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getMarket } from "../features/Market/market";
import eth from '../assets/eth.svg'
import more from '../assets/more.svg'
import previous from "../assets/previous.svg";
import next from "../assets/nexts.svg";
import love from "../assets/love.svg";

function ProductPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMarket());
  }, []);

  const navigate = useParams();
  const id = navigate.id;

  const { marketData } = useSelector((store) => store.market);

  console.log(marketData);
  const currentProduct = marketData?.products?.filter(
    (product) => product.id === id
  );

  return (
    <section className="wrapper product-page">
      {currentProduct.map((product) => {
        return (
          <div className="product">
            <div className="product__image">
              <img src={product.url} alt={product.name} />
            </div>
            <div className="product__description">
              <div className="product__description-title">
                <h2>{product.name}</h2>
                <p className="price">
                  {" "}
                  <span>
                    <img src={eth} alt={eth} />
                  </span>
                  {product.price.eth}
                </p>
              </div>
              <div className="product__description-info">
                <p className="creator">
                  Creator: <span>{product.creator}</span>
                </p>
                <p className="origin">{product.origin}</p>
                <p className="views">
                  {" "}
                  Total views: <span>{product.views}</span>
                </p>
                <div className="number">
                  {" "}
                  <button> - </button> <span> 1</span>
                  <button>+</button>
                </div>
                <div className="actions">
                  <button> Add to cart</button>
                  <button className="like"> <img src={love} alt={love} /></button>
                </div>
              </div>
              <div className="sections">
                <p>Description</p>
                <button>
                  <img src={more} alt={more} />
                </button>
              </div>
              <div className="sections">
                <p>Listings</p>
                <button>
                  <img src={more} alt={more} />
                </button>
              </div>
              <div className="sections">
                <p>Status</p>
                <button>
                  <img src={more} alt={more} />
                </button>
              </div>
            </div>
          </div>
        );
      })}
      <div className="more__products">
        <div className="explore">
          <p>Explore more from this collection</p>
          <div className="explore__buttons">
            <button><img src={previous} alt={previous} /></button>
            <button><img src={next} alt={next} /></button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProductPage;

import React, { useEffect, useState } from "react";
import ProductCard from "../../products/product.card";
import Spinner from "../commons/spinner/spinner";
import NoResults from "./noResults";

let interval = undefined;

const HomePage = () => {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState(undefined);
  const [loading, setLoading] = useState(false);

  const getProducts = () => {
    const randomNum = Math.floor(Math.random() * (10 - 0) + 0);
    if (interval) clearInterval(interval);
    if(!keyword) return

    interval = setTimeout(() => {
      setLoading(true);
      setTimeout(() => {
        setResults(Array(randomNum || 0).fill("x"));
        setLoading(false);
      },1500);
      clearInterval(interval);
    }, 1000);
  };

  useEffect(() => {
    getProducts();
  }, [keyword]);

  return (
    <div>
      <h1>Bienvenidos a Akwaaba</h1>
      <section
        style={{
          backgroundImage: `url(https://thumbs.dreamstime.com/b/healthy-breakfast-food-banner-side-border-table-scene-fruit-yogurt-smoothie-bowl-nutritious-toasts-cereal-egg-skillet-top-170652866.jpg)`,
          backgroundSize: "cover",
          height: 500,
        }}
        className='w-100 d-flex flex-column align-items-end justify-content-center p-5'
      >
        <div className='div'>
          <h5 className='text-white display-4'>Enjoy</h5>
          <h5 className='text-white display-4'>our</h5>
          <h5 className='text-white display-4'>Daily Menu</h5>
        </div>
      </section>
      <section className='pt-5 d-flex flex-column align-items-center w-100'>
        <h5 className='text-center'>Buscar Comida</h5>
        <div className='form-group my-4 col-12 col-md-4'>
          <label>Comida o categoria</label>
          <input
            type='text'
            value={keyword}
            onChange={e => setKeyword(e.target.value)}
            className='form-control'
          />{" "}
        </div>

        {!!loading ? (
          <Spinner />
        ) : !results ? (
          <div className='p-4'>
            <h2>Busca las comidas que mas te gustan</h2>
          </div>
        ) : !!results.length ? (
          <div className='d-flex w-100 flex-wrap'>
            {results.map((prod, idx) => (
              <ProductCard prod={prod} idx={idx} />
            ))}
          </div>
        ) : (
          <NoResults />
        )}
      </section>
    </div>
  );
};

export default HomePage;

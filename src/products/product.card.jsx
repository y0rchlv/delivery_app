import React, { useState } from "react";
import { FaMinusSquare, FaPlusSquare } from "react-icons/fa";

const ProductCard = ({ idx }) => {
  const [qty, setQty] = useState(1);

  return (
    <div className='p-1  col-12 col-sm-2 col-md-3'>
      <div style={{ backgroundColor: "#cecece" }} class='card'>
        <img
          style={{ width: "100%", height: 150 }}
          src={"https://picsum.photos/id/" + idx}
          alt='Food Sample'
        />
        <div class='card-body bg-white'>
          <h5 class='card-title'>Nombre de la comida</h5>
          <p class='card-text'>
            Some quick example text to build on the card title and make up the bulk of the card's
            content.
          </p>

          <div className='d-flex justify-content-between'>
            <div className='d-flex align-items-center'>
              <h2
                style={{ minWidth: 40, backgroundColor: "#dedede" }}
                className='me-1 border text-center rounded'
              >
                {qty}
              </h2>
              <div className='d-flex flex-column'>
                <FaPlusSquare
                  className='text-info touchable'
                  size={20}
                  onClick={() => setQty(qty + 1)}
                />
                <FaMinusSquare
                  className='text-secondary touchable'
                  size={20}
                  onClick={() => {
                    if (qty > 1) setQty(qty - 1);
                  }}
                />
              </div>
            </div>

            <button class='btn btn-danger'>Agregar Pedido</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

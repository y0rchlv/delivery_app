import React from "react";
import { TbFidgetSpinner } from "react-icons/tb";

const Spinner = () => {
  return (
    <div className='d-flex flex-column align-items-center py-5'>
      <TbFidgetSpinner size={50} color='orange' className='spin' />
      <h2>Buscando productos...</h2>
    </div>
  );
};

export default Spinner;

import React from "react";
import { IoFastFood } from "react-icons/io5";

const NoResults = () => {
  return (
    <div className='d-flex flex-column align-items-center py-5'>
      <IoFastFood size={50} color='orange' className='mb-3' />
      <h2>No hay Resultados de comidas</h2>
    </div>
  );
};

export default NoResults;

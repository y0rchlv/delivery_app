import React from "react";
import { IoFastFoodSharp } from "react-icons/io5";
import { FaCartPlus, FaSearch, FaSignOutAlt } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Navbar = ({ onChangeKeyWord }) => {
  return (
    <nav class='navbar navbar-expand-lg bg-danger'>
      <div class='container-fluid'>
        <a class='navbar-brand' href='#'>
          <IoFastFoodSharp size={30} color='white' />
        </a>
        <button
          class='navbar-toggler'
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNavAltMarkup'
          aria-controls='navbarNavAltMarkup'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon'></span>
        </button>
        <div class='collapse navbar-collapse' id='navbarNavAltMarkup'>
          <div class='navbar-nav align-items-center'>
            <NavLink className={"mx-2"} to='/home'>Home</NavLink>
            <NavLink className={"mx-2"} to='/productos'>Products</NavLink>
            <NavLink className={"mx-2"} to='/admin'>Admin</NavLink>
          </div>
          <div className='flex-1' />
          <h6 className='font-weigth-bold text-white'>User name</h6>
          <FaCartPlus className='mx-3' size={20} color={"#eeeeee"} />
          <FaSignOutAlt className='mx-3' />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

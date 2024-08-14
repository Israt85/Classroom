import React, { useContext, useState } from 'react';
import { AuthContext } from '../../Provider/AuthProvider';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const {user,userLogOut}= useContext(AuthContext)
  const [isDropdownVisible, setDropdownVisibility] = useState(false);
  const handelLogOut = ()=>{
    userLogOut()
    .then(result =>{
        console.log(result.user);
    })
    .catch(err=>{
        console.log(err);
    })
}

    return (
        <div className="navbar bg-sky-300">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl">Classroom</a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    </ul>
  </div>
  {
    user? <div className='ml-32'> <details className="dropdown">
    <summary><img className='w-12 h-12 rounded-full' src={user?.photoURL} alt="" /> </summary>
    <ul className="menu dropdown-content bg-base-100 rounded-box z-[1] w-40 h-auto p-2 my-2 shadow">
      <Link to='/dashboard'><button className='p-4'>Dashboard</button></Link>
     <button onClick={handelLogOut}>Logout</button>
    </ul>
  </details></div>: <div className='mx-40'><Link to='login'>Login</Link></div>
  }
</div>
    );
};

export default Navbar;
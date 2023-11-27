import React, { useContext } from 'react';
import { FaLaptop, FaMobileAlt, FaTabletAlt } from 'react-icons/fa'
import DataContext from '../Context/dataContext';
// function Header({title,width}) {
function Header({ title }) {
  const { width } = useContext(DataContext);

  return (
    <div>
      <h2>{title} </h2>
      {width < 768 ? <FaMobileAlt /> : width < 992 ? <FaTabletAlt /> : <FaLaptop />}

    </div>
  )
}

export default Header
import React from 'react';
import { Link } from 'react-router-dom';


const MenuTab = ({ handleTabClick, category }) => (
  <li id={category} onClick={handleTabClick} >
    <a>
      <span className="icon is-small"><i className="fas fa-image" aria-hidden="true"></i></span>
      <span>{category}</span>
    </a>
  </li>
);

const MenuTabs = ({ categories, handleTabClick }) => (
  <div className="tabs is-boxed">
    <ul>
      {
        categories
          .map((category) => <MenuTab
            key={category}
            category={category}
            handleTabClick={handleTabClick}
          />)
      }
    </ul>
  </div>
)

const MenuLists = ({ items }) => (
  <div>hola</div>
);

const NewOrder = ({ categories, handleTabClick, currentOrder }) => (
  <div className='columns'>
    <div className='column'>
      <MenuTabs categories={categories} handleTabClick={handleTabClick} />
      <MenuLists />
    </div>
    <div className='column'>
      <p>Hola, soy una orden</p>
      <Link to='/'>Atrás</Link>
    </div>
  </div>
);

export default NewOrder;

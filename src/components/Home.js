import React from 'react';
import MainButton from './MainButton';

const Home = ({ dataLoaded }) => (
  <section className='hero is-fullheight is-warning'>
    <div className='hero-body'>
      <div className='container'>
        <div className='buttons is-centered'>
          <MainButton dataLoaded={dataLoaded} path='/new-order' value='Nuevo pedido' />
          <MainButton dataLoaded={dataLoaded} path='/order-list' value='Ver pedidos' />
        </div>
      </div>
    </div>
  </section>
)

export default Home;
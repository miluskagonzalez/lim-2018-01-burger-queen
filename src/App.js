import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Database } from './components/Firebase';
import Home from './components/Home';
import NewOrder from './components/NewOrder';
import OrderList from './components/OrderList'

class App extends Component {

  state = {
    menu: {},
    currentCategory: [],
    menuLoaded: false,
    currentOrder: [],
    orderList: [],
  }

  componentDidMount() {
    Database.collection('menu').get()
      .then(snap => snap.forEach(doc => this.setState({
        menu: { ...this.state.menu, [doc.id]: doc.data().items }
      })))
      .then(() => this.setState({
        menuLoaded: true
      }))
  }

  handleTabClick = ({ currentTarget: { id } }) => {
    this.setState({
      currentCategory: {
        [id]: this.state.menu[id]
      }
    })
  };

  render() {
    const {
      state: { menu, currentCategory, currentOrder, orderList, menuLoaded },
      handleTabClick
    } = this;

    return (
      <Router>
        <Switch>
          <Route
            path='/'
            exact
            render={() => <Home dataLoaded={menuLoaded} />}
          />
          <Route
            path='/new-order'
            exact
            render={
              () => <NewOrder
                categories={Object.keys(menu)}
                currentItems={menu[currentCategory]}
                handleTabClick={handleTabClick}
                currentOrder={currentOrder}
              />
            }
          />
          <Route
            path='/order-list'
            exact
            render={() => <OrderList orders={orderList} />}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;

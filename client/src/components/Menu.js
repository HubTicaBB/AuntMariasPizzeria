import React, { Component } from 'react';

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = { pizzas: [] }
  };

  componentDidMount() {
    this.getPizzas();
  }

  getPizzas = async () => {
    await fetch('https://r3emkux2e5.execute-api.us-east-1.amazonaws.com/latest/pizzas')
      .then(response => response.json())
      .then(data => {
        this.setState({ pizzas: data })
      })
      .catch(err => console.error(err));
  }

  renderMenu() {
    return (
      <table className="table table-hover mt-5">
        <thead className="bg-light">
          <tr>
            <th scope="col">Number</th>
            <th scope="col">Name</th>
            <th scope="col">Ingredients</th>
          </tr>
        </thead>
        <tbody>
          { this.state.pizzas.map(pizza => 
            <tr key={ pizza.id }>
              <th scope="row">{ pizza.id }</th>
              <td className="text-dark">{ pizza.name }</td>
              <td>{ this.renderIngredients(pizza.ingredients) }</td>
            </tr>
          )}
        </tbody>
      </table>
    )
  }

  renderIngredients(ingredientsList) {
    const ingredients = Object.keys(ingredientsList)
      .map(objKey => 
        <dd key={ objKey } className="text-secondary">{ ingredientsList[objKey]} </dd>
      );

    return <dl>{ingredients}</dl>
  }

  render() {
    const pizzas = this.renderMenu();
    
    return <div>{ pizzas }</div>;
  }
};

export default Menu;

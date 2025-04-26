import React, { useState } from 'react';

function App() {
  const [size, setSize] = useState('medium');
  const [toppings, setToppings] = useState([]);

  const sizePrices = {
    small: 5,
    medium: 8,
    large: 12,
  };

  const toppingOptions = [
    { name: 'Cheese', price: 2 },
    { name: 'Mushrooms', price: 1.5 },
    { name: 'Paneer', price: 3 },
  ];

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleToppingChange = (event) => {
    const { value, checked } = event.target;
    if (checked) {
      setToppings([...toppings, value]);
    } else {
      setToppings(toppings.filter((topping) => topping !== value));
    }
  };

  const calculateTotal = () => {
    let total = sizePrices[size];
    toppings.forEach((topping) => {
      const toppingPrice = toppingOptions.find((item) => item.name === topping)?.price || 0;
      total += toppingPrice;
    });
    return total.toFixed(2);
  };

  return (
    <div style={{ backgroundColor: 'yellow', minHeight: '100vh', width:'400px',padding: '20px', color: 'red' }}>
      <h1>Pizza Billing App</h1>

      <h2>Select Size:</h2>
      <div>
        {Object.entries(sizePrices).map(([key, price]) => (
          <div key={key}>
            <input
              type="radio"
              name="size"
              value={key}
              checked={size === key}
              onChange={handleSizeChange}
            />
            {key} (${price})
          </div>
        ))}
      </div>

      <h2>Select Toppings:</h2>
      <div>
        {toppingOptions.map((topping) => (
          <div key={topping.name}>
            <input
              type="checkbox"
              value={topping.name}
              checked={toppings.includes(topping.name)}
              onChange={handleToppingChange}
            />
            {topping.name} (${topping.price})
          </div>
        ))}
      </div>

      <h2>Total Price: ${calculateTotal()}</h2>
    </div>
  );
}

export default App;
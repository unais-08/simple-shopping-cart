---

# simple-shopping-cart

A lightweight cart functionality built with React, inspired by John Smilga's React Project Course. This project demonstrates how to manage cart actions such as adding, removing, and updating items using a reducer.

## Features

- Clear cart functionality.
- Add and remove items from the cart.
- Update item quantities with increase and decrease actions.
- Calculate total price and item count.
- Handle loading and dynamic item display seamlessly.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Unais01/simple-shopping-cart.git
   ```
2. Navigate to the project directory:
   ```bash
   cd simple-shopping-cart
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage

1. Import the `reducer` function in your React project.
2. Set up the `useReducer` hook:
   ```javascript
   const [state, dispatch] = useReducer(reducer, initialState);
   ```
3. Dispatch actions like `CLEAR_CART`, `REMOVE`, `INCREASE`, etc., to manage your cart state.

## Example

```javascript
dispatch({ type: "ADD_ITEM", payload: item });
dispatch({ type: "REMOVE", payload: itemId });
```

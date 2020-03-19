# 20-03-19 React Conditional Rendering CW

#### Set Up
- Create a react app called buy-sell-app
- Create a class based component called `AppContainer` that displays an h1 tag with the text `Buy Sell App`
- Reference the `AppContainer` in the `App` component

- Create a class based component called `ListOfItems` that will iterate through an array of itemsForSell objects passed down from the parent component and iterate through an array of itemOffer objects passed down from the parent component
- Reference the the `ListOfItems` component in the `AppContainer` component

#### Forms
- Create a class based component called `Sell` that displays a form with fields product title, product price, and product condition
- When the form is submitted save the input values and pass them up to the parent component and clear the fields (these values should populate an array passed to the `ListOfItems` component)
- Reference the `Sell` component in the `AppContainer` component

- Create a class based component called `Buy` that displays a form with fields product title, product offer price
- When the form is submitted save the input values and pass them up to the parent component and clear the fields (these values should populate an array passed to the `ListOfItems` component)
- Reference the `Buy` component in the `AppContainer` component

#### Conditional Rendering
- Add a `Buying` button and a `Selling` button to the `AppContainer` component
- When the `Buying` button is clicked display the `Buy` component
- When the `Selling` button is clicked display the `Sell` component
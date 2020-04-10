import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render, fireEvent } from "@testing-library/react";

test('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
// test('renders button', async () => {
//   const { getByText, getByPlaceholderText, findByText } = render(<App />)
//   const button = getByTestid('dark-mode')
//   const input = getByPlaceholderText('Search')
//   act(() => {
//     fireEvent.change(input, {target: {value: 'mic'}})
//   })
//   act(() => {
//      fireEvent.click(button)
//   })
//   const card = await findByText('Michael Lawson')
//   expect(card).toBeInTheDocument()
// })

test('if nav renders', ()=>{
  const {getByText} = render(<App/>)
  // const navText = getByText('Filler nav for Darkmode')
  // expect(navText).toBeInDocument()
  getByText(/Filler nav for Darkmode/i);

})

test('checks if data was rendered', async ()=>{
  //arrang
const { findByTestId } = render(<App />)
const dataid = await findByTestId('0')
const dataName = await findByTestId("Alex Morgan")

//act

//assert
expect(dataid).toBeInDocument
expect(dataName).toBeInDocument
})

test('if data is different', async ()=>{
  const { findByTestId } = render(<App />)
const dataid = await findByTestId('1')
const dataName = await findByTestId("Megan Rapinoe")

//act

//assert
expect(dataid).toBeInDocument
expect(dataName).toBeInDocument
})

test('if we make it to the end of our data', async ()=>{
  const { findByTestId } = render(<App />)
  const dataid = await findByTestId('100')
  const dataName = await findByTestId("Tierna Davidson")
  
  //act
  
  //assert
  expect(dataid).toBeInDocument
  expect(dataName).toBeInDocument
})

// test("if darkmode works", ()=>{
  //arrange
  // const button = getByTestid('dark-mode')
  //act
  //assert

// })//dark-mode is the test id for the toggle
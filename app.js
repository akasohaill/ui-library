// app.js

// Import the updateState and createView functions from your UI library
import { createView, updateState } from 'ui-library'

// Define the initial state
const initialState = { count: 0 }

// Define the template function
const template = (state) => {
  return (
    h('div', [
      h('h1', state.count),
      h('button', { on: { click: () => updateState({ count: state.count + 1 }) } }, 'Add')
    ])
  )
}

// Call the createView function with the template and initial state
createView(template, initialState)

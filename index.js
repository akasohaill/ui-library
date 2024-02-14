// Import h and init from snabbdom
import { h, init } from 'snabbdom'



const patch = init([])

// Define the updateState function
export const updateState = (newState) => {
  // Logic to update the state
  console.log('State updated:', newState)
}


// Example template function with styles
const template = (state) => {
  return h('div', {
    style: {
      backgroundColor: 'lightblue',
      padding: '20px',
    }
  }, [
    h('input', {
      props: { value: state.inputValue },
      on: { input: (event) => updateState({ inputValue: event.target.value }) },
      style: {
        width: '100%',
        padding: '10px',
        marginBottom: '10px',
        fontSize: '16px',
      }
    }),
    h('p', {
      style: {
        fontWeight: 'bold',
      }
    }, `Input value: ${state.inputValue}`)
  ])
}

// Example initial state
const initialState = { inputValue: '' }

// Example render function
export const render = (template, state) => {
  const container = document.getElementById('app')
  patch(container, template(state))
}

// Example usage
render(template, initialState)

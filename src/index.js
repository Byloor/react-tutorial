import React from 'react'
import ReactDOM from 'react-dom'

// capitalise the function name for react to identify main function component
// always return JSX, always return single element, a div/section/article or fragment wrap around
//  This is a stateless functional component ( dumb components )
// className instead of  class
// close every element
// formatting like a HTML - dont place everything as div, follow html semantics
// use camelCase for html attribute

// Nested Components
const Greeting = () => {
  return (
    <div className='main-wrapper'>
      <PersonName />
      <Message />
    </div>
  )
}
// OR ( not a nice method)
// const Greeting = () => {
//  return React.createElement('h2', {}, 'Hello world')
// }

const PersonName = () => <h1>John Doe</h1>
const Message = () => <h4>Hello World, This is my first component</h4>

ReactDOM.render(<Greeting></Greeting>, document.getElementById('root'))

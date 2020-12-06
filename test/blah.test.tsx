import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ToastContainer } from '../src'

describe('it', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div')
    ReactDOM.render(<ToastContainer />, div)
    ReactDOM.unmountComponentAtNode(div)
  })
})

import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ToastContainer, toast } from '../dist'
import './style.css'

const App = () => {
  const morning = () => toast('Morning! Have a good day.')

  const success = () => toast.success('Message sent successfully!')

  const error = () => toast.error('Oops! Some error occurred.')

  const info = () => toast.info('Do you know about this feature?')

  const warn = () => toast.warn('This may be dangerous!')

  const custom = () =>
    toast('Hey! This is a custom toast.', {
      backgroundColor: '#212121',
      color: '#ffffff',
    })

  return (
    <>
      <div className="controllers">
        <button onClick={morning}>Default</button>
        <button onClick={success}>Success</button>
        <button onClick={error}>Error</button>
        <button onClick={info}>Info</button>
        <button onClick={warn}>Warning</button>
        <button onClick={custom}>Custom</button>
        <button onClick={() => toast.hideAll()}>Hide All</button>
      </div>
      <ToastContainer />
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

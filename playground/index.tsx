import 'react-app-polyfill/ie11'
import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { ToastContainer, toast } from '../dist'

const App = () => {
  return (
    <div
      style={{
        padding: '0',
        margin: '0',
        fontFamily: 'Nunito',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
      }}
    >
      <button onClick={() => toast('Hey there 👋')}>Say hi</button>
      <ToastContainer />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

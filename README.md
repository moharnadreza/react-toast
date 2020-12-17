<p align="center">
  <img src="./toast.svg" alt="React Toast" />
</p>

<h6 align="center">
  A minimal toast notification package for React.
</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/react-toast" target="_blank">
    <img src="https://img.shields.io/npm/v/react-toast?color=cc3534" />
  </a>
  <a href="https://www.npmjs.com/package/react-toast" target="_blank">
  <img src="https://img.shields.io/npm/dm/react-toast?color=%2344cc10" />
  </a>
  <a href="https://bundlephobia.com/result?p=react-toast" target="_blank">
  <img src="https://img.shields.io/bundlephobia/minzip/react-toast?color=%230B5DF5">
  </a>
  <a href="https://twitter.com/moharnadreza" target="_blank">
  <img src="https://img.shields.io/twitter/follow/moharnadreza?label=Follow&style=social"  />
  </a>
</p>

## Get started

### Quick start

```
yarn add react-toast
```

```jsx
import { ToastContainer, toast } from 'react-toast'

const App = () => (
  <div>
    <button onClick={() => toast('Hello world!')}>Say hi!</button>
    <ToastContainer />
  </div>
)
```

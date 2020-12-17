<p align="center">
  <img src="./toast.svg" alt="React Toast" />
  <h3 align="center">React Toast</h3>
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

const App = () => {
  const wave = () => toast('Hi there 👋')

  return (
    <div>
      <button onClick={wave}>Say hi!</button>
      <ToastContainer />
    </div>
  )
}
```

### Docs

#### Toast Container

To use `react-toast`, you need to put `ToastContainer` in a top-level component in your application. e.g. `App.js`

It can take some props, here's a list of them:

| Props         | Type                                                                                            | Description       | Default       |
| :------------ | :---------------------------------------------------------------------------------------------- | :---------------- | :------------ |
| `position`    | `top-left` \| `top-center` \| `top-right` \| `bottom-left` \| `bottom-center` \| `bottom-right` | position of toast | `bottom-left` |
| `deplay` (ms) | `number`                                                                                        | delay for toast   | `6000`        |

#### Toast

There are 4 base toast type available, `success`, `error`, `info` and `warn`. For instance:

```js
const success = () => toast.success('Message sent successfully!')
```

or

```js
fetch('someRandomUrl')
  .then(res => res.json())
  .then(res => console.log(res))
  .catch(err => toast.error(err.message))
```

**Custom toast**

Of course you can display custom toasts 😅, here's a gist and a list of options that are available for customization:

```js
const customToast = () =>
  toast('Morning! Have a good day.', {
    backgroundColor: '#8329C5',
    color: '#ffffff',
  })
```

| Property          | Type     | Description               | Default                                           |
| :---------------- | :------- | :------------------------ | :------------------------------------------------ |
| `backgroundColor` | `string` | background color of toast | based on toast type, e.g. `success` will be green |
| `color`           | `string` | color of text in toast    | `#ffffff`                                         |

## Contribute 🍻

Please check out [contributing guide]() which will cover you up.

## License

[MIT](https://github.com/moharnadreza/react-toast/blob/develop/LICENSE)

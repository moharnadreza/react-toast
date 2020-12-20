<p align="center">
  <img src="https://user-images.githubusercontent.com/53334880/102553638-6960d780-40d8-11eb-8816-ae151308a07e.png" alt="React Toast" />
  <h3 align="center">React Toast</h3>
</p>

<h6 align="center">
  Minimal toast notifications for React.
</h3>

<p align="center">
  <a href="https://www.npmjs.com/package/react-toast" target="_blank">
    <img src="https://img.shields.io/npm/v/react-toast?color=cc3534" />
  </a>
  <a href="https://www.npmjs.com/package/react-toast" target="_blank">
  <img src="https://img.shields.io/npm/dm/react-toast?color=%2344cc10" />
  </a>
  <a href="https://bundlephobia.com/result?p=react-toast@1.0.1" target="_blank">
  <img src="https://img.shields.io/bundlephobia/minzip/react-toast/1.0.1?color=%23165be4">
  </a>
</p>

## Get started

### Quick start

**Install with yarn**

```sh
yarn add react-toast
```

**Install with NPM**

```sh
npm install react-toast
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

### Demo

[Demo](https://codesandbox.io/s/byqvk) on CodeSandbox.

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

You can display custom styled toasts, here's an example and a list of options that are available for customization:

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

## License

[MIT](https://github.com/moharnadreza/react-toast/blob/develop/LICENSE)

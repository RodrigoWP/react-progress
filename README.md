# react-progress

> Beautiful progress bar with React

You can see running example: https://rodrigowp.github.io/react-progress/

![](https://github.com/RodrigoWP/react-progress/blob/master/example.gif)

### Installation

### for npm users
```console
npm i --save @rodrigowpl/react-progress
```

### for yarn users
```console
yarn add @rodrigowpl/react-progress
```

## Simple usage

```jsx
import { Progress } from '@rodrigowpl/react-progress'

<Progress />
```

## Custom usage

```jsx
  <Progress
    backgroundColor='#fcdfdf'
    progressColor='#f9575b'
    height={10}
  />
```

### Props

| Property | Type | Default | Description |
|:---|:---|:---|:---|
| backgroundColor | string | transparent | Set background color to wrapper element
| progressColor | string | #6197c6 | Set progress bar background color
| height | number | 3 | Set progress bar height
| position | string | absolute | Set progress bar layout position
| fromTop | number | 0 | Set progress position from parent top

## Contributing

### Dependencies:

- Node.js `>=` v8;

### Up and running

- Install dependencies: `yarn` (or `npm i`);
- Run `yarn storybook` (or `npm run storybook`) to storybook on `http://localhost:6006`
- Run `yarn storybook:build` (or `npm run storybook:build`) for docs build (files will be) generated in the `docs` directory)
- Run `yarn build` (or `npm run build`) for production build (files will be generated in the `dist` directory)

### Scripts

- `yarn build (or npm run build)`: Build project to production
- `yarn storybook (or npm run storybook)`: Run Storybook on `6006` port
- `yarn storybook:build`: Build Storybook to static files
- `npm run pub`: Publish to npm

## License

[MIT](https://github.com/RodrigoWP/licenses/blob/master/LICENSE) &copy; Rodrigo Wippel
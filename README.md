## react-animation-hooks

Hooks for animation and transition nodes on mount and demount (e.g., fades, slides).

No dependencies, CSS transitions.

```jsx
import {useFadeIn, useSlideUp} from 'react-animation-hooks';

function App () {
  return (
    <Page {...useFadeIn({duration: 0.5})}>
      <Image {...useSlideUp({delay: 0.25, intensity: 2})}/>
    </Page>
  );
}
```

### API

#### `useAnimate (beforeMountStyles, afterMountStyles)`

Base hook to animate in any style. Takes two style objects that contain CSS
properties. You can inline it to components as it spits out a `ref` and
`style`.

```jsx
<p {...useAnimate({opacity: 0, transition: 'all .2s', {opacity: 1, transition: 'all .2s'}}/>
```

For now, if you have other inline styles, merge:

```jsx
const {ref, style} = useAnimate();
return (
  <p ref={ref} style={...style, {color: 'red'}}/>
);
```

#### Helper Hooks

Helper hooks are provided that derive from `useAnimate`:

- `useFadeIn (opts)`
- `useSlideUp (opts)`
- `useSlideDown (opts)`
- `useSlideLeft (opts)`
- `useSlideRight (opts)`

| Option | Description |
|--------|-------------|
| duration | Animation duration, as number, in seconds |
| intensity | Multiplier to the transform |
| function | Animation timing function (e.g., 'ease-in-out') |
| delay | Animation delay, as number, in seconds |

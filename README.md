## react-animation-hooks

Work in progress.

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

## 2020 Typescript + React Tutorial (Common patterns)

### Getting Started
```
npx create-react-app typescript-react-tutorial --template typescript

-- OR --

git clone git@github.com:travis-hilterbrand/typescript-react-tutorial.git

```

* "master" branch has the start of the tutorial
* "final" branch has the end of the tutorial

### Add base component
```jsx
import React from 'react';

interface TestComponentProps {
};

const TestComponent = (props: TestComponentProps) => {
  return (
    <div>
    </div>
  );
};

export default TestComponent;
```

### Fill out TestComponentProps with id, label, value
```jsx
interface TestComponentProps {
  id: string
  label: string
  value:string
};

const TestComponent = (props: TestComponentProps) => {
  const { id, label, value } = props;
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input id={id} autoComplete={'off'} value={value} />
    </div>
  );
};
```

### Fill out TestComponentProps with onChange
```jsx
export interface onTestComponentChangeEvent {
  value: string
};
export type onTestComponentChange = (e: onTestComponentChangeEvent) => void | undefined;

interface TestComponentProps {
  onChange: onTestComponentChange
};

const TestComponent = (props: TestComponentProps) => {
  const { id, label, value, onChange } = props;
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (typeof onChange === 'function') {
      onChange({value: e.currentTarget.value});
    }
  };
  return (
    <div>
      <label htmlFor={id}>{label}:</label>
      <input id={id} autoComplete={'off'} value={value} onChange={handleChange} />
    </div>
  );
};
```

### Add TestComponent to App
```jsx
import React, { useState } from 'react';
import TestComponent from './TestComponent';

function App() {
  const [value, setValue] = useState('');
  return (
    <div className="App">
      <TestComponent
        id={'test'}
        label={'Enter string'}
        value={value}
        onChange={(e) => setValue(e.value)}
      />
      <h4>Reflected value</h4>
     [{value}]
    </div>
  );
}
```

## References

https://github.com/typescript-cheatsheets/react-typescript-cheatsheet

https://levelup.gitconnected.com/ultimate-react-component-patterns-with-typescript-2-8-82990c516935

https://medium.com/@martin_hotell/react-typescript-and-defaultprops-dilemma-ca7f81c661c7

https://github.com/piotrwitek/react-redux-typescript-guide

https://github.com/Microsoft/TypeScript-React-Conversion-Guide#typescript-react-conversion-guide

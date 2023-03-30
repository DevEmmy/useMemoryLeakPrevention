### useMemoryLeakPrevention

<p>A custom React hook for preventing memory leakage caused by the improper use of effect cleanup functions.</p>

```
npm install use-memory-leak-prevention
```

## Usage
<p>The useMemoryLeakPrevention hook can be used to prevent memory leakage caused by the improper use of effect cleanup functions. It takes two arguments:</p>

 - cleanupFn: A cleanup function that will be called when the component unmounts or when the dependencies change.

- deps (optional): An array of dependencies that will be passed to the cleanup function. If any of the dependencies change, the cleanup function will be called.
Here's an example of how you can use the useMemoryLeakPrevention hook:

```
    import React, { useState } from 'react';
import useMemoryLeakPrevention from 'use-memory-leak-prevention';

function Component() {
  const [value, setValue] = useState(0);

  // Define the cleanup function
  const cleanup = () => {
    console.log('Cleanup function called!');
  };

  // Use the useMemoryLeakPrevention hook
  useMemoryLeakPrevention(cleanup, [value]);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue(value + 1)}>Increment</button>
    </div>
  );
}

```

<p>
In this example, the cleanup function will be called whenever the value state changes or when the component unmounts.
</p>

## Conclusion
By using useMemoryLeakPrevention, you can ensure that your effect cleanup functions are properly cleaned up and prevent memory leakage in your React application.
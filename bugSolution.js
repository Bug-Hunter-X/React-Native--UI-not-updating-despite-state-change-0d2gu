```javascript
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

function MyComponent() {
  const [count, setCount] = useState(0);
  const incrementCount = () => {
    setCount(count + 1);
    console.log(count); // This will now re-render correctly
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={incrementCount} />
    </View>
  );
}

export default MyComponent;
```
The key change is using `useState` to manage the `count` variable.  `setCount` is now a function that triggers a re-render whenever it's called, correctly updating the UI.
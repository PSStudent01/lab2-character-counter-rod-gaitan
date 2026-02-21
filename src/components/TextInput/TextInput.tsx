import React from 'react';  //Imports the React library and it's required in any React component file.
import { TextInputProps } from '../../types'; //Imports the 'TextInputProps' interface we just created in the types/index.ts file

// 'export' makes this component available to any other file that imports it elsewhere
// 'const TextInput',  names the component
// 'React.FC<TextInputProps>' tells TypeScript this is a 'React function component' that expects 'props' matching the 'TextInputProps interface'
// SIDE NOTE: It expects 'props' from whoever uses (renders) this component — in this case the 'CharacterCounter' component (the parent).
export const TextInput: React.FC<TextInputProps> = ({  // below is 'destructing of props'(extracting each prop from the props object (TextInputProps' interface)).:
  onTextChange,
  placeholder = 'Start typing...', // 'Start typing...': default value for this optional prop, so that if the parent doesn't pass the prop, this value is used instead.
  initialValue = ''   // ' ''  ': default value for this optional prop, so that if the parent doesn't pass the prop, this value is used instead.
})

}) => { // this closes the 'props destructuring'....
  return ( //...and starts the 'return' statement and everything after this is the JSX for the UI.
    <div className="w-full"> {/* use wrapper 'div' that takes up the full width of its container. use className "w-full" to apply CSS styling in React.*/}






    </div>





  )
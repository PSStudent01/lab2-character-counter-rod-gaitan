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


}) => { // this closes the 'props destructuring'....
  return ( //...and starts the 'return' statement and everything after this is the JSX for the UI.
    <div className="w-full">  {/*wrapper 'div' that takes up the full width of its container. use className "w-full" to apply CSS styling in React.*/}
    <textarea
        className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500" // text input area with utility classes that handle various styling triggered by the 'focus:' event as the user clicks into it.
        placeholder={placeholder} //Sets the 'placeholder text' inside the textarea using the 'placeholder prop' (or default 'Start typing...' if none is passed).
        defaultValue={initialValue} /*Sets the initial text content of the textarea when it first renders, using the 'initialValue prop' (the defaults is empty string ''). 
                                     see 'defaultValue initialValue explanation.txt'*/
        onChange={(e) => onTextChange(e.target.value)} /*This is the key line for communication! Every time the user types:
                                                        - 'onChange' fires
                                                        - 'e' is the event object
                                                        - 'e.target.value' is the current text in the textarea
                                                        - That text gets passed up to the parent via the 'onTextChange callback' 
                                                        - IMPORTANT!!!!this where the callback pattern lives*/
        rows={6} //Sets the textarea height to a max of 6 visible rows. 

      />
    </div> 
  );
};
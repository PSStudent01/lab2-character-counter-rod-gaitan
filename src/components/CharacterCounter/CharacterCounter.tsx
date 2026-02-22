
/*
- Imports 'React' AND the 'useState hook' from the 'React library'. 
- The 'useState hook' is necessary here, because this component (CHaracterCounter) manages state, whereas the other 2 do not.
- also 'useCallback' is needed to be able to wrap */
import React, { useState, useCallback } from 'react';

/*
- This imports 2 things from our 'index.tsx' file:
-- 'CharacterCounterProps' for the components' props, 
-- and 'TextStats' for typing the 'state' object. 
--- 'useState<TextStats>' is the 'state object' being referred to. 
--- 'TextStats' is being imported for typing purposes only, so TypeScript knows it must have those 3 fields deefine din the 'index.ts' file:
characterCount: number;
wordCount: number;
readingTime: number; 
*/
import type { CharacterCounterProps, TextStats } from '../../types';

//- importing the 2 child components that it (CharacterCounter) will later use to pass its 'CALCULATED STATS' or 'PROPS' to.
import { TextInput } from '../TextInput/TextInput';
import { StatsDisplay } from '../StatsDisplay/StatsDisplay';

// exports the component (itself 'CharacterCounter') ]
// and tells 'TypeScript' it expects 'prop's matching 3 optional 'CharacterCounterProps'.
export const CharacterCounter: React.FC<CharacterCounterProps> = ({ // below is 'destructing of the 3 props'(extracting each prop from the 
                                                                    // ...props object ('CharacterCounterProps' interface)):
  minWords = 0,          
  maxWords = 100,

}) => {               // This closes the 'props destructuring' and 'opens the component function body'.

    /* This is the heart of the component.
    - 'useState<TextStats>' creates a state variable as 'TextStats'
    - 'stats' the current state value (the object we read from)
    - 'setStats' the function we call to update the state
    - '{ characterCount: 0, wordCount: 0, readingTime: 0 }' the object that established the INITIAl state (all zeros since no text has been typed yet).
    */
    const [stats, setStats] = useState<TextStats>({  
    characterCount: 0,
    wordCount: 0,
    readingTime: '0:00'   
  });

    const handleTextChange = useCallback((text: string) => {  //This is the 'callback function' that will be passed down to 'TextInput'.
                                                  // It receives text — the current full string from the textarea — as its argument every time the user types.
    // const words = text.trim() === '' ? [] : text.trim() //calculates the word array      split(/\s+/)
    const words = text.trim() === '' ? [] : text.trim().split(/\s+/) //'split(/\s+/)' properly categorizes a group of letters into words and generates a count for each group
    /* 
    - 'text.trim()' removes leading/trailing spaces from the text.
    - === ''  checks if the text is empty after trimming
    - '? []'   if it is empty, set words to an empty array (this handles the edge case of empty input)
    - ': text.trim()'  trim tex array input []*/ 

    setStats({
      characterCount: text.length, // it calls 'setStats' to update the 'state' with 'new values'. 
                                 //'text.length' is a built-in JavaScript property that simply counts every character in the string including spaces.
      wordCount: words.length,  // .length gives how many words are in the 'words' array that we just created above.
      readingTime: `${Math.round((words.length / 200) * 100) /100}` //using the Math.round to round to the nearest whole number and shift teh decimal over 2 places. []
        }); // closes the 'setStats' call 
  }, []); // closes the 'handleTextChange' function
  


  return (
    <div className="max-w-2xl mx-auto p-6 space-y-4"> {/* the wrapper starts the JSX, specifying Tailwind porperties for the main contaner.*/}
    <h1 className="text-2xl font-bold text-gray-800">Character Counter</h1>
    <TextInput onTextChange={handleTextChange} /> {/* a CALL BACK pattern where
                                                    - it passes 'handleTextChange' value as the 'onTextChange prop'. 
                                                    - then 'TextInput' component will call this function every time the user types, sending the text back up to 'CharacterCounter'.*/}
    <StatsDisplay stats={stats} minWords={minWords} maxWords={maxWords} /> {/* this line 
                                    - renders the 'StatsDisplay' child component 
                                    - and passes the active 'stats state object' down to 'StatsDisplay' child component . 
                                    - so that very time 'setStats' updates the 'state', this will automatically re-render with the new numbers.*/}
    </div>
  );
};
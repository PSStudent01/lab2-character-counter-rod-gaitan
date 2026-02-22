import React from 'react'; //imports the React library

import type { StatsDisplayProps } from '../../types'; //imports the 'StatsDisplayProps' interface from our 'index.ts' file.

export const StatsDisplay: React.FC<StatsDisplayProps> = ({ //exports the component 'StatsDisplay', and tells TypeScript it's a 'function component' 
    // that expects props matching 'StatsDisplayProps' interface from parent component 'CharacterCounter'.
    // 2 props being destructured
    stats, // it is 'required' and has no default value
    showReadingTime = true,  // it is 'optional' and defaults to 'true' IF the parent doesn't pass it.
    minWords = 0,    // adding 'minWords' prop STEP 2
    maxWords = 100   // adding 'maxWords' prop STEP 2

}) => {  //this closes the 'props destructuring'....

    return (  //starts the JSX for the UI
        <>
            <div className="grid grid-cols-3 gap-4 p-4 bg-gray-50 rounded-lg"> {/*wrapper 'div' that uses Tailwind to style the main container includiing a 3-column grid layout.*/}
                {/*displays the character count:*/}
                <div className="text-center">
                    <p className="text-2xl font-bold text-black-600">{stats.characterCount}</p> {/*extracts the value from the 'stats' object passed in from the parent component 'CharacterCounter'. shows the number in red*/}
                    <p className="text-sm text-gray-500">Characters</p> {/*displays the label "Characters"*/}
                </div>

                {/*displays the stats of word count*/}
                <div className="text-center">
                    <p className="text-2xl font-bold text-red-600"> {stats.wordCount}</p> {/*displays the stats.wordCount".*/}
                    <p className="text-sm text-gray-500">Words</p>  {/*displays the label "Words*/}
                    <p className="text-sm text-gray-500">Min: {minWords} | Max: {maxWords}</p>
                </div>
                {showReadingTime && (   //  'conditional rendering' where the '&&' means "only render what follows IF 'showReadingTime' is true." 
                    // else if false, nothing renders here at all.
                    //what follows:
                    <div className="text-center">
                        <p className="text-2xl font-bold text-black-600">{stats.readingTime}</p> {/* displays 'stats.readingTime'*/}
                        <p className="text-sm text-gray-500">Reading Time</p> {/*displays label "Reading Time" */}
                    </div>
                    // AGAIN, this whole block only appears if 'showReadingTime' is true, else it does not.
                )}
            </div>
        </>
    )
}


/* VIP Observation:
- CharacterCounter is the one that would calculate the stats and then pass them down to StatsDisplay via props, like:
*
tsx<StatsDisplay 
  stats={calculatedStats} 
  showReadingTime={true} 
/>
- This is why StatsDisplayProps needs a stats prop — it can't calculate the stats itself, it just receives them from CharacterCounter and displays them.
*/

/* VIP Observation:
- The takeaway here is that this component:
-- DOES NOT own any data, 
-- it just receives stats from its parent and displays it. 
-- All claculations and logic happen in the 'CharacterCounter' component. */
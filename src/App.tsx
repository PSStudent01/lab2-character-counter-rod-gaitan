import React from 'react'; //Imports React 
import { CharacterCounter } from './components/CharacterCounter/CharacterCounter'; //imports the 'CharacterCounter' component.

function App() {    //this define the 'App' component, the root component of the entire application

  return ( // this starts the 'JSX' that this component will render.

    <div className="min-h-screen bg-gray-100 py-8"> {/* wrapper div to the main container */}
      <CharacterCounter /> {/* this renders the 'CharacterCounter' component right here. 
                            while 'CharacterCounter' renders 'TextInput' and 'StatsDisplay' internally. */}


</div>
  );
};

export default App;
// Exports the App component as the default export. 
// 'export default' means that when something imports from this file it gets assigned 'App' automatically without needing curly braces.


/*
the key thing here is that 'App.tsx' is the 'entry point' of your UI. Everything starts here and flows down:
App
  └── CharacterCounter
        ├── TextInput
        └── StatsDisplay

*/










// props that the TextInput child component accepts from parent component
export interface TextInputProps {
  onTextChange: (text: string) => void; //takes a call back
  placeholder?: string;
  initialValue?: string;
}


// props that the StatsDisplay child component accepts from parent component
export interface StatsDisplayProps {
  stats: TextStats;  // the 'stats' field whose type is data shape 'TextStats'
  showReadingTime?: boolean;
  minWords?: number;  // adding 'minWords' prop STEP 1
  maxWords?: number;  // adding 'maxWords' prop STEP1
}

// data shape
export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: string;  
}

// props that the CharacterCounter child component accepts from parent component
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}

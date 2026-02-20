
// props that the TextInput child component accepts from parent component
export interface TextInputProps {
  onTextChange: (text: string) => void;
  placeholder?: string;
  initialValue?: string;
}


// props that the StatsDisplay child component accepts from parent component
export interface StatsDisplayProps {
  stats: TextStats;
  showReadingTime?: boolean;
}

export interface TextStats {
  characterCount: number;
  wordCount: number;
  readingTime: number; // in minutes
}

// props that the CharacterCounter child component accepts from parent component
export interface CharacterCounterProps {
  minWords?: number;
  maxWords?: number;
  targetReadingTime?: number; // in minutes
}

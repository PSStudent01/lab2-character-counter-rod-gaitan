
lab2-character-counter-rod-gaitan

#
Objective:
- This lab is a React TypeScript application that counts characters, words, and estimated reading time as you type.


#
Built With:
- React
- TypeScript
- Vite
- Tailwind CSS


#
Vite Server:
Install:
- off of my mod-9 folder:
-- [npm create vite@latest lab2-character-counter-rod-gaitan -- --template react-ts]
-- [Enter]
-- for 'Use Vite 8 beta (Experimental)?:' [NO]
-- for 'Install with npm and start now?' [YES]
- Open browser to 'http://localhost:5173'

Optional:
- if 'node_modules' folder that contains dependencies was NOT installed:
-- [cd lab2-character-counter-rod-gaitan]
-- [npm install]

To Stop Vite Server:
- [Ctrl + c]

To Run Vite Server:
- [cd lab2-character-counter-rod-gaitan]
- [npm run dev]
- Open your browser to 'http://localhost:5173'


#
How to Use:
- Just start typing in the text area and the statistics will update in real time providing the following output:
-- the character count total, including spaces.
-- the word count total.
-- measurement of reading time in minutes.


#
Components:
- TextInput = 
-- handles user input 
-- and then sends those changes to 'CharacterCounter' via 'callback'

- CharacterCounter = is parent component that... 
-- manages the state of the 'stats' object  
--- characterCount
--- wordCount
--- readingTime
-- and passes data to its child components (TextInput, StatsDisplay) in the form of props.

- StatsDisplay = 
-- receives data from 'CharacterCounter' component
-- and then displays them on the webpage


# 
Component Props:
- TextInput Component:
-- onTextChange	= function / required
-- placeholder = string / optional
-- initialValue	= string /optional

- StatsDisplay Component:
-- showReadingTime = boolean / optional
-- minWords = number / optional
-- maxWords = number / optional

- CharacterCounter Component:
-- minWords = number / optional
-- maxWords = number / optional
-- targetReadingTime = number / optional 


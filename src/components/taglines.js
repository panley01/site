import React from 'react';
import '../css/tagline.css'
import lines from '../data/taglines.json'

function Tagline() {
    const [currentLine, setCurrentLine] = React.useState(0);
    const [line, setLine] = React.useState(lines[0]); // is the default value
    
    const incrementCurrentLine = () => {
      if (currentLine < lines.length - 1) {
        setCurrentLine(currentLine + 1);
      } else {
        // reset to 1 if reached the end
        setCurrentLine(0);
      }
    };
    
    return (
      <div class="tagcontainer">
        <h1 class="tagheader"
          onMouseEnter={() => {
            incrementCurrentLine();
            setLine(lines[currentLine]);
          }}>
            And I'm <span class="forhire">{line}</span> for hire.
        </h1>
      </div>
    );
}

export default Tagline

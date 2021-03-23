import React, { useState } from 'react';
import { nameObject } from './nameObject';
function Penguin() {
  const [userName, setUserName] = useState('');
  const [penguinFirstName, setPenguinFirstName] = useState('');
  const [penguinLastName, setPenguinLastName] = useState('');
  const [penguinMiddleName, setPenguinMiddleName] = useState('');
  const [showErrors, setShowErrors] = useState(true);

  const handleOnChange = (e) => {
    setUserName(e.target.value);
  }

  const handleSubmit = () => {
    const str = userName.toLowerCase();
    const initials = str.split(' ').reduce((response, word) => response += word.slice(0, 1), '');
    const secondLetter = initials.charAt(1);
    const hasMiddleNames = initials.length >= 3;
    setShowErrors(true);
    setPenguinMiddleName('');
    if (/[^a-zA-Z\-]/.test(str.replace(/\s/g, '')) || initials.length <= 1) {
      setShowErrors(false);
    }
    setPenguinFirstName(nameObject.penguinNameObject[initials[0]]);

    if (hasMiddleNames) {
      setPenguinMiddleName(/^[a-n]/.test(secondLetter) ? 'Mc' : 'Von');
    }

    setPenguinLastName(nameObject.penguinLastNameObject[initials[initials.length - 1]]);
  }

  return (
    <div className="child">
      < div >
        <div className="title">Get Your Penguin Name</div>
        <input
          value={userName}
          onChange={handleOnChange}
          type="text"
        />
        <div className="btnContainer">
          <div className="submitBtn" onClick={handleSubmit}>Submit</div>
        </div>
      </div>
      {
        !showErrors && <div className="error">Please enter a name with no special characters
        or numbers and at least enter a first and last name
        </div>
      }
      { showErrors && <div>{penguinFirstName} {penguinMiddleName} {penguinLastName}</div>}
    </div >
  );
}

export default Penguin;

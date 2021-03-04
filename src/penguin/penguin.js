import React, { useState } from 'react';

function Penguin() {
  const [userName, setUserName] = useState('');
  const [penguinFirstName, setPenguinFirstName] = useState('');
  const [penguinLastName, setPenguinLastName] = useState('');
  const [penguinMiddleName, setPenguinMiddleName] = useState('');

  const handleOnChange = (e) => {
    setUserName(e.target.value);
  }

  const penguinNameObject = {
    'a': 'Pecky',
    'b': "Chubbers",
    'c': 'Beaky',
    'd': 'Fishbreath',
    'e': 'Fuzzbutt',
    'f': 'Bigbeak',
    'g': 'Pebbles',
    'h': 'Fishcakes',
    'i': 'Tumtums',
    'j': 'Shrimpy',
    'k': 'Featherface',
    'l': 'Honkers',
    'm': 'Blubbers',
    'n': 'Squawky',
    'o': 'Waddles',
    'p': 'Puddles',
    'q': 'Squidhead',
    'r': 'Flippers',
    's': 'Fishface',
    't': 'Squeaks',
    'u': 'Hoppy',
    'v': 'Wobbles',
    'w': 'Flappity',
    'x': 'Chinstrap',
    'y': 'Feathers',
    'z': 'Stubby',
  }

  const penguinLastNameObject = {
    'a': 'Flapperson',
    'b': "Waddlebottom",
    'c': 'Flapdoodle',
    'd': 'Hoppington',
    'e': 'Beakerson',
    'f': 'Squeakybeak',
    'g': 'Krillington',
    'h': 'Featherbottom',
    'i': 'Beady Eyes',
    'j': 'Roly Poly',
    'k': 'Bellyflop',
    'l': 'Peckington',
    'm': 'Pecks-a-lot',
    'n': 'Squidbreath',
    'o': 'Squawksalot',
    'p': 'Fanyflippers',
    'q': 'Hopsalot',
    'r': 'Flappyfeet',
    's': 'Blubberbuns',
    't': 'Pebblepincher',
    'u': 'Wigglefeet',
    'v': 'Flapperson',
    'w': 'Snowballs',
    'x': 'Swimmington',
    'y': 'Flipperstein',
    'z': 'Slip n Slide',
  }

  const handleSubmit = () => {
    const str = userName.toLowerCase();
    const initials = str.split(' ').reduce((response, word) => response += word.slice(0, 1), '');
    const secondLetter = initials.charAt(1);
    const hasMiddleNames = initials.length >= 3;

    setPenguinFirstName(penguinNameObject[initials[0]]);

    if (hasMiddleNames) {
      setPenguinMiddleName(/^[a-n]/.test(secondLetter) ? 'Mc' : 'Von');
    }

    setPenguinLastName(penguinLastNameObject[initials[initials.length - 1]]);
  }

  return (
    <div className="child">
      <div>Get Your Penguin Name</div>
      <input
        value={userName}
        onChange={handleOnChange}
        type="text"
      />
      <button onClick={handleSubmit}>Submit</button>
      <div>{penguinFirstName} {penguinMiddleName} {penguinLastName}</div>
    </div>
  );
}

export default Penguin;
// make sure there is at least 2 names and no special charac. or numbers
//make sure to accept '-'
// remove keys from ''
//sperate the objects in own files
// show errors
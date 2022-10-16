import { FunctionComponent, useEffect, useState } from 'react';
import { Box } from '@chakra-ui/react';

const titles = [
  'software developer',
  'npm i typescript',
  'rm -rf',
  'git push --force'
];

const duration = 120;

type Props = {
  isStarted: boolean;
};

export const CommandAnimation: FunctionComponent<Props> = ({ isStarted }) => {
  const [text, setText] = useState<string>(''); // displayed text
  const [titleIndex, setTitleIndex] = useState<number>(0); // index of the selected title in titles
  const [charIndex, setCharIndex] = useState<number>(0); // index of the last character dusplayed in the title

  useEffect(() => {
    if (!isStarted) return;
    const title = titles[titleIndex]; // selected title
    const maxBlink = 6; // number of suffix blinking
    let blinkIndex = 0,
      _charIndex = charIndex; // inital setup

    const interval = setInterval(() => {
      // increase length of the text in every interval
      if (_charIndex < title.length) _charIndex++;
      setText(title.substring(0, _charIndex));

      // go to next title or start from first after last one
      if (_charIndex === title.length) {
        // blink the suffix after typing whole text
        if (blinkIndex < maxBlink - 1) {
          setText(
            [title.substring(0, _charIndex), blinkIndex % 2 ? '_' : ''].join('')
          );
          blinkIndex++;
        } else {
          // go to next title after blinking effect
          setCharIndex(0);
          titleIndex === titles.length - 1
            ? setTitleIndex(0)
            : setTitleIndex(titleIndex + 1);
        }
      }
    }, duration);

    return () => {
      setCharIndex(_charIndex); // remember last charIndex on start
      clearInterval(interval);
    };
  }, [titleIndex, isStarted]);

  return (
    <Box color="grey" fontWeight="lighter">
      {text}
    </Box>
  );
};

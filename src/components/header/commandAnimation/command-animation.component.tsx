import { FunctionComponent, useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

type Props = {
    isStarted: boolean
}

type Element = {
    title: string;
    speed: number;
}

export const CommandAnimation: FunctionComponent<Props> = ({ isStarted }) => {
    const [command, setCommand] = useState('');
    const [selected, setSelected] = useState(0);
    const [position, setPosition] = useState(0);
    const elements: Element[] = [
        { title: 'software developer', speed: 150 },
        { title: "npm i typescript", speed: 150 },
        { title: "rm -rf", speed: 300 },
        { title: 'git push --force', speed: 150 }
    ];

    useEffect(() => {
        if (!isStarted) return
        const { title, speed } = elements[selected];
        const maxBlink = 6;
        let blink = 0;
        let _position = position;


        const interval = setInterval(() => {
            // increase length of the command in every interval
            if (_position < title.length) _position++
            // showSuffix = !showSuffix
            // setCommand([title.substring(0, _position), showSuffix ? "_" : ""].join(''))

            setCommand(title.substring(0, _position))

            // go to next title or start from first after last one 
            if (_position === title.length) {
                if (blink < maxBlink - 1) {
                    setCommand([title.substring(0, _position), !!(blink % 2) ? "_" : ""].join(''))
                    blink++;

                } else {
                    setPosition(0);
                    selected === elements.length - 1
                        ? setSelected(0)
                        : setSelected(selected + 1);
                }
            }
        }, speed);

        return () => {
            setPosition(_position) // remember last position (freeze the content)
            clearInterval(interval)
        }
    }, [selected, isStarted]);


    return <Box color="grey" fontWeight="lighter">{command}</Box>
}
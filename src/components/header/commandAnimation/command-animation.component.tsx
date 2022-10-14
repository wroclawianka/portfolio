import { useEffect, useState } from "react";
import { Box } from "@chakra-ui/react";

export const CommandAnimation = () => {

    // 1. Add sections and scroll on click
    // 2. dark.light more
    // 2. Make if blink >_
    // 3. Add changing titles on scroll
    // Front-end developer
    // Team player
    // npm i typescript
    // Agile enthusiast
    // Amateur artist
    // rm -rf
    // coffee, coffee, coffee

    const titles = [
        'software developer',
        "npm i typescript",
        "rm -rf",
    ];

    // if reverse => faster


    const [command, setCommand] = useState('');
    const [index, setIndex] = useState(0)

    useEffect(() => {
        let i = 0, reverse = false;
        const interval = setInterval(() => {
            if (i <= titles[index].length) reverse ? i-- : i++
            setCommand(titles[index].substring(0, i))
            if (i === 0 || i === titles[index].length) reverse = !reverse
            if (i === 0) {
                index === titles.length - 1 ? setIndex(0) : setIndex(index + 1)
            }
        }, 250);
        return () => clearInterval(interval);
    }, [index]);


    return <Box color={"grey"}>{command}_</Box>
}
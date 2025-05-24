import { useState, useEffect } from 'react'
import Form from './components/Form'
import MemoryCard from './components/MemoryCard'
import { Base, Main, StyledH1 } from './styled-comps'

export default function MemoryHome() {
    const [isGameOn, setIsGameOn] = useState(false);
    const [emojisData, setEmojisData] = useState<any[]>([]);
    const [selectedCards, setSelectedCards] = useState<any[]>([]);
    const [matchedCards, setMatchedCards] = useState<any[]>([]);
    const [isGameOver, setIsGameOver] = useState(false)
  
    useEffect(() => {
        if (selectedCards.length === 2 && selectedCards[0].name === selectedCards[1].name) {
            setMatchedCards(prevMatchedCards => [...prevMatchedCards, ...selectedCards])
        }
    }, [selectedCards])

    useEffect(() => {
        if (emojisData.length && matchedCards.length === emojisData.length) {
            setIsGameOver(true)
        }
    }, [matchedCards])

    async function startGame(e: Event) {
        e.preventDefault();
        try {
            const response = await fetch("https://emojihub.yurace.pro/api/all/category/animals-and-nature");
            if (!response.ok) {
                throw new Error("Could not fetch data from API")
            }
            const data = await response.json()
            const dataSlice = getDataSlice(data)
            const emojisArray = getEmojisArray(dataSlice)

            setEmojisData(emojisArray)
            setIsGameOn(true)
        } catch (err) {
            console.error(err)
        }
    }

    function turnCard(name: string, index: number) {
        const selectedCardEntry = selectedCards.find(emoji => emoji.index === index)

        if (!selectedCardEntry && selectedCards.length < 2) {
            setSelectedCards(prevSelectedCards => [...prevSelectedCards, { name, index }])
        } else if (!selectedCardEntry && selectedCards.length === 2) {
            setSelectedCards([{ name, index }])
        }
    }

    function getDataSlice(data: any[]) {
        const randomIndices = getRandomIndices(data)

        const dataSlice = randomIndices.reduce((array: any[], index) => {
            array.push(data[index])
            return array
        }, [])

        return dataSlice
    }

    function getRandomIndices(data: number[]) {
        const randomIndicesArray: number[] = []

        for (let i = 0; i < 5; i++) {
            const randomNum = Math.floor(Math.random() * data.length)
            if (!randomIndicesArray.includes(randomNum)) {
                randomIndicesArray.push(randomNum)
            } else {
                i--
            }
        }

        return randomIndicesArray
    }

    function getEmojisArray(data: any[]): any[] {
        const pairedEmojisArray = [...data, ...data]

        for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = pairedEmojisArray[i]
            pairedEmojisArray[i] = pairedEmojisArray[j]
            pairedEmojisArray[j] = temp
        }

        return pairedEmojisArray
    }

    return (
        <Base>
            <Main>
                <StyledH1>Memory</StyledH1>
                {!isGameOn && <Form handleSubmit={startGame} />}
                {isGameOn && <MemoryCard handleClick={turnCard} data={emojisData} />}
            </Main>
        </Base>
    )
}

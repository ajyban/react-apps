import { useState, useEffect } from 'react'
import Form from './components/Form'
import MemoryCard from './components/MemoryCard'
import Confetti from 'react-confetti'


export default function App() {
    const [isGameOn, setIsGameOn] = useState(false)
    const [emojisData, setEmojisData] = useState([])
    const [selectedCards, setSelectedCards] = useState([])
    const [matchedCards, setMatchedCards] = useState([])
    const [isGameOver, setIsGameOver] = useState(false)
    const [totalMoves, setTotalMoves] = useState(0)

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

    console.log(isGameOver)


    async function startGame(e) {
        e.preventDefault()
        try {
            const response = await fetch("https://emojihub.yurace.pro/api/all/category/animals-and-nature")

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

    function getEmojisArray(data) {
        const pairedEmojisArray = [...data, ...data]

        for (let i = pairedEmojisArray.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            const temp = pairedEmojisArray[i]
            pairedEmojisArray[i] = pairedEmojisArray[j]
            pairedEmojisArray[j] = temp
        }

        return pairedEmojisArray
    }

    function getDataSlice(data) {
        const randomIndices = getRandomIndices(data.length);
        const dataSlice = randomIndices.map(value => data[value]);
        return dataSlice;
    }
    function getRandomIndices(dataLength) {
        const randomIndicesArray = [];
        for (let i = 0; i < 5; i++) {
            const randIndex = Math.floor(Math.random() * dataLength);
            if (!randomIndicesArray.includes(randIndex)) {
                randomIndicesArray.push(randIndex);
            } else {
                i = i - 1;
            }
        }
        return randomIndicesArray;

    }

    function turnCard(name, index) {
        setTotalMoves(prev => prev + 1)
        const selectedCardEntry = selectedCards.find(emoji => emoji.index === index);
        if (!selectedCardEntry && selectedCards.length < 2) {
            setSelectedCards(prevSelectedCards => [...prevSelectedCards, { name, index }])
        } else if (!selectedCardEntry && selectedCards.length === 2) {
            setSelectedCards([{ name, index }])
        }
    }

    return (        
        <main>
            {isGameOver && <Confetti />}
            <h1>Memory</h1>
            {totalMoves > 0 && <h2>Total Moves: {totalMoves}</h2>}
            {!isGameOn && <Form handleSubmit={startGame} />}
            {isGameOn && <MemoryCard handleClick={turnCard} data={emojisData} selectedCards={selectedCards}
                matchedCards={matchedCards} />}
            <section>
                {selectedCards && selectedCards.map(card => <p>{card.name}</p>)}
            </section>
        </main>
    )
}
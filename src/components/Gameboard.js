import React, {useState} from "react"
import Card from "./Card"
import gameData from "./gameData"

const Gameboard = () => {
    const [cardArray, setCardArray] = useState([...gameData])
    let [currentScore, setCurrentScore] = useState(0)
    let [highScore, setHighScore] = useState(0)
    
    const shuffle = (array) => {
        let currentIndex = array.length, temporaryValue, randomIndex;
        // While there remain elements to shuffle...
        while (0 !== currentIndex) {
        // Pick a remaining element...
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex -= 1;
        // And swap it with the current element.
          temporaryValue = array[currentIndex];
          array[currentIndex] = array[randomIndex];
          array[randomIndex] = temporaryValue;
        }
        return array;
    }

    const handleClick = (e) => {
        const index = e.target.parentNode.parentNode.attributes[0].value
        if (cardArray[index].clicked === false) {
            let tempArray = [...cardArray]
            tempArray[index].clicked = !tempArray[index].clicked
            setCardArray(shuffle([...tempArray]))
            setCurrentScore(currentScore += 1)
            if (currentScore > highScore){
                setHighScore(currentScore)  
            }
        } else {
            setCurrentScore(0)
            let tempArray = [...cardArray]
            for (let i = 0; i < tempArray.length; i++){
                tempArray[i].clicked = false
            }
            setCardArray(shuffle(tempArray))
        }
    }
      

    return(
        <div>
            <div className="scoreContainer">
                <p>Current Score: {currentScore}</p>
                <p>High Score: {highScore}</p>
            </div>
            <div className="cardContainer">
            {
                cardArray.map((val, idx) => {
                    return(
                    <div key={idx} onClick={handleClick} data-id={idx}>
                        <Card data={val} />
                    </div>
                    )
                })
            }
            </div>
        </div>
    )
}

export default Gameboard
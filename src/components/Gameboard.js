import React, {useState} from "react"
import Card from "./Card"
import gameData from "./gameData"

const Gameboard = () => {
    const [cardArray, setCardArray] = useState([...gameData])
    
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

    const handleClick = () => {
        let shuffledArray = [...cardArray]
        setCardArray(shuffle(shuffledArray))
    }
      

    return(
        <div>
            <p>Hello, this is gameboard</p>
            <div className="cardContainer">
            {
                cardArray.map((val, idx) => {
                    return(
                    <div key={idx} onClick={handleClick}>
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
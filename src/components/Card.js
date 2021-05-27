import React from "react"

const Card = (props) => {
    return(
        <div className="card">
            <p>{props.data.name}</p>
            <p>{props.data.img}</p>
            <p>{props.data.clicked}</p>
        </div>
    )
}

export default Card
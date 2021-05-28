import React from "react"

const Card = (props) => {
    return(
        <div className="card">
            <img src={process.env.PUBLIC_URL + props.data.img} alt={props.data.name}/>
        </div>
    )
}

export default Card
import React from 'react'

function CardGame({ game, textButton, classname, onClickButton }) {
    return (
        <div className="col-sm-4">
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{game.name}</h5>
                    <img src={game.img} class="card-img-top" />
                    <button className={classname} onClick={()=>onClickButton(game)}>
                        {textButton}
                    </button>
                </div>
            </div>
        </div>
    )
}

export default CardGame

import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CardGame from './CardGame'

function Games() {
    const [games, setGames] = useState([])

    useEffect(() => {
        getGamesTop()
    }, [])

    const getGamesTop = async () => {
        const { data } = await axios({ url: 'http://localhost:3300/getGames' })
        setGames(data.data)
    }

    const onClickAddFav = async(game) => {
        const { data } = await axios({
            method: 'POST',
            url: 'http://localhost:3300/gamesFavorites',
            headers: {
                'Content-Type': 'application/json',
            },
            data: game,
        })

        if (data.ok) {
            alert(data.message)
        }
    }
    return (
        <div className="row">
            {games.map((item, id) => (
                <CardGame
                    key={id}
                    game={item}
                    textButton="Agregar Favoritos"
                    classname="btn btn-primary mt-1"
                    onClickButton={onClickAddFav}
                />
            ))}
        </div>
    )
}

export default Games

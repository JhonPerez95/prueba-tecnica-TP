import React, { useState, useEffect } from 'react'
import axios from 'axios'

import CardGame from './CardGame'

function Favorites() {
    const [favorites, setFavorites] = useState([])

    useEffect(() => {
        getGamesFav()
    }, [])

    const getGamesFav = async () => {
        const { data } = await axios({
            url: 'http://localhost:3300/gamesFavorites',
        })
        setFavorites(data.data)
    }

    const handleDeleteFavorite = async ({id}) => {
        const { data } = await axios({
            method: 'delete',
            url: `http://localhost:3300/gamesFavorites/${id}`,
        })
        setFavorites(data.data)
        if (data.ok) {
            alert(data.message)
        }
    }
    return (
        <div className="row">
            {favorites.map((item, id) => (
                <CardGame
                    key={id}
                    game={item}
                    textButton="Eliminar Favoritos"
                    classname="btn btn-danger mt-1"
                    onClickButton={handleDeleteFavorite}
                />
            ))}
        </div>
    )
}

export default Favorites

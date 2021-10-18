const axios = require('axios')
const fs = require('fs')

const { configAccToken } = require('../config/cofnig')

// Leer Json
const getDataJson = () => {
    let json_games = fs.readFileSync('games.json', 'utf-8')
    return (games = JSON.parse(json_games))
}

// Traer Todos los juegos (20) del API de Twitch
const getGame = async (req, res) => {
    // aut-token
    const { data } = await axios(configAccToken)
    const { access_token } = data

    console.log('Token Access: ' + access_token)

    const configGetGame = {
        method: 'GET',
        url: 'https://api.twitch.tv/helix/games/top',
        headers: {
            'client-id': '3mw1zye8ip5qv70h1zid01fwz4m5yi',
            Authorization: `Bearer ${access_token}`,
        },
    }
    const { data: dataGames } = await axios(configGetGame)
    const { data: arrayGamesAPi } = dataGames

    const arrGames = arrayGamesAPi.map((item) => ({
        id: item.id,
        name: item.name,
        img: item.box_art_url.replace('{width}x{height}', '400x400'),
    }))

    console.log('Log: ' + ' Se obtiene lista de juegos')
    res.status(200).json({
        ok: true,
        message: 'Se obtiene todos los juegos',
        data: arrGames,
    })
}

// traer todos Juego de favoritos
const findAllGames = (req, res) => {
    const games = getDataJson()
    if (games.length > 0) {
        res.status(200).json({
            ok: true,
            message: 'Lista de juegos Favoritos',
            data: games,
        })
        console.log('Log: Se han traido  el juego a favoritos')
    } else {
        res.status(200).json({
            ok: true,
            message: 'No tienes juegos favoritos en estos momentos.',
        })
        console.log('Log: No se encontraron juegos en Favoritos')
    }
}
// Guardar Juego Favorito
const saveGame = (req, res) => {
    const games = getDataJson()
    const { body } = req
    games.push(body)

    res.status(200).json({
        ok: true,
        message: 'Se agregado juego a Favoritos',
        data: games,
    })
    const json_games = JSON.stringify(games)
    fs.writeFileSync('games.json', json_games, 'utf-8')
    console.log('Log: ' + 'Se ha guardado el juego a favoritos ')
}

// Elimina un juego
const deleteGameFavorite = (req, res) => {
    const games = getDataJson()
    const { id: idGame } = req.params
    const arrGamedel = games.filter((item) => item.id !== idGame)

    res.status(200).json({
        ok: true,
        message: 'Se ha eliminado juego',
        data: arrGamedel,
    })
    const json_games = JSON.stringify(arrGamedel)
    fs.writeFileSync('games.json', json_games, 'utf-8')
    console.log('Log: Se elimino juego correctamente')
}

module.exports = { getGame, saveGame, findAllGames, deleteGameFavorite }

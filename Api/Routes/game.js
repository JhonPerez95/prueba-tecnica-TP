const router = require('express').Router()

const { token } = require('../config/cofnig')

//controllers
const {
    getGame,
    saveGame,
    findAllGames,
    deleteGameFavorite,
} = require('../Controllers/game')

router.get('/getGames', getGame)
router.get('/gamesFavorites', findAllGames)
router.post('/gamesFavorites', saveGame)
router.delete('/gamesFavorites/:id', deleteGameFavorite)

module.exports = router

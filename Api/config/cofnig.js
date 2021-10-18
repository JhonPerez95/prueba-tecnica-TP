const  config = {
    port: process.env.PORT || 3300,
    configAccToken: {
        method: 'POST',
        url: 'https://id.twitch.tv/oauth2/token',
        data: {
            client_id: '3mw1zye8ip5qv70h1zid01fwz4m5yi',
            client_secret: 'lejooi79mct057fjpk2nz35m6jsugk',
            grant_type: 'client_credentials',
        },
    },
    token : process.env.TOKEN || 'prueba si no tiene '
}

module.exports = config;
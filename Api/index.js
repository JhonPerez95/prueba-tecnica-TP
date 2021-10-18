const app  = require('./server.js')
const {port} = require('./config/cofnig')


// Server Start
app.listen(port, () => {
    console.log(`Server is start in ${port}`)
})

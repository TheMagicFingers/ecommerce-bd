const app = require('./app/config/express')()
const port = process.env.PORT || 3000

app.listen(port, (req, res) => {
    console.log(`Server running on: http://127.0.0.1:${port}`)
})
const express = require('express')
const bodyParser = require('body-parser')

const app = express()
app.set('json spaces', 4)
app.use(express.static('public'))
app.use(bodyParser.urlencoded({extended: true}))


const port = process.env.PORT || 3000

app.listen(port, (req, res) => {
    console.log(`Server listening on http://127.0.0.1:${port}`)
})

app.get('/api/produtos', (req, res) => {

    let produtos = [
        {
            id: 1,
            descricao: "camisa gola polo",
            preco: 82.90,
            qtd_est: 18,
            url_img: 'https://www.bing.com/images/search?view=detailV2&ccid=OlaRBKol&id=14E510FED35DEDA84E8461E7C8757380B213FB5B&thid=OIP.OlaRBKolkdeM8S9waE6DLgHaHa&mediaurl=http%3a%2f%2fprovestuniformes.com.br%2fwp-content%2fuploads%2f2015%2f03%2fcamisa-profissional.jpg&exph=1600&expw=1600&q=camisa+gola+polo&simid=608016875786866363&selectedIndex=0&ajaxhist=0'
        },
        {
            id: 2,
            descricao: "camisa gola polo",
            preco: 54.90,
            qtd_est: 7,
            url_img: 'https://www.bing.com/images/search?view=detailV2&ccid=OlaRBKol&id=14E510FED35DEDA84E8461E7C8757380B213FB5B&thid=OIP.OlaRBKolkdeM8S9waE6DLgHaHa&mediaurl=http%3a%2f%2fprovestuniformes.com.br%2fwp-content%2fuploads%2f2015%2f03%2fcamisa-profissional.jpg&exph=1600&expw=1600&q=camisa+gola+polo&simid=608016875786866363&selectedIndex=0&ajaxhist=0'
        },
        {
            id: 3,
            descricao: "camisa gola polo",
            preco: 62.90,
            qtd_est: 10,
            url_img: 'https://www.bing.com/images/search?view=detailV2&ccid=OlaRBKol&id=14E510FED35DEDA84E8461E7C8757380B213FB5B&thid=OIP.OlaRBKolkdeM8S9waE6DLgHaHa&mediaurl=http%3a%2f%2fprovestuniformes.com.br%2fwp-content%2fuploads%2f2015%2f03%2fcamisa-profissional.jpg&exph=1600&expw=1600&q=camisa+gola+polo&simid=608016875786866363&selectedIndex=0&ajaxhist=0'
        }
    ]

    res.json(produtos)

})
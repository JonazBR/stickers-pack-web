const ejs = require('ejs');

const express = require('express')
const axios = require('axios').default
const app = express()
const path = require('path')
app.set('view engine', 'ejs');



app.get('/', (req, res) => {

})

app.get('/packPage', (req, res) => {
    res.render(path.join(__dirname, 'views/get_pack.ejs'))
})
app.get('/pack', (req, res) => {
    const id = req.query.id
    res.status(200).json([
        {
            url: 'https://i.ibb.co/vJySKQy/maconha.webp'
        }, 
        {
            url: 'https://i.ibb.co/0q07WWF/g-GK-OSGJj-ETRG6-Ytt4m-APSl-Bc8-E7-WKX4-TBxbx2-TDp6-I.webp'
        },
        {
            url: 'https://i.ibb.co/VVb28Zp/s-Drwb0-E1w-UVUPGt9z-JYy5-Vfw-FE43-AZZXCCAXI7-Di8-WE.webp'
        },
        {
            url: 'https://i.ibb.co/L1hYsyt/WTUTLi-QEukp-PAa-Q-SGNr-z-Fy-Fq-qipo-Yp095-M0133-Q.webp'
        },
        {
            url: 'https://i.ibb.co/YfBQKKd/XIt-WK38-QJF5-C1-Hjo-VTb-Ziz6-Frfcj-PLfqw-Uq-ZHs0-C0eg.webp'
        },
        {
            url: 'https://i.ibb.co/6ZNn767/z-YHwe-XTLq6-TVqz-RX8-O-Vzx-Wc-D-s-Jd-W77-Chji-Z8-P58.webp'
        }
])
})


app.listen(3000, () => {
    console.log('Example app listening on port 3000!')
})
// Both line 2 and 3 are same, the js writing style is different
// import express from "express"
const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
    res.send('Done')
})

app.get('/login', (req, res) => {
    res.send('Done')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
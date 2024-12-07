// Both line 2 and 3 are same, the js writing style is different
// import express from "express"
const express = require('express')

const app = express()
const port = 3000

const githubData = {
    "login": "Saumyajeet-Varma",
    "id": 157611771,
    "node_id": "U_kgDOCWT2-w",
    "avatar_url": "https://avatars.githubusercontent.com/u/157611771?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/Saumyajeet-Varma",
    "html_url": "https://github.com/Saumyajeet-Varma",
    "followers_url": "https://api.github.com/users/Saumyajeet-Varma/followers",
    "following_url": "https://api.github.com/users/Saumyajeet-Varma/following{/other_user}",
    "gists_url": "https://api.github.com/users/Saumyajeet-Varma/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/Saumyajeet-Varma/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/Saumyajeet-Varma/subscriptions",
    "organizations_url": "https://api.github.com/users/Saumyajeet-Varma/orgs",
    "repos_url": "https://api.github.com/users/Saumyajeet-Varma/repos",
    "events_url": "https://api.github.com/users/Saumyajeet-Varma/events{/privacy}",
    "received_events_url": "https://api.github.com/users/Saumyajeet-Varma/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Saumyajeet Varma",
    "company": "IIIT Bhubaneswar",
    "blog": "https://saumyajeet-varma.github.io/Portfolio/",
    "location": "Bhubaneswar, Odisha",
    "email": null,
    "hireable": null,
    "bio": null,
    "twitter_username": null,
    "public_repos": 15,
    "public_gists": 0,
    "followers": 1,
    "following": 1,
    "created_at": "2024-01-24T14:08:42Z",
    "updated_at": "2024-11-06T13:59:46Z"
}

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.get('/login', (req, res) => {
    res.send('Login Page')
})

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${port}`)
})
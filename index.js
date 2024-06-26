const express = require("express")
const app = express()

require('dotenv').config()

app.use(express.urlencoded({extended: false}))
app.use(express.json())

const postsRouter = require('./routes/posts.router')
const authRouter = require('./routes/auth.router')
const workflowsRouter = require('./routes/workflows.router');

app.use("/api/v1/posts", postsRouter)
app.use("/api/v1/auth", authRouter)
app.use("/api/v1/workflows",workflowsRouter)

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running....")
})

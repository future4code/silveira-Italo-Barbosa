import express from 'express'
import cors from 'cors'

export const app = express()

app.use(express.json())
app.use(cors())

app.listen(3005, () => {
   console.log('Server run in 3005')
})
import path from "path"
import express from 'express'
import dotenv from 'dotenv'
import cors from "cors"
// import morgon from 'morgon'
import  connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import {notFound, errorHandler} from './middleware/errorMiddleware.js'

dotenv.config()
connectDB()

const app = express()

// if(process.env.NODE_ENV === 'development') {
//     app.use(morgon('dev'))
// }
app.use(cors())
app.use(express.json())     //allows accept json data in body


app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)


// const __dirname = path.resolve()
// app.use('/uploads', express.static(path.join(__dirname, '/uploads')))

// if(process.env.NODE_ENV === 'production') {
//     app.use(express.static(path.json(__dirname, '/frontend/build')))

//     app.get('*', (req, res) => 
//     res.sendFile(path.resolve(__dirname,'frontend', 'build', 'index.html')))
// } else {
//     app.get('/',(req, res) => {
//         res.send('API is running...')
//     })
// }

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5001



app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));             //${process.env.NODE_ENV}
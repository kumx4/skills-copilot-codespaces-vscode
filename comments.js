// Create web server
// Create router
// Create route
// Create controller
// Create model
// Create database
// Create schema
// Create comments collection

// Step 1: Create web server
const express = require('express')
const app = express()
const port = 3000

// Step 2: Create router
const router = express.Router()

// Step 3: Create route
router.get('/comments', (req, res) => {
    res.send('GET /comments')
})

router.post('/comments', (req, res) => {
    res.send('POST /comments')
})

router.put('/comments/:id', (req, res) => {
    res.send('PUT /comments/:id')
})

router.delete('/comments/:id', (req, res) => {
    res.send('DELETE /comments/:id')
})

// Step 4: Create controller

// Step 5: Create model
// Step 6: Create database
// Step 7: Create schema
// Step 8: Create comments collection

// Step 9: Use router
app.use('/api', router)

// Step 10: Start web server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})
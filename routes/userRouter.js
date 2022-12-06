const router = require('express').Router()
const userCtrl = require('../controllers/userCtrl')
const auth = require('../middleware/auth')

//Register
router.post('/register', userCtrl.register)

//Login
router.post('/login', userCtrl.login)

//Logout
router.get('/logout', userCtrl.logout)

//RefreshToken
router.get('/refresh_token', userCtrl.refreshToken)

//Information of user
router.get('/information', auth, userCtrl.getUser)

router.patch('/addcart', auth, userCtrl.addCart)

router.get('/history', auth, userCtrl.history)

module.exports = router
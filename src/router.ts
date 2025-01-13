import { Router } from 'express'
import User from './models/User'

const router = Router()

/** Autenticación y registro de usuarios */
router.post("/auth/register", async (req, res) => {
    
    await User.create(req.body)
    res.send("Respuesta enviada desde Registro")

})

export default router
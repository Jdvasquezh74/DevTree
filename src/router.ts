import { Router } from 'express'
import { body } from 'express-validator'
import { createUser, login } from './handlers'
import { handleInputErrors } from './middleware/validation'

const router = Router()

/** Autenticación y registro de usuarios */
router.post("/auth/register", 
    body('handle')
        .notEmpty()
        .withMessage('El handle no puede ir vacío'),
    body('name')
        .notEmpty()
        .withMessage('El nombre no puede ir vacío'),
    body('email')
        .isEmail()
        .withMessage('E-mail no válido'),
    body('password')
        .isLength({min:8})
        .withMessage('La contraseña es muy corta, mínimo 8 caracteres'),
    handleInputErrors,
    createUser
)

router.post("/auth/login", 
    body('email')
        .isEmail()
        .withMessage('E-mail no válido'),
    body('password')
        .notEmpty()
        .withMessage('La contraseña es obligatoria'),
    handleInputErrors,
    login
)

export default router
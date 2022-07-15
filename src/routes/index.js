import { Router } from 'express'

const router = Router()

router.get('/', (req, res) => res.render('index'))

router.get('/contact', (req, res) => res.render('contact'))

router.get('/about', (req, res) => res.render('about'))

export default router
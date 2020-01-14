import { Request, Response } from 'express'

class HomeController {
    index (req: Request, res: Response): Response {
        return res.json({ message: 'Parabéns! Esqueleto de uma aplicação com Express + Sequelize instalado com sucesso' })
    }
}
export default new HomeController()

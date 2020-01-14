import { Request, Response } from 'express'
import User from '../models/User'

class UserController {
    async index (req: Request, res: Response): Promise<Response> {
        const users = await User.findAll()
        return res.json(users)
    }
}

export default new UserController()

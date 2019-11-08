import User from '../models/User';

export default {
    async index(req, res) {
        const users = await User.findAll();
        return res.json(users);
    }
}
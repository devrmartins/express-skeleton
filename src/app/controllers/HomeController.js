class HomeController {
    index (req,res) {
        return res.json({ message: "Parabéns! Esqueleto de uma aplicação com Express + Sequelize instalado com sucesso" })
    }
}

export default new HomeController();
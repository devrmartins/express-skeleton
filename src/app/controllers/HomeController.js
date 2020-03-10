class HomeController {
    index (req,res) {
        return res.json({ 
            name: "Mercado Livre Micro Serviço",
            version: '1.0',
            author: 'Raffael Martins <raffael.martins@vendaecia.com>' 
        })
    }
}

export default new HomeController();
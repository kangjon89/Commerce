const controller = require('../controllers/controllers');
const path = require('path');

module.exports = app => {
    app.get("/api/products", controller.allProducts);
    app.get("/api/products/:id", controller.oneProduct);
    app.post("/api/products", controller.createProduct);
    app.put("/api/products/:id", controller.updateProduct);
    app.delete("/api/products/:id", controller.deleteProduct);
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve('./public/dist/public/index.html'))
    });
  };
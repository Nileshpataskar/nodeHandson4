const { category } = require("../controller/categoryController");

const categoryRouter=require("express").Router() ;


categoryRouter.get('/categories',category)


module.exports = categoryRouter;
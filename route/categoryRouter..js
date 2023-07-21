const { bollywood } = require("../controller/bollywood");
const { category } = require("../controller/categoryController");
const { fitness } = require("../controller/fit");
const { food } = require("../controller/food");
const { hollywood } = require("../controller/hollywood");
const { technology } = require("../controller/technology");

const categoryRouter=require("express").Router() ;


categoryRouter.get('/categories',category);
categoryRouter.get('/hollywood',hollywood)
categoryRouter.get('/bollywood',bollywood)
categoryRouter.get('/food',food)
categoryRouter.get('/fitness',fitness)
categoryRouter.get('/technology',technology)




module.exports = categoryRouter;
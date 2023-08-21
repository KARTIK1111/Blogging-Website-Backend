const express = require('express');
const router = express.Router();


const authorsController = require('../controllers/authorsController');
const blogsController = require('../controllers/blogsController');
const authMidd = require('../auth/middleware');
const blogsModel = require('../models/blogsModel');


router.post("/authors", authorsController.createAuthor)

router.post("/blogs", authMidd.midd1, blogsController.createBlog)     

router.get("/blogs", authMidd.midd1, blogsController.getBlog)

router.put("/blogs/:blogId", authMidd.midd1, authMidd.authorisation, blogsController.updateblog)

router.delete("/blogs/:blogId", authMidd.midd1, authMidd.authorisation, blogsController.deleteBlogs)

router.delete("/blogs", authMidd.midd1, authMidd.authorisation, blogsController.DeleteBlog)           

router.post("/login", authorsController.authorslogin)



module.exports = router;
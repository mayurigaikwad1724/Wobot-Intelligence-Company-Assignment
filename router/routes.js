const express = require('express')
const {signup,get_signup,login,verifyToken}=require("../controller/user")
const router = express.Router()

const {post_data,get_posts}=require("../controller/get_post")

router.post("/signup", signup)
router.get("/get_signup",get_signup)
router.post("/login",login)
router.post("/post_data",verifyToken,post_data)
router.get("/get_post",get_posts)


module.exports=router
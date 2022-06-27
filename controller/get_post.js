const jwt=require("jsonwebtoken")
const knex=require("../model/create_database")



const post_data = (req, res) => {
    const user={
        name: req.body.name,
        description: req.body.description,
        quantity: req.body.quantity,
        price: req.body.price
    }
    console.log(user)
    knex("product").insert(user)
        .then((data) => {
            res.send({message:"post successfully"})
        })
        .catch((err) => {
            if (err) {
                // console.log(err);
                res.status(400).send({ error: err })
            }
        })

}
const get_posts=(req,res)=>{
    knex.from("product").select("*").where("post_id",req.params.post_id)
    .then((row) =>{
        res.send(row)
    })
    .catch((err)=>{
        res.json({
            message:err
        })
    })  
}


module.exports={post_data,get_posts}
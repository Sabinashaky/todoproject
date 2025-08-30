const express = require('express')
const router = express.Router()
const db = require('../config/db')
/*
router.get('/all',function(req, res){
   db.query("select * from staff WHERE Id=10", function(err,result){
    if(err) return res.status(500).send(err)
        res.send(result)
   }) 
});

router.get('/:id', function(req, res){
    let id = req.params['id']
    db.query("select * from staff Where id = ?",[id], function(err,
        result){
        if(err) return res.status(404).send("server error")
            res.send(result)

    })
    });
   
router.get('/:id', function(req, res) {
    let id = req.params['id'];

    db.query("DELETE FROM staff WHERE id = ?", [id], function(err, result) {
        if (err) {
            return res.status(500).send("Server error");
        }

       

        res.send({ message: "Record deleted successfully" });
    })
});
*/
router.put('/:id',function(req, res){
    let id = req.params['id'];
    const {post, salary}=req.body
    ;

   db.query("UPDATE staff SET post=?,salary=? WHERE id = ?", [post,salary, id], function (err, result) {
        if (err) {
            return res.status(500).send("Server error");
        }
        if (result.affectedRows === 0) {
            return res.status(404).send(`No staff member found with ID ${id}`);
        }
        res.status(200).send(`Updated staff member with ID ${id}`);
    });
});

module.exports = router;
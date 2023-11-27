const express = require("express");
const router = express.Router();
const Comment= require("../controllers/comment");

router.post("/comment/:id", Comment.addcomment);
router.get("/comment", Comment.getcomments);
router.delete(":id/deletcomment/:id", Comment.deleteAllcomment);
router.delete("/comment/:id", Comment.delete);

module.exports = router;

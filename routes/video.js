const express = require("express");
const router = express.Router();
const video = require("../controllers/video")
const multer = require("multer");
const storage = multer.diskStorage({
    destination: (req, file, cb)=>{
        cb(null, "./public/files");
    },
    filename:(req, file, cb)=>{
      const name = file.originalname.toString().split(" ").join("_")
        cb(null ,Date.now()+"_"+name);
    },
});
let upload = multer({storage: storage});

/**
 * @swagger
 * components:
 *   schemas:
 *      Add video:
 *       type: object  
 *       properties:
 *         id:
 *           type: string
 *           description: The auto-generated id of the book
 *         course_name:
 *           type: string
 *           description: The course name
 *         course_description:
 *           type: string
 *           description: The description of course Module
 *       example:
 *         id: d5fE_asz
 *         title: The New Turing Omnibus
 *         author: Alexander K. Dewdney
 */

 /**
  * @swagger
  * tags:
  *   name: Add video
  *   description: This is used for managing the course mdules for the courses 
  */

/**
 * @swagger
 * /video:
 *   post:
 *     summary: Create a new course Module
 *     tags: [Add video]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Add video'
 *     responses:
 *       200:
 *         description: The Course was successfully created
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Add video'
 *       500:
 *         description: Some server error
 */
router.post("/video",upload.single('video'), video.post);
/**
 * @swagger
 * /video/:
 *   get:
 *     summary: Returns the list of all the Courses
 *     tags: [Add video]
 *     responses:
 *       200:
 *         description: The list of the Add videos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Add video'
 */
router.get("/video", video.get);
/**
 * @swagger
 * /video:
 *   get:
 *     summary: Get the Course Module by id
 *     tags: [Add video]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The Add video id
 *     responses:
 *       200:
 *         description: The course description by id
 *         contens:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Add video'
 *       404:
 *         description: The video  was not found
 */


router.get("/video/:id", video.getdetails);
/**
 * @swagger
 * /video/(id):
 *   delete:
 *     summary: Remove the Course Module by id
 *     tags: [Add video]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The  video id
 * 
 *     responses:
 *       200:
 *         description: The  video was deleted
 *       404:
 *         description: The video was not found
 */
router.delete("/video/:id", video.delete);
/**
 * @swagger
 * /video/(id):
 *  put:
 *    summary: Update the Course Module by the id
 *    tags: [Add video]
 *    parameters:
 *      - in: path
 *        name: id
 *        schema:
 *          type: string
 *        required: true
 *        description: The course id
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Add video'
 *    responses:
 *      200:
 *        description: The course was updated
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Add video'
 *      404:
 *        description: The  video was not found
 *      500:
 *        description: Some error happened
 */
router.put("/video/:id", video.put);

module.exports = router;

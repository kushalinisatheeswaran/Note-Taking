const express = require('express');
const { register,login,getCurrentUser,uploadProfileImage } = require('../controllers/authCountroller');
const upload = require('../middleware/fileupload');
const auth =require("../middleware/auth")
const router = express.Router();

router.post('/register',upload.single('profileImage'), register);
router.post('/login', login);
router.post('/me',auth, getCurrentUser);
router.post("/upload-profile-image",auth,upload.single("profile_image"),uploadProfileImage);


module.exports = router;

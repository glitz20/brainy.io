const express = require("express");
const router = express.Router();
const cloudinary = require("cloudinary");
const multer = require("multer");
const upload = multer({ dest: "./uploads/" });

cloudinary.config({
    cloud_name: 'dgezrstzt',
    api_key: '576413969627848',
    api_secret: '92rJAaILX39e7VpNDTLBrmehKBw'
});


router.post("/", upload.single("file"), (req, res) => {
    console.log(req.file.path);
    cloudinary.v2.uploader
        .upload(req.file.path, { public_id: 'single_page_pdf' }, function (err, result) {
            if (err) {
                console.warn(err);
                return res.sendStatus(500)
            }

            else {

                const abc = result.url;
                console.log(abc);
                return res.status(200).json({
                    success: true,
                    fileUrl: abc
                });
            }

        });
        
});

router.post("/response", upload.single("file"), (req, res) => {
    console.log(req.file.path);
    cloudinary.v2.uploader
        .upload(req.file.path, { public_id: 'single_page_pdf' }, function (err, result) {
            if (err) {
                console.warn(err);
                return res.sendStatus(500)
            }

            else {

                const abc = result.url;
                console.log(abc);
                return res.status(200).json({
                    success: true,
                    fileUrl: abc
                });
            }

        });

});


module.exports = router;
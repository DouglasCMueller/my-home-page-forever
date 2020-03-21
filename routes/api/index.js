const path = require("path");
const router = require("express").Router();
const eventRoutes = require("./events");

// API routes
router.use("/events", eventRoutes);

//if no API routes are hit, send the React app
router.use(function(req,res){
    res.sendFile(path.join(__dirname, "..client/build/index.html"))
});

module.exports = router;

const router = require("express").Router();
const eventRoutes = require("./events");
const userRoutes = require("./users");
const websiteRoutes = require("./websites");
const todoRoutes = require('./todos');

// API routes
router.use("/events", eventRoutes);

router.use("/users", userRoutes);
router.use("/todos", todoRoutes);
router.use("/websites", websiteRoutes);

//if no API routes are hit, send the React app
router.use(function(req,res){
    res.sendFile(path.join(__dirname, "..client/build/index.html"))
});

module.exports = router;
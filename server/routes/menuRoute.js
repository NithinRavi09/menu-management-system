const express = require("express")
const {getMenu, addMenu, getMenuItems, addMenuItem, getMenuById} = require("../controllers/menuController.js")

const router = express.Router()

router.get('/getMenu', getMenu);
router.post('/addMenu', addMenu);

router.get('/get-Items/:menuId', getMenuItems);
router.get('/get-Menu-Data/:menuId', getMenuById)
router.post('/addMenuItem', addMenuItem);


module.exports = router;
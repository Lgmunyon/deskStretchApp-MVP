// const express = require("express");

// const router = express.Router();
// const homeController = require("../controllers/home");

// // render landing page @controllers>home
// router.get('/', homeController.getIndex);



// module.exports = router;

const express = require("express");
const router = express.Router();
const authController = require("../controllers/auth");
const homeController = require("../controllers/home");
const { ensureAuth, ensureGuest } = require("../middleware/auth");

//Main Routes - simplified for now
router.get("/", homeController.getIndex);
router.get("/login", authController.getLogin);
router.post("/login", authController.postLogin);
router.get("/logout", authController.logout);
router.get("/signup", authController.getSignup);
router.post("/signup", authController.postSignup);
router.get("/stretches", authController.getStretches);

module.exports = router;

//Fetch API
document.querySelector('button').addEventListener('click', getFetch) //Swap 'button' for 'a'? Give each body part individual fetch request?

function getFetch() {
    const choice = document.querySelector('input').value
    const url = `https://fetch-a-stretch-api.vercel.app/api/${choice}`

    fetch(url)
    .then(res => res.json()) //parse response as JSON
    .then(data => {
        console.log(data)
    })
    .catch(err => {
        console.log(`error ${err}`)
    })
}

const express = require('express');
const User = require('../models/User');
const router = express.Router();
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

//Usually keep this in .env file
const JWT_SECRET = "itsmebaby";

// ROUTE 1: Create a user using: POST "/api/auth/createuser". No login required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Password must be atleast 5 characters').isLength({ min: 5 }),
], async (req, res) => {
    //if there are errors then send bad request and the error   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        // check wheather the user with same email is exist or not
        let user = await User.findOne({ email: req.body.email });
        if (user) {
            return res.status(400).json({ error: "User with the same email is already exist" });
        }
        const salt = bcrypt.genSaltSync(10);
        const passHash = bcrypt.hashSync(req.body.password, salt);

        // create new user
        user = await User.create({
            name: req.body.name,
            email: req.body.email,
            password: passHash
        });
        const data = {
            user: {
                id: user.id,
            }
        }
        const jwtToken = jwt.sign(data, JWT_SECRET);
        res.json({ jwtToken });

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal server error");
    }
});


// ROUTE 2: Authenticate a user using: POST "/api/auth/login". No login required
router.post('/login', [
    body('email', 'Enter a valid email').isEmail(),
    body('password', 'Enter a valid password').exists(),
], async (req, res) => {
    //if there are errors then send bad request and the error   
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Please enter valid details to login" });
        }

        const passCompare = bcrypt.compareSync(password, user.password);
        if (!passCompare) {
            return res.status(400).json({ error: "Please enter valid details to login" });
        }
        const data = {
            user: {
                id: user.id,
            }
        }
        const jwtToken = jwt.sign(data, JWT_SECRET);
        res.json({ jwtToken });

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});

// ROUTE 3: Get logged in user details using: POST "/api/auth/getuser". login required
router.post('/getuser', fetchuser, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);

    } catch (error) {
        console.error(error);
        res.status(500).send("Internal server error");
    }
});


module.exports = router;
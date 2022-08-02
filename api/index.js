// Importing modules
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/dbconn');
const {compare, genSalt, hash} = require('bcrypt');

// Express app
const app = express();

// Express router
const router = express.Router();

// Configuration 
const port = parseInt(process.env.Port) || 4000;
app.use(router, cors(), express.json(), express.urlencoded({ extended: true }));
app.listen(port, ()=> {console.log(`Server is running on port ${port}`)});



/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// REGISTER
router.post('/register', bodyParser.json(), async (req, res)=> {
    const bd = req.body;
    // Encrypting a password
    let generateSalt = await genSalt();
    bd.userpassword = await hash(bd.userpassword, generateSalt);
    // Query

    const strQry = 
    `
    INSERT INTO users(firstname, lastname, gender, address, email, userpassword)
    VALUES(?, ?, ?, ?, ?, ?);
    `;
    //
    db.query(strQry, 
        [bd.firstname, bd.lastname, bd.gender, bd.address, bd.email, bd.userpassword],
        (err, results)=> {
            if(err) throw err;
            res.send(`number of affected row/s: ${results.affectedRows}`);
        })
});




/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// LOGIN
router.post('/login', bodyParser.json(), (req, res)=> {
    const {email, userpassword} = req.body
    const strQry = 
    `
    SELECT firstname, gender, email, userpassword
    FROM users
    WHERE email = '${email}';
    `;
    db.query(strQry, [req.body.email, req.body.userpassword], (err, results)=> {
    if (compare(userpassword, req.body.userpassword) == true) {
        res.send('Ok')
    } else {
        res.send('404 ERROR');
    }

    })
/*
Have to compare: 
compare(req.body.userpassword, results.userpassword)
======
require('crypto').randomBytes(64).toString('hex')
*/
})



/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// CREATE PRODUCT
router.post('/products', bodyParser.json(), (req, res)=> {
    const bd = req.body; 
    bd.totalamount = bd.quantity * bd.price;
    // Query
    const strQry = 
    `
    INSERT INTO products(prodName, prodUrl, quantity, price, totalamount, dateCreated)
    VALUES(?, ?, ?, ?, ?, ?);
    `;
    //
    db.query(strQry, 
        [bd.prodName, bd.prodUrl, bd.quantity, bd.price, bd.totalamount, bd.dateCreated],
        (err, results)=> {
            if(err) throw err;
            res.send(`number of affected row/s: ${results.affectedRows}`);
        })
});




/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// GET ALL PRODUCTS
router.get('/products', (req, res)=> {
    // Query
    const strQry = 
    `
    SELECT id, prodName,prodUrl, quantity, price, totalamount, dateCreated, userid
    FROM products;
    `;
    db.query(strQry, (err, results)=> {
        if(err) throw err;
        res.json({
            status: 200,
            results: results
        })
    })
});



/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// GET ONE PRODUCT
router.get('/products/:id', (req, res)=> {
    // Query
    const strQry = 
    `
    SELECT id, prodName, prodUrl, quantity, price, totalamount, dateCreated, userid
    FROM products
    WHERE id = ?;
    `;
    db.query(strQry, [req.params.id], (err, results)=> {
        if(err) throw err;
        res.json({
            status: 200,
            results: (results.length <= 0) ? "Sorry, no product was found." : results
        })
    })
});



/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// UPDATE PRODUCT
router.put('/products', bodyParser.json(), (req, res)=> {
    const bd = req.body;
    // Query
    const strQry = 
    `UPDATE products
     SET ?
     WHERE id = ?`;

    db.query(strQry,[bd.id], (err, data)=> {
        if(err) throw err;
        res.send(`number of affected record/s: ${data.affectedRows}`);
    })
});




/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// DELETE PRODUCT
router.delete('/products/:id', (req, res)=> {
    // Query
    const strQry = 
    `
    DELETE FROM products 
    WHERE id = ?;
    `;
    db.query(strQry,[req.params.id], (err, data, fields)=> {
        if(err) throw err;
        res.send(`${data.affectedRows} row was affected`);
    })
});
/*
res.status(200).json({
    status: 200,
    results: results
})
*/
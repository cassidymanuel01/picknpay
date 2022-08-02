// Importing modules
require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/dbconn');
const {compare, genSalt, hash} = require('bcrypt');
const jwt = require('jsonwebtoken')

// Express app
const app = express();

// Express router
const router = express.Router();

// Configuration 
const port = parseInt(process.env.PORT) || 4000;
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
    const strQry = `SELECT * FROM users WHERE ? ;`;
    let user = {
        email: req.body.email
    };

    db.query(strQry, user, async(err, results)=> {
        if (err) throw err;

        if (results.length === 0) {
            res.send('Email not found. Please register')
        } else {
            const isMatch = await compare(req.body.userpassword, results[0].userpassword);
            if (!isMatch) {
                res.send('Password is Incorrect')
            } else {
                const payload = {
                    user: {
                      firstname: results[0].firstname,
                      lastname: results[0].lastname,
                      gender: results[0].gender,
                      address: results[0].address,
                      userRole: results[0].userRole,
                      email: results[0].email,
                      userpassword: results[0].userpassword,
                    },
                  };

                jwt.sign(payload,process.env.jwtSecret,{expiresIn: "365d"},(err, token) => {
                    if (err) throw err;
                    res.json({
                        tokenSecret: token
                    });
                  }
                );  
            }
        }

    }) 
})



/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// VERIFY USER
router.get("/users/verify", (req, res) => {
    const token = req.header("x-auth-token");

    jwt.verify(token, process.env.jwtSecret, (error, decodedToken) => {
      if (error) {
        res.status(401).send("Unauthorized Access!");
      } else {
        res.status(200).send(decodedToken);
      }
    });
  });




/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// CREATE PRODUCT
router.post('/products', bodyParser.json(), (req, res)=> {
    const bd = req.body; 
    bd.totalamount = bd.quantity * bd.price;
    // Query
    const strQry = 
    `
    INSERT INTO products(prodName, prodUrl, quantity, price, totalamount, category, stockDateImported)
    VALUES(?, ?, ?, ?, ?, ?, ?);
    `;
    //
    db.query(strQry, 
        [bd.prodName, bd.prodUrl, bd.quantity, bd.price, bd.totalamount, bd.category, bd.stockDateImported],
        (err, results)=> {
            if(err) throw err;
            res.status(201).send(`number of affected row/s: ${results.affectedRows}`);
        })
});




/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */
// GET ALL PRODUCTS
router.get('/products', (req, res)=> {
    // Query
    const strQry = 
    `
    SELECT id, prodName,prodUrl, quantity, price, totalamount, stockDateImported, userid
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
    SELECT id, prodName, prodUrl, quantity, price, totalamount, stockDateImported, userid
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
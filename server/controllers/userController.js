import query from '../config.js';
import bcrypt from 'bcrypt';

const userController = {};

userController.login = (req,res,next) => {
    const email = req.body.email
    const password = req.body.password 


    const getPasswordHashQry = `
    SELECT password_hash 
    FROM users
    WHERE email = $1
    `

    query(getPasswordHashQry,[email])
    .then((result)=>{
        // if nothing matches then user does not exist
        if (result.rows.length === 0) {
            return res.status(401).json({ error: 'Invalid email.' });
        }

        const passwordHash = (result.rows[0].password_hash)
        return bcrypt.compare(password,passwordHash)
    })
    .then(match => {
        if (!match){
            return res.status(401).json({ error: 'Invalid email or password.' })
        }
        return next()
    })
    .catch(err =>{
        return next(err)
    })
}

userController.signup = (req,res,next) => {
    console.log('req body',req.body)
    const email = req.body.email
    const password = req.body.password 

    const userExistsQry = 
        `SELECT EXISTS (
        SELECT 1
        FROM users
        WHERE email = $1
        )`
    // const userExistsQry = 'SELECT * FROM users'
    
    query(userExistsQry,[email])
        // check if email is alrdy being used
        .then(result => {
            const exists = result.rows[0].exists

            // if the email alrdy exists in the db return error message
            if (exists) {
                return res.status(400).json({ error: 'This email is already in use.' });

            }

            // otherwise, hash user's pw (this is an asyn func)
            else {
                return bcrypt.hash(password,10)
            }  
        })
        // store user info (including hashed pw) in db
        .then(passwordHash => {
            const newUserQry = {
                text: 'INSERT INTO users(email, password_hash) VALUES($1, $2)',
                values: [email, passwordHash],
              };
            return query(newUserQry.text, newUserQry.values);
        })
        .then(()=> next())
        .catch(err => {
            return next(err)
        })    
}

export default userController;
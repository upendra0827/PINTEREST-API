const pool = require('../../db')
const queries = require('./queries')

// GET THE PINTEREST TABLE 

const getPinterest = (req, res) => {
    pool.query(queries.getPinterest, (error, result) => {
        if (error) throw error
        res.status(200).json(result.rows)
    })
}

// GET THE ROW BY ID 

const getPinterestById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getPinterestById, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}


// ADD NEW ROW TO PINTEREST

const addPinterest = (req, res) => {
    const { postid, userid, image, video, caption } = req.body

    pool.query(queries.addPinterest, [userid, image, video, caption], (error, results) => {
        if (error) console.log(error)
        res.status(201).send("row created successfully")
    })
}

// REMOVE ROW IN PINTEREST 

const removePinterest = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.getPinterestById, [id], (error, results) => {

        pool.query(queries.removePinterest, [id], (error, results) => {
            if (error) throw error
            res.status(200).send("removed successfully")
        })
    })
}

// TO GET THE USERS

const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, result) => {
        if (error) {
            console.log(error)
        }
        else {
            res.status(200).json(result.rows)
        }
    })
}


// ADD USER 

const addUser = (req, res) => {
    const { name, email, password } = req.body

    pool.query(queries.addUser, [name, email, password], (error, results) => {
        if (error) console.log(error)
        res.status(201).send("User created successfully")
    })
}



// TO GET USERBYID

const getUserById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getUserById, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

// TO GET USER BY EMAIL

const getUserByMail = (req, res) => {
    console.log(req)
    const { email} = req.params.email
    pool.query(queries.getUserById, [email], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}


// TO DELETE USER BY ID

const removeUserById = (req, res) => {
    const id = parseInt(req.params.id)

    pool.query(queries.getPinterestById, [id], (error, results) => {

        pool.query(queries.removeUserById, [id], (error, results) => {
            if (error) throw error
            res.status(200).send("removed successfully")
        })
    })
}


// UPDATE PINTEREST ROW 

const updatePinterest = (req, res) => {
    const id = parseInt(req.params.id)
    const { postid, userid, image, video,caption } = req.body

    pool.query(queries.getPinterestById, [id], (error, results) => {
        const noMatch = !results.rows.length
        if (noMatch) res.send("no match found")

        pool.query(queries.updatePinterest, [userid, image, video, caption, id], (error, results) => {
            if (error) throw error
            res.status(200).send("updated")
        })
    })
}

// GET COMMENTS BY ID 

const getCommentById = (req, res) => {
    const id = parseInt(req.params.id)
    pool.query(queries.getCommentById, [id], (error, results) => {
        if (error) throw error
        res.status(200).json(results.rows)
    })
}

// ADD COMMENTS 

const addComments = (req, res) => {
    const { postid, commentid, data } = req.body

    pool.query(queries.addComments, [postid, data], (error, results) => {
        if (error) console.log(error)
        res.status(201).send("comment added successfully")
    })
}

module.exports = {
    getPinterest,
    getPinterestById,
    addPinterest,
    removePinterest,
    updatePinterest,
    getUsers,
    getUserById,
    removeUserById,
    getCommentById,
    addComments,
    addUser,
    getUserByMail
}
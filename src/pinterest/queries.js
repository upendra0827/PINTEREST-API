const getPinterest = "SELECT * FROM pinteresttable"
const getPinterestById = "SELECT * FROM pinteresttable WHERE postid=$1"
const addPinterest = "INSERT INTO pinteresttable (userid, image, video, caption) VALUES ($1, $2, $3, $4)"
const removePinterest = "DELETE FROM pinteresttable WHERE postid = $1"
const updatePinterest = "UPDATE pinteresttable SET userid=$1, image=$2, video=$3, caption=$4 WHERE postid=$5"

const checkEmailExists = 'SELECT * FROM users WHERE email = $1'
const getUsers = "SELECT * FROM users"
// const getUserById = "SELECT * FROM users WHERE userid=$1"
const removeUserById = "DELETE FROM users WHERE userid = $1"
const addUser = "INSERT INTO users (name, email, password) VALUES ($1, $2, $3)"
const getUserByMail = "SELECT * FROM users where email=$1"

const getCommentById = "SELECT * FROM comments where postid=$1"
const addComments = "INSERT INTO comments (postid, data) VALUES ($1, $2)"

module.exports = {
    getPinterest,
    getPinterestById,
    addPinterest,
    removePinterest,
    updatePinterest,
    getUsers,
    // getUserById,
    removeUserById,
    getCommentById,
    addComments,
    addUser,
    getUserByMail,
    checkEmailExists
}
const getPinterest = "SELECT * FROM pinterestTable"
const getPinterestById = "SELECT * FROM pinterestTable WHERE postId=$1"
const addPinterest = "INSERT INTO pinterestTable (userid, image, video, caption) VALUES ($1, $2, $3, $4)"
const removePinterest = "DELETE FROM pinterestTable WHERE postId = $1"
const updatePinterest = "UPDATE pinterestTable SET userid=$1, image=$2, video=%3, caption=$4 WHERE postId=$5"

const getUsers = "SELECT * FROM users"
const getUserById = "SELECT * FROM users WHERE userid=$1"
const removeUserById = "DELETE FROM users WHERE userid = $1"

const getCommentById = "SELECT * FROM comments where id=$1"

module.exports = {
    getPinterest,
    getPinterestById,
    addPinterest,
    removePinterest,
    updatePinterest,
    getUsers,
    getUserById,
    removeUserById,
    getCommentById
}
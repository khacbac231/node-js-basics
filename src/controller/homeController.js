import pool from '../configs/connectdb';
let getHomePage = async (req, res) => {
    const [rows, fields] = await pool.execute('SELECT * FROM users');
    return res.render("index.ejs", { dataUser: rows });
};
let getUserPage = async (req, res) => {
    const [rows, fields] = await pool.execute(`SELECT * FROM users WHERE id = ${req.params.userId}`);
    if (typeof rows[0] === "undefined") {
        console.log(rows[0]);
        return res.render("404.ejs");
    }
    return res.render("user.ejs", { dataUser: rows[0] });
};
let createUserPage = async (req, res) => {
    console.log(req.body);
    let { firstName, lastName, email, address } = req.body;
    await pool.execute('INSERT INTO users (firstName, lastName, email, address) VALUES (?,?,?,?)',
        [firstName, lastName, email, address]);
    return res.redirect("/");
};
let deleteUserPage = async (req, res) => {
    let { userId } = req.body;
    console.log(userId);
    await pool.execute('DELETE FROM users WHERE id =?', [userId]);
    return res.redirect("/");
};
let editUserPage = async (req, res) => {
    let id = req.params.userId;
    let [user] = await pool.execute(`SELECT * FROM users WHERE id = ${id}`);
    return res.render("update.ejs", { dataUser: user[0] });
};
let updateUserPage = async (req, res) => {
    let id = req.params.userId;
    let { firstName, lastName, email, address } = req.body;
    console.log(req.body);
    await pool.execute('UPDATE users SET firstName =?, lastName =?, email =?, address =? WHERE id =?', [firstName, lastName, email, address, id]);
    return res.redirect("/");
};
module.exports = {
    getHomePage,
    getUserPage,
    createUserPage,
    deleteUserPage,
    editUserPage,
    updateUserPage
};

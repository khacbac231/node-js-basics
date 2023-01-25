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
module.exports = {
    getHomePage,
    getUserPage
};

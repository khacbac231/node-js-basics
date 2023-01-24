import connection from '../configs/connectdb';
let getHomePage = (req, res) => {
    let data = [];
    connection.query(
        'SELECT * FROM `users`',
        function (err, results, fields) {
            results.map((result) => {
                data.push({
                    id: result.id,
                    email: result.email,
                    address: result.address,
                    firstName: result.firstName,
                    lastName: result.lastName,
                });
            });
            return res.render("index.ejs", { dataUser: data });
        }
    );
};
module.exports = {
    getHomePage
};
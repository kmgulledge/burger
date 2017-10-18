module.exports = function() {
    switch (process.env.NODE_ENV) {
        case 'production':
            return {
                host: "ffn96u87j5ogvehy.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
                user: "fbsyq1ongmea1pcl",
                password: "oryv4x6nqcdgelyh",
                database: "fk8cj4s3vh6gau53"
            }; // end case{}

        default:
            return {
                host: "localhost",
                user: "root",
                password: "",
                database: "burgers_db"
            }; // end default{}
    } //end switch{}
}; // end module.exports()
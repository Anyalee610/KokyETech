const {pool} = require('../db.js');

class engineerLogIn {
    //this grabs all the engineers accounts 
    static getAllEngineerByLoginFromDB(username, password) {
        return pool.query('SELECT * FROM engineers Where username = $1 and password = $2',[username,password]
        );
    }
    

}


module.exports = engineerLogIn;
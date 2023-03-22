import { Sequelize } from "sequelize";
import db from '../config/Database.js'; //.js!!!!

const {DataTypes} = Sequelize;

//define users object:
const Users = db.define('users',
{
    username : {
        type : DataTypes.STRING
    },
    password : {
        type : DataTypes.STRING
    },
    // defaultScope:{
    //     attributes : {
    //         exclude : ['name']
    //     }
    // }
    //if we have the columns
    // createdAT : {
    //     type : DataRypes.DATE,
    //     fiels : 'createdat'
    // }

},

    {
        timestamps : false,
        freezeTableName : true, //if it faallse => Sequelize will add "s" to tableName to make plural
        tableName : 'users' // it is another way to avoid making plural
    }
    
)
// Sequelize mandatory 3 colomns:
// IdleDeadline,createAT, updateAT
//to ignore other columns put :   // defaultScope:{
    //     attributes : {
    //         exclude : ['name','createdAt]
    //     }
    // }
export default Users
const dotenv=require('dotenv');

dotenv.config();

module.exports={
    PORT:process.env.PORT
}
// now you would not have to make call to process.env agaun and again 
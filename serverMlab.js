const mongoose = require('mongoose')

require('dotenv').config()

let app = express();
const PORT = process.env.PORT || 5000;

const dbURL = process.env.MONGO_DB_URL

mongoose.connect(dbURL, function(err){
  if(err){
    console.log('Error connecting to: '+ dbURL)
  }
  else{
    console.log('Connected to: '+ dbURL)
  }
})

app.use(cors());
app.options('*', cors());    
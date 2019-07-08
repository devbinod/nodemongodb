
let app = require('./app')
let PORT = 3000;
let mongoose = require('mongoose');

mongoose.connect( 'mongodb://localhost:27017/testdb',{
    useNewUrlParser : true,
    useCreateIndex: true,
    useFindAndModify : false

}).then(con => {
    console.log(con.connections);
    console.log("connecton sucessfully")
});



app.listen(PORT,() => {
    console.log(`application is running on port ${PORT}`);
});
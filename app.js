

let express = require('express');

let app = express();

app.use(express.json());

let morgan = require('morgan');

let userRouter = require('./routes/userRoute');

let tourRouter = require('./routes/tourRoute');

console.log("Called.................")
app.use("/api/v1/users",userRouter);
app.use("/api/v1/tours", tourRouter);

app.use(morgan('dev'));


app.get('/', (res, resp) => {

    resp.status(200).json({
        message: "hello from node js"
    });
});

module.exports = app;

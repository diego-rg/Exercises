const express = require('express');
const app = express();
const morgan = require('morgan');

const AppError = require("./AppError");

app.use(morgan('tiny'));

app.use((req, res, next) => {
    req.requestTime = Date.now();
    console.log(req.method, req.path);
    next();
})

app.use('/dogs', (req, res, next) => {
    console.log("I LOVE DOGS!!")
    next();
})

//Estandar
const verifyPassword = (req, res, next) => {
    const { password } = req.query;
    if (password === 'chickennugget') {
        next();
    }
    throw new AppError("Password required noooooob!", 401);
}


// app.use((req, res, next) => {
//     console.log("THIS IS MY FIRST MIDDLEWARE!!!")
//     return next();
//     console.log("THIS IS MY FIRST MIDDLEWARE - AFTER CALLING NEXT()")
// })
// app.use((req, res, next) => {
//     console.log("THIS IS MY SECOND MIDDLEWARE!!!")
//     return next();
// })
// app.use((req, res, next) => {
//     console.log("THIS IS MY THIRD MIDDLEWARE!!!")
//     return next();
// })

//Estandar
app.get("/error", (req, res) => {
    res.send(pataca);
})

app.get('/', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('HOME PAGE!')
})

app.get('/dogs', (req, res) => {
    console.log(`REQUEST DATE: ${req.requestTime}`)
    res.send('WOOF WOOF!')
})

app.get('/secret', verifyPassword, (req, res) => {
    res.send('MY SECRET IS: Sometimes I wear headphones in public so I dont have to talk to anyone')
})

// app.use((req, res) => {
//     res.status(404).send('NOT FOUND!')
// })

//Personalizado
// app.use((error, req, res, next) => {
//     console.log("E R R O R ! ! !")
//     res.status(500).send("We have an error!!");
// })

//Ou:
app.use((error, req, res, next) => {
    console.log("E R R O R ! ! !")
    next(error);
})

//Uso de clase AppError + status/message strandar linea 84
app.get('/admin', (req, res) => {
    throw new AppError('You are not an Admin!', 403)
})
//Uso de clase AppError:
app.use((err, req, res, next) => {
    const { status = 500, message = 'Something Went Wrong' } = err;
    res.status(status).send(message)
})

app.listen(3000, () => {
    console.log('App is running on localhost:3000')
})

//next() chama seguinte middleware; next(error) saca o aviso de erro
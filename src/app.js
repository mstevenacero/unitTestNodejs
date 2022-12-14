import express, { response } from "express";

const app = express()
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


app.get('/task', (req, res) => {
    let message = "respuesta"
    res.status(200).send({ data: message, status: 200 })

})
app.post('/task/one', (req, res ) => {
   console.log("taks",req.body);
    //return res.status(200).send({data:"success full "})
    try{
        
    let autor = req?.body['Author']
    let level = req?.body['level']
    if (autor === undefined || level === undefined) {
        res.sendStatus(400)
    }else{
        res.sendStatus(200)
    }
    
    }catch(e){

        console.log("error de consola",e);
    }
    
})


export default app

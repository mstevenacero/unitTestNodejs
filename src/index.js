import app from "./app.js";
import express from "express";

const PORT = process.env.PORT || 3005

app.listen(PORT,()=>{

    console.log("se esta escuchando por el puerto: ",PORT);
})
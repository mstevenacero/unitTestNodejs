import app from "../src/app";
import request from "supertest";


describe('GET /task',()=>{
 test('the answer is 200 ',async ()=>{
    const response =  await request(app).get('/task').send()
    expect(response.statusCode).toBe(200)
 })

 test('the answer should with  array', async()=>{
    const response = await request(app).get('/task').send()
    expect(response.body).toBeInstanceOf(Object)
 })

})

describe('POST /task',()=>{
    var  tmpSend = {
        Author : "michael",
        level:2
    }
    test('the answer should respond with a status 200',async ()=>{
       console.log("tmpSend",typeof(tmpSend));
        const response = await request(app).post('/task/one').send(tmpSend)
        expect(response.statusCode).toBe(200)
    } )
    test('the answer should response 400 if not ',async()=>{
        const response = await request(app).post('/task/one').send(tmpSend)
        expect(response.statusCode).toBe(400)
    })

})



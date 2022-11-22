const express = require('express')
const {response} = require ('express')
const {uuid} = require('uuidv4')// id unico


const app = express()
const times = []
const campeonato = []
const divisao = []
app.use(express.json())


app.get('/times', (request, response)=> {
    return response.json(times)})

    app.get('/campeonato', (request, response)=> {
        return response.json(campeonatos)
          
})

app.get('/divisao', (request, response)=> {
    return response.json(campeonatos)
    

})
//visualizar------------------------------------------

app.post('/times', (request, response)=>{
    const {nome, curso} = request.body
    const time = {id:uuid(), time, Campeonatos, divisões}
    times.push(time)
    return response.status(201).json(time)

})

app.post('/campeonatos', (request, response)=>{
    const {nome, curso} = request.body
    const campeonato = {id:uuid(), nome, curso}
    times.push(campeonato)
    return response.status(201).json(campeonato)
})


app.post('/divisoes', (request, response)=>{
    const {nome, curso} = request.body
    const divisao = {id:uuid(), nome, curso}
    times.push(divisao)
    return response.status(201).json(divisao)
})


//inserir----------------------------------------------------------------------

//put atualiza
app.put('/times/:id',(request, response) => {
    const { id } = request.params
    const { nome, curso } = request.body
    const newTimes = {id, nome, curso}
    const timeindex = times.findIndex(time => time.id == id)
    times[timesindex] = newTimes;
    return response.json(newTimes)
})

app.put('/campeonatos/:id',(request, response) => {
    const { id } = request.params
    const { nome, curso } = request.body
    const newCampeonatos = {id, nome, curso}
    const campeonatoindex = campeonatos.findIndex(campeonato => campeonato.id == id)
    times[campeonatosindex] = newCampeonatos;
    return response.json(newCampeonatos)
})


app.put('/divisoes/:id',(request, response) => {
    const { id } = request.params
    const { nome, curso } = request.body
    const newDivisoes = {id, nome, curso}
    const divisaoindex = divisoes.findIndex(divisao => divisao.id == id)
    times[divisoesindex] = newDivisoes;
    return response.json(newDivisoes)
})

//delete apaga---------------------------------------------------------
app.delete('/times/:id',(request, response) => {
    const { id } = request.params
    const timeindex = times.findIndex(time => time.id == id)
    times.splice(timeindex, 1)
    return response.status(204).send()
})

app.delete('/campeonatos/:id',(request, response) => {
    const { id } = request.params
    const campeonatoindex = campeonatos.findIndex(campeonato => campeonato.id == id)
    times.splice(campeonatoindex, 1)
    return response.status(204).send()
})

app.delete('/divisoes/:id',(request, response) => {
    const { id } = request.params
    const divisaoindex = divisoes.findIndex(divisao => divisao.id == id)
    times.splice(divisaoindex, 1)
    return response.status(204).send()
})
 //time




app.listen(8181, () =>{
    console.log('O Servidor foi iniciado!')
})

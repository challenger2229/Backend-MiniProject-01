


const express=require('express');

const app=express();//server is created


//middleware
app.use(express.json())// we have to use this for JSON files as express cannot understand req.body data


//programming the server
//name of API would be notes which would have title and description ( front end- postman)

let notes=[]// we are populating this array and printing it on user's request

//post API
app.post("/notes",(req,res)=>{
    console.log(req.body) // req.body will contain title and description in object form ( JSON)
    notes.push(req.body)// we will put that in that empty array
    res.json({
        message : "Note added to the list successfully",
        //notes: notes
    })
})

//get API
app.get('/notes',(req,res)=>{
    res.json(notes);
})

//delete a note : we will need a delete method by passing it that index
// we have to crreate a api at postman with delete
app.delete('/notes/:index',(req,res)=>{ //we dont have to use ':' on front-end (postman)
    const index=req.params.index
    delete notes[index]
    res.json({
        message : "note has been successfully eliminated",
    })
})

//update API
//we have to use PATCH method here to update a task
//PATCH/notes/:index
app.patch("/notes/:index",(req,res)=>{
    const index =req.params.index
    const {title}=req.body
    notes[index].title=title

    res.json({
        message : "note updated successfully"
    })
})

//for testing purpose
// app.get('/',(req,res)=>{ 
//     res.send("heyy adi !")
// })


//starting the server
app.listen(3000,()=>{
    console.log("server is running on port 3000");
})
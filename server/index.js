import exprees from 'express' ;
const app = exprees();

app.get('/', (req,res) => { 
return res.json ({ 
    status: 'succes',
    message: 'Laikinai veikia taip', 
    
})

})


app.listen(3005, () => { console.log(`Server running: http://localhost:3005`);
})
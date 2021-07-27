const express = require('express');
const app = express();
var port = process.env.PORT || 3000;
app.get('/', (req,res) => {
    res.end("hello world !!");
});

app.listen(port, ()=> {
    console.log(`server is running on port ${port}`);
})
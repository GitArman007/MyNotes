const express = require('express');
const app = express();
const path = require('path');
const fs = require('fs');//file system
const filesDir = path.join(__dirname, 'files');

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static( path.join(__dirname, 'public')));


//GET DIRECTORY FEATURE
app.get('/', (req, res) => {
    //use to read the directory 
    fs.readdir(filesDir, function(err, files){
        if (err) {
            return res.status(500).send('Unable to read files directory');
        }
        res.render('viewindex' , { files: files});
    });
});

//READFILE FEATURE
app.get('/file/:filename', (req, res) => {
     fs.readFile(path.join(filesDir, req.params.filename), 'utf-8', function(err, filedata){
         if (err) {
             return res.status(404).send('File not found');
         }
         //on new page we have to send filename and filedata show that when we click readmore button 
         //we can show the data of that file on new page
         res.render('show' , { filename : req.params.filename , filedata : filedata});
     });
});
//EDIT FILE FEATURE
app.get('/edit/:filename', (req, res) => {
     res.render('edit' , { filename : req.params.filename} );
});

//UPDAETD FILE FEATURE
app.post( '/edit' , function( req , res ){
     const previousFile = path.join(filesDir, req.body.previous.trim());
     const newFile = path.join(filesDir, req.body.new.trim());

     fs.rename(previousFile, newFile, function(err){
            if (err) {
                return res.status(400).send('Unable to rename file');
            }
            res.redirect('/');
     });
});

//CREATE FILE FEATURE
app.post('/create', (req, res) => {
      //my file name ---> split' 'join''----> myfilename
      fs.writeFile(path.join(filesDir, `${req.body.tittle.split('').join('')}.txt`), req.body.details , function(err){
            if (err) {
                return res.status(400).send('Unable to create file');
            }
            res.redirect('/');
      }) 
});



app.listen(3000);

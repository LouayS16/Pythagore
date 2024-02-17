const port=3003;
const express=require('express');
const app=express();
const mongoose=require("mongoose");
const jwt=require("jsonwebtoken");
const multer=require("multer");
const path=require("path");
const cors=require ("cors");
const { NOMEM } = require("dns");
const bodyParser = require('body-parser');
const { v4: uuidv4 } = require('uuid');

app.use(express.json());
app.use(cors());
app.use('/uploadsEleve', express.static('uploadsEleve'));
app.use('/actualite', express.static('actualite'));
app.use('/uploads', express.static('uploads'));


mongoose.connect("mongodb+srv://saadaouilouay16:scotland00@cluster0.yclfgye.mongodb.net/pythagore");

//api creation
app.get("/",(req,res)=>{
    res.send("express app is running")
})

//creation eleve
let eleve=mongoose.model("eleve",{
    id:{
        type:Number,
        required:true,
    },

    nom:{
        type:String,
        required:true,
    },

    prenom:{
        type:String,
        required:true,
    },

    niveau:{
        type:String,
        required:true,
    },

    classe:{
        type:String,
        required:true,
    },

    age:{
        type:Number,
        required:true,
    },

})
module.exports=eleve;

//ajout d'un eleve
app.post('/ajoutEleve', async (req, res) => {
    try {
      let  data =req.body;
        eleve=new eleve(data);
        savedEleve= await eleve.save();
        res.send(savedEleve);

    } catch (error) {
        res.send(error);
        console.error(error);
    }
});

//liste des etudiants
app.get('/all',async (req,res)=>{
    try{
       const eleves= await eleve.find();
        res.send(eleves);
    }
    catch (error){
        res.send(error);
        console.log(error);
    }
})


// Recherche par id
app.get('/byid/:id',async(req,res)=>{
    try{
       const idE=req.body.id;
       const e=await eleve.findOne({id :idE});
        res.send(e);
        if (!e) {
            return res.status(404).send("Élève non trouvé");
        }
    }
    catch(error){
        res.send(error);
        console.log(error);
    }
})


//update eleve
app.put('/updateEleve/:id',async(req,res)=>{
    try{
        const newdata=req.body;
        const id=req.params.id;
       
        const updated=await eleve.findOneAndUpdate({id :id},newdata);
        res.send(updated);
        
    }
    catch(error){
        res.send(error);
        console.log(error);
    }
})


//deleteEleve
app.delete('/deleteEleve/:id',async(req,res)=>{
    try{
       const id=req.params.id;
       const deletedE=await eleve.findOneAndDelete({id :id});
        res.send(deletedE);
        
    }
    catch(error){
        res.send(error);
        console.log(error);
    }
})



app.listen(port,(error)=>{
    if(!error){
        console.log("server running on port "+port)
    }
    else{
        console.log("error"+error);
    }
})




//creation enseignant
let enseignant=mongoose.model("enseignant",{
    cin:{
        type:Number,
        required:true,
    },

    nom:{
        type:String,
        required:true,
    },

    prenom:{
        type:String,
        required:true,
    },

    specialite:{
        type:String,
        required:true,
    }


})
module.exports=enseignant;


//ajout d'un en
app.post('/ajoutEnseignant', async (req, res) => {
    try {
      let  data =req.body;
        enseignant=new enseignant(data);
        savedEnseignant= await enseignant.save();
        res.send(savedEnseignant);

    } catch (error) {
        res.send(error);
        console.error(error);
    }
});

//liste des ens
app.get('/listeEnseignants',async (req,res)=>{
    try{
       const enseignants= await enseignant.find();
        res.send(enseignants);
    }
    catch (error){
        res.send(error);
        console.log(error);
    }
})


// Recherche par id
app.get('/rechercheParNom',async(req,res)=>{
    try{
       const data=req.body.nom;
       const e=await eleve.findOne({nom :data});
        res.send(e);
        if (!e) {
            return res.status(404).send("Enseignants non trouvé");
        }
    }
    catch(error){
        res.send(error);
        console.log(error);
    }
})


//update enseignants
app.put('/updateEnseignant/:cin',async(req,res)=>{
    try{
       const newdata=req.body;
       const cin=req.params.cin;

       const updated=await enseignant.findOneAndUpdate({cin :cin},newdata);
        res.send(updated);
        
    }
    catch(error){
        res.send(error);
        console.log(error);
    }
})


//deleteEnseignant
app.delete('/deleteEnseignant/:cin',async(req,res)=>{
    try{
       const cin=req.params.cin;
       const deletedEn=await enseignant.findOneAndDelete({cin :cin});
        res.send(deletedEn);
        
    }
    catch(error){
        res.send(error);
        console.log(error);
    }
})


let emploiEnseignants=mongoose.model("emploiEnseignants",{
    cin:{
        type:Number,
        required:true,
    },

    emploi:{
        type:String,
        required:true,
    },

    date:{
        type:Date,
        default:Date.now
    },


})
module.exports=emploiEnseignants;





const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads'); // Save uploaded files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
        const uniqueFilename = uuidv4(); // Generate unique filename using UUID
        cb(null, uniqueFilename + '-' + file.originalname); // Concatenate filename with original name
    }
});

const upload = multer({ storage: storage });


// Route to handle emploi upload
// Route to handle emploi upload
app.post('/upload', upload.single('emploi'), async (req, res) => {
    try {
        const emploiFile = req.file;
        if (!emploiFile) {
            return res.status(400).send('No file uploaded');
        }

        const emploiData = {
            emploi: emploiFile.filename,
            date: new Date(),
            cin: req.body.cin
        };

        // Create a new emploiEnseignants document in the database
        const result = await emploiEnseignants.create(emploiData); // Use correct model name here

        res.status(201).json({ message: 'Emploi added successfully', emploiId: result._id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/emploi/:cin', async (req, res) => {
    try {
        const { cin } = req.params;
        const emploi = await emploiEnseignants.findOne({ cin });
        if (!emploi) {
            return res.status(404).json({ message: 'Emploi not found' });
        }
        res.json(emploi);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Server Error' });
    }
});







let emploiEleve=mongoose.model("emploiEleve",{
    niveau:{
        type:String,
        required:true,
    },

    classe:{
        type:String,
        required:true,
    },

    emploi:{
        type:String,
        required:true,
    },

    date:{
        type:Date,
        default:Date.now
    },


})
module.exports=emploiEnseignants;


const eleveStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploadsEleve'); // Save uploaded files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
        const uniqueFilename = uuidv4(); // Generate unique filename using UUID
        cb(null, uniqueFilename + '-' + file.originalname); // Concatenate filename with original name
    }
});

const eleveUpload = multer({ storage: eleveStorage });

// Route to handle emploiEleve upload
app.post('/uploadEleve', eleveUpload.single('emploi'), async (req, res) => {
    try {
        const emploiFile = req.file;
        if (!emploiFile) {
            return res.status(400).send('No file uploaded');
        }

        const emploiData = {
            emploi: emploiFile.filename,
            date: new Date(),
            niveau: req.body.niveau,
            classe: req.body.classe
        };

        // Create a new emploiEleve document in the database (assuming you have a model named emploiEleve)
        const result = await emploiEleve.create(emploiData);

        res.status(201).json({ message: 'Emploi added successfully', emploiId: result._id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// GET endpoint to fetch emploiEleve data based on niveau and classe
app.get('/emploiEleves', async (req, res) => {
    try {
        // Extract niveau and classe from query parameters
        const { niveau, classe } = req.query;
        
        // Prepare the query object based on the provided niveau and classe
        const query = {};
        if (niveau) {
            query.niveau = niveau;
        }
        if (classe) {
            query.classe = classe;
        }

        // Find emploiEleve documents based on the query
        const emploiEleves = await emploiEleve.find(query);

        // Send the filtered emploiEleve documents as a JSON response
        res.json(emploiEleves);
    } catch (error) {
        console.error('Error fetching emploiEleves:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/niveauOptions', async (req, res) => {
    try {
        // Query your database to get distinct niveau values
        const niveauOptions = await emploiEleve.distinct('niveau');
        res.json(niveauOptions);
    } catch (error) {
        console.error('Error fetching niveau options:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});

app.get('/classeOptions', async (req, res) => {
    try {
        // Query your database to get distinct classe values
        const classeOptions = await emploiEleve.distinct('classe');
        res.json(classeOptions);
    } catch (error) {
        console.error('Error fetching classe options:', error);
        res.status(500).json({ message: 'Internal server error' });
    }
});



let actualite=mongoose.model("actualite",{
    titre:{
        type:String,
        required:true,
    },

    description:{
        type:String,
        required:true,
    },

    pdf:{
        type:String,
        required:true,
    },

    date:{
        type:Date,
        default:Date.now
    },


})
module.exports=actualite;



const ActualiteStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'actualite'); // Save uploaded files to the 'uploads' directory
    },
    filename: function (req, file, cb) {
        const uniqueFilename = uuidv4(); // Generate unique filename using UUID
        cb(null, uniqueFilename + '-' + file.originalname); // Concatenate filename with original name
    }
});

const actualiteUpload = multer({ storage: ActualiteStorage });

// Route to handle emploiEleve upload
app.post('/uploadActualite', actualiteUpload.single('pdf'), async (req, res) => {
    try {
        const pdfFile = req.file;
        if (!pdfFile) {
            return res.status(400).send('No file uploaded');
        }

        const pdfData = {
            pdf: pdfFile.filename,
            date: new Date(),
            titre: req.body.titre,
            description: req.body.description
        };

        // Create a new emploiEleve document in the database (assuming you have a model named emploiEleve)
        const result = await actualite.create(pdfData);

        res.status(201).json({ message: 'pdf added successfully', pdfId: result._id });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal server error' });
    }
});


// Assuming you have already set up Express and any necessary middleware

// Define your route to handle GET requests for actualités
app.get('/actualites', async (req, res) => {
    try {
      // Fetch actualités data from your database or any other data source
      const actualites = await actualite.find().sort({ date: -1 }); // Assuming you have a model named Actualite
      
      // Send the actualités data as a response
      res.json(actualites);
    } catch (error) {
      console.error('Error fetching actualités:', error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });
  


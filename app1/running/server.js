const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// Configuration du serveur express
const app = express();

app.use(express.static('.'));
app.use(bodyParser.json());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Définir la route http://127.0.0.1:3000/ pour index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

// Le serveur Express écoute sur le port 3000
app.listen(3000, () => {
    console.log('Le serveur est en écoute sur le port 3000');
});



/*


// Connexion à la base de données

mongoose.connect('mongodb+srv://reslen:0000@cluster0.ioe1o5g.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')



// Vérification de la connexion à la base de données
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.error("Failed to connect:", err);
});


  
  // Création du model schema pour la collection users 
  // Complétez le modéle selon les besoins de votre formulaire 

  const userSchema = new mongoose.Schema({
      email: String,
      password: String,
      firstName: String,
      name: String,
      message: String,
      
      
  
    });
  
  

  // Création du model mongoose pour l'intereaction avec la base de données SpaceX (https://mongoosejs.com/docs/api/model.html#Model())
  const User = mongoose.model('User', userSchema);
  


  // Définition de l'itinéraire d'inscription et chargement de données à partir du formulaire d'inscription
  
  app.post('/signup', async (req, res) => {
    let name = req.body.name;
    let firstName = req.body.firstName;
    let email = req.body.email;
    let password = req.body.password;




  // Vérification des champs requis
  if (!name || !firstName || !email || !password) {
    return res.status(400).send('Tous les champs doivent être remplis.');
}



    // Création d'un nouvel utilisateur
    const newUser = new User({
      name: name,
      firstName: firstName,
      email: email,
      password: password
  });


    // Sauvegarde du nouvel utilisateur dans la base de données
    
    await newUser.save();




// Redirection vers la page d'inscription réussie
    
console.log("Inscription réussie !");
return res.redirect('/inscription-réussie.html'); 
});

              


  app.post('/signin', async (req, res) => {
    let { email, password } = req.body;


    if (!email || !password) {
        return res.status(400).send("Veuillez remplir tous les champs.");
    }


    const user = await User.findOne({ email: email });

    if (!user) {
        return res.status(401).send("Utilisateur non trouvé.");
    }


    if (user.password !== password) {
        return res.status(401).send("Mot de passe incorrect.");
    }

    console.log("Connexion réussie !");
    return res.redirect('/connexion-réussie.html');
});
*/
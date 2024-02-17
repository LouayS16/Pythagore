// Login.jsx

import React from 'react';
import './Login.css';

const Login = () => {
  return (
   
    <div class="container">
    <div class="center">
        <h1>Espace INTRANET</h1>
        <form>
            <div class="txt_field">
                <input type="email" name="text" required></input>
                <span></span>
                <label>Email</label>
            </div>
            <div class="txt_field">
                <input type="password" name="password" required></input>
                <span></span>
                <label>Mot de passe</label>
            </div>
            <div class="pass">Mot de passe oublié?</div>
            <button class="button" name="submit" type="submit" value="Login">Se connecter</button>
            <div class="signup_link">
                Non inscrit? <a href="">Créer in compte</a>
            </div>
        </form>
    </div>
</div>

  );
};

export default Login;

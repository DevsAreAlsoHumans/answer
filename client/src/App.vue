<template>
  <div id="app">
    <div class="pseudonym-container">
      <h1 class="title-pseudonym">Saisissez votre pseudonyme</h1>
      <div class="input-group">
        <input 
          v-model="username" 
          type="text" 
          placeholder="Entrez votre pseudonyme"
        />
        <button @click="saveUsername">Enregistrer</button>
        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
        <p v-if="storedUsername"> {{ storedUsername }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      username: '', 
      storedUsername: '', 
      errorMessage: ''
    };
  },
  methods: {
    saveUsername() {
  
  // Empêche les espaces
  const noSpacesRegex = /^\S+$/;

  // Vérification de la saisie du pseudo utilisateur
  if (this.username.trim() === '') {
    this.errorMessage = 'Veuillez saisir un pseudonyme.';
    this.username = '';
  } else if (!noSpacesRegex.test(this.username)) {
    this.errorMessage = 'Le pseudonyme ne doit pas contenir d\'espaces.';
    this.username = '';
  } else if (this.username.length > 20) {
    this.errorMessage = 'Veuillez saisir un pseudonyme 20 caractères maximum.';
    this.username = '';
  } 
    else if (this.username.length < 4) {
      this.errorMessage = 'Veuillez saisir un pseudonyme 4 caractères minimum.';
      this.username = '';
    }
   else {
    
    const escapedUsername = this.username;
    localStorage.setItem('username', escapedUsername);
    this.storedUsername = escapedUsername;
    this.username = '';
    this.errorMessage = '';
      }
    }
  }
}
</script>

<style>
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}

body {
  background-color: #f0f0f0;
}

#app {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}


.pseudonym-container {
  max-width: 400px;
  margin: 0 auto;
  text-align: center;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #f9f9f9;
}

.pseudonym-container h2 {
  font-size: 20px;
  color: #34495e;
  margin-bottom: 20px;
}

.input-group {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px; 
}

.input-group input {
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 70%;
  outline: none;
  box-shadow: inset 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: border-color 0.3s ease;
}

.input-group input:focus {
  border-color: #46178F;
}

.input-group button {
  padding: 10px 15px;
  font-size: 16px;
  color: #fff;
  background-color: #46178F;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  margin-top:20px;
  border-radius:20px!important;
}

.input-group button:hover {
  opacity:0.9;
}

.stored-username {
  margin-top: 20px;
  font-size: 16px;
  color: #46178F;
}

.stored-username span {
  font-weight: bold;
  color: #46178F;
}

.title-pseudonym {
  padding-bottom:20px;
  font-size:1.5rem;
}
</style>

const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;


const $n = document.querySelector('.name');
const $b = document.querySelector('.blog');
const $l = document.querySelector('.location');

async function displayUser(username) { //agregar el async para hacer funcionar el await
  $n.textContent = 'cargando...';
  const response = await fetch(`${usersEndpoint}/${username}`);
  const data= await response.json()
  console.log(data);
  $n.textContent = `${data.name}`;//corregir las comillas invertidas
  $b.textContent = `${data.blog}`;
  $l.textContent = `${data.location}`;
}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`//agregar el $ a la variable
}

displayUser('stolinski').catch(handleError);
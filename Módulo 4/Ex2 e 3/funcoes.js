var inputElement = document.querySelector("input[name='user']");
var buttonElement = document.querySelector("button[name='add']")
var ulElement = document.querySelector("ul[name=repoList]")
var pElement = document.querySelector("p[name=error]")

function addItemRepoList(name){
  var liElement = document.createElement("li");
  var repositoryName = document.createTextNode(name);
    
  liElement.appendChild(repositoryName);
  ulElement.appendChild(liElement);
}


function listRepo(repositories){
  ulElement.innerHTML = '';
  repositories.forEach(repository => {
    addItemRepoList(repository.name)
  });
}

function showError(){
  ulElement.innerHTML = '';
  var error = document.createTextNode("Usuário não encontrado!");
  pElement.appendChild(error);
}

function makeRequest(){
  axios.get('https://api.github.com/users/'+inputElement.value+'/repos')
  .then(function (response) {
    listRepo(response.data);
  })
  .catch(function (error) {
    showError();
  })
}

function searchRepo(){
  ulElement.innerHTML = '';
  addItemRepoList("Carregando...");
  makeRequest();
}

buttonElement.onclick = () => searchRepo();
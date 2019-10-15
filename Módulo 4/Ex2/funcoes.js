var inputElement = document.querySelector("input[name='user']");
var buttonElement = document.querySelector("button[name='add']")
var ulElement = document.querySelector("ul[name=repoList]")
var pElement = document.querySelector("p[name=error]")

function listRepo(repositories){
  ulElement.innerHTML = '';
  repositories.forEach(repository => {
    
    var liElement = document.createElement("li");
    var repositoryName = document.createTextNode(repository.name);
    
    liElement.appendChild(repositoryName);
    ulElement.appendChild(liElement);

  });
}

buttonElement.onclick = () => axios.get('https://api.github.com/users/'+inputElement.value+'/repos')
  .then(function (response) {
    listRepo(response.data);
  })
  .catch(function (error) {
    // handle error
    ulElement.innerHTML = '';
    var error = document.createTextNode("Usuário não encontrado!");
    pElement.appendChild(error);
  })
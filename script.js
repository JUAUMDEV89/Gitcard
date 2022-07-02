function createCard() {

        let card = document.createElement('div');
        
        let inputValue = document.getElementById("input");

        let githubUserName = {
            username: inputValue.value,
        }

        inputValue.value = '';

        card.className = 'card';

        //chama api do github
        fetch(`https://api.github.com/users/${githubUserName.username}`).then(response => {
            response.json().then(jsonUser => {

                card.innerHTML = `
                    <a href="${jsonUser.url}">
                      <h3>${jsonUser.login}</h3>
                      <img src="${jsonUser.avatar_url}" alt="${jsonUser.login}" />
                      <div class="infos">
                          <span><i class="material-icons">people</i>${jsonUser.followers} Seguidores</span>
                          <span><i class="material-icons">people</i>${jsonUser.following} Seguindo</span>
                          <span><i class="material-icons">folder</i>${jsonUser.public_repos} Repositórios</span>
                          <span><i class="material-icons">location_on</i>${jsonUser.location}</span>
                      </div>
                    </a>
                 `;

            let main = document.querySelector("#main");

            main.appendChild(card);
       })

      });
        
}



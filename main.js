document.addEventListener('DOMContentLoaded', async function () {
    const avatarElement = document.querySelector('#avatar');
    const nameElement = document.querySelector('#name');
    const usernameElement = document.querySelector('#username');
    const reposElement = document.querySelector('#repos');
    const followersElement = document.querySelector('#followers');
    const followingElement = document.querySelector('#following');
    const linkElement = document.querySelector('#link');

    const endpoint = 'https://api.github.com/users/the-moonbit';

    try {
        const response = await fetch(endpoint);

        if (!response.ok) {
            throw new Error(`Erro na requisição: ${response.status}`);
        }

        const json = await response.json();

        avatarElement.src = json.avatar_url;
        nameElement.innerText = json.name || json.login;
        usernameElement.innerText = `@${json.login}`;
        reposElement.innerText = json.public_repos;
        followersElement.innerText = json.followers;
        followingElement.innerText = json.following;
        linkElement.href = json.html_url;
    } catch (erro) {
        console.error('Falha ao buscar os dados do GitHub:', erro);
        nameElement.innerText = 'Usuário não encontrado';
        usernameElement.innerText = 'Verifique o nome de usuário ou a conexão';
    }
});
import { conectaAPI } from "./conectaAPI.js";

const lista = document.querySelector('[data-lista]')

async function listaVideos() {
  const listagem = await conectaAPI.listaVideos()
  console.log(listagem)

  listagem.forEach(video => lista.appendChild(criaCard(video.titulo, video.descricao, video.url, video.imagem)));
}

listaVideos()

function criaCard(titulo, descricao, url, imagem) {
  const card = document.createElement('li')
  card.classList.add('videos__item')
  card.innerHTML = 
  `
  <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
  `

  return card
}
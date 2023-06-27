import { funcoes } from "./exportaFuncoes.js";

const lista = document.querySelector('[data-lista]')
const listagemPadrao = await funcoes.listaVideos()

export default async function exibeVideos(listagem) {
  listagem.forEach(video => lista.appendChild(criaCard(video.titulo, video.descricao, video.url, video.imagem)));
}

exibeVideos(listagemPadrao)

function criaCard(titulo, descricao, url, imagem) {
  const card = document.createElement('li')
  card.classList.add('videos__item')
  card.innerHTML = 
  `
  <iframe width="100%" height="72%" src="${url}"
                title="${titulo}" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrySpted-media; gyroscope; picture-in-picture"
                allowfullscreen></iframe>
            <div class="descricao-video">
                <img src="${imagem}" alt="logo canal alura">
                <h3>${titulo}</h3>
                <p>${descricao}</p>
            </div>
  `
  return card
}
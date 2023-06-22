import { conectaAPI } from "./conectaAPI.js"; 

const botao = document.querySelector("[data-envio]")

function recebeDados(evento) {
  evento.preventDefault()

  const url = document.querySelector("[data-url]").value
  const titulo = document.querySelector("[data-titulo]").value
  const imagem = document.querySelector("[data-imagem]").value
  const descricao = Math.floor(Math.random() * 10).toString()

  conectaAPI.cadastraVideos(titulo, descricao, url, imagem)

  window.location.href = "../pages/envio-concluido.html"
}

botao.addEventListener("submit", e => (recebeDados(e)) )
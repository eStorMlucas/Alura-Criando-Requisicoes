import { funcoes } from "./exportaFuncoes.js";
import exibeVideos from "./exibeVideos.js";

const botaoPesquisa = document.querySelector("[data-botaoPesquisa]")

botaoPesquisa.addEventListener("click", e => realizaBusca(e))

async function realizaBusca(evento) {
  evento.preventDefault()
  const valorBusca = document.querySelector("[data-pesquisa]").value

  if (valorBusca == "") {
    alert("ERRO: É preciso informar a busca")
  } else {
    const resultado = await funcoes.buscaVideos(valorBusca) 
    const lista = document.querySelector("[data-lista]")

    while (lista.hasChildNodes()) {
      lista.removeChild(lista.firstChild)
    }

    exibeVideos(resultado)
  }
}

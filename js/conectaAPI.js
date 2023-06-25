async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos")
  return await conexao.json()
}

async function cadastraVideos(titulo, descricao, url, imagem) {
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify({  
      titulo: titulo,
      descricao: `${descricao} mil visualizações`,
      url: url,
      imagem: imagem
    })
  })

  return await conexao.json()
}

async function buscaVideos(busca) {
  const conexao = await fetch(`http:/localhost:3000/videos?=q${busca}`)
  
  return conexao.json()
}

export const conectaApi = {
  listaVideos,
  cadastraVideos
}
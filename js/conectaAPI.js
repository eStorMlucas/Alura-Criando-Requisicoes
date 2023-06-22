async function listaVideos() {
  const conexao = await fetch("http://localhost:3000/videos")
  const conexaoConvertida = await conexao.json();
  return conexaoConvertida
}

async function cadastraVideos(titulo, descricao, url, imagem) {
  const conexao = await fetch("http://localhost:3000/videos", {
    method: "POST",
    headers: {
      "Content-type": "application/json"
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

export const conectaAPI = {
  listaVideos,
  cadastraVideos
}
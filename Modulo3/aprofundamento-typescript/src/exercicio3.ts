


const posts = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

  type posts = {

    autorInformado: autor,
    post: {
        autor:string,
        texto:string
    }

}

  function buscarPostsPorAutor(posts: any, autorInformado: any) {
    return posts.filter(
      (post: any ) => {
        return post.autor === autorInformado
      }
    )
  }

  

  console.log(buscarPostsPorAutor(posts, autorInformado))

  //Não consegui fazer
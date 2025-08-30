import { useState } from "react";
//importo useState per usare la variabile di stato e dare reattività alla form e input

const initialArticles = [
  {
    id: 1,
    title: "5 modi per rendere la pasta di casa irresistibile",
  },
  {
    id: 2,
    title: "Il risotto perfetto: segreti per una cremosità da chef",
  },
  {
    id: 3,
    title: "Erbe aromatiche: il tocco segreto per ogni piatto.",
  },
  {
    id: 4,
    title: "Pane come al forno: dalla lievitazione lenta alla crosta dorata.",
  },
  {
    id: 5,
    title: "L’olio extravergine: l’ingrediente che fa la differenza.",
  },
];

function Main() {
  //creo due variabili una che contiene l'array attuale e quella che andrà ad aggiornare il vecchio array
  const [articles, setArticles] = useState(initialArticles);
  const [newArticle, setNewArticle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    //creo il nuovo elemento
    const newA = {
      id: initialArticles.length + 1,
      title: newArticle.trim(),
    };

    //aggiorno sia setArticles così da poter vedere i nuovi elementi e setNewArticle in modo da refreshare il campo input
    setArticles([...articles, newA]);
    setNewArticle("");

    console.log(articles);
  };

  return (
    <div className="col-10 m-2 ">
      <div className="row">
        <h2 className="text-center">I miei articoli :</h2>
      </div>
      <div className="row">
        {articles.map((article) => {
          const { id, title } = article;
          return (
            <div className="col-10 m-2 " key={id}>
              {title}
            </div>
          );
        })}
      </div>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="mb-3">
            <label className="form-label m-2">Inserisci il tuo articolo</label>
            <input
              type="text"
              className="form-control m-2"
              id="exampleInputEmail1"
            />
          </div>
          <button type="submit" className="btn btn-primary m-3 col-2">
            Invia
          </button>
        </div>
      </form>
    </div>
  );
}

export default Main;

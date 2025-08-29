const articles = [
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
      <form>
        <div className="row">
          <div class="mb-3">
            <label for="exampleInputEmail1" className="form-label m-2">
              Inserisci il tuo articolo
            </label>
            <input
              type="text"
              className="form-control m-2"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
            />
          </div>
          <button type="submit" class="btn btn-primary m-3 col-2">
            Invia
          </button>
        </div>
      </form>
    </div>
  );
}

export default Main;

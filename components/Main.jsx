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
    <div className="col-12 m-2 ">
      <div className="row">
        <h2 className="text-center">I miei articoli :</h2>
      </div>
      <div className="row">
        {articles.map((article) => {
          const { id, title } = article;
          return (
            <div className="col-12 m-2 " key={id}>
              {title}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Main;

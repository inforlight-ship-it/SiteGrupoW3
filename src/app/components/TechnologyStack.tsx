const technologies = [
  "Microsoft",
  "Dell Technologies",
  "Fortinet",
  "SonicWall",
  "Acronis",
  "Aruba",
  "Zabbix",
  "Furukawa",
];

export function TechnologyStack() {
  return (
    <section className="w3-tech-strip" aria-labelledby="w3-tech-strip-title">
      <div className="w3-container">
        <div className="w3-tech-strip-head">
          <div>
            <span className="w3-section-eyebrow">ECOSSISTEMA TECNOLÓGICO</span>
            <h2 id="w3-tech-strip-title">Tecnologias presentes em projetos e ambientes operados pela W3.</h2>
          </div>
          <p>
            A seleção representa tecnologias com as quais a equipe atua em diferentes cenários. A presença nesta lista não implica, por si só, certificação, parceria comercial ou endosso do fabricante.
          </p>
        </div>
        <div className="w3-tech-strip-list" aria-label="Tecnologias utilizadas">
          {technologies.map((technology) => <span key={technology}>{technology}</span>)}
        </div>
      </div>
    </section>
  );
}

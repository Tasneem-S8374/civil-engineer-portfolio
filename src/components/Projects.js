import { projects } from "../data/projects";

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <h2 className="title mb-4">Project Portfolio</h2>

        <div className="row">
          {projects.map((p) => (
            <div key={p.id} className="col-md-4 mb-4">
              <div className="card card-hover">
                <img src={p.img} className="card-img-top" alt="" />
                <div className="card-body">
                  <h5>{p.title}</h5>
                  <p className="text-muted">{p.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

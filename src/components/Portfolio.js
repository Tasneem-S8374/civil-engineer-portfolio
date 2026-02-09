import { useState } from "react";
import { projects } from "../data/projects";
import Lightbox from "./Lightbox";

export default function Portfolio() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="portfolio" className="py-5">
      <div className="container section-box">
        <h2 className="fw-bold text-warning mb-4">Portfolio</h2>

        <div className="row">
          {projects.map((p) => (
            <div key={p.id} className="col-md-4 mb-3">
              <img
                src={p.img}
                alt={p.title}
                onClick={() => setSelected(p)}
                className="img-fluid rounded shadow-sm"
                style={{ cursor: "pointer" }}
              />
            </div>
          ))}
        </div>

        {selected && (
          <Lightbox project={selected} close={() => setSelected(null)} />
        )}
      </div>
    </section>
  );
}

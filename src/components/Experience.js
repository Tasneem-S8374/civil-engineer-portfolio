import { experience } from "../data/experience";

export default function Experience() {
  return (
    <section className="section bg-light">
      <div className="container">
        <h2 className="title mb-4">Professional Experience</h2>

        {experience.map((exp, index) => (
          <div key={index} className="card mb-3 shadow-sm">
            <div className="card-body">
              <h5 className="text-warning">{exp.role}</h5>
              <h6 className="mb-1">{exp.company}</h6>
              <small className="text-muted">{exp.years}</small>
              <p className="mt-2">{exp.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

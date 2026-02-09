export default function Services() {
  const services = [
    {
      title: "Project Planning",
      desc: "Detailed project scheduling, resource planning, and milestone tracking for large-scale construction works.",
    },
    {
      title: "Site Execution",
      desc: "End-to-end supervision ensuring quality, safety, and timely delivery of projects.",
    },
    {
      title: "Surveying & Layout",
      desc: "DGPS, total station surveys, and accurate layout marking for residential and commercial sites.",
    },
    {
      title: "BOQ & Estimation",
      desc: "Cost estimation, quantity take-offs, and budget preparation for efficient project control.",
    },
    {
      title: "Quality Assurance",
      desc: "Implementing QA/QC processes to maintain construction standards and compliance.",
    },
    {
      title: "Client Coordination",
      desc: "Managing communication between stakeholders to ensure smooth project execution.",
    },
  ];

  return (
    <section id="services" className="py-5">
      <div className="container section-box">
        <h2 className="text-center fw-bold text-warning mb-4">Our Services</h2>

        <div className="row">
          {services.map((s, i) => (
            <div key={i} className="col-md-4 mb-3">
              <div className="card h-100 shadow-sm">
                <div className="card-body">
                  <h5 className="card-title text-warning">{s.title}</h5>
                  <p className="card-text">{s.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

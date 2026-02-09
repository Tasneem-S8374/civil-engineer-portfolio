export default function Skills() {
  const skills = [
    "Project Planning & Scheduling",
    "Site Execution & Supervision",
    "BOQ & Cost Estimation",
    "Surveying & Layout Marking",
    "AutoCAD & Drawing Review",
    "Quality Control (QA/QC)",
    "Contract Administration",
    "Vendor & Client Coordination",
    "Risk Management",
    "Team Leadership",
    "Billing & Measurements",
    "Safety Compliance",
  ];

  return (
    <section id="skills" className="section bg-light">
      <div className="container">
        <h2 className="title mb-4">Core Skills</h2>
        <div className="row">
          {skills.map((s) => (
            <div key={s} className="col-md-4 mb-3">
              <div className="card p-3 card-hover text-center">{s}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

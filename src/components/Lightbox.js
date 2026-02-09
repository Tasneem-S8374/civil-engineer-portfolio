export default function Lightbox({ project, close }) {
  return (
    <div className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-75 d-flex align-items-center justify-content-center">
      <div className="bg-white p-3 rounded">
        <img src={project.img} alt="" className="img-fluid mb-2" />
        <h6>{project.title}</h6>
        <button onClick={close} className="btn btn-warning btn-sm mt-2">
          Close
        </button>
      </div>
    </div>
  );
}

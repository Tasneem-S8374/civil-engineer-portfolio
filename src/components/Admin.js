import React, { useState } from "react";

export default function Admin({ addProject }) {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const handleUpload = async () => {
    if (!file || !title) return alert("Fill all fields");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "YOUR_PRESET");

    const res = await fetch(
      "https://api.cloudinary.com/v1_1/YOUR_CLOUD_NAME/image/upload",
      {
        method: "POST",
        body: formData,
      },
    );

    const data = await res.json();

    const project = {
      id: Date.now(),
      title,
      desc,
      image: data.secure_url,
    };

    addProject(project);

    setFile(null);
    setTitle("");
    setDesc("");
  };

  return (
    <div className="container mt-5">
      <h3>Add Project</h3>

      <input
        className="form-control mb-2"
        placeholder="Project Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="form-control mb-2"
        placeholder="Description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />

      <input
        type="file"
        className="form-control mb-2"
        onChange={(e) => setFile(e.target.files[0])}
      />

      <button className="btn btn-primary" onClick={handleUpload}>
        Upload Project
      </button>
    </div>
  );
}

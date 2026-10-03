import { useState } from "react";
import StudentDetails from "./StudentDetails";

function StudentForm() {
  const [student, setStudent] = useState({
    name: "",
    email: "",
    age: "",
    course: ""
  });

  const [submittedStudent, setSubmittedStudent] = useState(null);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setStudent({
      ...student,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmittedStudent(student);

    setStudent({
      name: "",
      email: "",
      age: "",
      course: ""
    });
  };
  console.log(submittedStudent);
  

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow p-4">

            <h2 className="text-center mb-4">
              Student Registration
            </h2>

            <form onSubmit={handleSubmit}>

              <div className="mb-3">
                <label className="form-label">
                  Name
                </label>

                <input
                  type="text"
                  name="name"
                  value={student.name}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Email
                </label>

                <input
                  type="email"
                  name="email"
                  value={student.email}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Age
                </label>

                <input
                  type="number"
                  name="age"
                  value={student.age}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your age"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">
                  Course
                </label>

                <input
                  type="text"
                  name="course"
                  value={student.course}
                  onChange={handleChange}
                  className="form-control"
                  placeholder="Enter your course"
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary w-100"
              >
                Register
              </button>

            </form>

          </div>

        </div>

      </div>

      {submittedStudent && (
        <StudentDetails student={submittedStudent} />
      )}

    </div>
  );
}

export default StudentForm;
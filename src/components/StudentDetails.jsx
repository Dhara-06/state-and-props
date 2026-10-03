const StudentDetails = ({student}) => {
  return (
    <div className="container mt-4">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow p-4">

            <h3 className="text-center mb-4">
              Registered Student
            </h3>
            <p>
              <strong>Name:</strong> {student.name}
            </p>

            <p>
              <strong>Email:</strong> {student.email}
            </p>

            <p>
              <strong>Age:</strong> {student.age}
            </p>

            <p>
              <strong>Course:</strong> {student.course}
            </p>

          </div>

        </div>

      </div>

    </div>
  )
}

export default StudentDetails
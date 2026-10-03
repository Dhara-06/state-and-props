import { useState } from 'react';
import InputField from './InputFields';

function StudentForm() {

  const [student, setStudent] = useState({
    name: '',
    email: '',
    age: '',
    course: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setStudent({
      ...student,
      [name]: value
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(student);
  };

  return (
    <>
    <div className="card p-4 shadow">

      <form onSubmit={handleSubmit}>

        <InputField
          label="Name"
          type="text"
          name="name"
          value={student.name}
          onChange={handleChange}
          placeholder="Enter your name"
        />

        <InputField
          label="Email"
          type="email"
          name="email"
          value={student.email}
          onChange={handleChange}
          placeholder="Enter your email"
        />

        <InputField
          label="Age"
          type="number"
          name="age"
          value={student.age}
          onChange={handleChange}
          placeholder="Enter your age"
        />

        <InputField
          label="Course"
          type="text"
          name="course"
          value={student.course}
          onChange={handleChange}
          placeholder="Enter your course"
        />

        <button
          type="submit"
          className="btn btn-primary"
        >
          Register
        </button>

      </form>

    </div>
    <h1>
        name : {student.name}
    </h1>
    </>

  );
}

export default StudentForm;
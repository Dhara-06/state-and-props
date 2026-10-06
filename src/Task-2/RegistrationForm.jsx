import { useState } from "react";

function Register() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        city: "",
        gender: "",
        terms: false
    });

    
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;

        setForm({
            ...form,
            [name]: type === "checkbox" ? checked : value
        });
    };
    return (
        <div>
            <div className="container text-center">
                <div className="row align-items-start">
                    <div className="col-md-6">
                        <div className="card shadow p-4">
                            <h2 className="text-center mb-4">Registration Form</h2>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="name" className="form-label">Name</label>
                                    <input type="text" className="form-control" id="name" name="name" value={form.name} onChange={handleChange} placeholder="Enter your name" />
                                    <label htmlFor="email" className="form-label">Email</label>
                                    <input type="email" className="form-control" id="email" name="email" value={form.email} onChange={handleChange} placeholder="Enter your email" />
                                    <label htmlFor="phone" className="form-label">Phone</label>
                                    <input type="tel" className="form-control" id="phone" name="phone" value={form.phone} onChange={handleChange} placeholder="Enter your phone number" />
                                    <label htmlFor="city" className="form-label">City</label>
                                    <input type="text" className="form-control" id="city" name="city" value={form.city} onChange={handleChange} placeholder="Enter your city" />
                                    <label htmlFor="gender" className="form-label">Gender</label>
                                    <select className="form-select" id="gender" value={form.gender} name="gender" onChange={handleChange}>
                                        <option value="">Select your gender</option>
                                        <option value="male">Male</option>
                                        <option value="female">Female</option>
                                    </select>
                                    <div className="form-check mt-3">
                                        <input className="form-check-input" type="checkbox" id="terms" name="terms" checked={form.terms} onChange={handleChange} />
                                        <label className="form-check-label" htmlFor="terms">
                                            I agree to the terms and conditions
                                        </label>
                                    </div>
                                    <button type="submit" className="btn btn-primary mt-3">
                                        Submit
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card shadow p-4">
                            <h2 className="text-center mb-4">Submitted Details</h2>
                            {form ? (
                                <div>
                                    <p><strong>Name:</strong> {form.name}</p>
                                    <p><strong>Email:</strong> {form.email}</p>
                                    <p><strong>Phone:</strong> {form.phone}</p>
                                    <p><strong>City:</strong> {form.city}</p>
                                    <p><strong>Gender:</strong> {form.gender}</p>
                                    <p><strong>Terms:</strong> {form.terms ? "Accepted" : ""}</p>
                                </div>
                            ) : (
                                <p>No form submitted yet.</p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register;
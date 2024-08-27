import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import MainSection from "../../components/Main/MainSection";
import MainHeader from "../../components/Main/MainHeader";
import MainData from "../../components/Main/MainData";
import { useDispatch } from "react-redux";
import { employeeActions } from "../../contexts/EmployeeSlice";


export default function AddEmployee() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const [newEmployee, setNewEmployee] = useState({
        id: '',
        name: "",
        role: "",
        salary: "",
        image: "",
        joiningDate: "",
        address: ""
    });

    function formatDate(dateString) {
        return new Date(dateString).toLocaleDateString('en-IN', {
            year: 'numeric',
            month: 'short',
            day: '2-digit'
        });
    };

    function handleInputChange(event) {
        const { name, value } = event.target;

        setNewEmployee((prevState) => ({
            ...prevState,
            [name]: name === 'id' ? empId : value,
        }));
    }

    function handleSubmit(event) {
        event.preventDefault();
        const newId = Math.floor(Math.random() * 100000)
        const empId = 'EMP' + newId

        const formattedEmployee = {
            ...newEmployee,
            joiningDate: formatDate(newEmployee.joiningDate),
            id: empId
        };

        dispatch(employeeActions.addNewEmployee(formattedEmployee))

        setNewEmployee({
            id: '',
            name: "",
            role: "",
            salary: "",
            image: "",
            joiningDate: "",
            address: ""
        });

        navigate('/employees')
    }


    return (
        <MainSection>
            <MainHeader PageHeading={'Add Employee'}>
                <div className="flex h-full w-fit items-center">
                    <h1 onClick={() => navigate('/employees')} className="hover:font-semibold text-gray-400 hover:scale-105 ease-in duration-75 text-xl cursor-pointer">{'<'}Go Back</h1>
                </div>
            </MainHeader>
            <MainData>
                <div className="w-full md:w-4/5 mx-auto mt-2 p-3 lg:p-8 bg-white shadow-md rounded-lg">
                    <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                        <div>
                            <label htmlFor="name" className="modal-input-label">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Name"
                                value={newEmployee.name}
                                onChange={handleInputChange}
                                required
                                className="px-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label htmlFor="role" className="modal-input-label">Role</label>
                            <input
                                type="text"
                                id="role"
                                name="role"
                                placeholder="Role"
                                value={newEmployee.role}
                                onChange={handleInputChange}
                                required
                                className="px-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label htmlFor="salary" className="modal-input-label">Salary</label>
                            <input
                                type="number"
                                id="salary"
                                name="salary"
                                placeholder="Salary"
                                value={newEmployee.salary}
                                required
                                min={1}
                                onChange={handleInputChange}
                                className="px-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label htmlFor="image" className="modal-input-label">Image Link</label>
                            <input
                                type="text"
                                id="image"
                                name="image"
                                placeholder="Image URL"
                                value={newEmployee.image}
                                onChange={handleInputChange}
                                className="px-4 py-2 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label htmlFor="joiningDate" className="modal-input-label">Joining Date</label>
                            <input
                                type="date"
                                id="joiningDate"
                                name="joiningDate"
                                placeholder="Joining Date"
                                value={newEmployee.joiningDate}
                                required
                                onChange={handleInputChange}
                                className="px-4 py-2 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <div>
                            <label htmlFor="address" className="modal-input-label">Address</label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                placeholder="Address"
                                value={newEmployee.address}
                                onChange={handleInputChange}
                                required
                                className="px-4 py-2 border w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full py-3 mt-6 font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        >
                            Submit
                        </button>
                    </form>
                </div>
            </MainData>
        </MainSection>

    );
}

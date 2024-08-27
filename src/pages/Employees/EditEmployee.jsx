import { useLocation, useNavigate } from "react-router-dom";
import MainData from "../../components/Main/MainData";
import MainHeader from "../../components/Main/MainHeader";
import MainSection from "../../components/Main/MainSection";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { employeeActions } from "../../contexts/EmployeeSlice";

export default function EditEmployeeDetails() {
    const dispatch = useDispatch();

    const location = useLocation()
    const currentEmpForEdit = location.state?.employee || {}
    const navigate = useNavigate()

    const idRef = useRef()
    const nameRef = useRef()
    const roleRef = useRef()
    const salaryRef = useRef()
    const imageRef = useRef()
    const joiningDateRef = useRef()
    const addressRef = useRef()

    function handleSubmit(e) {
        e.preventDefault();
        const updatedEmployee = {
            id: idRef.current.value,
            name: nameRef.current.value,
            role: roleRef.current.value,
            salary: salaryRef.current.value,
            image: imageRef.current.value,
            joiningDate: joiningDateRef.current.value,
            address: addressRef.current.value,
        }

        dispatch(employeeActions.editEmployee(updatedEmployee))
        navigate('/employees');
    }


    return (
        <>
            <MainSection>
                <MainHeader PageHeading={'Edit Employee'}>
                    <div className="flex h-full w-fit items-center">
                        <h1 onClick={() => navigate('/employees')} className="hover:font-semibold text-gray-400 hover:scale-105 ease-in duration-75 text-xl cursor-pointer">{'<'}Go Back</h1>
                    </div>
                </MainHeader>
                <MainData>
                    <div className="w-full md:w-4/5 mx-auto p-3 lg:p-8 mt-3 bg-white shadow-md rounded-lg">
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="employeeId" className="modal-input-label">Employee Id</label>
                                <input
                                    type="text"
                                    name="id"
                                    id="employeeId"
                                    placeholder="Id"
                                    defaultValue={currentEmpForEdit.id}
                                    ref={idRef}
                                    required
                                    readOnly
                                    className="px-4 py-2 w-full border bg-gray-100 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="name" className="modal-input-label">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    defaultValue={currentEmpForEdit.name}
                                    ref={nameRef}
                                    required
                                    className="px-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="role" className="modal-input-label">Role</label>
                                <input
                                    type="text"
                                    name="role"
                                    id="role"
                                    placeholder="Role"
                                    defaultValue={currentEmpForEdit.role}
                                    ref={roleRef}
                                    required
                                    className="px-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="salary" className="modal-input-label">Salary</label>
                                <input
                                    type="number"
                                    name="salary"
                                    id="salary"
                                    placeholder="Salary"
                                    defaultValue={currentEmpForEdit.salary}
                                    ref={salaryRef}
                                    required
                                    min={1}
                                    className="px-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="image" className="modal-input-label">Image Link</label>
                                <input
                                    type="text"
                                    name="image"
                                    id="image"
                                    defaultValue={currentEmpForEdit.image}
                                    ref={imageRef}
                                    placeholder="Image URL"
                                    className="px-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="joiningDate" className="modal-input-label">Joining Date</label>
                                <input
                                    type="text"
                                    name="joiningDate"
                                    id="joiningDate"
                                    placeholder="Joining Date"
                                    defaultValue={currentEmpForEdit.joiningDate}
                                    ref={joiningDateRef}
                                    className="px-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                />
                            </div>
                            <div>
                                <label htmlFor="address" className="modal-input-label">Address</label>
                                <input
                                    type="text"
                                    name="address"
                                    id="address"
                                    placeholder="Address"
                                    defaultValue={currentEmpForEdit.address}
                                    ref={addressRef}
                                    required
                                    className="px-4 py-2 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
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
        </>
    )
}

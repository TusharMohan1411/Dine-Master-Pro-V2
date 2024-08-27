import { forwardRef, useImperativeHandle, useRef } from "react"
import { createPortal } from 'react-dom';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion'
import { useDispatch } from "react-redux";
import { employeeActions } from "../../contexts/EmployeeSlice";


const EmployeeModal = forwardRef(function EmployeeModal({ EmployeeDetails, onClose }, ref) {
    const dispatch = useDispatch()

    const dialogEmployee = useRef();
    const navigate = useNavigate()

    useImperativeHandle(ref, () => {
        return {
            open() {
                dialogEmployee.current.showModal();
            }
        }
    })

    function deleteEmployeeHandler() {
        dispatch(employeeActions.deleteEmployee(EmployeeDetails.id))
        onClose()
    }

    return createPortal(
        <motion.dialog
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{
                duration: 0.3,
            }}
            ref={dialogEmployee}
            className="modal-class gap-4 lg:gap-6 flex-col lg:flex-row w-full justify-between md:w-[40%]"
            onClose={onClose}
        >
            <div className="empImgCard md:w-72 w-64 h-72 md:h-96">
                <img src={EmployeeDetails.image} alt={EmployeeDetails.name} className='w-full h-full object-cover object-top rounded-md shadow-xl' />
            </div>

            <div className="flex gap-4 flex-col justify-center h-96 flex-1">
                <div className="grow h-full">
                    <h1 className='text-black text-3xl font-bold mt-2'>{EmployeeDetails.name}</h1>
                    <h2 className="text-xl text-gray-700 mb-2">{EmployeeDetails.role}</h2>
                    <hr className="w-full border-black" />
                    <p className="mt-3 text-[18px]"><strong>Employee Id : </strong>{EmployeeDetails.id}</p>
                    <p className="text-[18px]"><strong>Salary : </strong> ₹{EmployeeDetails.salary}</p>
                    <p className=" text-[18px]"><strong> Joining Date : </strong>{EmployeeDetails.joiningDate}</p>
                    <p className="text-[18px]"><strong> Address : </strong> {EmployeeDetails.address}</p>
                </div>

                <div className="flex items-center gap-2">
                    <form method="dialog" className="max-w-fit inline-block">
                        <button type="button" onClick={onClose} className="bg-black text-white px-8 py-2 mt-3 rounded-lg hover:scale-105 duration-150 ease-in">Close</button>
                    </form>
                    <button
                        type="button"
                        onClick={deleteEmployeeHandler}
                        className="px-2 py-2 mt-3 rounded-lg hover:scale-110 duration-150 ease-in"
                    >
                        <MdDelete size={30} />
                    </button>

                    <button
                        type="button"
                        onClick={() => navigate('/employees/editEmployeeDetails', { state: { employee: EmployeeDetails } })}
                        className="px-2 py-2 mt-3 rounded-lg hover:scale-110 duration-150 ease-in"
                    >
                        <FaEdit size={30} /></button>
                </div>
            </div>
        </motion.dialog>, document.getElementById('modal')
    )
}
)

export default EmployeeModal;
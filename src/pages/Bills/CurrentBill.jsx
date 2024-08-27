import { FaTimes } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { motion } from "framer-motion"
import { billsAction } from "../../contexts/BillsSlice";
import { useRef } from "react";
import useTime from "../../Hooks/useTime";


export default function CurrentBill() {

    const dispatch = useDispatch();
    const allBills = useSelector(state => state.bills.allBills);
    const ItemsInCurrentBill = useSelector(state => state.bills.currentItemsInBill)
    const employees = useSelector(state => state.employee.filteredEmployees)
    const empReferenceRef = useRef()

    const date = new Date();
    const { finalDate, realTime } = useTime({ date })

    function handleDeleteItem(index) {
        dispatch(billsAction.removeItemFromCurrentBill(index))
    }

    const totalAmount = ItemsInCurrentBill.reduce((total, item) => total + parseFloat(item.amount), 0);
    const currentBillIndex = allBills.length + 1;

    function addCurrentBillInAllBills() {
        if (ItemsInCurrentBill.length !== 0) {
            const newBill = {
                billNo: currentBillIndex,
                items: ItemsInCurrentBill,
                totalAmount,
                date: finalDate,
                time: realTime,
                empReference: empReferenceRef.current.value,
                cancelled: false
            };

            dispatch(billsAction.submitBill(newBill))
            empReferenceRef.current.value = '';
        } else {
            alert('Please add some items in bill')
        }
    }



    return (
        <>
            <div className="bg-white p-3 md:p-6 rounded-lg shadow-md">
                <div className="mb-3 flex w-full items-center justify-between">
                    <div className="text-[14px] md:text-[16px]">
                        {realTime}
                    </div>
                    <div className="font-bold text-[18px] md:text-[22px]">
                        Bill No: {currentBillIndex}
                    </div>
                    <div className="text-[14px] md:text-[16px]">
                        {finalDate}
                    </div>
                </div>
                {ItemsInCurrentBill.length > 0 ?
                    <table className="min-w-full bg-white text-center border">
                        <thead>
                            <tr>
                                <th className="border py-3 px-1 text-[14px] md:text-[16px] text-black">Item</th>
                                <th className="border py-2 px-1 text-[14px] md:text-[16px] text-black">Price</th>
                                <th className="border py-2 px-1 text-[14px] md:text-[16px] text-black">Qty</th>
                                <th className="border py-2 px-1 text-[14px] md:text-[16px] text-black">Amount</th>
                                <th className="border py-4 px-1 text-[14px] md:text-[16px] text-black">Del</th>
                            </tr>
                        </thead>
                        <tbody>
                            {ItemsInCurrentBill.map((item, index) => (
                                <tr key={index} >
                                    <td className="border px-1 text-[14px] md:text-[16px] md:px-4 py-2">{item.item}</td>
                                    <td className="border px-1 text-[14px] md:text-[16px] md:px-4 py-2">₹ {item.price}</td>
                                    <td className="border px-1 text-[14px] md:text-[16px] md:px-4 py-2">{item.quantity}</td>
                                    <td className="border px-1 text-[14px] md:text-[16px] md:px-4py-2">₹ {item.amount}</td>
                                    <td className="border px-2  py-2">
                                        <button onClick={() => handleDeleteItem(index)}>
                                            <FaTimes className="text-red-500 cursor-pointer" />
                                        </button>
                                    </td>
                                </tr>
                            ))}
                            <tr>
                                <td colSpan={3} className="text-right text-black font-semibold py-5">Total Amount:</td>
                                <td className="text-black font-semibold py-2 md:py-5 text-[14px] md:text-[16px] ">₹ {totalAmount}</td>
                            </tr>
                        </tbody>
                    </table>
                    : <div className="w-full flex h-20 justify-center items-center mt-10 text-xl font-bold text-gray-500">Add Some Items in Bill</div>}
                <div className="my-4">
                    <label htmlFor="empReference" className="block text-gray-700 font-bold mb-2">Referred By: </label>
                    <select
                        name="empReference"
                        className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 
                                    rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 capitalize"
                        ref={empReferenceRef}
                    >
                        <option value="">
                            Select Employee
                        </option>
                        {employees.map((EMP) => (
                            <option
                                key={EMP.name}
                                value={EMP.name}
                                className="capitalize"
                            >
                                {EMP.name}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <div className="w-full text-center">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    onClick={addCurrentBillInAllBills}
                    className='mt-4 bg-black hover:shadow-md text-white font-bold py-2
                                 px-4 rounded focus:outline-none focus:shadow-outline'
                >
                    Submit Bill
                </motion.button>
            </div>
        </>
    )
}

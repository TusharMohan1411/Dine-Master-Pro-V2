import { useSelector } from "react-redux";

export default function AllMadeBills({ handleShowBillDetails }) {

    const allBills = useSelector(state => state.bills.allBills)
    const activeBills = useSelector(state => state.bills.activeBills)

    const totalSalesCount = activeBills.reduce((count, crtBill) => {
        return count + crtBill.totalAmount
    }, 0)

    return (
        <div className="w-full md:pr-5 md:pt-5">
            <h2 className="md:text-4xl text-2xl mt-3 font-bold mb-2 md:mb-4 capitalize text-white w-full text-center bg-[#3952D1] p-2 md:rounded-lg">All Bills</h2>
            <div className="flex flex-wrap-reverse gap-5 justify-between">
                <div className="flex justify-center w-full gap-2 md:rounded-lg text-[18px] py-1 md:text-2xl items-center md:w-2/5 bg-black text-white">
                    <h2>Total Revenue:  </h2>
                    <h2 className="text-center font-bold">
                        ₹ {totalSalesCount}
                    </h2>
                </div>
                <table className="grow bg-white text-center border">
                    <thead>
                        <tr>
                            <th className="border py-2 text-[14px] md:text-[16px] text-black">Bill No.</th>
                            <th className="border py-2 text-[14px] md:text-[16px] text-black">Date</th>
                            <th className="border py-2 text-[14px] md:text-[16px] text-black">Time</th>
                            <th className="border py-2 text-[14px] md:text-[16px] text-black">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {allBills.map((bill, index) => (
                            <tr key={index} onClick={() => handleShowBillDetails(bill)} className="cursor-pointer hover:bg-cyan-100 hover:font-semibold duration-100 ease-in">
                                <td className={`border px-4 text-[14px] md:text-[16px] py-2 ${bill.cancelled ? 'text-red-500 bg-gray-200' : ''}`}>{bill.billNo}</td>
                                <td className={`border px-4 text-[14px] md:text-[16px] py-2 ${bill.cancelled ? 'text-red-500 bg-gray-200' : ''}`}>{bill.date}</td>
                                <td className={`border px-4 text-[14px] md:text-[16px] py-2 ${bill.cancelled ? 'text-red-500 bg-gray-200' : ''}`}>{bill.time}</td>
                                <td className={`border px-4 text-[14px] md:text-[16px] py-2 ${bill.cancelled ? 'text-red-500 bg-gray-200' : ''}`}>₹{bill.totalAmount}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

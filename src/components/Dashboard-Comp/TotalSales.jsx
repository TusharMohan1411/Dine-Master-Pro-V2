import { HiCurrencyRupee } from "react-icons/hi2";
import { useSelector } from "react-redux";

export default function TotalSales() {
    const activeBills = useSelector(state => state.bills.activeBills)

    const totalSales = activeBills.reduce((count, crtBill) => {
        return count + crtBill.totalAmount
    }, 0)

    return (
        <div className="rounded-lg flex h-full w-full gap-1 md:gap-3 p-1 md:p-4 justify-center items-center">
            <div>
                <h1 className="font-bold text-4xl md:text-6xl text-blue-900"><HiCurrencyRupee /></h1>
            </div>
            <div className="flex flex-col justify-center text-left h-full w-full">
                <h1 className="text-4xl md:text-5xl font-extrabold text-blue-900">{totalSales}</h1>
                <h1 className="text-15px md:text-[20px] font-bold text-blue-900">Revenue</h1>
            </div>
        </div>
    )
}
import { useSelector } from 'react-redux';
import { XAxis, YAxis, Tooltip, ResponsiveContainer, Bar, BarChart } from 'recharts';


export default function PopularProducts() {

    const activeBills = useSelector(state => state.bills.activeBills)

    const totalSales = activeBills.reduce((count, crtBill) => {
        return count + crtBill.totalAmount
    }, 0)

    const data = [
        { name: 'Jan', sales: 4000 },
        { name: 'Feb', sales: 3000 },
        { name: 'Mar', sales: 2000 },
        { name: 'Apr', sales: 2780 },
        { name: 'May', sales: 1890 },
        { name: 'Jun', sales: 2390 },
        { name: 'Jul', sales: 3490 },
        { name: 'Aug', sales: totalSales },
    ];

    return (
        <div className='pt-4 h-[200px] md:h-full flex flex-col justify-between'>
            <h1 className='font-bold text-xl mb-4 md:mb-0 text-center text-blue-900 '>Revenue Chart</h1>
            <div className='h-5/6'>
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="sales" fill="#06163A" />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}

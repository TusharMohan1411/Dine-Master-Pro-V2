const ALL_BILLS = [
    {
        billNo: 1,
        items: [
            { item: 'Paneer Pizza', price: '200', quantity: '4', amount: '800' },
            { item: 'Veg Burger', price: '100', quantity: '2', amount: '200' },
            { item: 'Veg Chowmein', price: '80', quantity: '3', amount: '240' },
        ],
        totalAmount: 1240,
        date: '12 Aug 2024',
        time: '3:13 PM',
        empReference: 'Roshan Singh',
        cancelled: false
    },
    {
        billNo: 2,
        items: [
            { item: 'Cheese Burger', price: '120', quantity: '3', amount: '360' },
            { item: 'Pepperoni Pizza', price: '260', quantity: '2', amount: '520' },
            { item: 'Paneer Cutlet', price: '90', quantity: '4', amount: '360' },
        ],
        totalAmount: 1240,
        date: '13 Aug 2024',
        time: '1:25 PM',
        empReference: 'Pooja Sharma',
        cancelled: false
    },
    {
        billNo: 3,
        items: [
            { item: 'Veg Momos', price: '60', quantity: '5', amount: '300' },
            { item: 'Double Patty Burger', price: '180', quantity: '2', amount: '360' },
            { item: 'Paneer Manchurian', price: '110', quantity: '3', amount: '330' },
        ],
        totalAmount: 990,
        date: '14 Aug 2024',
        time: '4:10 PM',
        empReference: 'Amit Verma',
        cancelled: false
    },
    {
        billNo: 4,
        items: [
            { item: 'Aloo Samosa', price: '20', quantity: '10', amount: '200' },
            { item: 'Paneer Pizza', price: '200', quantity: '2', amount: '400' },
            { item: 'French Fries', price: '30', quantity: '6', amount: '180' },
        ],
        totalAmount: 780,
        date: '15 Aug 2024',
        time: '2:45 PM',
        empReference: 'Amit Verma',
        cancelled: false
    },
    {
        billNo: 5,
        items: [
            { item: 'Paneer Patties', price: '50', quantity: '4', amount: '200' },
            { item: 'Spring Rolls', price: '60', quantity: '3', amount: '180' },
            { item: 'Paneer Momos', price: '70', quantity: '5', amount: '350' },
        ],
        totalAmount: 730,
        date: '16 Aug 2024',
        time: '11:00 AM',
        empReference: 'Pooja Sharma',
        cancelled: false
    }
];

export default ALL_BILLS;

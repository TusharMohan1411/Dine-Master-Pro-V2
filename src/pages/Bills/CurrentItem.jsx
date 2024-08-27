import { motion } from "framer-motion"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { billsAction } from "../../contexts/BillsSlice";

export default function CurrentItem() {
    const dispatch = useDispatch()
    const allProducts = useSelector(state => state.products.productsData);

    const [selectedCategory, setSelectedCategory] = useState('');
    const [selectedItem, setSelectedItem] = useState('');

    const [currentItemInBill, setCurrentItemInBill] = useState({
        item: '',
        price: '',
        quantity: '',
        amount: ''
    });

    const initialCategoryProducts = selectedCategory && allProducts[selectedCategory];
    const finalCategoryProducts = { ...initialCategoryProducts };
    delete finalCategoryProducts.image;

    function handleSelectCategory(e) {
        setSelectedCategory(e.target.value);
        setSelectedItem('');
    }

    function handleSelectItem(e) {
        const selectedKey = e.target.value;
        const item = selectedKey ? finalCategoryProducts[selectedKey] : '';
        const itemPrice = item ? item.price : '';
        setSelectedItem(selectedKey);
        setCurrentItemInBill(prevState => ({
            ...prevState,
            item: item.name,
            price: itemPrice,
            amount: itemPrice * prevState.quantity
        }));
    }

    function handleChange(event) {
        const { name, value } = event.target;
        setCurrentItemInBill(prevState => ({
            ...prevState,
            [name]: value,
            amount: name === 'quantity' ? prevState.price * value : prevState.amount
        }));
    }

    function handleAddItemInBill(e) {
        e.preventDefault();

        dispatch(billsAction.addItemInCurrentBill(currentItemInBill))

        setCurrentItemInBill({
            item: '',
            price: '',
            quantity: '',
            amount: ''
        });
        setSelectedCategory('');
        setSelectedItem('');
    }

    return (
        <form className="bg-white p-3 md:p-6 rounded-lg shadow-md w-full max-w-md mx-auto" onSubmit={handleAddItemInBill}>
            <div className="mb-4">
                <label htmlFor="category" className="block text-gray-700 font-bold mb-2">Category</label>
                <select
                    name="category"
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 
                                    rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 capitalize"
                    onChange={handleSelectCategory}
                    value={selectedCategory}
                >
                    <option value="">Select Category</option>
                    {Object.entries(allProducts).map(([key]) => (
                        <option
                            key={key}
                            value={key}
                            className="capitalize"
                        >
                            {key}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="Item" className="block text-gray-700 font-bold mb-2">Item</label>
                <select
                    name="Item"
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500 capitalize"
                    onChange={handleSelectItem}
                    required
                    value={selectedItem}
                >
                    <option value="">Select Item</option>
                    {selectedCategory && Object.entries(finalCategoryProducts).map(([key, item]) => (
                        <option
                            key={key}
                            value={key}
                            className="capitalize"
                        >
                            {item.name}
                        </option>
                    ))}
                </select>
            </div>

            <div className="mb-4">
                <label htmlFor="price" className="block text-gray-700 font-bold mb-2">Price ₹</label>
                <input
                    type="number"
                    name="price"
                    readOnly
                    value={currentItemInBill.price}
                    placeholder="Price"
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
            </div>

            <div className="mb-4">
                <label htmlFor="quantity" className="block text-gray-700 font-bold mb-2">Quantity</label>
                <input
                    type="number"
                    name="quantity"
                    placeholder="Quantity"
                    onChange={handleChange}
                    required
                    value={currentItemInBill.quantity}
                    min={1}
                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                />
            </div>

            <div className="flex items-center justify-between">
                <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                >
                    Add Item
                </motion.button>
            </div>
        </form>
    )
}

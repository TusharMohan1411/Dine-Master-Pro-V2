import { useEffect, useRef, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import MainSection from "../../components/Main/MainSection";
import MainHeader from "../../components/Main/MainHeader";
import MainData from "../../components/Main/MainData";
import AddProductModal from "./AddProduct";
import { FaPlus } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";


export default function ProductTypes() {
    const { categoryName } = useParams();
    const allProducts = useSelector((state) => state.products.productsData)

    const navigate = useNavigate();

    const initialCategoryProducts = allProducts[categoryName];
    const finalCategoryProducts = { ...initialCategoryProducts }
    delete finalCategoryProducts.image;

    const [showAddProductModal, setShowAddProductModal] = useState(false);

    const addProductModal = useRef();

    function openAddProductModal() {
        setShowAddProductModal(true);
    }

    useEffect(() => {
        if (showAddProductModal) {
            addProductModal.current.open();
        }
    }, [showAddProductModal])

    function handleClose() {
        setShowAddProductModal(false);
    }


    return (
        <>
            <AnimatePresence>
                {showAddProductModal &&
                    <AddProductModal ref={addProductModal} onClose={handleClose} />
                }
            </AnimatePresence>
            <MainSection>
                <MainHeader PageHeading={categoryName}>
                    <div className="flex h-full w-fit items-center">
                        <h1 onClick={() => navigate(`/ProductsCategories`)}
                            className="hover:font-semibold ease-in text-gray-500 duration-100 text-[18px]  cursor-pointer capitalize"
                        >
                            {`All Categories >`}
                        </h1>
                        <span className="duration-75 text-[18px]  text-gray-500 capitalize">{`> ${categoryName}`}</span>
                    </div>
                </MainHeader>

                <MainData>
                    {Object.keys(finalCategoryProducts).length > 0 ? (
                        Object.entries(finalCategoryProducts).map(([key, value]) => (
                            <div
                                key={key}
                                onClick={() => navigate(`/ProductsCategories/${categoryName}/${key}`)}
                                className="flex flex-col justify-evenly mb-3 cursor-pointer w-[90%] md:w-[23%] h-64 bg-white 
                            rounded-xl drop-shadow-md transition-transform duration-300 hover:scale-105 hover:z-50"
                            >
                                <div className="product-img w-full h-4/5 overflow-hidden rounded-t-2xl">
                                    <img src={value.image} alt={value.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 rounded-t-2xl" />
                                </div>
                                <div className="flex justify-between items-center p-2">
                                    <h1 className="text-xl font-semibold">{value.name}</h1>
                                    <p className="text-md text-gray-600">₹ {value.price}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No products available in this category.</p>
                    )}
                    <div
                        onClick={openAddProductModal}
                        className="flex items-center justify-center cursor-pointer w-64 h-64 bg-white rounded-lg p-4 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
                    >
                        <div className="flex flex-col items-center justify-center text-blue-900 border-[3px] border-blue-800 rounded-lg h-full w-full text-4xl">
                            <FaPlus />
                            <span className="mt-2 text-lg font-semibold">Add Product</span>
                        </div>
                    </div>
                </MainData>
            </MainSection>
        </>
    );
}

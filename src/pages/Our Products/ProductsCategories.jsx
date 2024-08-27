import { useEffect, useMemo, useRef, useState } from "react";
import MainSection from "../../components/Main/MainSection";
import MainHeader from "../../components/Main/MainHeader";
import MainData from "../../components/Main/MainData";
import AddCategoryModal from "./AddPCategory";
import { useNavigate } from "react-router-dom";
import { FaPlus } from "react-icons/fa";
import { AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";

export default function ProductsCategories() {
    const allProducts = useSelector((state) => state.products.productsData)

    const [showModal, setShowModal] = useState(false);
    const [searchedCategory, setSearchedCategory] = useState('');

    const addCategoryModal = useRef();
    const navigate = useNavigate();

    function openAddCategoryModal() {
        setShowModal(true);
    }

    useEffect(() => {
        if (showModal) {
            addCategoryModal.current.open();
        }
    }, [showModal]);

    function handleClose() {
        setShowModal(false);
    }

    const categoryList = useMemo(() => {
        if (searchedCategory === '') {
            return Object.entries(allProducts);
        } else {
            return Object.entries(allProducts).filter(cat => cat[0].toLowerCase().includes(searchedCategory.toLowerCase())
            );
        }
    }, [searchedCategory, allProducts]);

    return (
        <>
            <AnimatePresence>
                {showModal &&
                    <AddCategoryModal ref={addCategoryModal} onClose={handleClose} />
                }
            </AnimatePresence>

            <MainSection>
                <MainHeader PageHeading={'Our Products'}>
                    <input
                        type="text"
                        name="search"
                        id="search"
                        value={searchedCategory}
                        placeholder="Search Category"
                        onChange={(e) => setSearchedCategory(e.target.value)}
                        className="px-4 py-2 w-56 md:w-auto rounded-xl shadow-sm focus:outline-none duration-200 ease-in focus:shadow-md "
                    />
                </MainHeader>

                <MainData>
                    {categoryList.map(([key, category]) => (
                        <div
                            key={key}
                            onClick={() => navigate(`/ProductsCategories/${key}`)}
                            className="product-card flex flex-col items-center justify-center cursor-pointer w-[45%] md:w-[23%] h-36 md:h-64 bg-white 
                                rounded-2xl shadow-md transition-transform duration-300 hover:scale-105 hover:z-50 hover:shadow-xl"
                        >
                            <div className="product-img w-full h-4/5 overflow-hidden rounded-t-2xl">
                                <img
                                    src={category.image}
                                    alt={key}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110 rounded-t-2xl"
                                />
                            </div>
                            <div className="product-card-text flex justify-center items-center py-1 md:py-2">
                                <h2 className="text-sm md:text-xl font-bold text-gray-800 capitalize tracking-wide">{key}</h2>
                            </div>
                        </div>
                    ))}
                    <div
                        onClick={openAddCategoryModal}
                        className="flex items-center justify-center cursor-pointer w-full md:w-[23%] h-32 md:h-64 bg-white rounded-2xl p-4 shadow-lg hover:shadow-xl transition-transform duration-300 hover:scale-105"
                    >
                        <div className="flex flex-col items-center justify-center text-blue-900 border-[3px] border-blue-800 rounded-lg h-full w-full text-2xl md:text-4xl">
                            <FaPlus />
                            <span className="mt-2 text-sm md:text-lg font-semibold">Add Category</span>
                        </div>
                    </div>
                </MainData>
            </MainSection>
        </>
    );
}

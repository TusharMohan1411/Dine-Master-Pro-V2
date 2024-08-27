import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../contexts/productsSlice";


const AddProductModal = forwardRef(function AddProductModal({ onClose }, ref) {
    const dispatch = useDispatch();
    const productsList = useSelector(state => state.products.productsData)

    const AddProductModalRef = useRef();
    const [newProduct, setNewProduct] = useState({
        name: '',
        price: '',
        image: '',
        ingredients: [],
        recipe: [],
    });
    const [ingredient, setIngredient] = useState('');
    const [recipeStep, setRecipeStep] = useState('');
    const { categoryName } = useParams();

    useImperativeHandle(ref, () => ({
        open() {
            AddProductModalRef.current.showModal();
        },
    }));

    function handleChange(e) {
        const { name, value } = e.target;
        setNewProduct((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    function handleAddIngredient() {
        if (ingredient) {
            setNewProduct((prevState) => ({
                ...prevState,
                ingredients: [...prevState.ingredients, ingredient]
            }));
            setIngredient('');
        } else {
            alert('Please write any ingredient before pressing Add Button')
        }
    }

    function handleAddRecipeStep() {
        if (recipeStep) {
            setNewProduct((prevState) => ({
                ...prevState,
                recipe: [...prevState.recipe, recipeStep]
            }));
            setRecipeStep('');
        } else {
            alert('Please write any Recipe Step before pressing Add Button')
        }
    }

    function handleAddNewProduct(e) {
        e.preventDefault();
        const newProductKey = newProduct.name.split(' ').join('');

        const updatedProducts = {
            ...productsList,
            [categoryName]: {
                ...productsList[categoryName],
                [newProductKey]: newProduct,
            }
        };

        dispatch(productActions.updateProducts(updatedProducts));

        console.log(newProduct);
        onClose();
    }

    return createPortal(
        <motion.dialog
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{
                duration: 0.3,
            }} ref={AddProductModalRef} onClose={onClose}
            className="modal-class w-full md:w-[50%] ">
            <h1 className="text-xl font-bold mb-4">Add Product</h1>
            <form onSubmit={handleAddNewProduct} className="flex w-full md:w-4/5 overflow-x-hidden flex-col gap-3">
                <div>
                    <label htmlFor="name" className="modal-input-label">Name</label>
                    <input
                        type="text"
                        placeholder="Product Name"
                        name="name"
                        id="name"
                        value={newProduct.name}
                        className="p-2 w-full rounded border"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="price" className="modal-input-label">Price</label>
                    <input
                        type="number"
                        name="price"
                        id="price"
                        placeholder="Price"
                        value={newProduct.price}
                        className="p-2 w-full rounded border"
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="image" className="modal-input-label">Image</label>
                    <input
                        type="text"
                        placeholder="Image Link"
                        name="image"
                        id="image"
                        value={newProduct.image}
                        className="p-2 w-full rounded border"
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="Ingredient" className="modal-input-label">Add Ingredients</label>
                    <div className="w-full flex gap-2">
                        <input
                            type="text"
                            id="Ingredient"
                            placeholder="Ingredient"
                            value={ingredient}
                            className="p-2 w-full rounded border"
                            onChange={(e) => setIngredient(e.target.value)}
                        />
                        <button
                            type="button"
                            className="px-4 py-1 bg-green-500 text-white rounded ml-2"
                            onClick={handleAddIngredient}
                        >
                            +
                        </button>
                    </div>
                    <ul>
                        {newProduct.ingredients.map((ing, index) => (
                            <li key={index}>{index + 1}. {ing}</li>
                        ))}
                    </ul>
                </div>
                <div>
                    <label htmlFor="recipe" className="modal-input-label">Add Recipe Step</label>
                    <div className="w-full flex gap-2">
                        <input
                            id="recipe"
                            type="text"
                            placeholder="Recipe Step"
                            value={recipeStep}
                            className="p-2 rounded border w-full"
                            onChange={(e) => setRecipeStep(e.target.value)}
                        />
                        <button
                            type="button"
                            className="px-4 py-1 bg-green-500 text-white rounded ml-2"
                            onClick={handleAddRecipeStep}
                        >
                            +
                        </button>
                    </div>
                    <ul>
                        {newProduct.recipe.map((step, index) => (
                            <li key={index}>{index + 1}. {step}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex justify-center mt-2 gap-2">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-black text-white rounded"
                    >
                        Add
                    </button>
                    <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-500 text-white rounded">Close</button>
                </div>
            </form>
        </motion.dialog>,
        document.getElementById('modal')
    );
});

export default AddProductModal;

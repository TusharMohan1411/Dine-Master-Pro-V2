import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import { useParams } from "react-router-dom";
import { motion } from 'framer-motion'
import { useDispatch, useSelector } from "react-redux";
import { productActions } from "../../contexts/productsSlice";

const EditProduct = forwardRef(function EditProduct({ onClose, currentProductToEdit }, ref) {
    const editProductDialogRef = useRef();

    const nameRef = useRef();
    const priceRef = useRef();
    const imageRef = useRef();
    const ingredientsRef = useRef();
    const recipeRef = useRef();

    const { categoryName, productName } = useParams();
    const dispatch = useDispatch();
    const productsList = useSelector(state => state.products.productsData)

    useImperativeHandle(ref, () => ({
        open() {
            editProductDialogRef.current.showModal();
        },
    }));

    const currentIngredients = currentProductToEdit.ingredients.join(', ')
    const currentRecipe = currentProductToEdit.recipe.join(', ')

    function handleEditProduct(e) {
        e.preventDefault();

        // const { image, ...remainingProducts } = allProducts[categoryName]
        // const cp = Object.entries(remainingProducts).filter(([key, product]) => (
        //     product.name === currentProductToEdit.name
        // ))
        // console.log(cp);

        const editedIngredients = ingredientsRef.current ? ingredientsRef.current.value.split(', ') : null
        const editedRecipe = recipeRef.current ? recipeRef.current.value.split(', ') : null

        const updatedProducts = {
            ...productsList,
            [categoryName]: {
                ...productsList[categoryName],
                [productName]: {
                    name: nameRef.current.value,
                    price: priceRef.current.value,
                    image: imageRef.current.value,
                    ingredients: editedIngredients,
                    recipe: editedRecipe
                }
            }
        }

        dispatch(productActions.updateProducts(updatedProducts));

        console.log(editedIngredients, editedRecipe);


        onClose();
    }

    return createPortal(
        <motion.dialog
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            transition={{
                duration: 0.3,
            }}
            ref={editProductDialogRef}
            onClose={onClose}
            className="modal-class w-full md:w-[50%]"
        >
            <h1 className="text-xl md:text-3xl font-bold mb-4">Edit Product Details</h1>
            <form onSubmit={handleEditProduct} className="flex w-full md:w-4/5 flex-col gap-2">
                <div>
                    <label htmlFor="Name" className="modal-input-label">Name</label>
                    <input
                        type="text"
                        placeholder="Name"
                        id="Name"
                        name="Name"
                        defaultValue={currentProductToEdit.name}
                        ref={nameRef}
                        required
                        className="p-2 w-full rounded border"
                    />
                </div>
                <div>
                    <label htmlFor="Price" className="modal-input-label">Price ₹</label>
                    <input
                        type="number"
                        placeholder="Price"
                        id="Price"
                        name="Price"
                        defaultValue={currentProductToEdit.price}
                        ref={priceRef}
                        required
                        min={1}
                        className="p-2 w-full rounded border"
                    />
                </div>
                <div>
                    <label htmlFor="ImageLink" className="modal-input-label">Image</label>
                    <input
                        type="text"
                        placeholder="Image Link"
                        id="ImageLink"
                        name="ImageLink"
                        defaultValue={currentProductToEdit.image}
                        ref={imageRef}
                        className="p-2 w-full rounded border"
                    />
                </div>
                <div>
                    <label htmlFor="ingredients" className="modal-input-label">Ingredients</label>
                    <textarea
                        id="ingredients"
                        name="ingredients"
                        defaultValue={currentIngredients}
                        ref={ingredientsRef}
                        className="md:h-auto p-2 w-full h-18"
                    />
                </div>
                <div>
                    <label htmlFor="recipe" className="modal-input-label">Recipe</label>
                    <textarea
                        id="recipe"
                        name="recipe"
                        defaultValue={currentRecipe}
                        ref={recipeRef}
                        className="md:h-auto p-2 w-full h-32"
                    />
                </div>

                <div className="flex justify-center mt-2 gap-2">
                    <button
                        type="submit"
                        className="px-4 py-2 bg-black text-white rounded"
                    >
                        Save
                    </button>
                    <button
                        type="button"
                        onClick={onClose}
                        className="px-4 py-2 bg-gray-500 text-white rounded"
                    >
                        Close
                    </button>
                </div>
            </form>
        </motion.dialog>,
        document.getElementById("modal")
    );
});

export default EditProduct;

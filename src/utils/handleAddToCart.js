import { SweetAlert } from "../components/customSwal";
import { addToCartService } from "../services/cartService";
import { updateCartItem } from "../store/actions/cartAction";
import { errorHandler } from "./errorHandling";

export const handleAddToCart = async (dispatch, product, user) => {
    try {
        if (user) {
            await addToCartService(product);
            SweetAlert({
                icon: "success",
                title: "Success!",
                text: product.item + " Added to Cart Successfully",
            });
        }
        dispatch(updateCartItem(product));
    } catch (error) {
        console.error("Error adding to cart: ", error);
        SweetAlert({
            icon: "error",
            title: "Error!",
            text: errorHandler(error),
        });
    }
};
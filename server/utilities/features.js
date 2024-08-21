import { Product } from "../models/Product.js";

export const reduceStock = async(orderItems) => {
    for(let i = 0; i < orderItems.length; i++){
        const order = orderItems[i]
        const product = await Product.findById(order.productId)
        if(!product) throw new Error("Product Not Found");
        product.stock -= order.quantity
        await product.save()
    }
}
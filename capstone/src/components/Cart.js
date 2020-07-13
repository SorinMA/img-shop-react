import React, {useContext, useState} from "react"
import PhotoCart from "./PhotoCart"
import {FavAndCartContext} from "../context/cartAndLikeContext"
import Total from "./Total"
function Cart(props) {
    const {cart, clickCart, checkout} = useContext(FavAndCartContext)
    const [loading, setLoading] = useState("Checkout")
    const images = (Array.from(cart)).map((data, i) => <PhotoCart src={data} key={i} clickCart={clickCart}/>)
    const nrOfItems = cart.length
    const onLoading = async () => {
        await setLoading("Loading..")
        await checkout()
        await setLoading("Checkout")
    }
    return (
        <>
            <Total nrOfItems={nrOfItems}/>
            {nrOfItems > 0 ?
                <button 
                    onClick={onLoading} 
                    disabled={loading === "Loading.." ? true : false}
                >
                    {loading}
                </button> : <div></div>
            }
            {images}
        </>
    )
}

export default Cart
import React, {useState} from "react"

const FavAndCartContext = React.createContext()

function ProviderFavAndCartContext(props) {
    let [like, setLike] = useState([])
    let [cart, setCart] = useState([])
    
    const clickLike = (url, inLike) => {
        let newLike = like.slice()
        if (inLike) {
            if (like.indexOf(String(url)) === -1) {
                newLike.push(String(url))
                setLike(newLike)
            }
        } else 
            if (like.indexOf(String(url)) !== -1) {
                newLike.splice(like.indexOf(String(url)), 1)
                setLike(newLike)
            } 
    }

    const clickCart = (url, inCart) => {
        let newCart = cart.slice()
        if (inCart) {
            if (cart.indexOf(String(url)) === -1) {
                newCart.push(String(url))
                setCart(newCart)
            }
        } else 
            if (cart.indexOf(String(url)) !== -1) {
                newCart.splice(cart.indexOf(String(url)), 1)
                setCart(newCart)
            }    
    }

    const checkout = () => {
        setTimeout(() => {
            console.log("loading")
            setCart([])
            alert("Done")
    
        }, 2000)
    }

    const getCart = () => {
        return cart
    }
    const getLike = () => {
        return like
    }

    return (
        <>
            <FavAndCartContext.Provider value={{
                                                like: like,
                                                cart: cart,
                                                getCart: getCart,
                                                getLike: getLike,
                                                clickLike:clickLike,
                                                clickCart:clickCart,
                                                checkout: checkout
                                                }}>
                {props.children}
            </FavAndCartContext.Provider>
        </>
    )

}

export {FavAndCartContext, ProviderFavAndCartContext}
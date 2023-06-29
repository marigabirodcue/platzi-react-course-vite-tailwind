/*import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext()

export const ShoppingCartProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}*/

import PropTypes from 'prop-types'
import { createContext, useState } from 'react'

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
    // Shopping Cart · Increment quantity
    const [count, setCount] = useState(0);

    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    }

    // Product Detail · Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false)
    const openProductDetail = () => setIsProductDetailOpen(true)
    const closeProductDetail = () => setIsProductDetailOpen(false)

    // Product Detail · Show product
    const [productToShow, setProductToShow] = useState({})

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow
        }}>
            {children}
        </ShoppingCartContext.Provider>
    )
}
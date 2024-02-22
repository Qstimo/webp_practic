import React from 'react'
import cls from './Shop.module.scss'
interface ShopProps {
    className?: string
}
const Shop = ({ className }: ShopProps) => {
    return (
        <div >
            <h1>Shop</h1>
        </div>
    )
}
export default Shop
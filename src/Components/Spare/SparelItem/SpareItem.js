import React,{useContext} from 'react';
import classes from './SpareItem.module.css';
import MealItemForm from './SpareItemForm';
import CartContext from '../../../store/cart-context';

const SpareItem = (props) => {
    const cartCtx = useContext(CartContext);
    
    const addToCartHandler = (amount) =>{
        cartCtx.addItem({
            id:props.id,
            name:props.name,
            amount:amount,
            price:props.price
        });
    }

    const price = `${props.price.toFixed(2)}`
    return (
        <li className={classes.meal}>
            <div >
                <h3>{props.name}</h3>
                <div className={classes.description}>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemForm onAddToCart = {addToCartHandler}></MealItemForm>
            </div>
        </li>
    );
}

export default SpareItem;
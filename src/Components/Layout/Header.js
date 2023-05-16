import React from 'react';
import mealsImage from '../../assets/mahbub-majid-C2uAWfPYTao-unsplash.jpg';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';

const Header = (props) => {
  return (
    <React.Fragment>
        <header className={classes.header}>
            <h2><span>Zaware</span> Shokabs</h2>
            <HeaderCartButton onShowCart={props.onShowCart}></HeaderCartButton>
        </header>
        <div className={classes['main-image']}>
            <img src="https://cdn.pixabay.com/photo/2019/07/24/23/09/car-4361321_1280.jpg" />
        </div>
    </React.Fragment>
  )
}

export default Header;
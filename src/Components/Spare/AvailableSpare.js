import React, { useEffect, useState } from 'react';
import classes from './AvailableSpare.module.css';
import Card from '../UI/Card';
import SpareItem from './SparelItem/SpareItem';

const AvailableSpare = () => {
    const [spareData, setSpareData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    async function fetchSpare() {
        try {
            const response = await fetch('https://fir-course-c6286-default-rtdb.firebaseio.com/products.json');

            if (!response.ok) {
                throw new Error("Something Went Wrong");
            }

            const data = await response.json();

            const loadedSpare = [];

            for (const key in data) {
                loadedSpare.push({
                    id: key,
                    name: data[key].name,
                    description: data[key].description,
                    price: data[key].price
                });
            }
            setSpareData(loadedSpare);
            setIsLoading(false);
        }
        catch (error) {
            console.log(error);
            console.log(error.message);
            setIsLoading(false);
            setError(error.message);
        }
    }

    useEffect(() => {
        fetchSpare();
    }, []);

    if (isLoading) {
        return (
            <section>
                <p className={classes.mealsLoading}>Loading....</p>
            </section>
        )
    }

    if (error) {
        return (
            <section>
                <p className={classes.mealsError}>{error}</p>
            </section>
        )
    }

    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {spareData.map((spare) => {
                        return (
                            <SpareItem
                                key={spare.id}
                                id={spare.id}
                                name={spare.name}
                                description={spare.description}
                                price={spare.price}>
                            </SpareItem>
                        )
                    })}
                </ul>
            </Card>
        </section>
    )
}

export default AvailableSpare;
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getFilteredCategory } from '../api';
import { Preloader } from '../components/Preloader';
import { MealList } from '../components/MealList';
import { MealProps } from '../components/Meal';
import { BiUndo } from "react-icons/bi";

// Define the structure of params received from the URL
type Params = {
    name: string;
}

function Category() {
    const { name } = useParams<Params>(); // Specify the type for useParams
    const [meals, setMeals] = useState<MealProps[]>([]); // Specify the state type for meals
    const navigate = useNavigate(); // Changed from destructuring to directly using history

    useEffect(() => {
        getFilteredCategory(name!).then((data) => {
            if (data.meals) {
                setMeals(data.meals); // Ensure data.meals is defined
            }
        });
    }, [name]);

    return (
        <>
            <button className='btn' onClick={() => navigate(-1)}>
                <BiUndo size={25}/>
            </button>
            {!meals.length ? <Preloader /> : <MealList meals={meals} />}
        </>
    );
}

export { Category };

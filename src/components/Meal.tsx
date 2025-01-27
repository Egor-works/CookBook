import { Link } from 'react-router-dom';

interface MealProps {
    strMeal: string;
    idMeal: string;
    strMealThumb: string;
}

function Meal(props: MealProps) {
    const { strMeal, idMeal, strMealThumb } = props;

    return (
        <div className='card'>
            <div className='card-image'>
                <img src={strMealThumb} alt={strMeal} />
            </div>
            <div className='card-content'>
                <span className='card-title'>{strMeal}</span>
            </div>
            <div className='card-action'>
                <Link to={`/meal/${idMeal}`} className='btn'>
                    Watch recipe
                </Link>
            </div>
        </div>
    );
}

export { Meal };
export type { MealProps };

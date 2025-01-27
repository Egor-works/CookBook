import { Meal, MealProps } from './Meal';

interface MealListProps {
    meals: MealProps[];
}

function MealList({ meals }: MealListProps) {
    return (
        <div className='list'>
            {meals.map((meal) => (
                <Meal key={meal.idMeal} {...meal} />
            ))}
        </div>
    );
}

export { MealList };
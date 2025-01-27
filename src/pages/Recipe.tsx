import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getMealById } from '../api';
import { Preloader } from '../components/Preloader';
import { BiUndo } from 'react-icons/bi';

// Define the expected shape of the Recipe object
interface Recipe {
    idMeal?: string;
    strMeal: string;
    strCategory: string;
    strArea?: string;
    strInstructions: string;
    strMealThumb: string;
    strYoutube?: string;
    [key: string]: any;
    // Include additional fields as needed
}

function Recipe() {
    const [recipe, setRecipe] = useState<Recipe>({} as Recipe); // Initialize with an empty object of type Recipe
    const { id } = useParams<{ id: string }>(); // Define the expected shape of URL parameters
    const navigate = useNavigate(); // Use useNavigate from React Router v6

    useEffect(() => {
        getMealById(id!).then((data) => {
            if (data.meals) {
                setRecipe(data.meals[0]);
            }
        });
    }, [id]);

    return (
        <>
            {!recipe.idMeal ? (
                <Preloader />
            ) : (
                <div className='recipe'>
                    <img src={recipe.strMealThumb} alt={recipe.strMeal} />
                    <h1>{recipe.strMeal}</h1>
                    <h6>Category: {recipe.strCategory}</h6>
                    {recipe.strArea && <h6>Area: {recipe.strArea}</h6>}
                    <p>{recipe.strInstructions}</p>

                    <table className='centered'>
                        <thead>
                            <tr>
                                <th>Ingredient</th>
                                <th>Measure</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(recipe).map((key) => {
                                if (key.includes('Ingredient') && recipe[key]) {
                                    return (
                                        <tr key={key}>
                                            <td>{recipe[key]}</td>
                                            <td>
                                                {
                                                    recipe[
                                                        `strMeasure${key.slice(
                                                            13
                                                        )}`
                                                    ]
                                                }
                                            </td>
                                        </tr>
                                    );
                                }
                                return null;
                            })}
                        </tbody>
                    </table>

                    {recipe.strYoutube && (
                        <div className='row'>
                            <h5 style={{ margin: '2rem 0 1.5rem' }}>
                                Video Recipe
                            </h5>
                            <iframe
                                title={id}
                                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                                    -11
                                )}`}
                                allowFullScreen
                            />
                        </div>
                    )}
                </div>
            )}
            <button className='btn' onClick={() => navigate(-1)}>
                <BiUndo size={25}/>
            </button>
        </>
    );
}

export { Recipe };

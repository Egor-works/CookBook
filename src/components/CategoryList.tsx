import { CategoryItem } from './CategoryItem';

interface Category {
    idCategory: string;
    strCategory: string;
    strCategoryThumb: string;
    strCategoryDescription: string;
}

interface CategoryListProps {
    catalog: Category[];
}

function CategoryList({ catalog = [] }: CategoryListProps) {
    return (
        <div className='list'>
            {catalog.map((el) => (
                <CategoryItem key={el.idCategory} {...el} />
            ))}
        </div>
    );
}

export { CategoryList };
export type { Category };
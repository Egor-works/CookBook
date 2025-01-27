import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { getAllCategories } from '../api';
import { Preloader } from '../components/Preloader';
import { CategoryList, Category } from '../components/CategoryList';
import { Search } from '../components/Search';


function Home() {
    const [catalog, setCatalog] = useState<Category[]>([]);
    const [filteredCatalog, setFilteredCatalog] = useState<Category[]>([]);

    const { pathname, search } = useLocation();
    const navigate = useNavigate();

    const handleSearch = (str: string) => {
        setFilteredCatalog(
            catalog.filter((item) =>
                item.strCategory.toLowerCase().includes(str.toLowerCase())
            )
        );
        navigate({
            pathname,
            search: `?search=${str}`,
        });
    };

    useEffect(() => {
        getAllCategories().then((data) => {
            setCatalog(data.categories);
            setFilteredCatalog(
                search
                    ? data.categories.filter((item: { strCategory: string; }) =>
                          item.strCategory
                              .toLowerCase()
                              .includes(search.split('=')[1].toLowerCase())
                      )
                    : data.categories
            );
        });
    }, [search]);

    return (
        <>
            <Search cb={handleSearch} />
            {!catalog.length ? (
                <Preloader />
            ) : (
                <CategoryList catalog={filteredCatalog} />
            )}
        </>
    );
}

export { Home };

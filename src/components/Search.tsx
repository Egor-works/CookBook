import { useState } from "react";
import { BiSolidSearchAlt2 } from "react-icons/bi";

interface SearchProps {
    cb?: (value: string) => void;
}

function Search({ cb = () => {} }: SearchProps) {
    const [value, setValue] = useState<string>('');

    const handleKey = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            handleSubmit();
        }
    };

    const handleSubmit = () => {
        cb(value);
    };

    return (
        <div className='row'>
            <div className='input-field col s12'>
                <input
                    type='search'
                    id='search-field'
                    placeholder='search'
                    onKeyDown={handleKey}
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                />
                <button
                    className='btn'
                    style={{
                        position: 'absolute',
                        top: 0,
                        right: 0,
                    }}
                    onClick={handleSubmit}
                >
                    <BiSolidSearchAlt2 size={20}/>
                </button>
            </div>
        </div>
    );
}

export { Search };
import { useState } from 'react';

type Props = {
    onAddComic: (input: string) => void
}

const SearchComic = ({ onAddComic }: Props) => {

    const [input, setInput] = useState('');

    const onSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (input.trim().length < 1) return;

        onAddComic(input);
        setInput('');
    }

    return (
        <div className="col">
            <form onSubmit={ (e) => onSumbit(e) } aria-label="form">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search your favorite Marvel comic"
                    value={input}
                    onChange={ (e) => setInput(e.target.value)}
                />
            </form>
        </div>
    );
}

export default SearchComic;
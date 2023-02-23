import { useState } from 'react';

type Props = {
    onAddCharacter: (input: string) => void
}

const SearchCharacter = ({ onAddCharacter }: Props) => {

    const [input, setInput] = useState('');

    const onSumbit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (input.trim().length < 1) return;

        onAddCharacter(input);
        setInput('');
    }

    return (
        <div className="col">
            <form onSubmit={ (e) => onSumbit(e) } aria-label="form">
                <input
                    type="text"
                    className="form-control"
                    placeholder="Search your favorite Marvel character"
                    value={input}
                    onChange={ (e) => setInput(e.target.value)}
                />
            </form>
        </div>
    );
}

export default SearchCharacter;
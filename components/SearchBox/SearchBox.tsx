import { useId } from "react";
import css from './SearchBox.module.css'
import { FaSearch } from "react-icons/fa";

interface SearchBoxProps {
  onSearch: (query: string) => void;
}

export default function SearchBox({  onSearch }: SearchBoxProps) {
  const inputId = useId();
  const handleSubmit = (formData: FormData) => {
    const city = formData.get("query") as string;
    if (city.trim()) onSearch(city);
  };
    return (
        <div className={ css.container}>
      <form action={handleSubmit} className={ css.form} >
      <input
        type="text"
        id={inputId}
        name="query"
        aria-label="Search city"
        placeholder="Search city..."
        className={css.input}
      />
                <button aria-label="Search-button" type='submit' className={ css.btn}><FaSearch /></button>
            </form>
           </div>
  );
}

import './styles.css';

export default function SearchBar() {
    return(
        <form className="dsc-search-bar">
            <input type="text" placeholder="Nome do produto" />
            <button type="reset">Buscar</button>
        </form>
    );
}
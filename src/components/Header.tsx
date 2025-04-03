import { Link } from "react-router-dom";

export function Header(){
    return(
        <>
        <header className="bg-red-900 h-12">
            <Link to="/" > go back </Link>
        </header>
        </>
    )
}


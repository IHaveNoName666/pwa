import { Outlet } from "react-router-dom";

const layout = () => {
    return (  
        <>
        <header>This is header</header>

        <main>
            <Outlet/>
        </main>

        <footer>
            <p>Do it propely!!</p>
        </footer>
        </>
    );
}
 
export default layout;
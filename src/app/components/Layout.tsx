import { Suspense } from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const layout = () => {

    return(
        <>
        <Header />
            <main>
                <Suspense fallback={"Carregando..."}>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}

export default layout;
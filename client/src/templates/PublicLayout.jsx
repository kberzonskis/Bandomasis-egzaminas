import { Outlet } from "react-router";

export function PublicLayout()

 { return(

<>
<header>Header content!!!!!</header>
<Outlet />
<footer>Footer content!!!!!</footer>

</>
 )
}
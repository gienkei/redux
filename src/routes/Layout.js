import {Outlet, NavLink} from 'react-router-dom';
import './Layout.css';
export default function Layout() {
    return (
        <div className="m-5 ml-500">
            <header className="flex mb-10 gap-5 font-semibold h-100 text-2xl flex-row justify-center bg-purple-200 border border-black">
                <NavLink
                    to="/albums"
                    end={true}>
                    Albums
                </NavLink>
                <NavLink
                    to="/users">
                    Users
                </NavLink>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    );
}

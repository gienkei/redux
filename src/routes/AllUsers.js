import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {fetchAlbums} from '../redux/albums/actions';
import {fetchUsers} from '../redux/users/actions';
import {selectUsers} from '../redux/users/selectors';
export default function AllUsers() {
    const navigate = useNavigate();
    useFetch(fetchUsers());
    useFetch(fetchAlbums());
    const goToUser = useCallback(
        (id) => {
            return () => navigate(`/users/${id}`);
        },
        [navigate]
    );
    const users = useSelector(selectUsers);
    if (users.loading) return <div>Loading...</div>;
    return (
        <div className="flex flex-col items-center border border-black">
            <span className="border border-black p-1 m-5 text-2xl">Users:</span>
            {users.map((user) => (
                <div
                    key={user.id}
                    onClick={goToUser(user.id)}
                    className="text-lg hover:text-purple-600 cursor-pointer	"
                >
                    {user.name}
                </div>
            ))}
        </div>
    );
}

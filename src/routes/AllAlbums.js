import {useCallback} from 'react';
import {useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import {fetchAlbums} from '../redux/albums/actions';
import {selectAlbums} from '../redux/albums/selectors';

export default function AllAlbums() {
    useFetch(fetchAlbums());
    const navigate = useNavigate();
    const goToAlbum = useCallback(
        (id, userId) => {
            return () => navigate(`/albums/${id}/${userId}`);
        },
        [navigate]
    );
    const albums = useSelector(selectAlbums);
    return (
        <div className="text-left flex flex-col items-center border border-black">
            <span className="border border-black p-1 m-5 text-2xl">Albums:</span>
            {albums.map((album) => (
                <div
                    key={album.id}
                    onClick={goToAlbum(album.id, album.userId)}
                    className="text-lg cursor-pointer hover:text-purple-600"
                >
                    {album.title}
                </div>
            ))}
        </div>
    );
}

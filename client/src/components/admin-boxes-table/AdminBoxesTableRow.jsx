import { useContext } from 'react';
import { Link } from 'react-router';
import { ContainersContext } from '../../context/containers/ContainersContext';
import { formatDuration } from '../../lib/formatDuration';
import defaultImg from '../../assets/default.png';
import { SERVER_ADDRESS } from '../../env';
import { BoxesContext } from '../../context/boxes/BoxesContext';

export function AdminBoxesTableRow({ box }) {
    const { adminContainers } = useContext(ContainersContext);
    const { deletePublicBox, deleteAdminBox } = useContext(BoxesContext);

    if (!adminContainers.length) {
        return;
    }

    const imgPath = box.img ? (SERVER_ADDRESS + '/img/boxes/' + box.img) : defaultImg;

    function handleDeleteClick() {
        fetch(SERVER_ADDRESS + '/api/admin/boxes/' + box.url_slug, {
            method: 'DELETE',
            credentials: 'include',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    deletePublicBox(box.url_slug);
                    deleteAdminBox(box.url_slug);
                }
            })
            .catch(console.error);
    }

    return (
        <tr>
            <th scope="row">{box.id}</th>
            <td><img src={imgPath} alt="box thumbnail" style={{ maxHeight: '4rem' }} /></td>
            <td><Link to={"/admin/boxes/" + box.url_slug}>{box.title}</Link></td>
            <td>{
                box.description
                    ? <span className="badge text-bg-success">Provided</span>
                    : <span className="badge text-bg-warning">Empty</span>
            }</td>
            <td>{
                box.duration_in_minutes
                    ? formatDuration(box.duration_in_minutes)
                    : <span className="badge text-bg-warning">Not selected</span>
            }</td>
            <td>
                {
                    box.container_id
                        ? adminContainers.find(c => c.id === box.container_id).title
                        : <span className="badge text-bg-warning">Not selected</span>
                }
            </td>
            <td>
                {
                    box.status_name === 'published'
                        ? <span className="badge text-bg-success">Published</span>
                        : <span className="badge text-bg-warning">Draft</span>
                }
            </td>
            <td>
                <div className="d-flex gap-3">
                    <Link className="btn btn-primary btn-sm" to={`/admin/boxes/${box.url_slug}/edit`}>Edit</Link>
                    <button onClick={handleDeleteClick} className="btn btn-danger btn-sm">Delete</button>
                </div>
            </td>
        </tr>
    );
}
import { Link } from 'react-router';

export function ContainerCard({ container }) {
    return (
        <div className="feature col my-4">
            <h3 className="fs-2 text-body-emphasis">{container.title}</h3>
            <p>{container.description}</p>
            <p>Boxes count: {container.boxCount}</p>
            <Link to={'/containers/' + container.ur_slug} className="icon-link">Read more</Link>
        </div>
    );
}
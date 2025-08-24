import { Link } from "react-router";

export function AdminContainersTable() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-12">
                    <div className="table-responsive">
                        <table className="table table-striped">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">Title</th>
                                    <th scope="col">Url</th>
                                    <th scope="col">Description</th>
                                    <th scope="col">Box count</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td><Link to="/admin/containers/action">Action</Link></td>
                                    <td>action</td>
                                    <td>Action</td>
                                    <td>0</td>
                                    <td><span className="badge text-bg-success">Published</span></td>
                                    <td className="d-flex gap-3">
                                        <Link className="btn btn-dark btn-sm" to="/admin/containers/action/edit">Edit</Link>
                                        <button data-url="action" className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td><Link to="/admin/containers/adventure">Adventure</Link></td>
                                    <td>adventure</td>
                                    <td>Adventure</td>
                                    <td>0</td>
                                    <td><span className="badge text-bg-warning">Draft</span></td>
                                    <td className="d-flex gap-3">
                                        <Link className="btn btn-primary btn-sm" to="/admin/containers/adventure/edit">Edit</Link>
                                        <button data-url="adventure" className="btn btn-danger btn-sm">Delete</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}
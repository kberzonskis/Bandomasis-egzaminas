import { useContext } from "react";
import { formatDuration } from "../lib/formatDuration";
import { formatRating } from "../lib/formatRating";
import { ContainersContext } from "../context/containers/ContainersContext";
import defaultImg from '../assets/default.png';
import { SERVER_ADDRESS } from "../env";

export function AdminViewBoxTable({ boxData }) {
    const { getAdminContainerById } = useContext(ContainersContext);

    const containerData = getAdminContainerById(boxData.container_id);
    const imgPath = boxData.img ? (SERVER_ADDRESS + '/img/boxs/' + boxData.img) : defaultImg;

    return (
        <table className="table table-bordered border-primary">
            <tbody>
                <tr className="mb-3">
                    <td>Thumbnail</td>
                    <td>
                        <img style={{ maxHeight: '5rem' }} src={imgPath} alt="box thumbnail" />
                        <p>{boxData.img}</p>
                    </td>
                </tr>
                <tr className="mb-3">
                    <td>Title</td>
                    <td>{boxData.title}</td>
                </tr>
                <tr className="mb-3">
                    <td>Url slug</td>
                    <td>{boxData.url_slug}</td>
                </tr>
                <tr className="mb-3">
                    <td>Description</td>
                    <td>{boxData.description}</td>
                </tr>
                <tr className="mb-3">
                    <td>Duration</td>
                    <td>{
                        boxData.duration_in_minutes
                            ? formatDuration(boxData.duration_in_minutes)
                            : <span class="badge text-bg-warning">Not selected</span>
                    }</td>
                </tr>
                <tr className="mb-3">
                    <td>Container</td>
                    <td>{
                        containerData
                            ? containerData.title
                            : <span class="badge text-bg-warning">Not selected</span>
                    }</td>
                </tr>
                <tr className="mb-3">
                    <td>Release date</td>
                    <td>{boxData.release_date}</td>
                </tr>
                <tr className="mb-3">
                    <td>Rating</td>
                    <td>{formatRating(boxData.rating)}</td>
                </tr>
                <tr className="mb-3">
                    <td>Status</td>
                    <td>
                        {
                            boxData.status_name === 'published'
                                ? <span className="badge text-bg-success">Published</span>
                                : <span className="badge text-bg-warning">Draft</span>
                        }
                    </td>
                </tr>
            </tbody>
        </table>
    );
}
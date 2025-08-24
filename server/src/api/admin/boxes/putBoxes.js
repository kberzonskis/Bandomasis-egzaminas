import { connection } from "../../../db.js";
import { IsValid } from "../../../lib/IsValid.js";

export async function putAdminBoxes(req, res) {
    const [errParams, msgParams] = IsValid.fields(req.params, {
        original_url: 'nonEmptyString',
    });

    if (errParams) {
        return res.json({
            status: 'error',
            msg: msgParams,
        });
    }

    const [err, msg] = IsValid.fields(req.body, {
        title: 'nonEmptyString',
        url: 'nonEmptyString',
        duration: 'numberInteger',
        container: 'numberInteger',
        status: 'nonEmptyString',
        rating: 'numberFloat',
    }, {
        img: 'nonEmptyString',
        description: 'nonEmptyString',
        releaseDate: 'nonEmptyString',
    });

    if (err) {
        return res.json({
            status: 'error',
            msg: msg,
        });
    }

    const { original_url } = req.params;
    const { title, url, status, duration, rating } = req.body;
    let { container, description, releaseDate, img } = req.body;

    if (container === 0) {
        container = null;
    }
    if (!description) {
        description = '';
    }
    if (!releaseDate) {
        releaseDate = null;
    }
    if (!rating) {
        rating = 0;
    }
    if (!img) {
        img = '';
    }

    const imgPath = img.split('/').at(-1);

    try {
        const sql = `
            UPDATE boxes
            SET img = ?, title = ?, url_slug = ?, container_id = ?, status_id = (
                SELECT id FROM general_status WHERE name = ?
            ),  description = ?, release_date = ?, duration_in_minutes = ?, rating = ?
            WHERE url_slug = ?`;
        const [response] = await connection.execute(sql,
            [imgPath, title, url, container, status, description, releaseDate, duration, rating, original_url]);

        if (response.affectedRows !== 1) {
            return res.status(500).json({
                status: 'error',
                msg: 'Serverio klaida',
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            status: 'error',
            msg: 'Serverio klaida',
        });
    }

    return res.status(200).json({
        status: 'success',
        msg: 'Sekmingai atnaujintas filmas',
    });
}
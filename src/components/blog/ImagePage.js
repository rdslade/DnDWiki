import { useParams } from "react-router-dom";

const images = require.context('../../images', true);

export default function ImagePage() {
    let params = useParams();
    try {
        let image = images(`./${params.id}.pdf`);
        return (
            <embed src={image} width="500" height="375" type="application/pdf"></embed>
        )
    } catch {
        return (
            <h1> NO MAP FOUND </h1>
        )
    }
}


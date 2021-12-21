import { useParams } from "react-router-dom";

const images = require.context('../../images', true);

export default function ImagePage() {
    let params = useParams();
    try {
        let image = images(`./${params.id}.png`);
        return (
            <img src={image} width="100%" />
        )
    } catch {
        return (
            <h1> NO MAP FOUND </h1>
        )
    }
}


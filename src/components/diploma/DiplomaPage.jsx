import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const DiplomaPage = () => {
    const [result, setResult] = useState("");
    const {id} = useParams();

    useEffect(() => {

            setResult(`https://drive.google.com/file/d/${id}/preview`)
    }, [id]);

    return (
        <>
            <iframe
                    title="PDF Viewer"
                    src={result}
                    width="100%"
                    height="100%"
                    allowFullScreen
                    className={'absolute z-50'}
                ></iframe>
        </>
    );
};

export default DiplomaPage;

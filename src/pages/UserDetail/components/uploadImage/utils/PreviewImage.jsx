import React, { useState } from "react";

const PreviewImage = ({ file }) => {
    const [preview, setPreview] = useState();

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
        setPreview(reader.result);
    };

    return <img src={preview} alt="preview" width="450px" height="70px" />;
};

export default PreviewImage;

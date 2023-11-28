import { ImageUploader } from "@quansitech/pallas-h5";
import React from "react";

export default () => {
    return (
        <ImageUploader action="http://qscmf.test/api/upload/upload?cate=image" />
    )
}
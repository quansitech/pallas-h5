import { ImageUploader } from "@quansitech/pallas-h5";
import React from "react";

export default () => {

    return (
        <ImageUploader action="http://qscmf.tunnel.t4tstudio.com/extends/objectStorage/policyGet?type=image" uploadTo="tos" />
    )
}
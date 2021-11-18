import FileUploader from "../imageSlider/fileUploader";
import Speed from "../common/speed";
import Rotation from "../common/rotation";

const ImageSlider = {
    name: "image",
    displayName: "Image",
    children: [
        <Speed minVal={10} maxVal={110} key={"ImageSpeed"} />,
        <Rotation key={"ImageRotation"} />,
        <FileUploader key={"ImageFileUploader"} />,
    ],
};

export default ImageSlider;

import React, { Component, useEffect, useState } from "react";
import "./UserProfile.css";
import ImageCrop from "./library/imageCrop";
import { useDispatch } from 'react-redux';
import { uploadAvatar } from "../../actions/users";

const MyEditor = () => {
    const [userProfilePic, setUserProfilePic] = useState("");
    const [editor, setEditor] = useState("");
    const [scaleValue, setScaleValue] = useState(1);

    const [openCropper, setOpenCropper] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");
    const [fileUploadErrors, setFileUploadErrors] = useState("");

    const dispatch = useDispatch();

    const onCrop = () => {
        if (editor !== null) {
            // const url = editor.getImageScaledToCanvas().toDataURL('image/jpeg', 1);
            console.log(editor)
            // setUserProfilePic(url);

            // let newFile = new File([editor.props.image.name], url, {
            //     type: editor.props.image.type,
            // });
            // dispatch(uploadAvatar(url));
        }
    };

    const DataURLtoFile = (dataurl, filename) => {
        let arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }

        return console.log(new File([u8arr], filename, { type: mime }));
      };

    const onScaleChange = (scaleChangeEvent) => {
        const scaleVal= parseFloat(scaleChangeEvent.target.value);
        setScaleValue(scaleVal);
    };

    const profilePicChange = (fileChangeEvent) => {
        const file = fileChangeEvent.target.files[0];
        const { type } = file;
        if (
            !(
                type.endsWith("jpeg") ||
                type.endsWith("png") ||
                type.endsWith("jpg") ||
                type.endsWith("gif")
            )
        ) {
        } else {
            setOpenCropper(true);
            setSelectedImage(fileChangeEvent.target.files[0]);
            console.log(fileChangeEvent.target.files[0]);
            setFileUploadErrors([]);
        }
    };

    return (
        <div className="Apped">
            <input
                type="file"
                name="filename"
                accept="image/png, image/jpeg"
                onChange={profilePicChange}
            />
            <ImageCrop
                imageSrc='http://localhost:5000/Снимок экрана 2020-11-12 в 22.42.46.png'
                setEditorRef={setEditor}
                onCrop={onCrop}
                scaleValue={scaleValue}
                onScaleChange={onScaleChange}
            />
            <img src={userProfilePic} alt="Profile" />
            {/* <img src='http://localhost:5000/Снимок экрана 2020-11-12 в 22.42.46.png' alt=""/> */}
        </div>
    );
}

export default MyEditor;

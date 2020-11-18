import React, { Component, useState, useRef } from "react";
import Dropzone from "react-dropzone";
import ReactCrop from "react-image-crop";
import {
    base64StringtoFile,
    downloadBase64File,
    extractImageFileExtensionFromBase64,
    image64toCanvasRef,
} from "./ResuableUtils";
import { connect } from "react-redux";
import { uploadAvatar } from "../../../actions/users";
import "./UserProfile.css";

const imageMaxSize = 1000000000; // bytes
const acceptedFileTypes =
    "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {
    return item.trim();
});

class ImgDropAndCrop extends Component {
    constructor(props) {
        super(props);
        this.imagePreviewCanvasRef = React.createRef();
        this.fileInputRef = React.createRef();
        this.state = {
            imgSrc: null,
            imgSrcExt: null,
            crop: {
                aspect: 1 / 1,
            },
        };
    }

    verifyFile = (files) => {
        if (files && files.length > 0) {
            const currentFile = files[0];
            const currentFileType = currentFile.type;
            const currentFileSize = currentFile.size;
            if (currentFileSize > imageMaxSize) {
                alert(
                    "This file is not allowed. " +
                        currentFileSize +
                        " bytes is too large"
                );
                return false;
            }
            if (!acceptedFileTypesArray.includes(currentFileType)) {
                alert("This file is not allowed. Only images are allowed.");
                return false;
            }
            return true;
        }
    };

    handleOnDrop = (files, rejectedFiles) => {
        if (rejectedFiles && rejectedFiles.length > 0) {
            this.verifyFile(rejectedFiles);
        }

        if (files && files.length > 0) {
            const isVerified = this.verifyFile(files);
            if (isVerified) {
                // imageBase64Data
                const currentFile = files[0];
                const myFileItemReader = new FileReader();
                myFileItemReader.addEventListener(
                    "load",
                    () => {
                        // console.log(myFileItemReader.result)
                        const myResult = myFileItemReader.result;
                        this.setState({
                            imgSrc: myResult,
                            imgSrcExt: extractImageFileExtensionFromBase64(
                                myResult
                            ),
                        });
                    },
                    false
                );
                myFileItemReader.readAsDataURL(currentFile);
            }
        }
    };

    handleImageLoaded = (image) => {
        //console.log(image)
    };
    handleOnCropChange = (crop) => {
        this.setState({ crop: crop });
    };
    handleOnCropComplete = (crop, pixelCrop) => {
        //console.log(crop, pixelCrop)

        const canvasRef = this.imagePreviewCanvasRef.current;
        const { imgSrc } = this.state;
        image64toCanvasRef(canvasRef, imgSrc, pixelCrop);
    };
    handleDownloadClick = (event) => {
        event.preventDefault();
        const { imgSrc } = this.state;
        if (imgSrc) {
            const canvasRef = this.imagePreviewCanvasRef.current;

            const { imgSrcExt } = this.state;
            const imageData64 = canvasRef.toDataURL("image/" + imgSrcExt);

            const myFilename = "previewFile." + imgSrcExt;

            // file to be uploaded
            const myNewCroppedFile = base64StringtoFile(
                imageData64,
                myFilename
            );

            uploadAvatar(myNewCroppedFile);
            // download file
            downloadBase64File(imageData64, myFilename);
            this.handleClearToDefault();
        }
    };

    handleClearToDefault = (event) => {
        if (event) event.preventDefault();
        const canvas = this.imagePreviewCanvasRef.current;
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        this.setState({
            imgSrc: null,
            imgSrcExt: null,
            crop: {
                aspect: 1 / 1,
            },
        });
        this.fileInputRef.current.value = null;
    };

    handleFileSelect = (event) => {
        // console.log(event)
        const files = event.target.files;
        if (files && files.length > 0) {
            const isVerified = this.verifyFile(files);
            if (isVerified) {
                // imageBase64Data
                const currentFile = files[0];
                const myFileItemReader = new FileReader();
                myFileItemReader.addEventListener(
                    "load",
                    () => {
                        // console.log(myFileItemReader.result)
                        const myResult = myFileItemReader.result;
                        this.setState({
                            imgSrc: myResult,
                            imgSrcExt: extractImageFileExtensionFromBase64(
                                myResult
                            ),
                        });
                    },
                    false
                );
                myFileItemReader.readAsDataURL(currentFile);
            }
        }
    };

    render() {
        const { imgSrc } = this.state;
        console.log(this.state);
        return (
            <div className="drag-container">
                <div className="photo-titles">
                    <p>Фотография</p>
                    <div className="photo-descr">
                        Добавьте свою фотографию для профиля
                    </div>
                </div>
                <div className="photo-add-container">
                    <div class="fl_upld">
                        <label>
                            <input
                                id="fl_inp"
                                ref={this.fileInputRef}
                                type="file"
                                accept={acceptedFileTypes}
                                multiple={false}
                                onChange={this.handleFileSelect}
                            />
                            Выберите файл
                            <div id="fl_nm">Файл не выбран</div>
                        </label>

                    </div>

                    {imgSrc !== null ? (
                        <div>
                            <ReactCrop
                                src={imgSrc}
                                crop={this.state.crop}
                                onImageLoaded={this.handleImageLoaded}
                                onComplete={this.handleOnCropComplete}
                                onChange={this.handleOnCropChange}
                            />

                            <br />
                            <p>Preview Canvas Crop </p>
                            <canvas ref={this.imagePreviewCanvasRef}></canvas>
                            <button onClick={this.handleDownloadClick}>
                                Download
                            </button>
                            <button onClick={this.handleClearToDefault}>
                                Clear
                            </button>
                        </div>
                    ) : (
                        <Dropzone
                            onDrop={this.handleOnDrop}
                            accept={acceptedFileTypes}
                            multiple={false}
                            maxSize={imageMaxSize}
                        >
                            Drop image here or click to upload
                        </Dropzone>
                    )}
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    console.log(state);
    return {};
};

export default connect(mapStateToProps, { uploadAvatar })(ImgDropAndCrop);

// import React, { Component } from "react";

// import Dropzone from "react-dropzone";
// import ReactCrop from "react-image-crop";
// import "./style.css";

// const imageMaxSize = 1000000000; // bytes
// const acceptedFileTypes =
//     "image/x-png, image/png, image/jpg, image/jpeg, image/gif";
// const acceptedFileTypesArray = acceptedFileTypes.split(",").map((item) => {
//     return item.trim();
// });

// const DropAndCrop = () => {
//     const imagePreviewCanvasRef = useRef();
//     const fileInputRef = useRef();

//     const [imgSrc, setImgSrc] = useState(null);
//     const [imgSrcExt, setImgSrcExt] = useState(null);
//     const [crop, setCrop] = useState({aspect: 1 / 1});

//     const verifyFile = (files) => {
//         if (files && files.length > 0) {
//             const currentFile = files[0];
//             const currentFileType = currentFile.type;
//             const currentFileSize = currentFile.size;
//             if (currentFileSize > imageMaxSize) {
//                 alert(
//                     "This file is not allowed. " +
//                         currentFileSize +
//                         " bytes is too large"
//                 );
//                 return false;
//             }
//             if (!acceptedFileTypesArray.includes(currentFileType)) {
//                 alert("This file is not allowed. Only images are allowed.");
//                 return false;
//             }
//             return true;
//         }
//     };

//     const handleOnDrop = (files, rejectedFiles) => {
//         if (rejectedFiles && rejectedFiles.length > 0) {
//             verifyFile(rejectedFiles);
//         }

//         if (files && files.length > 0) {
//             const isVerified = verifyFile(files);
//             if (isVerified) {
//                 // imageBase64Data
//                 const currentFile = files[0];
//                 const myFileItemReader = new FileReader();
//                 myFileItemReader.addEventListener(
//                     "load",
//                     () => {
//                         const myResult = myFileItemReader.result;

//                         setImgSrc(myResult);
//                         setImgSrcExt(extractImageFileExtensionFromBase64(myResult));
//                     },
//                     false
//                 );

//                 myFileItemReader.readAsDataURL(currentFile);
//             }
//         }
//     };

//     const handleImageLoaded = (image) => {
//         //console.log(image)
//     };
//     const handleOnCropChange = (crop) => {
//         setCrop({ crop: crop });
//     };
//     const handleOnCropComplete = (crop, pixelCrop) => {

//         const canvasRef = imagePreviewCanvasRef.current;
//         image64toCanvasRef(canvasRef, imgSrc, pixelCrop);
//     };
//     const handleDownloadClick = (event) => {
//         event.preventDefault();
//         if (imgSrc) {
//             const canvasRef = imagePreviewCanvasRef.current;

//             const imageData64 = canvasRef.toDataURL("image/" + imgSrcExt);

//             const myFilename = "previewFile." + imgSrcExt;

//             // file to be uploaded
//             const myNewCroppedFile = base64StringtoFile(
//                 imageData64,
//                 myFilename
//             );
//             // console.log(myNewCroppedFile);
//             // uploadAvatar(myNewCroppedFile);
//             // download file
//             console.log(myNewCroppedFile);
//             downloadBase64File(imageData64, myFilename);
//             handleClearToDefault();
//         }
//     };

//     const handleClearToDefault = (event) => {
//         if (event) event.preventDefault();
//         const canvas = imagePreviewCanvasRef.current;
//         const ctx = canvas.getContext("2d");
//         ctx.clearRect(0, 0, canvas.width, canvas.height);
//     };

//     const handleFileSelect = (event) => {

//         const files = event.target.files;
//         if (files && files.length > 0) {
//             const isVerified = verifyFile(files);
//             if (isVerified) {
//                 // imageBase64Data
//                 const currentFile = files[0];
//                 const myFileItemReader = new FileReader();
//                 myFileItemReader.addEventListener(
//                     "load",
//                     () => {
//                         // console.log(myFileItemReader.result)
//                         const myResult = myFileItemReader.result;
//                         // this.setState({
//                         //     imgSrc: myResult,
//                         //     imgSrcExt: extractImageFileExtensionFromBase64(
//                         //         myResult
//                         //     ),
//                         // });
//                         setImgSrc(myResult);
//                         setImgSrcExt(extractImageFileExtensionFromBase64(myResult));
//                     },
//                     false
//                 );

//                 myFileItemReader.readAsDataURL(currentFile);
//             }
//         }
//     };
//     console.log(imgSrc, imgSrcExt, crop);

//         return (
//             <div>
//                 <h1>Drop and Crop</h1>
//                 <input
//                     ref={fileInputRef}
//                     type="file"
//                     accept={acceptedFileTypes}
//                     multiple={false}
//                     onChange={handleFileSelect}
//                 />
//                 {imgSrc !== null ? (
//                     <div>
//                         <ReactCrop
//                             src={imgSrc}
//                             crop={crop}
//                             onImageLoaded={handleImageLoaded}
//                             onComplete={handleOnCropComplete}
//                             onChange={handleOnCropChange}
//                         />

//                         <br />
//                         <p>Preview Canvas Crop </p>
//                         <canvas ref={imagePreviewCanvasRef}></canvas>
//                         <button onClick={handleDownloadClick}>
//                             Download
//                         </button>
//                         <button onClick={handleClearToDefault}>
//                             Clear
//                         </button>
//                     </div>
//                 ) : (
//                     <Dropzone
//                         onDrop={handleOnDrop}
//                         accept={acceptedFileTypes}
//                         multiple={false}
//                         maxSize={imageMaxSize}
//                     >

//                         Drop image here or click to upload
//                     </Dropzone>
//                 )}
//             </div>
//         );
// }

// const mapStateToProps = (state) => {
//     console.log(state)
//     return {

//     };
// };

// export default connect(mapStateToProps, {upl})(DropAndCrop);

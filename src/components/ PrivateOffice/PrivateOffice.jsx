import React from 'react'
import { useDispatch } from 'react-redux';
import { getFiles, uploadFiles } from '../../actions/files';
import { setFiles } from '../../reducers/filesReducer';

const PrivateOffice = () => {
    const dispatch = useDispatch();
    const onChangeFile = (e) => {
        const file = e.target.files[0];

        dispatch(uploadFiles(file));

    }
    return (
        <div>
            <input type="file"  onChange={(e) => onChangeFile(e)}/>
        </div>
    )
}

export default PrivateOffice;


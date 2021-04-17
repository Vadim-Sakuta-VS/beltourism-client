import React from 'react';
import './Pictures.scss';

const Pictures = ({setFieldValue, pictureFiles}) => {
    const onChangeHandler = (e) => {
        setFieldValue('pictureFiles', Array.from(e.currentTarget.files));
    }

    const onMouseDownHandler = (e, deleteIndex) => {
        e.target.classList.add('pictures__img--active');
        window.timerId = setTimeout(() => {
            e.target.classList.remove('pictures__img--active');
            setFieldValue('pictureFiles',
                pictureFiles.filter((file, i) => deleteIndex !== i));
        }, 500);
    }

    const onMouseUpHandler = (e) => {
        e.target.classList.remove('pictures__img--active');
        clearTimeout(window.timerId);
    }

    const imageElements = pictureFiles && Array.from(pictureFiles).map((file, i) => (
        <img
            key={i}
            src={URL.createObjectURL(file)}
            alt={`file ${i}`}
            className='pictures__img'
            onMouseDown={(e) => onMouseDownHandler(e, i)}
            onMouseUp={onMouseUpHandler}
        />
    ));

    return (
        <div style={{marginTop: '15px'}}>
            <input multiple={true}
                   id='pictureFiles'
                   type="file"
                   name='pictureFiles'
                   className='input-file'
                   accept="image/x-png,image/jpeg"
                   onChange={onChangeHandler}
            />
            <label htmlFor="pictureFiles" className='picture-files-label'>
                Выберите файлы:
            </label>
            {
                pictureFiles && pictureFiles.length ? <div
                    style={{marginTop: '10px'}} title='Для удаления удерживайте картинку.'>
                    <p className="pictures-info">Для удаления удерживайте картинку.</p>
                    <div className='pictures'>
                        {imageElements}
                    </div>
                </div> : null
            }
        </div>
    );
};

export default Pictures;
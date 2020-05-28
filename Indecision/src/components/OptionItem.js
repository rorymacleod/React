import React from 'react';

const OptionItem = (props) => {
    return (
        <div className="option-item">
            <p className="option-item__text">{props.count}.&nbsp;{props.option}</p>
            <button 
                className="button--link"
                onClick={(e) => {
                    props.onRemove(props.option)
                }}>
                remove
            </button>
        </div>
    );
}

export default OptionItem;
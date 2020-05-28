import React from 'react';

const Action = (props) => (
    <div>
        <pre>
            npm run build
            <br />
            npm run serve
        </pre>
        <button
            className="button-lg"
            onClick={props.onDecide}
            disabled={!props.hasOptions}
        >
            What should I do?
        </button>
    </div>
);

export default Action;
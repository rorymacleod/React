import React from 'react';
import OptionItem from './OptionItem';

export default class OptionList extends React.Component {
    render = () => (
        <div>
            <div className="widget-header">
                <h3 className="widget-header__title">Your Options</h3>
                <button 
                    className="button--link" 
                    onClick={this.props.onClear}>Clear</button>
            </div>
            { this.props.options.length === 0 &&
                <p className="widget__message">Please add an option.</p> }
            {
                this.props.options.map((o, i) => 
                    <OptionItem 
                        key={o} 
                        option={o}
                        count={i + 1}
                        onRemove={this.props.onRemove} />)
            }
    </div>
    );
}
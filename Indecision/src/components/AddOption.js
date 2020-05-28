import React from 'react';

export default class AddOption extends React.Component {
    state = {
        error: undefined
    };

    addOption = (e) => {
        e.preventDefault();
    
        const text = e.target.optionText.value.trim();
        const error = this.props.onAdd(text);
        this.setState(() => ({ error }));

        if (!error) {
            e.target.elements.optionText.value = '';
        }
    }

    render = () => {
        return (
            <div>
                {this.state.error && 
                    <p className="add-option__error">{this.state.error}</p>}
                <form className="add-option__form" onSubmit={this.addOption}>
                    <input className="add-option__input" type="text" name="optionText" />
                    <button className="button" type="submit">Add</button>
                </form>
            </div>
        );
    }
}
import React from 'react';
import AddOption from './AddOption';
import Header from './Header';
import Action from './Action';
import OptionList from './OptionList';
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    state = {
        options: ['Alpha', 'Bravo', 'Charlie'],
        selectedOption: undefined,
    };

    add = (optionText) => {
        if (!optionText) {
            return 'Option text is required.'
        }

        if (this.state.options.indexOf(optionText) > -1) {
            return 'Option already exists.'
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat(optionText)
            };
        });
    }

    clear = () => {
        this.setState(() => ({ options: [] }));
    }

    componentDidMount = () => {
        const json = localStorage.getItem('options');
        if (json) {
            const options = JSON.parse(json);
            this.setState(() => ({ options }));
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    decide = () => {
        const idx = Math.floor(Math.random() * this.state.options.length);
        const selectedOption = this.state.options[idx];
        this.setState(() => ({ selectedOption }))
    }

    remove = (option) => {
        this.setState((prevState) => ({ 
            options: prevState.options.filter(o => o !== option)
        }));
    }

    selectNone = () => {
        this.setState(() => ({ selectedOption: undefined }));
    }

    render = () => {
        const subtitle = 'Be right half the time, or your money back.';
        return (
            <div>
                <Header subtitle={subtitle} />
                <div className="container">
                    <Action 
                        hasOptions={this.state.options.length > 0} 
                        onDecide={this.decide}
                        />
                    <div className="widget">
                        <OptionList 
                            options={this.state.options} 
                            onClear={this.clear}
                            onRemove = {this.remove}
                            />
                        <AddOption 
                            onAdd={this.add} />
                    </div>
                    <OptionModal
                        selectedOption={this.state.selectedOption}
                        onClose={this.selectNone} />
                </div>
            </div>
        );
    }
}

import React from 'react';

class InputBox extends React.Component {
    buttonStyle = {
        display: 'inline-block',
        border: '1px solid #000',
        marginLeft: 5
    };

    calculate(type) {
        this.props.calculate(type, this._input.value);
        this._input.value = '';
        this._input.focus();
    }

    render() {
        return (
            <div>
                <input
                    type="text"
                    ref={ref => this._input = ref}
                />
                <button
                    style={this.buttonStyle}
                    onClick={() => this.calculate('save')}
                >
                    입금
                </button>
                <button
                    style={this.buttonStyle}
                    onClick={() => this.calculate('withdraw')}
                >
                    출금
                </button>
            </div>
        );
    }
}
export default InputBox;

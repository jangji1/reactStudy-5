import React from 'react';
import InputBox from './InputBox';
import AccountBook from './AccountBook';
import Tabs from './Tabs';

import { connect } from 'react-redux';
import bankActions from '../actions/bankActions';
import tabActions from '../actions/tabActions';

const mapStateToProps = state => ({
    accountList: state.bank.accountList,
    effect: state.bank.effect,
    focused: state.tab.focused,
});
const mapDispatchToProps = dispatch => ({
    changeTab: index => dispatch(tabActions.changeTab(index)),
    calculate: (type, money) => dispatch(bankActions[type](money))
});

class App extends React.Component {
    render() {
        const {
            focused,
            changeTab,
            accountList,
            calculate,
            effect
        } = this.props;

        return (
            <div className={effect ? 'effect' : ''}>
                <Tabs
                    focused={focused}
                    changeTab={changeTab}
                />
                <InputBox calculate={calculate} />
                <AccountBook accountList={accountList} />
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

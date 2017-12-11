const initialState = {
    accountList: [],
    effect: false
};

const bankReducer = (state = initialState, action) => {
    switch(action.type) {
    case 'SAVE_MONEY': {
        const money = action.money * 1;
        const prevAccount = state.accountList;
        const lastResult = prevAccount.length
            ? prevAccount[prevAccount.length - 1].result
            : 0;
        return {
            accountList: [
                ...prevAccount, {
                    type: 'save',
                    money,
                    result: lastResult + money
                }
            ],
            effect: state.effect
        };
    }
    case 'WITHDRAW_MONEY': {
        const money = action.money * 1;
        const prevAccount = state.accountList;
        const lastResult = prevAccount.length
            ? prevAccount[prevAccount.length - 1].result
            : 0;
        return {
            accountList: [
                ...prevAccount, {
                    type: 'withdraw',
                    money,
                    result: lastResult - money
                }
            ],
            effect: state.effect
        };
    }
    case 'SHOW_EFFECT': {
        return {
            accountList: state.accountList,
            effect: true
        };
    }
    case 'HIDE_EFFECT': {
        return {
            accountList: state.accountList,
            effect: false
        };
    }
    default: return state;
    }
};

export default bankReducer;

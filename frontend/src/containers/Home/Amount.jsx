import { CONTRACT_ERC20_DECIMALS } from '../../constants/contract';
import { connect } from 'react-redux';
import { setTxBurnAmount } from '../../actions/tx';
import { validateAmount } from './_validation';
import BigNumber from '../../utils/bignumber';
import Button from '../../components/Button';
import Label from '../../components/Label';
import NumberInput from '../../components/NumberInput';
import PropTypes from 'prop-types';
import React from 'react';

const invalidKeys = ['-', '+', 'e'];
const invalidKeyCodes = [69, 187, 189];

const Amount = (props) => {
    const balance = new BigNumber(props.accountTokenBalance);

    const onKeyDown = (event) => {
        if (invalidKeys.includes(event.key) || invalidKeyCodes.includes(event.keyCode)) {
            event.preventDefault();
        }
    };

    const setTxBurnAmount = ({ target: { value } }) => {
        if (value === props.amount.value) {
            return;
        }

        value = value.trim();
        if (value === '') {
            props.setTxBurnAmount({
                value,
                error: validateAmount(value),
            });
            return;
        }

        const splits = value.split('.');
        value = splits[0] === '' ? '0' : new BigNumber(splits[0]).toString();
        if (splits.length === 2) {
            value = value + '.' + splits[1].substring(0, CONTRACT_ERC20_DECIMALS);
        }

        if (balance.isLessThan(new BigNumber(value))) {
            value = balance.toString();
        }

        if (value === props.amount.value) {
            return;
        }

        props.setTxBurnAmount({
            value,
            error: validateAmount(value),
        });
    };

    const onClick = () => {
        if (props.accountTokenBalance === props.amount.value) {
            return;
        }

        props.setTxBurnAmount({
            value: props.accountTokenBalance,
            error: new Error(),
        });
    };

    return (
        <>
            <Label
                className="label"
                help={{
                    display: true,
                    title: 'SENT Tokens that needed to be swapped to DVPN',
                }}
                value={'Swap Amount'}/>
            <div className="swap-number-input-amount">
                <NumberInput
                    className="number-input"
                    placeholder={'Enter Amount'}
                    value={props.amount.value}
                    onChange={setTxBurnAmount}
                    onKeyDown={onKeyDown}
                />
                <Button
                    className={'button-swap-amount-max'}
                    disabled={false}
                    inProgress={false}
                    value={'MAX'}
                    onClick={onClick}
                />
            </div>
        </>
    );
};

Amount.propTypes = {
    accountTokenBalance: PropTypes.string.isRequired,
    amount: PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.shape({
            message: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
    setTxBurnAmount: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
    accountTokenBalance: state.account.TOKEN.balance,
    amount: state.tx.burn.amount,
});

const actionsToProps = {
    setTxBurnAmount,
};

export default connect(stateToProps, actionsToProps)(Amount);

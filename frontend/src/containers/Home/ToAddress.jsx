import { connect } from 'react-redux';
import { setTxBurnToAddress } from '../../actions/tx';
import { validateToAddress } from './_validation';
import Label from '../../components/Label';
import PropTypes from 'prop-types';
import React from 'react';
import TextInput from '../../components/TextInput';

const ToAddress = (props) => {
    const setTxBurnToAddress = ({ target: { value } }) => {
        value = value.trim();
        props.setTxBurnToAddress({
            value,
            error: validateToAddress(value),
        });
    };

    return (
        <>
            <Label
                className="label"
                help={{
                    display: true,
                    title: 'Non ERC-20 Sentinel address; starts with "sent"',
                }}
                value="Receiver Address"
            />
            <div className="swap-text-input-to-address">
                <TextInput
                    className="text-input"
                    placeholder="Enter Address"
                    value={props.toAddress.value}
                    onChange={setTxBurnToAddress}
                />
            </div>
        </>
    );
};

ToAddress.propTypes = {
    setTxBurnToAddress: PropTypes.func.isRequired,
    toAddress: PropTypes.shape({
        value: PropTypes.string.isRequired,
        error: PropTypes.shape({
            message: PropTypes.string.isRequired,
        }).isRequired,
    }).isRequired,
};

const stateToProps = (state) => ({
    toAddress: state.tx.burn.toAddress,
});

const actionsToProps = {
    setTxBurnToAddress,
};

export default connect(stateToProps, actionsToProps)(ToAddress);

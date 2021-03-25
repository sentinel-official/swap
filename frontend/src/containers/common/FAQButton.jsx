import { connect } from 'react-redux';
import { showFAQModal } from '../../actions/FAQ';
import Button from '../../components/Button';
import PropTypes from 'prop-types';
import React from 'react';

const FAQButton = (props) => {
    const showFAQModal = () => {
        if (props.show) {
            return;
        }

        props.showFAQModal();
    };

    return (
        <Button
            className="button-faq"
            disabled={false}
            inProgress={false}
            value="faq"
            onClick={showFAQModal}
        />
    );
};

FAQButton.propTypes = {
    show: PropTypes.bool.isRequired,
    showFAQModal: PropTypes.func.isRequired,
};

const stateToProps = (state) => ({
    show: state.FAQ.show,
});

const actionsToProps = {
    showFAQModal,
};

export default connect(stateToProps, actionsToProps)(FAQButton);

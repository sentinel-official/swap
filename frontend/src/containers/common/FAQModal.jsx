import { connect } from 'react-redux';
import { hideFAQModal, setFAQActiveIndex } from '../../actions/FAQ';
import Data from '../../assets/FAQData';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Modal from '../../components/Modal';
import PropTypes from 'prop-types';
import React from 'react';

const FAQModal = (props) => {
    const hideFAQModal = () => {
        if (props.show === false) {
            return;
        }

        props.hideFAQModal();
    };

    const setFAQActiveIndex = (index) => {
        if (props.index === index) {
            props.setFAQActiveIndex(-1);
            return;
        }

        props.setFAQActiveIndex(index);
    };

    return (
        <Modal
            className="faq-modal"
            disableBackdropClick={false}
            disableEscapeKeyDown={false}
            open={props.show}
            title="Frequently Asked Questions"
            onClose={hideFAQModal}>
            <div className="faq-content">
                {
                    Data.map((item, index) => {
                        return (
                            <div
                                key={index}
                                className={`flex ${props.index === index ? 'active' : null}`}>
                                <div className="questions">
                                    <div
                                        className="question"
                                        onClick={() => setFAQActiveIndex(index)}>
                                        {item.question}
                                    </div>
                                    {
                                        props.index === index
                                            ? <div className="answer">
                                                {item.answer}
                                            </div>
                                            : null
                                    }
                                </div>
                                <button
                                    className="btn-question-close"
                                    onClick={() => setFAQActiveIndex(index)}>
                                    {
                                        index === props.index
                                            ? <KeyboardArrowDownIcon/>
                                            : <KeyboardArrowRightIcon/>
                                    }
                                </button>
                            </div>
                        );
                    })
                }
            </div>
            <div className="foot-note">
                <span> Learn more at </span>
                <a
                    className="no-link"
                    href="https://sentinel.co"
                    rel="noreferrer"
                    target="_blank">
                    sentinel.co
                </a>
            </div>
        </Modal>
    );
};

FAQModal.propTypes = {
    hideFAQModal: PropTypes.func.isRequired,
    index: PropTypes.number.isRequired,
    setFAQActiveIndex: PropTypes.func.isRequired,
    show: PropTypes.bool.isRequired,
};

const stateToProps = (state) => ({
    show: state.FAQ.show,
    index: state.FAQ.index,
});

const actionsToProps = {
    hideFAQModal,
    setFAQActiveIndex,
};

export default connect(stateToProps, actionsToProps)(FAQModal);

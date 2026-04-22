import PropTypes from "prop-types";

function Account({ accountTitle, accountAmount, accountDescription }) {
    return (
        <section className="account">
            <div className="account-content-wrapper">
                <h3 className="account-title">{accountTitle}</h3>
                <p className="account-amount">${accountAmount}</p>
                <p className="account-amount-description">{accountDescription}</p>
            </div>
            <div className="account-content-wrapper cta">
                <button className="transaction-button">View transactions</button>
            </div>
        </section>
    );
};

Account.propTypes = {
    accountTitle: PropTypes.string,
    accountAmount: PropTypes.string,
    accountDescription: PropTypes.string,
};

Account.defaultProps = {
    accountTitle: "???",
    accountAmount: "???",
    accountDescription: "???",
};

export default Account;
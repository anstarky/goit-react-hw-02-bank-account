import React, { Component } from 'react';

import styles from './Controls.module.css';

class Controls extends Component {
    state = {
        amount: '',
    };

    handleInputChange = e => {
        this.setState({
            amount: Number(e.currentTarget.value),
        });
    };

    handleClickDeposit = e => {
        e.preventDefault();
        this.props.onDeposit(this.state.amount, 'Deposit');
        this.setState({ amount: '' });
    };

    handleClickWithdraw = e => {
        e.preventDefault();

        this.props.onWithdraw(this.state.amount, 'Withdrawal');
        this.setState({ amount: '' });
    };

    render() {
        const { amount } = this.state;
        return (
            <section className={styles.controls}>
                <input
                    type="number"
                    name="amount"
                    className={styles.controls__input}
                    value={amount}
                    onChange={this.handleInputChange}
                />
                <button
                    type="button"
                    className={styles.controls__button}
                    onClick={this.handleClickDeposit}
                >
                    Deposit
                </button>
                <button
                    type="button"
                    className={styles.controls__button}
                    onClick={this.handleClickWithdraw}
                >
                    Withdraw
                </button>
            </section>
        )
    }
};

export default Controls;

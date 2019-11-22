import React, { Component } from 'react';
import shortid from 'shortid';

import styles from './Dashboard.module.css';

import Controls from '../Controls'
import Balance from '../Balance'
import TransactionHistory from '../TransactionHistory'

class Dashboard extends Component {

    state = {
        transactions: [],
        balance: 0,
    };

    createTransaction = (amount, type) => {

        const transaction = {
            id: shortid.generate(),
            type,
            amount,
            date: new Date().toLocaleString(),
        };

        this.setState(state => ({
            transactions: [...state.transactions, transaction],
            balance: transaction.type === 'Deposit' ? state.balance + amount : state.balance - amount,
        }));
    };

    transactionAmount = (type) => {
        return this.state.transactions
            .filter(transaction => transaction.type === type)
            .reduce((sum, transaction) => sum += transaction.amount, 0);
    }

    render() {
        const { balance, transactions } = this.state;

        return (
            < div className={styles.dashboard} >
                <Controls
                    onDeposit={this.createTransaction}
                    onWithdraw={this.createTransaction}
                    onBalance={balance}
                />
                <Balance
                    income={this.transactionAmount('Deposit')}
                    expenses={this.transactionAmount('Withdrawal')}
                    balance={balance}
                />
                <TransactionHistory items={transactions} />
            </div >
        )
    }
};

export default Dashboard;

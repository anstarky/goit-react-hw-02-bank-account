import React, { Component } from 'react';
import shortid from 'shortid';

import styles from './Dashboard.module.css';

import notyfy from '../../services/notify';

import Controls from '../Controls'
import Balance from '../Balance'
import TransactionHistory from '../TransactionHistory'

const typeOfOperation = {
    DEPOSITE: 'Deposite',
    WITHDROWAL: 'Withdrawal',
};

const sumOfOperations = {
    income: 0,
    expenses: 0,
}

class Dashboard extends Component {

    state = {
        transactions: [],
        balance: 0,
    };


    saveTransaction = (amount, type) => {

        const transaction = {
            id: shortid.generate(),
            type,
            amount,
            date: new Date().toLocaleString(),
        };

        if (amount > 0) {
            this.setState(state => ({
                transactions: [...state.transactions, transaction],
            }));

        } else {
            notyfy.enterCorrectAmount();
        }
    };

    depositTransaction = amount => {
        this.saveTransaction(amount, typeOfOperation.DEPOSITE);
        if (amount > 0) {
            this.setState(state => ({
                balance: state.balance + amount
            }));
            sumOfOperations.income += amount;
        };
    };

    withdrawTransaction = amount => {
        if ((amount > 0) && (amount <= this.state.balance)) {
            this.setState(state => ({
                balance: state.balance - amount
            }));
            this.saveTransaction(amount, typeOfOperation.WITHDROWAL);
            sumOfOperations.expenses += amount;

        } else if (amount <= 0) {
            notyfy.enterCorrectAmount();
        }
        else {
            notyfy.notEnoughAmount();
        }
    };



    render() {
        const { balance, transactions } = this.state;
        const { income, expenses } = sumOfOperations;
        return (
            < div className={styles.dashboard} >
                <Controls onDeposit={this.depositTransaction} onWithdraw={this.withdrawTransaction} />
                <Balance income={income} expenses={expenses} balance={balance} />
                <TransactionHistory items={transactions} />
            </div >
        )
    }
};

export default Dashboard;

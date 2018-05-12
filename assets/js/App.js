import React, { Component } from 'react';
import SearchPage from './SearchPage';
import AccountPage from './AccountPage';
import BuyMealPage from './BuyMealPage';
import BuyCardPage from './BuyCardPage';
import AddCreditPage from './AddCreditPage';
import ConfirmationPage from './ConfirmationPage';


class App extends Component {
    constructor () {
        super();
        this.state = {
            currentView: 'searchpage',
            currentAccount: null
        };
    }

    switchView (viewname, account) {
        this.setState({
            currentView: viewname,
            currentAccount: account
        });
    }

    updateBalance (amount) {
        this.state.currentAccount.currentCredit += amount;
        this.state.currentAccount.lastAdded = amount;
    }

    render () {
        const {
             currentView,
             currentAccount
         } = this.state;

         if (currentView === 'searchpage') {
            return (
                <SearchPage switchView={(viewname, account) => this.switchView(viewname, account)} />
            )
         } else if (currentView === 'accountpage') {
            return (
                <AccountPage switchView={(viewname, account) => this.switchView(viewname, account)}
                             account={currentAccount} />
            );
         } else if (currentView === 'addcreditpage') {
            return (
                <AddCreditPage switchView={(viewname, account) => this.switchView(viewname, account)}
                               account={currentAccount}
                               updateBalance={(newCredit) => this.updateBalance(newCredit)} />
            )
         } else if (currentView === 'buymealpage') {
            return (
                <BuyMealPage switchView={(viewname, account) => this.switchView(viewname, account)}
                             account={currentAccount}
                             updateBalance={(newCredit) => this.updateBalance(newCredit)} />
            )
         } else if (currentView === 'buycardpage') {
            return (
                <BuyCardPage switchView={(viewname, account) => this.switchView(viewname, account)}
                             account={currentAccount}
                             updateBalance={(newCredit) => this.updateBalance(newCredit)} />
            )
         } else if (currentView == "confirmationpage") {
             return (
                 <ConfirmationPage switchView={(viewname, account) => this.switchView(viewname, account)}
                             account={currentAccount}/>
             )
         }
    }
}

export default App;

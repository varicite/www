import React, { Component } from 'react';
// import walletConnectFcn from "./walletConnect.js";
import './App.css';

async function connectWallet() {
  // if (account) {
  //   setConnectTextSt(`🔌 Account ${account} already connected ⚡ ✅`);
  // } else {
  // const wData = await walletConnectFcn();

  // let newAccount = wData[0];
  // let newNetwork = wData[2];
  // // if (newAccount !== undefined) {
  //   console.log('x', newAccount, newNetwork)
  //   // setConnectTextSt(`🔌 Account ${newAccount} connected ⚡ ✅`);
  //   // setConnectLinkSt(`https://hashscan.io/${newNetwork}/account/${newAccount}`);

  //   // setWalletData(wData);
  //   // setAccount(newAccount);
  //   // setNetwork(newNetwork);
  //   // setContractTextSt();
  // }
  // }
}
class App extends Component {
  render() {
    return (
      <div className="App">
        <button onClick={connectWallet}>walletConnect</button>
        XXX
      </div>
    );
  }
}

export default App;

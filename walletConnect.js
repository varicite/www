// import { ethers } from "ethers";
// const ethers = require('ethers')
const network = "testnet";

async function walletConnectFcn() {
	console.log(`\n=======================================`);

	// ETHERS PROVIDER
	const provider = new ethers.providers.Web3Provider(window.ethereum, "any");

	// // SWITCH TO HEDERA TEST NETWORK
	// console.log(`- Switching network to the Hedera ${network}...🟠`);
	// let chainId;
	// if (network === "testnet") {
	// 	chainId = "0x128";
	// } else if (network === "previewnet") {
	// 	chainId = "0x129";
	// } else {
	// 	chainId = "0x127";
	// }

	// await window.ethereum.request({
	// 	method: "wallet_addEthereumChain",
	// 	params: [
	// 		{
	// 			chainName: `Hedera ${network}`,
	// 			chainId: chainId,
	// 			nativeCurrency: { name: "HBAR", symbol: "ℏℏ", decimals: 18 },
	// 			rpcUrls: [`https://${network}.hashio.io/api`],
	// 			blockExplorerUrls: [`https://hashscan.io/${network}/`],
	// 		},
	// 	],
	// });
	// console.log("- Switched ✅");

	// // CONNECT TO ACCOUNT
	// console.log("- Connecting wallet...🟠");
	// let selectedAccount;
	// await provider
	// 	.send("eth_requestAccounts", [])
	// 	.then((accounts) => {
	// 		selectedAccount = accounts[0];
	// 		console.log(`xx- Selected account: ${selectedAccount} ✅`);
	// 		// return provider.getBalance(selectedAccount)
	// 	})
	// 	// .then(a => console.log('x', a))
	// 	.catch((connectError) => {
	// 		console.log(`- ${connectError.message.toString()}`);
	// 		return;
	// 	});
	// // const a = await provider.getBalance('HBAR')
	// // console.log('x', a)

	// return [selectedAccount, provider, network];
}

// module.exports = walletConnectFcn;

// import { ethers } from "ethers";
const {ethers} = require("ethers")
const fs = require('fs')
// const INFURA_ID = "https://sepolia.infura.io/v3/49e940cce2aa405c96c89425b117be18"; // Replace with your Infura project ID (or any other RPC provider URL)
const INFURA_ID = "HTTP://127.0.0.1:7545"
const provider = new ethers.JsonRpcProvider(INFURA_ID);

const contract_address = "0xc405F61cA277cf4EF0F7785B0D042aa1516AA349"
const contractABI = [
    {
      "inputs": [],
      "name": "a",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function",
      "constant": true
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "_a",
          "type": "uint256"
        }
      ],
      "name": "setter",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ]

const contract = new ethers.Contract(contract_address, contractABI, provider);

// calling the get functions
async function get(){
    try {
        const value = await contract.a();
        console.log('Stored Value1:', value.toString());  
    } catch (error) {
        console.error("Error reading from contract")
    }
}

// calling the functions taking values as parameters
async function post(){
    try {
        const value = await contract.setter(5);
        console.log('Stored Value2:', value.toString());  
    } catch (error) {
        console.error("Error reading from contract",error)
    }
}
get();
post();
get();
// Function to list contract functions
function listContractFunctions() {
    contract.interface.fragments.forEach(fragment => {
        if (fragment.type === 'function') {
            console.log(`Function: ${fragment.name}`);
            console.log(`Inputs: ${JSON.stringify(fragment.inputs)}`);
            console.log(`Outputs: ${JSON.stringify(fragment.outputs)}`);
            console.log('---');
        }
    });
}
// Call the function to list contract functions
// listContractFunctions();



// const abi = [
// 	{
// 		"inputs": [],
// 		"name": "print",
// 		"outputs": [
// 			{
// 				"internalType": "string",
// 				"name": "",
// 				"type": "string"
// 			}
// 		],
// 		"stateMutability": "pure",
// 		"type": "function"
// 	}
// ]

// const wallet = new ethers.Wallet('e812b117371f12328bd266e61824ea073260ed7abae2ab98ef8b3e724300d54c', provider);

// // Create a contract instance
// const contract = new ethers.Contract(contract_address, abi, wallet);

// // Function to get stored value
// async function getStoredValue() {
//     try {
//         const value = await contract;
//         console.log(value)
//         // console.log('Stored Value:', value.toString());
//     } catch (error) {
//         console.error('Error reading from contract:', error);
//     }
// }

// getStoredValue();
















// async function getadd(){
//     const add = await provider.getBalance("0xB07740D098e6914B4620A1c53BD854AFc062c81E")
//     // const signer = new ethers.Wallet("e812b117371f12328bd266e61824ea073260ed7abae2ab98ef8b3e724300d54c",provider);
//     // const tx = await signer.sendTransaction({
//     //     to:"0x27350c7D9e5e8BA0AaEA5ACE86Ced47CCf9C0117",
//     //     value:ethers.parseUnits('0.001','ether')
//     // })

//     // const t = await provider.getTransaction("0x520759ba51f22dcb2eb0070013b1346d6bff5de1f661705fd373b679f260a875")
//     // const t = await provider.getBlockNumber("0x520759ba51f22dcb2eb0070013b1346d6bff5de1f661705fd373b679f260a875")
//     // const signedTx = (await signer).sendTransaction(tx);
//     // console.log("Transaction sent:", tx);
//     // console.log(t)


//     console.log(add)
// }

// getadd();

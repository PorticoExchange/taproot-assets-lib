// example.js

const { getBalance, sendAsset } = require('./taproot-assets-lib');

(async () => {
  try {
    // Get the balance for a specific address
    const address = 'your_wallet_address';
    const balance = await getBalance(address);
    console.log(`Balance for ${address}: ${balance} sats`);

    // Send assets to another address
    const toAddress = 'receiver_wallet_address';
    const amountToSend = 10000; // in sats
    const txId = await sendAsset(toAddress, amountToSend);
    console.log(`Transaction ID: ${txId}`);
  } catch (err) {
    console.error(err.message);
  }
})();

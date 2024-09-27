import React, { useState } from 'react';
import Web3 from 'web3';

// Pinata API configuration
const pinataApiKey = '056ba78f87d2be78c7d3';
const pinataSecretApiKey = '6ff3718b9723cc73fdd134c66c40eeb58980992fd5055f66bacf85cde11a4bf0';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [cid, setCid] = useState(null);
  const [recipientAddress, setRecipientAddress] = useState('');
  const [transactionHash, setTransactionHash] = useState('');
  
  // MetaMask Connection
  const web3 = new Web3(Web3.givenProvider);

  // Pinata file upload
  const handleFileUpload = async (e) => {
    e.preventDefault();
    
    if (!file) return alert('Please upload a file.');

    const formData = new FormData();
    formData.append('file', file);
    
    try {
      const response = await fetch('https://api.pinata.cloud/pinning/pinFileToIPFS', {
        method: 'POST',
        headers: {
          'pinata_api_key': pinataApiKey,
          'pinata_secret_api_key': pinataSecretApiKey,
        },
        body: formData
      });
      
      const result = await response.json();
      setCid(result.IpfsHash);  // Store the CID (hash)
      alert(`File uploaded successfully! CID: ${result.IpfsHash}`);
    } catch (error) {
      console.error('Error uploading to Pinata:', error);
    }
  };

  // Share file via MetaMask
  const handleMetaMaskTransaction = async () => {
    if (!cid || !recipientAddress) return alert('Missing CID or recipient address.');
    
    try {
      // Request MetaMask account access
      const accounts = await web3.eth.requestAccounts();
      const senderAddress = accounts[0];

      // Perform the transaction (dummy transaction for demonstration)
      const tx = {
        from: senderAddress,
        to: recipientAddress,
        value: web3.utils.toWei('0.001', 'ether'),  // Small transaction value
        gas: 21000
      };

      const txHash = await web3.eth.sendTransaction(tx);
      setTransactionHash(txHash.transactionHash);
      alert(`Transaction complete! TX Hash: ${txHash.transactionHash}`);

      // Share CID with the recipient (this step is manual or through an API)
      alert(`CID shared: ${cid}`);
      
    } catch (error) {
      console.error('Transaction error:', error);
    }
  };

  return (
    <div>
      <h2>Pinata File Sharing with MetaMask</h2>
      
      {/* File Upload Section */}




      <div className="top">
      <form className="form" onSubmit={handleFileUpload}>

      <div class="documents-container1">
          <div class="documents-container2">
            <span class="documents-text">Upload Document</span>
          </div>
          <div class="documents-container3">
            <div class="documents-container4">
              <div class="documents-feature-card">
                <h2 class="documents-text1">Document Type</h2>
                <select class="documents-select">
                  <option value="Option 1">Contract</option>
                  <option value="Option 2">Property</option>
                  <option value="Option 4">Lease Agreement</option>
                  <option value="Option 3">Will</option>
                  <option value="Option 5">Court Order</option>
                  <option value="Option 6">Power of Attorney</option>
                  <option value="Option 7">Divorce Decree</option>
                  <option value="Option 8">Criminal Complaint</option>
                </select>
                <svg viewBox="0 0 1024 1024" class="documents-icon">
                  <path
                    d="M832 960l192-512h-832l-192 512zM128 384l-128 576v-832h288l128 128h416v128z"
                  ></path>
                </svg>
              </div>
            </div>
            <div class="documents-feature-card1">
              <span class="documents-text2">
                <div id="drop-zone">
                 
               



                    <input
          type="file"
          onChange={(e) => setFile(e.target.files[0])}
        />
        {/* <button type="submit">Upload to Pinata</button> */}
                </div>

             
                
                
          
              </span>
              <svg viewBox="0 0 1024 1024" class="documents-icon02">
                <path
                  d="M342 640l170-170 170 170-60 62-68-68v176h-84v-176l-68 66zM768 854v-470h-214v-214h-298v684h512zM598 86l256 256v512q0 34-26 59t-60 25h-512q-34 0-60-25t-26-59l2-684q0-34 25-59t59-25h342z"
                ></path>
              </svg>
            </div>
          </div>
          <button type="submit" id="upload-button" className="upload" class="documents-button button" disabled={!file}>
          Upload File
        </button>
        </div>
        </form>

    </div>







     

      {/* Transaction Result */}
      {transactionHash && (
        <div>
          <h4>Transaction Hash: {transactionHash}</h4>
        </div>
      )}
    </div>
  );
};

export default FileUpload;

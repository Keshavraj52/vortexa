// import React, { useState } from 'react';
// import './shareing.css'; // Make sure your CSS file is linked

// function Shareing() {
//   const [ipfsHash, setIpfsHash] = useState('');
//   const [friendPinataKey, setFriendPinataKey] = useState('');
//   const [friendPinataSecret, setFriendPinataSecret] = useState('');
//   const [status, setStatus] = useState('');
//   const [sharedFileUrl, setSharedFileUrl] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (!ipfsHash || !friendPinataKey || !friendPinataSecret) {
//       setStatus('Please provide all required information.');
//       return;
//     }

//     setStatus('Fetching and sharing the file...');

//     try {
//       const response = await fetch('http://localhost:5000/api/shareFile', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({
//           ipfsHash: ipfsHash,
//           friendPinataKey: friendPinataKey,
//           friendPinataSecret: friendPinataSecret,
//         }),
//       });

//       const data = await response.json();
//       if (data.success) {
//         setSharedFileUrl(data.sharedFileUrl);
//         setStatus('File shared successfully!');
//       } else {
//         setStatus('File sharing failed.');
//       }
//     } catch (error) {
//       console.error('Error sharing the file:', error);
//       setStatus('An error occurred while sharing the file.');
//     }
//   };

//   return (
//     <div className="file-share-section">
//       <h2>Share File from Your Pinata to Your Friend's Pinata</h2>
//       <form onSubmit={handleSubmit} className="share-form">
//         <label htmlFor="ipfsHash">Enter IPFS Hash of the file:</label>
//         <input
//           type="text"
//           id="ipfsHash"
//           name="ipfsHash"
//           placeholder="IPFS hash of the file"
//           value={ipfsHash}
//           onChange={(e) => setIpfsHash(e.target.value)}
//           required
//         />

//         <label htmlFor="friendPinataKey">Friend's Pinata API Key:</label>
//         <input
//           type="text"
//           id="friendPinataKey"
//           name="friendPinataKey"
//           placeholder="Friend's Pinata API Key"
//           value={friendPinataKey}
//           onChange={(e) => setFriendPinataKey(e.target.value)}
//           required
//         />

//         <label htmlFor="friendPinataSecret">Friend's Pinata Secret Key:</label>
//         <input
//           type="password"
//           id="friendPinataSecret"
//           name="friendPinataSecret"
//           placeholder="Friend's Pinata Secret Key"
//           value={friendPinataSecret}
//           onChange={(e) => setFriendPinataSecret(e.target.value)}
//           required
//         />

//         <button type="submit" className="share-button">
//           Share File
//         </button>
//       </form>

//       {status && <div className="status-message">{status}</div>}
//       {sharedFileUrl && (
//         <div className="shared-file-link">
//           File is now available at: <a href={sharedFileUrl} target="_blank" rel="noopener noreferrer">{sharedFileUrl}</a>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Shareing;


import React, { useState } from 'react';
import './shareing.css';

function Shareing() {
  const [ipfsHash, setIpfsHash] = useState('');
  const [friendPinataKey, setFriendPinataKey] = useState('');
  const [friendPinataSecret, setFriendPinataSecret] = useState('');
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!ipfsHash || !friendPinataKey || !friendPinataSecret) {
      setStatus('Please provide all required information.');
      return;
    }

    setStatus('Fetching and sharing the file...');

    try {
      const response = await fetch('http://localhost:5000/api/shareFile', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ipfsHash: ipfsHash,
          friendPinataKey: friendPinataKey,
          friendPinataSecret: friendPinataSecret,
        }),
      });

      const data = await response.json();
      if (data.success) {
        setStatus('File shared successfully!');
      } else {
        setStatus('File sharing failed.');
      }
    } catch (error) {
      console.error('Error sharing the file:', error);
      setStatus('An error occurred while sharing the file.');
    }
  };

  return (
    <div className="file-share-section">
      <h2>Share File from Your Pinata to Your Friend's Pinata</h2>
      <form onSubmit={handleSubmit} className="share-form">
        <label htmlFor="ipfsHash">Enter IPFS Hash of the file:</label>
        <input
          type="text"
          id="ipfsHash"
          name="ipfsHash"
          placeholder="IPFS hash of the file"
          value={ipfsHash}
          onChange={(e) => setIpfsHash(e.target.value)}
          required
        />

        <label htmlFor="friendPinataKey">Friend's Pinata API Key:</label>
        <input
          type="text"
          id="friendPinataKey"
          name="friendPinataKey"
          placeholder="Friend's Pinata API Key"
          value={friendPinataKey}
          onChange={(e) => setFriendPinataKey(e.target.value)}
          required
        />

        <label htmlFor="friendPinataSecret">Friend's Pinata Secret Key:</label>
        <input
          type="password"
          id="friendPinataSecret"
          name="friendPinataSecret"
          placeholder="Friend's Pinata Secret Key"
          value={friendPinataSecret}
          onChange={(e) => setFriendPinataSecret(e.target.value)}
          required
        />

        <button type="submit" className="share-button">Share File</button>
      </form>

      {status && <div className="status-message">{status}</div>}
    </div>
  );
}

export default Shareing;
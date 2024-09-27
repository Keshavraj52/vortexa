import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './FileUpload.css';

const Case = ({ contract, account, provider }) => {
    const [cid, setCid] = useState('');
  const [fileUrl, setFileUrl] = useState(null);
  const [error, setError] = useState(null);

  // Fetch file from IPFS using the provided CID
  const fetchFileFromIPFS = async () => {
    const ipfsGateway = `https://gateway.pinata.cloud/ipfs/${cid}`;

    try {
      const response = await fetch(ipfsGateway);
      if (response.ok) {
        const blob = await response.blob();
        const fileURL = URL.createObjectURL(blob);
        setFileUrl(fileURL); // Generate URL for file download/view
        setError(null);
      } else {
        setError('Failed to fetch file from IPFS. Check the CID and try again.');
        setFileUrl(null);
      }
    } catch (err) {
      setError('Error fetching file from IPFS: ' + err.message);
      setFileUrl(null);
    }
  };

  return (
    <div style={styles.container}>
      <h2>Fetch File from IPFS</h2>

      <div style={styles.formGroup}>
        <label>Enter IPFS CID:</label>
        <input
          type="text"
          value={cid}
          onChange={(e) => setCid(e.target.value)}
          placeholder="Enter CID here"
          style={styles.input}
        />
      </div>

      <button onClick={fetchFileFromIPFS} style={styles.button}>
        Fetch File
      </button>

      {fileUrl && (
        <div style={styles.result}>
          <p>File successfully fetched!</p>
          <a href={fileUrl} download="downloaded-file" style={styles.link}>
            Download File
          </a>
        </div>
      )}

      {error && <p style={styles.error}>{error}</p>}
    </div>
  );
};

// Styling
const styles = {
    container: {
      width:'70vw',
      margin: '0 auto',
      marginBottom:'50px',
      marginTop:'50px',
      height:'70vh',
      padding: '20px',
      fontFamily: "'Roboto', sans-serif",  // Use a modern font like Roboto
      backgroundColor: '#f9f9f9', // Light background color for the form container
      borderRadius: '10px', // Rounded corners for a modern look
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)', // Subtle shadow for depth
    },
    formGroup: {
      marginBottom: '20px', // Increase spacing between form elements
    },
    input: {
      width: '100%',
      padding: '12px 15px', // Increased padding for better touch interaction
      fontSize: '16px',
      border: '1px solid #ccc', // Light border for the input
      borderRadius: '5px', // Rounded corners for the input field
      boxShadow: 'inset 0 1px 3px rgba(0, 0, 0, 0.1)', // Subtle inset shadow
      transition: 'border-color 0.3s ease', // Smooth transition for border color
    },
    inputFocus: {
      borderColor: '#007bff', // Change border color on focus
      outline: 'none',
    },
    button: {
      padding: '12px 20px', // Increased padding for a more prominent button
      fontSize: '16px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '5px', // Rounded corners
      cursor: 'pointer',
      transition: 'background-color 0.3s ease, transform 0.2s ease', // Smooth transition for hover and active states
    },
    buttonHover: {
      backgroundColor: '#0056b3', // Darker blue on hover
    },
    buttonActive: {
      transform: 'scale(0.98)', // Slight scale effect on click
    },
    result: {
      marginTop: '30px', // Increase margin for better spacing
      textAlign: 'center',
    },
    link: {
      color: '#007bff',
      textDecoration: 'none',
      fontWeight: 'bold', // Make the link bold for emphasis
      transition: 'color 0.3s ease', // Smooth transition for hover effect
    },
    linkHover: {
      color: '#0056b3', // Change color on hover
    },
    error: {
      color: '#ff4d4f', // Use a modern red for errors
      fontWeight: 'bold', // Make the error more prominent
      marginTop: '10px', // Add space above the error message
    },
  };
  

export default Case;
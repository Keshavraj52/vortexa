// // // const express = require('express');
// // // const cors = require('cors');
// // // const PinataSDK = require('@pinata/sdk');

// // // const app = express();
// // // const port = 5000;

// // // // Replace with your Pinata API keys
// // // const pinataApiKey = '5f7935a1f6f7b6b5494f';
// // // const pinataApiSecret = 'd1a2305c7b4e4fc111b88776ceab265a0037218aa0c655cbdf49b918dec5e08b';

// // // const pinata = new PinataSDK(pinataApiKey, pinataApiSecret);

// // // app.use(cors());
// // // app.use(express.json());

// // // app.post('/api/shareFile', async (req, res) => {
// // //   const { ipfsHash, friendPinataKey, friendPinataSecret } = req.body;

// // //   try {
// // //     // Verify the IPFS hash
// // //     const ipfsInfo = await pinata.pin.get(ipfsHash);
// // //     if (!ipfsInfo) {
// // //       return res.status(400).json({ success: false, message: 'Invalid IPFS hash' });
// // //     }

// // //     // Create a new Pinata instance for your friend
// // //     const friendPinata = new PinataSDK(friendPinataKey, friendPinataSecret);

// // //     // Pin the file to your friend's Pinata account
// // //     const pinnedFile = await friendPinata.pin.add(ipfsHash);

// // //     res.json({ success: true, sharedFileUrl: pinnedFile.ipfs_url });
// // //   } catch (error) {
// // //     console.error('Error sharing the file:', error);
// // //     res.status(500).json({ success: false, message: 'Error sharing the file' });
// // //   }
// // // });

// // // app.listen(port, () => {
// // //   console.log(`Server listening on port ${port}`);
// // // });


// // const express = require('express');
// // const cors = require('cors');
// // const PinataSDK = require('@pinata/sdk');

// // const app = express();
// // const port = 5000;

// // // Replace with your Pinata API keys
// // const pinataApiKey = '3bad68f5dd576dc0773e';
// // const pinataApiSecret = '4d74b3aa80eb98b576cc976c15460414e30f9a8c18e67ff091b1651e3252f6b5';

// // const pinata = new PinataSDK(pinataApiKey, pinataApiSecret);

// // app.use(cors());
// // // Ensure `express.json()` is included to parse JSON data
// // app.use(express.json());

// // app.post('/api/shareFile', async (req, res) => {
// //   // Destructure properties from req.body
// //   const { ipfsHash, friendPinataKey, friendPinataSecret } = req.body;

// //   try {
// //     // Verify the IPFS hash
// //     const ipfsInfo = await pinata.pin.get(ipfsHash);
// //     if (!ipfsInfo) {
// //       return res.status(400).json({ success: false, message: 'Invalid IPFS hash' });
// //     }

// //     // Create a new Pinata instance for your friend
// //     const friendPinata = new PinataSDK(friendPinataKey, friendPinataSecret);

// //     // Pin the file to your friend's Pinata account
// //     const pinnedFile = await friendPinata.pin.add(ipfsHash);

// //     res.json({ success: true, sharedFileUrl: pinnedFile.ipfs_url });
// //   } catch (error) {
// //     console.error('Error sharing the file:', error);
// //     res.status(500).json({ success: false, message: 'Error sharing the file' });
// //   }
// // });

// // app.listen(port, () => {
// //   console.log(`Server listening on port ${port}`);
// // });


// const express = require('express');
// const cors = require('cors');
// const PinataSDK = require('@pinata/sdk');

// const app = express();
// const port = 5000;

// // Replace with your Pinata API keys
// const pinataApiKey = '3bad68f5dd576dc0773e';
// const pinataApiSecret = '4d74b3aa80eb98b576cc976c15460414e30f9a8c18e67ff091b1651e3252f6b5';

// const pinata = new PinataSDK(pinataApiKey, pinataApiSecret);

// app.use(cors());
// app.use(express.json());

// app.post('/api/shareFile', async (req, res) => {
//   const { ipfsHash, friendPinataKey, friendPinataSecret } = req.body;

//   try {
//     // Verify the IPFS hash
//     const ipfsInfo = await pinata.pin.get(ipfsHash);
//     if (!ipfsInfo) {
//       return res.status(400).json({ success: false, message: 'Invalid IPFS hash' });
//     }

//     // Create a new Pinata instance for your friend
//     const friendPinata = new PinataSDK(friendPinataKey, friendPinataSecret);

//     // Pin the file to your friend's Pinata account
//     const pinnedFile = await friendPinata.pin.add(ipfsHash);

//     res.json({ success: true, sharedFileUrl: pinnedFile.ipfs_url });
//   } catch (error) {
//     console.error('Error sharing the file:', error);
//     res.status(500).json({ success: false, message: 'Error sharing the file' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server listening on port ${port}`);
// });
const express = require('express');
const cors = require('cors');
const PinataSDK = require('@pinata/sdk');

const app = express();
const port = 5000;

// Replace with your actual Pinata API keys
const pinataApiKey = '056ba78f87d2be78c7d3'; // Replace with your key
const pinataApiSecret = '6ff3718b9723cc73fdd134c66c40eeb58980992fd5055f66bacf85cde11a4bf0'; // Replace with your secret

const pinata = new PinataSDK(pinataApiKey, pinataApiSecret);

app.use(cors());
app.use(express.json()); // Ensure JSON parsing is enabled

app.post('/api/shareFile', async (req, res) => {
  const { ipfsHash, friendPinataKey, friendPinataSecret } = req.body; // Destructure

  try {
    // Verify the IPFS hash
    const ipfsInfo = await pinata.pin.get(ipfsHash);
    if (!ipfsInfo) {
      return res.status(400).json({ success: false, message: 'Invalid IPFS hash' });
    }

    // Create a new Pinata instance for your friend
    const friendPinata = new PinataSDK(friendPinataKey, friendPinataSecret);

    // Pin the file to your friend's Pinata account
    const pinnedFile = await friendPinata.pin.add(ipfsHash);

    res.json({ success: true, sharedFileUrl: pinnedFile.ipfs_url });
  } catch (error) {
    console.error('Error sharing the file:', error);
    res.status(500).json({ success: false, message: 'Error sharing the file' });
  }
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
const express = require("express");
const forge = require("node-forge");
const cors = require('cors'); 
const app = express();
const port = 3001;

app.use(cors());
app.use(express.json());

app.post("/encrypt", (req, res) => {
  const entitySecret = forge.util.hexToBytes(req.body.entitySecret);
  const publicKey = forge.pki.publicKeyFromPem(req.body.publicKey);

  const encryptedData = publicKey.encrypt(entitySecret, "RSA-OAEP", {
    md: forge.md.sha256.create(),
    mgf1: {
      md: forge.md.sha256.create(),
    },
  });

  res.json({ encryptedData: forge.util.encode64(encryptedData) });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});

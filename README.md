# FairFace

FairBlock MVP UX

Flow:
a) User enters its plaintext meta-transaction in the webpage
b) The transaction will be encrytped in the browser
c) Cipher and a Cryptographic Hash of the Tx will be uploaded to IPFS
d) User sign a tranaction including a reference (cid) to the uploaded commitement using Metamask
e) The refernece will be stored in the Commit smart contract

Consequently, FairBlock keepers can read committed transaction from IPFS and the commmit contract in respect to the received order, decrypt them, and execute them in order by building a single meta-tranaction.


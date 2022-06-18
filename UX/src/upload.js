import {create} from "ipfs-http-client";
import { ethers } from 'ethers';
import ContractArtifact from './build/contracts/CidStorage.json'
const contractAddress = '0x3bD125ce00586f8840b018147bc01828Db7C444d'
const MNEMONIC = process.env.MNEMONIC;
const private_key = "6bd5bea9f81b295b14bbba73c064e97df1aaf17f0266d511488767d7e99bb16c";


export default async function upload() {
    const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })
    console.log('fuck this shit');
    let input = document.getElementById('text_input');
    console.log(input.value);
    const buffer = Buffer.from(input.value);
    console.log(buffer);

    const {cid} = await ipfs.add(buffer);

    console.log('done');
    console.log(cid);


    let provider = ethers.getDefaultProvider();
    let contract = new ethers.Contract(
        contractAddress,
        ContractArtifact.abi,
        provider
    );
    console.log('piss');
    let wallet = new ethers.Wallet(private_key, provider);
    console.log('fuck');
    let contractWithSigner = contract.connect(wallet);
    console.log('shit');
    let tx = await contractWithSigner.storeCid(cid);
    console.log(tx.hash);
    await tx.wait();
    console.log('done')
}
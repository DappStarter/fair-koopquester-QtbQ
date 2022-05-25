require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame food report response scrub concert grace option bone tooth'; 
let testAccounts = [
"0x9c7a813420b35fbb30b3d4014668ba75e4d229e041d72307a8d8516b9e8791aa",
"0xbfd1cd2adf254a4807e59e3a192f4e55e681b049f7998641d115dbb99903cdc9",
"0xaabaddc2168b55422be03bbff994c856186b3b8f454835a5ecd3954e77aefd7c",
"0xb50ef073fac36fa349973d41182a623c5cd1e82f5c62ae0c3d36107aad8e3440",
"0xb453654f43a1a72184e87271f588aa494eaa09388cd19b20b3a918fd35f6a3f8",
"0x482ee3f5e23fe4e0daf7bae750b03b68347130a41352a2c621484a8cc68d703d",
"0xf83ddb356a206177c636b4e70e8587aa7643c0f34e078a10312cf433cc04a7fc",
"0x81ffd44af2d8dfb43188fb40617c483930c1aec1cae2b1f36123058b7ac94380",
"0xa935e644efc54eb2ca3afafa6c89b341346bdce2c054139c8cf7bfb81c89f0c4",
"0xe77b7a29deae32fbf78ce5c0ad60a1a5fbb8e7079f5e20580c16f9cd25e90de7"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


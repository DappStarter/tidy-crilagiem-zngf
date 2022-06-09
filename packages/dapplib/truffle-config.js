require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle food damp cruise ranch coconut harvest clock equal genre'; 
let testAccounts = [
"0xd234684043dde41954d83c51ca73f848938c92fd245a17bf7c07fba335b5ef5e",
"0x79e9147f2961a78da6666605e0d600a60c7b8c4adb9ec80d3b990889cfdb1f5e",
"0xf5abb5a5842d3104719a1909dcc92f2937d4769ebc6cdb86b7be8944d8414651",
"0x43984c766c0182f8e704c0dd0394fb3ed92b810d1a1605bdc300c8b5561c198a",
"0xe11c78955f46d1c77df7633285d10e2817dcebab90bf72a84ab5a391bb464aa8",
"0xc196b2ec8e60952cc012e4af9f3a77ece057cba82d98e4e209e3be5427ff4938",
"0x8fa2913d21bdce9c5ac69a3813a7796b68e7381643c99f50c3ce07bb23ae0278",
"0x13dd10c888cf3808a419b1f8fcbddb3e4cb1e240e28d83d2e1ac357163363e01",
"0x3365946c9476904b695e7563da290859f071b3047d722c4f603b54dbeef90274",
"0x3e8eb48da55e934106fd6f371b533bf0ef2b67d46caee5abf40b1d42b4c70dfc"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};



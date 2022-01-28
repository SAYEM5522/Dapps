/**
 * @type import('hardhat/config').HardhatUserConfig
 */
require("@nomiclabs/hardhat-waffle");
require("dotenv/config");

const { HARDHAT_PORT } = process.env;

module.exports = {
  solidity: "0.7.3",
  networks: {
    localhost: { url: `http://127.0.0.1:${HARDHAT_PORT}` },
    hardhat: {
      accounts: [{"privateKey":"0x317c510083763e2faf7695310d6e4b3938c671a649a4b1a807375f8f4ffa1a56","balance":"1000000000000000000000"},{"privateKey":"0x721f2413653029e1cd3df07eb2b100e0e91764283fce21bb4261134927ba40d1","balance":"1000000000000000000000"},{"privateKey":"0x59fd5f5227446e06db94ad17da43747f875b582d62380bce670302d514699cab","balance":"1000000000000000000000"},{"privateKey":"0xef17e2a36b23549cafee3c57fb60d95628177d46cead631e2bf64a42213d2047","balance":"1000000000000000000000"},{"privateKey":"0x9d05a5728c0156fa1147450aacec84fd89240afefc43f80126bb5a9adbe5c427","balance":"1000000000000000000000"},{"privateKey":"0xee39ebfd988c2caeb88deb510efd900e809f887dd4f5cee4d0956bd4b9083af1","balance":"1000000000000000000000"},{"privateKey":"0x7d0c37e4ba136df4fc1d4a21ef65dc47cbaee9f02f9f3a098bef0023e29e7a32","balance":"1000000000000000000000"},{"privateKey":"0xead4da61e8357d4b84e406eabcdd323fbab45caa22b07f679b704ff1f471680c","balance":"1000000000000000000000"},{"privateKey":"0xf818a5e0deca320ea7690e73401c24c8c54d5fca4e0cd72c65a218805ff93cbf","balance":"1000000000000000000000"},{"privateKey":"0x1e35de58211a73aecbf7a5cd80c982d3d65b92c86835038fa2664aff649f70bf","balance":"1000000000000000000000"}]
    },
  },
  paths: {
    sources: './contracts',
    tests: './__tests__/contracts',
    cache: './cache',
    artifacts: './artifacts',
  },
};
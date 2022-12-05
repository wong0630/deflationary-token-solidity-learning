# Build a Deflationary ERC20 Token in Solidity

This project demonstrates to build a deflationary ERC20 token from scratch with solidity like Safemoon. 

Deflationary token is a token that expereince deflation rather than inflation, that means over time it becomes valuable rather than less valuable like most currencies do. 

##### How do we make a token deflationary? There are several ways to do
1. Not allow any tokens to be created after the initial mint
2. No money printing
3. Every transaction will charge a fee which is then burned. By this way, the more tokens are used and transferred, the more are burend.The lower the supply and assuming consistent demand, the higher the price

##### Below are the dependencies required and installed
*Install and initialize Hardhat*
- npm i -D hardhat
- npx hardhat

*Install the dependencies*
- npm install --save-dev "hardhat@^2.12.2" "@nomicfoundation/hardhat-toolbox@^2.0.0"
- npm i @nomiclabs/hardhat-waffle
- npm i @nomiclabs/hardhat-ethers
- npm i chai
- npm i ethereum-waffle
- npm i ethers
- npm i @openzeppelin/contracts
- npm i -D dotenv
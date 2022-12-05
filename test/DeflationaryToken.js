const { expect } = require("chai");

describe('DeflationaryToken', function () {
  beforeEach(async() => {
    [owner, signer2] = await ethers.getSigners();

    DeflationaryToken = await ethers.getContractFactory('DeflationaryToken', owner);
    deflationaryToken = await DeflationaryToken.deploy();
  })

  describe('transfer', function () {
    it('transfer tokens, reduces supply and wallet balance', async() => {
      let ownerBalance;
      let signer2Balance;
      let totalSupply;

      totalSupply = await deflationaryToken.totalSupply();
      ownerBalance = await deflationaryToken.balanceOf(owner.address);
      expect(totalSupply).to.equal(ethers.utils.parseEther('10'));
      expect(ownerBalance).to.equal(ethers.utils.parseEther('10'));

      await deflationaryToken.connect(owner).transfer(
        signer2.address,
        ethers.utils.parseEther('5'),
      )

      totalSupply = await deflationaryToken.totalSupply();
      ownerBalance = await deflationaryToken.balanceOf(owner.address);
      signer2Balance = await deflationaryToken.balanceOf(signer2.address);

      expect(totalSupply).to.equal(ethers.utils.parseEther(String(10-(5*0.01))));
      expect(ownerBalance).to.equal(ethers.utils.parseEther('5'));
      expect(signer2Balance).to.equal(ethers.utils.parseEther('4.95'));
    })
  })
});

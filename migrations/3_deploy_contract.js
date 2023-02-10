var CrowdFundingWithDeadline = artifacts.require("./CrowdFundingWithDeadline.sol");

module.exports = function(deployer) {
  deployer.deploy(
    CrowdFundingWithDeadline, 
    "Fund Raiser",
    40,
    28880,
    "0x18382F76d8466D1F3aA02A703e9F06a44f83eEC6" //account 4 => beneficiary account
  );
};

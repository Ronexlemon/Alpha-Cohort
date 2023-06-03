// const counter_Demo = artifacts.require("./Counter.sol");
// module.exports= function(deployer){
//     deployer.deploy(counter_Demo);
// }
var Migrations = artifacts.require("Counter");

module.exports = function(deployer) {
  deployer.deploy(Migrations);
};
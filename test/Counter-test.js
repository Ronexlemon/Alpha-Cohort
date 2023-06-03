const Counter = artifacts.require("Counter");

contract("Counter", () => {
  let CounterInstance;
  let num;

  before(async () => {
    CounterInstance = await Counter.deployed();
  });

  it("should return number = 0", async () => {
    num = await CounterInstance.getNumber();
    assert.equal(num, 0);
  });

  it("should increment number by 1", async () => {
    await CounterInstance.increment();
    num = await CounterInstance.getNumber();
    assert.equal(num, 1);
  });

  it("should decrement number by 1", async () => {
    

    await CounterInstance.decrement();
    num = await CounterInstance.getNumber();
    assert.equal(num, 0);
  });
});

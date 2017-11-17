describe('doublyLinkedList', function() {
  var testList;

  beforeEach(function() {
    testList = doublyLinkedList();
  });

  it('should have a head and tail', function() {
    expect(testList).to.have.property('head');
    expect(testList).to.have.property('tail');
  });

  it('should have methods named "addToTail", "removeHead", and "contains"', function() {
    expect(testList.addToTail).to.be.a('function');
    expect(testList.removeHead).to.be.a('function');
    expect(testList.contains).to.be.a('function');
  });

  it('should designate a new tail when new nodes are added', function() {
    testList.addToTail(4);
    expect(testList.tail.value).to.equal(4);
    testList.addToTail(5);
    expect(testList.tail.value).to.equal(5);
  });

  it('should remove the head from the list when removeHead is called', function() {
    testList.addToTail(4);
    testList.addToTail(5);
    expect(testList.head.value).to.equal(4);
    testList.removeHead();
    expect(testList.head.value).to.equal(5);
  });

  it('should return the value of the former head when removeHead is called', function() {
    testList.addToTail(4);
    expect(testList.removeHead()).to.equal(4);
  });

  it('should contain a value that was added', function() {
    testList.addToTail(4);
    testList.addToTail(5);
    expect(testList.contains(4)).to.equal(true);
    expect(testList.contains(5)).to.equal(true);
    expect(testList.contains(6)).to.equal(false);
  });

  it('should not contain a value that was removed', function() {
    testList.addToTail(4);
    testList.addToTail(5);
    testList.removeHead();
    expect(testList.contains(4)).to.equal(false);
  });

  it('should remove the tail from the list when removeTail is called', function() {
    testList.addToTail(4);
    testList.addToTail(5);
    expect(testList.tail.value).to.equal(5);
    testList.removeTail();
    expect(testList.tail.value).to.equal(4);
  });

  it('should return the value of the former head when removeTail is called', function() {
    testList.addToTail(4);
    expect(testList.removeTail()).to.equal(4);
  });

  // add more tests here to test the functionality of testList
});

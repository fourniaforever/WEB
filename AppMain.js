import StorageCrudLogic from './StorageCrudLogic.js';

const storage = new StorageCrudLogic();

let obj1 = { item: 'one', type: 'number' };
let obj2 = { item: 122 };
let obj3 = { item: 'MyNumberThreeString' };

//Add to collection
storage.add(obj1);
storage.add(obj2);
storage.add(obj3);
storage.add(); // failure
storage.add(null); // failure

console.log();

// Get element By Id in collection
storage.getById('0');
storage.getById('1');
storage.getById('2');
storage.getById('3'); // failure
storage.getById('four'); // failure
storage.getById(); // failure

//Get All elements of Map Collection
storage.getAll();

//Delete object by id in collection
storage.deleteById('1');
storage.deleteById('2');
storage.deleteById(3); // failure
storage.deleteById(); // failure
storage.deleteById(null); // failure

console.log();

let obj4 = { item: 'fourthOne' };
storage.add(obj4);

//Check all that remains in collection
storage.getAll();

let obj5 = { item: 'update1!', type: 'action' };
let obj6 = { item: 'update2!' };
let obj7 = { item: 'update3!' };
let obj8 = { item: 'update4!' };
let obj9 = { item: 'update5!' };

//Update by id( objectId, object)
storage.updateById('0', obj5);
storage.updateById('3', obj6);
storage.updateById('1', obj7); // failure
storage.updateById(2, obj8); // failure
storage.updateById(obj9); // failure
storage.updateById('', ''); // failure
storage.updateById('0', 23); // failure
storage.updateById('0', obj9); // failure

// Check for updates
storage.getAll();

let obj10 = { item: 'five', parity: 'no' };
storage.add(obj10);
storage.getAll();

let obj11 = { item: 'replace1!', type: 'action' };
let obj12 = { item: 'replace2!', parity: 'null' };
let obj13 = { item: 'replace3!' };
let obj14 = { item: 'replace4!' };

// Replace by id( objectId, new Object)
storage.replaceById('0', obj11);
storage.replaceById('4', obj12);
storage.replaceById('3', obj13);
storage.replaceById('0', obj14);
storage.replaceById('0', null); // failure
storage.replaceById(null, null); // failure
storage.replaceById('2', obj14); // failure
storage.replaceById('2', ''); // failure

// Check out new data
storage.getAll();
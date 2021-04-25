export default class StorageCrudLogic {
    constructor() {
        this.key = -1;
        this.mas = new Map();
        console.log('\n New Map init \n');
    }

    add(value) {
        let capacity = this.mas.size;
        if (value === Object(value)) {
            this.key += 1;
            this.mas.set(this.key.toString(), value);
        }
        if (capacity < this.mas.size) {
            console.log('New obj was added');
        } else {
            console.log('Failed to add new obj');
        }
    }

    getById(id) {
        if (this.mas.has(id)) {
            console.log(' Object by Id:{', id, '} ', this.mas.get(id));
        } else {
            console.log(' Obj wasn\'t found', null);
        }
    }

    getAll() {
        if (this.mas.size > 0) {
            this.mas.forEach((values, keys) => {
                console.log(keys, ':', values)
            })
            console.log(' Total count capacity: ', this.mas.size, '\n');
        } else {
            console.log(' Map is empty');
        }
    }

    deleteById(id) {
        if (this.mas.has(id)) {
            console.log(' Delete by Id:{', id, '} ', this.mas.get(id));
            this.mas.delete(id);
            console.log(' Obj seccesfully deleted');
        } else {
            console.log(' Failed to delete obj');
        }
    }

    updateById(key, newValue) {
        if (this.mas.has(key) && newValue === Object(newValue)) {
            if (JSON.stringify(Object.keys(this.mas.get(key))) == JSON.stringify(Object.keys(newValue))) {
                for (let i of Object.keys(this.mas.get(key))) {
                    this.mas.get(key)[i] = newValue[i];
                }
                console.log(' Obj with id:{', key, '} was updated : ', this.mas.get(key));
                return;
            }
        }
        console.log(' Failed to update object');
    }

    replaceById(key, newValue) {
        if (this.mas.has(key) && newValue === Object(newValue)) {
            this.mas.set(key, newValue);
            console.log(' Object with id:{', key, '} was replaced : ', this.mas.get(key));
        } else {
            console.log(' Failed to replace object');
        }
    }
}

function hash(key) {
    let hashedKey = 0;
    for (let i = 0; i < key.length; i++) {
        hashedKey = key.charCodeAt(i);
    }
    return hashedKey % 10;
}

class HashTable {
    constructor() {
        this.size = 10;
        this.buckets = Array(this.size);
        // fill the array with empty map
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = new Map();
        }
    }
    insert(key, value) {
        let index = hash(key);
        this.buckets[index].set(key, value)
    }
    delete(key) {
        let index = hash(key),
            deletedItem = this.buckets[index].get(key);
        this.buckets[index].delete(key);
        return deletedItem;
    }
    search(key) {
        let index = hash(key);
        return this.buckets[index].get(key);
    }
}

const hashTable = new HashTable();
hashTable.insert('USA', 'Statue Of LIberty');
hashTable.insert('Dubai', 'Burj Khalifa');
hashTable.insert('Canada', 'CN Tower');
hashTable.insert('Brazil', 'Christ the Redeemer');
// console.log(hashTable.delete('Dubai'));
// console.log(hashTable.search('USA'));
console.log(hashTable);

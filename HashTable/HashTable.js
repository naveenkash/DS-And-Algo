function hash(key) {
    let hashedKey = 0;
    for (let i = 0; i < key.length; i++) {
        hashedKey += key.charCodeAt(i);
    }
    return hashedKey % 10;
}

class HashTable {
    constructor() {
        this.size = 10;
        this.buckets = Array(this.size);
        // fill the array with empty array
        for (let i = 0; i < this.buckets.length; i++) {
            this.buckets[i] = [];
        }
    }
    insert(key, value) {
        let index = hash(key);
        if (this.buckets[index].length == 0) {
            this.buckets[index].push({ [key]: value })
        } else {
            let inserted = false;
            for (let i = 0; i < this.buckets[index].length; i++) {
                const item = this.buckets[index][i];
                let objKey = Object.keys(item);
                if (objKey[0] == key) {
                    item[key] = value;
                    inserted = true;
                    return;
                }
            }
            if (!inserted) {
                this.buckets[index].push({ [key]: value })
            }
        }
    }
    delete(key) {
        let index = hash(key),
            deletedItem = null,
            bucket = this.buckets[index];
        if (bucket.length == 1) {
            let objKey = Object.keys(bucket[0]);
            if (objKey[0] == key) {
                deletedItem = bucket.splice(0, 1);
            }
        } else {
            for (let i = 0; i < bucket.length; i++) {
                let objKey = Object.keys(bucket[i]);
                if (objKey[i] == key) {
                    deletedItem = bucket.splice(i, i + 1);
                }
            }
        }
        return deletedItem;
    }
    search(key) {
        let index = hash(key);
        let bucket = this.buckets[index];

        if (bucket.length <= 0) {
            return null
        }
        if (bucket.length == 1) {
            let keys = Object.keys(bucket[0]);
            if (keys[0] == key) {
                return bucket[0];
            }
            return null
        } else {
            for (let i = 0; i < bucket.length; i++) {
                var keys = Object.keys(bucket[i]);
                if (keys[0] == key) {
                    return bucket[i];
                }
            }
        }
        return null
    }
}

const hashTable = new HashTable();
hashTable.insert('USA', 'Statue Of Liberty');
hashTable.insert('Dubai', 'Burj Khalifa');
hashTable.insert('Canada', 'CN Tower');
hashTable.insert('Brazil', 'Christ the Redeemer');
hashTable.insert('USA', 'Mount Rushmore');
// console.log(hashTable.delete('Brazil'));
// console.log(hashTable.search('USA'));
console.log(hashTable);

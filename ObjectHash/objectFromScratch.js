class HashTable {
    constructor(size) {
        this.data = new Array(size)
    }

    _hash(key) {
        let hash = 0

        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i)* i) % this.data.length
        }
        return hash
    }

    set(key, value) {
        const address = this._hash(key)
        if(!this.data[address]) this.data[address] = []
        this.data[address].push([key, value])
    }

    get(key) {
        const address = this._hash(key)
        const bucket = this.data[address]

        if(bucket) {
            for(let i = 0; i < bucket.length; i++) {
                if(bucket[i][0] === key) return bucket[i][1]; //bucket[i][0] is key bucket[i][1] is value
            } 
        }
        return undefined
    }

    keys() {
        const keys = []
        for(let i = 0; i < this.data.length; i++) {
            if(this.data[i]) {
                if(this.data[i].length > 1) {
                    for(let j = 0; j < this.data[i].length; j++) {
                        keys.push(this.data[i][j][0]) // this gets us the correct k/v inside of a bucket and then the value
                    }
                }
                else {
                    keys.push(this.data[i][0][0])
                }
            }
        }
        return keys
    }

}

const hash = new HashTable(20)
hash.set("test", 1)
hash.set("test2", 2)
hash.set("test3", 3)
hash.set("test4", 4)
hash.set("test5", 5)
hash.set("test6", 6)

console.log(hash.keys())

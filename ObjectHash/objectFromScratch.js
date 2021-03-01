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

}

const hash = new HashTable(20)
hash.set("test", 1)
hash.set("test2", 2)
console.log(hash.get("test"))
console.log(hash)

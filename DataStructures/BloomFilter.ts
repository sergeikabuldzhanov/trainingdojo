
const hashFuncGenerator = (offset:number) => function(s:string) {
    var hash = 0;
    if (s.length == 0) {
        return hash;
    }
    for (var i = 0; i < s.length; i++) {
        var char = s.charCodeAt(i);
        hash = ((hash<<offset)-hash)+char;
        hash = hash & hash; // Convert to 32bit integer
    }
    return hash;
}

const h1 = hashFuncGenerator(5);
const h2 = hashFuncGenerator(31);

class BloomFilter {
    store:number[];
    constructor(){
        this.store = new Array(100).fill(0)
    }
    add(str:string):void{
        this.store[h1(str)%100] = 1;
        this.store[h2(str)%100] = 1;
    }
    contains(str:string):boolean{
        if(this.store[h1(str)%100] === 0) return false;
        if(this.store[h2(str)%100] === 0) return false;
        return true
    }
}
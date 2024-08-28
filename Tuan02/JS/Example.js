let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


// Map
Array.prototype.myMap = function(callbackMap) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callbackMap(this[i]))
    }
    return result;
}

let newArr = arr.myMap((value) => value ** 2);

// console.log(newArr);


// Filter
Array.prototype.myFilter = function(callbackFilter) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callbackFilter(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}

let filterArr = arr.myFilter((value) => value > 5);
// console.log(filterArr);

// Every: tra ve true neu tat ca phan tu trong mang thoa man dieu kien, false neu chi 1 khong thoa dieu kien
Array.prototype.myEvery = function(callbackEvery) {
    for (let i = 0; i < this.length; i++) {
        if (!callbackEvery(this[i])) {
            return false;
        }
    }
    return true;
}

let everyArr = arr.myEvery((value) => value > 0);
// console.log(everyArr);

// Some: tra ve true neu co it nhat 1 phan tu thoa man dieu kien
Array.prototype.mySome = function(callbackSome) {
    for (let i = 0; i < this.length; i++) {
        if (callbackSome(this[i])) {
            return true;
        }
    }
    return false;
}

let someArr = arr.mySome((value) => value > 9);
// console.log(someArr);

// Reduce
Array.prototype.myReduce = function(callbackReduce, initialValue) {
    let result = initialValue;
    for (let i = 0; i < this.length; i++) {
        result = callbackReduce(result, this[i]);
    }
    return result;
}

let reduceArr = arr.myReduce((total, value) => total + value, 0);
// console.log(reduceArr);

// Find: Tra ve gia tri dau tien tim thay trong mang
Array.prototype.myFind = function(callbackFind) {
    for (let i = 0; i < this.length; i++) {
        if (callbackFind(this[i])) {
            return this[i];
        }
    }
    return undefined;
}

let findArr = arr.myFind((value) => value > 5);
console.log(findArr);

// Flat
Array.prototype.myFlat = function(depth = 1) {
    let res = [];
    for (let i = 0; i < this.length; i++) {
        // depth la so lan lap lai cua mang con
        if (Array.isArray(this[i]) && depth > 0) {
            // goi de quy de lap lai mang con va giam depth di 1
            res = [...res, ...this[i].myFlat(depth - 1)];
        } else {
            // neu khong phai la mang thi them vao mang ket qua
            res.push(this[i]);
        }
    }
    return res;
}

let flatArr = [1, 2, [3, 4, [5, 6]]].myFlat(1);
console.log(flatArr);
// depth = 2 => [1, 2, 3, 4, 5, 6]
// depth = 1 => [1, 2, 3, 4, [5, 6]]


const win = (arr1, arr2) => {
    let avgDolphins = arr1.reduce((v, curr) => v+curr, 0) / dolphins.length;
    let avgKoalas = arr2.reduce((v, curr) => v+curr, 0) / dolphins.length;
    
    if(avgDolphins > avgKoalas) {
        if(avgDolphins >= 100) {
            console.log(`Dolphins(${avgDolphins}) has a higher score than Koalas(${avgKoalas})`)
        } else {
            console.log(`No team wins the trophy`)
        }
    } else if(avgDolphins < avgKoalas) {
        if(avgKoalas >= 100) {
            console.log(`Koalas(${avgKoalas}) has a higher score than Dolphins(${avgDolphins})`)
        } else {
            console.log(`No team wins the trophy`)
        }
    } else {
        if(avgKoalas >= 100 && avgDolphins >= 100) {
            console.log(`No team wins the trophy`)
        }
    }
}

// test 01
let dolphins = [97, 112, 101]
let koalas = [109, 95, 123]
win(dolphins, koalas)

// test 02
dolphins = [96, 108, 89]
koalas = [88, 91, 110]
win(dolphins, koalas)

// test 03
dolphins = [97, 112, 101]
koalas = [109, 95, 106]
win(dolphins, koalas)



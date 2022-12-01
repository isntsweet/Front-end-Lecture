function print(name, count){
    // if(!count)
    // count = 0;
    count = count ? count : 0;
    console.log(`${name}이/가 ${count}개 있습니다.`);
}

print('사과', 10);
print('감');

function print2(name, count=0){             // ECMA Script 6(ES6)
    console.log(`${name}이/가 ${count}개 있습니다.`);
}

print2('사과', 10);
print2('감');
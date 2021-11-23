/*
1~100까지의 숫자 중 (1씩 증가)

3의배수일 때 fizz
5의배수일 때 buzz
15의배수일 떄 fizzbuzz
나머지 경우엔 숫자가 출력되도록 만든다.

--> 응용
forEach로 작성하기

*/

for(let i=1; i<=100; i++){
    if( (i % 3 === 0) && (i % 5 === 0) ) {
        console.log(`숫자${i}는 fizzbuzz`);
    }else if( i % 3 === 0 ) {
        console.log(`숫자${i}는 fizz`);
    }else if( i % 5 === 0 ) {
        console.log(`숫자${i}는 buzz`);
    }
    
}
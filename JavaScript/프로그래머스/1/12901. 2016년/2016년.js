function solution(a, b) {
    var answer = '';
    let month = {
        1: 0,
        2: 31,
        3: 60,
        4: 91,
        5: 121,
        6: 152,
        7: 182,
        8: 213,
        9: 244,
        10: 274,
        11: 305,
        12: 335
    }
let day = { 1: 'FRI', 2: 'SAT', 3: 'SUN', 4: 'MON', 5: 'TUE', 6: 'WED', 7: 'THU' };
    let num = month[a] + b
    while(num > 7) {
        num -= 7
    }
    return day[num]
    
}
/*
달 객체, 요일 객체 만들어줘야함
객체로 달마다 일 수 중첩을 key와 value로 보여준다.
ex) {0: 31, 1: 60, 2: 91...이런식}

* 만약 2월을 찾는다면 31부터의 수이며
2월 1일이라면 31 + 1 해서 32라는 것을 찾음.
7이하가 나올때까지 계속 빼준다.
그럼 4가 나오게 되고 4를 벨류로 가지는 키 값을 출력한다.  답) 

* 만약 5월을 찾는다면 121부터의 수이며
5월 24일이라면 121 + 24해서 145이라는 것을 찾음.
7이하가 나올때까지 계속 빼준다.
그럼 5가 나오게 되고 5를 벨류로 가지는 키 값을 출력함.   답) 

(윤년에는 29일)
1월: 31일   2월: 28일   3월: 31일   4월: 30일
5월: 31일   6월: 30일   7월: 31일   8월: 31일
9월: 30일   10월: 31일  11월:30일   12월: 31일

1 => 31  2 => 60  3 => 91  4 => 121  
5 => 152  6 => 182  7 => 213 8 => 244
9 => 274  10 => 305 11 => 335  12 => 366

금: 1 8 15 22 29  토: 2 9 16 23 30  일: 3 10 17 24 31
월 1 화 2 수 3 목 4 금 5 토 6 일 7
*/
let htmlTable;

class TimeTable{
    constructor(day,month,lecturesCount,dayOfWeek){
        this.day = day;
        this.month = month;
        this.lecturesCount = lecturesCount;
        this.dayOfWeek = dayOfWeek;
    }

    createHTMLbase(){
        const daysOfWeek = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
        let dateString;
        const todayDay = new Date().getDate();
        if(todayDay === this.day){
            dateString = `${daysOfWeek[this.dayOfWeek]}: &nbsp;${this.day} ${this.month} <span>-- TODAY</span>`;
        }else{
            dateString = `${daysOfWeek[this.dayOfWeek]}: &nbsp;${this.day} ${this.month}`;
        }
        htmlTable = `<table><tr class='date'><th colspan='4'>${dateString}</th></tr><tr class='headings-row'><th>Room</th><th>Timing</th><th>Topic</th><th>Teacher</th></tr>`;
        this.lecturesAdded = 0;
    }

    htmlAddLectures(roomNo,timing,topic,teacher){
        if(this.lecturesAdded < this.lecturesCount){
            this.lecturesAdded++;
            htmlTable = htmlTable + `<tr class="lecture-${this.lecturesAdded}"><td>${roomNo}</td><td>${timing}</td><td>${topic}</td><td>${teacher}</td></tr>`;
            if(this.lecturesCount - this.lecturesAdded === 0){
                htmlTable = htmlTable + '</table>';
            }
        }
    }

    addHTMLtoPage(){
        document.querySelector('script').insertAdjacentHTML("beforebegin",htmlTable);
    }

}

const month = 'November';

// DAY 1
const day1 = new TimeTable(16,month,2,1);
day1.createHTMLbase();
day1.htmlAddLectures('Computer Lab-1','8:00-11:00','Intro. To Computing Lab','Ms. Nida');
day1.htmlAddLectures('Lecture Room-2','1:00-2:30','Programming Fundamentals','Mr. Toqir');
day1.addHTMLtoPage();

// DAY 2
const day2 = new TimeTable(17,month,2,2);
day2.createHTMLbase();
day2.htmlAddLectures('Lecture Room-2','11:00-12:30','English Comprehension','Ms. Qaisra');
day2.htmlAddLectures('Lecture Room-2','01:00-2:30','Calculus & Analytical Geometry','Ms. Ifra');
day2.addHTMLtoPage();

// DAY 3
const day3 = new TimeTable(18,month,2,3);
day3.createHTMLbase();
day3.htmlAddLectures('Computer Lab-2','08:00-11:00','Programming Fundamentals Lab','Mr. Toqir');
day3.htmlAddLectures('Lecture Room-2','01:00-2:30','Intro To Computing','Mr. Noman');
day3.addHTMLtoPage();

// DAY 4
const day4 = new TimeTable(19,month,3,4);
day4.createHTMLbase();
day4.htmlAddLectures('Lecture Room-2','11:00-12:30','English Comprehension','Ms. Qaisra');
day4.htmlAddLectures('Lecture Room-2','01:00-02:30','Programming Fundamentals','Mr. Toqair');
day4.htmlAddLectures('Lecture Room-2','02:30-04:00','Applied Physics','Dr. Junaid');
day4.addHTMLtoPage();

// DAY 5
const day5 = new TimeTable(20,month,3,5);
day5.createHTMLbase();
day5.htmlAddLectures('Lecture Room-2','10:30-11:45','Applied Physics','Dr. Junaid');
day5.htmlAddLectures('Lecture Room-2','11:45-01:00','Intro. To Computing','Mr. Noman');
day5.htmlAddLectures('Lecture Room-2','02:00-03:30','Calculus & Analytical Geometry','Ms. Ifra');
day5.addHTMLtoPage();
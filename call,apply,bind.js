var name={
    firstname:'joy',
    lastname:'sarkar'
};
 let mergeName=function(hometown,district) {
    console.log(this.firstname + ' ' + this.lastname + ' hometown '  + hometown  + ' district ' + district);
}
var name1={
    firstname:'sarkar',
    lastname:'brata'
};

//funtion borrowing
mergeName.call(name,'silliguri' ,'darjelling');
mergeName.apply(name1,[ 'darjeeling ', ' darjelling ']  )


let mergeName1= mergeName.bind(name,'silliguri' ,'darjelling');
// console.log(mergeName1)
mergeName1()







$(document).ready(
    function(){

        $("form").submit(code);
    }
);

function code(event){
    event.preventDefault();

    let fname = $("input#fname").val();

    let lname = $("input#lname").val();

    let pointsE = parseFloat( $("input#pointsEarned").val() );

    let pointsP = parseFloat( $("input#pointsPossible").val() );







    let student = {};
    student.first = fname;
    student.last = lname;
    student.percent = (pointsE / pointsP * 100).toFixed(2);


    let grade;
    if ((pointsE / pointsP) > 90) {
        grade = "A";
        return grade;
    }
    else if ((pointsE / pointsP) < 90 && ((pointsE / pointsP) > 80)){
        grade = "B"
        return grade;
    }
    else{
        grade = "C"
    }


    student.grade = grade;



    $("#displayName").text(student.first + " " + student.last);
    $("#displayPercent").text(student.percent);
    $("#displayGrade").text(student.grade);

}
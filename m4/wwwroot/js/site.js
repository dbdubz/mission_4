// Please see documentation at https://docs.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your Javascript code.
function CalcGrade() {
    // variables for is413 grade thresholds
    var a = 94;
    var am = 90;
    var bp = 87;
    var b = 84;
    var bm = 80;
    var cp = 77;
    var c = 74;
    var cm = 70;
    var dp = 67;
    var d = 64;
    var dm = 60;

    // other variables
    var letter_grade = "";
    var grade = 0;
    var assignments = $("#assignments");
    var group_projects = $("#group_projects");
    var quizzes = $("#quizzes");
    var midterm = $("#midterm");
    var final = $("#final");
    var intex = $("#intex");
    var extra_credit = $("#ec");

    // calculate weighted grade using is 413 grade scale
    grade = ((assignments.val() * 0.5) + (group_projects.val() * .1) + (quizzes.val() * .1) + (midterm.val() * .1) + (final.val() * .1) + (intex.val() * .1));

    if (extra_credit.val() > 0) {
        grade = grade + 0.51;
    }

    // determine letter grade
    if (grade >= a) {
        letter_grade = "A";
        $("#grade").removeClass("bad ok")
        $("#grade").addClass("good");
    } else if (grade >= am) {
        letter_grade = "A-";
        $("#grade").removeClass("bad ok")
        $("#grade").addClass("good");
    } else if (grade >= bp) {
        letter_grade = "B+";
        $("#grade").removeClass("bad ok")
        $("#grade").addClass("good");
    } else if (grade >= b) {
        letter_grade = "B";
        $("#grade").removeClass("bad ok")
        $("#grade").addClass("good");
    } else if (grade >= bm) {
        letter_grade = "B-";
        $("#grade").removeClass("bad ok")
        $("#grade").addClass("ok");
    } else if (grade >= cp) {
        letter_grade = "C+";
        $("#grade").removeClass("bad good")
        $("#grade").addClass("ok");
    } else if (grade >= c) {
        letter_grade = "C";
        $("#grade").removeClass("bad good")
        $("#grade").addClass("ok");
    } else if (grade >= cm) {
        letter_grade = "C-";
        $("#grade").removeClass("bad good")
        $("#grade").addClass("ok");
    } else if (grade >= dp) {
        letter_grade = "D+";
        $("#grade").removeClass("good ok")
        $("#grade").addClass("bad");
    } else if (grade >= d) {
        letter_grade = "D";
        $("#grade").removeClass("good ok")
        $("#grade").addClass("bad");
    } else if (grade >= dm) {
        letter_grade = "D-";
        $("#grade").removeClass("good ok")
        $("#grade").addClass("bad");
    } else {
        letter_grade = "E";
        $("#grade").removeClass("good ok")
        $("#grade").addClass("bad");
    }

    // output grade to html
    $("#grade").html(`Your Grade: ${letter_grade} (${grade}%)`);
}
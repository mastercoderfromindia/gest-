
	name_of_the_student_array = [];
    var display_student_array=  [];
	function submit()
	{
        for(var j= 1; j <=4; j++){
         var name_of_the_student=document.getElementById("name_of_the_student_"+j).value;
         name_of_the_student_array.push(name_of_the_student);
        }

		console.log(name_of_the_student_array);
		
        for(var o= 0; o <name_of_the_student_array.length; o++){

            display_student_array.push("<h4>NAME - "+name_of_the_student_array[o]+"</h4>");
        }
        var remove_comma=display_student_array.join(" ");
        document.getElementById("display_name").innerHTML = remove_comma;
        document.getElementById("submit_button").style.display = "none";
        document.getElementById("sort_button").style.display = "inline-block";

	}

function sorting()
{
	name_of_the_student_array.sort();
    console.log(name_of_the_student_array);
	document.getElementById("display_name").innerHTML = name_of_the_student_array;
}

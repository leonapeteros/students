(function($) {

    // jquery -> DOM Manipulation + Event handling
    function onFormSubmit(event) {
        // get all field values
        var data = $(event.target).serializeArray();

        // transform field values array to student object
        var student = {};
        for (var i = 0; i < data.length; i++) {
            var key = data[i].name;
            var value = data[i].value;
            student[key] = value
        }

        //create new li node
        var list_element = $('<li>');

        // set li content
        list_element.html(student.first_name + ' ' + student.last_name + ' - ' + student.age );
        

        // append to DOM

        $('.student-list').prepend(list_element);
        




        return false;
    }
    function clearForm()
{
        $(':input').not(':button, :submit, :reset, :hidden, :checkbox, :radio').val('');
        $(':checkbox, :radio').prop('checked', false);
}


    $('.create-form').submit(onFormSubmit)
    $('.create-form').submit(clearForm)


})(jQuery)
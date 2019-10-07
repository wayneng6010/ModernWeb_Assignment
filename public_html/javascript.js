$(document).ready(function () {

    $(".artist_img_portrait.first, .artist_content.first").mousemove(function (e) {
        var newvalueX = 0.01 * e.pageX;
        var newvalueY = 0.01 * (e.pageY - $(document).scrollTop());
        $('.artist_img_bg.first').css("background-position", newvalueX + "px " + newvalueY + "px");
        $('.artist_img_portrait.first').css("background-position", (-newvalueX) + "px " + (-newvalueY) + "px");
    });
    $(".artist_img_portrait.second, .artist_content.second").mousemove(function (e) {
        var newvalueX = 0.01 * e.pageX;
        var newvalueY = 0.01 * (e.pageY - $(document).scrollTop());
        $('.artist_img_bg.second').css("background-position", newvalueX + "px " + newvalueY + "px");
        $('.artist_img_portrait.second').css("background-position", (-newvalueX) + "px " + (-newvalueY) + "px");
    });
    $(".artist_img_portrait.third, .artist_content.third").mousemove(function (e) {
        var newvalueX = 0.01 * e.pageX;
        var newvalueY = 0.01 * (e.pageY - $(document).scrollTop());
        $('.artist_img_bg.third').css("background-position", newvalueX + "px " + newvalueY + "px");
        $('.artist_img_portrait.third').css("background-position", (-newvalueX) + "px " + (-newvalueY) + "px");
    });

    $("#seminar_session").on('change', function () {
        if (this.value === "Cy Leo") {
            $("#seminar_date").val("2 / 8 / 2020");
            $("#seminar_time").val("11:00 AM - 11:50 AM");
        } else if (this.value === "Aiden N Evelyn") {
            $("#seminar_date").val("2 / 8 / 2020");
            $("#seminar_time").val("12:00 AM - 12:50 PM");
        } else if (this.value === "Rei Yamashita") {
            $("#seminar_date").val("2 / 8 / 2020");
            $("#seminar_time").val("1:00 PM - 1:50 PM");
        } else {
            $("#seminar_date").val("N / A");
            $("#seminar_time").val("N / A");
        }
    });

    $("#solo_accompaniment").on('change', function () {
        if (this.value === "Piano") {
            // add required attribute to #solo_pianist
//            $("#solo_pianist_outer #solo_pianist").prop('required', true);
            // makes div visible by removing d-none class
            $("#solo_pianist_outer").removeClass("d-none");
        } else {
            // remove required attribute to #solo_pianist
//            $("#solo_pianist_outer #solo_pianist").prop('required', false);
            // makes div invisible by adding d-none class
            $("#solo_pianist_outer").addClass("d-none");
        }
    });

    $("#ensemble_accompaniment").on('change', function () {
        if (this.value === "Quartet (4 person)") {

            // makes div invisible by adding d-none class
            $("#ensemble_third_outer").addClass("d-none");
            $("#ensemble_forth_outer").addClass("d-none");

            // remove required attribute from #ensemble_third and #ensemble_forth
            $("#ensemble_third_outer #ensemble_third").prop('required', false);
            $("#ensemble_forth_outer #ensemble_forth").prop('required', false);

        } else if (this.value === "Quintet (5 person)") {

            // makes div visible by removing d-none class
            $("#ensemble_third_outer").removeClass("d-none");

            // add required attribute to #ensemble_third
            $("#ensemble_third_outer #ensemble_third").prop('required', true);

            // makes div invisible by adding d-none class
            $("#ensemble_forth_outer").addClass("d-none");

            // remove required attribute from #ensemble_forth
            $("#ensemble_forth_outer #ensemble_forth").prop('required', false);

        } else if (this.value === "Sextet (6 person)") {

            // makes div visible by removing d-none class
            $("#ensemble_third_outer").removeClass("d-none");

            // add required attribute to #ensemble_third
            $("#ensemble_third_outer #ensemble_third").prop('required', true);

            // makes div visible by removing d-none class
            $("#ensemble_forth_outer").removeClass("d-none");

            // add required attribute to #ensemble_forth
            $("#ensemble_forth_outer #ensemble_forth").prop('required', true);

        }
    });

    var members_count = 0;

    $("#orchestra_section_members").on('change', function () {

        var temp_members_arr;

        if ((this.value.match(/\n/g) || []).length > 0) { // if the string contains any new line
            // split each names that separated with comma and store it into array
            temp_members_arr = this.value.split('\n');

            //clear spaces before and after an array element
            for (var i = 0; i < temp_members_arr.length; ++i) {
                temp_members_arr[i] = $.trim(temp_members_arr[i]);
            }

            // count number of elements (section members) in the array 
            members_count = temp_members_arr.length;
            // display array elements separated with commas 
            this.value = temp_members_arr.join(', ');

        } else if ((this.value.match(/,/g) || []).length > 0) { // if the string contains any comma
            // split each names that separated with comma and store it into array
            temp_members_arr = this.value.split(',');

            //clear spaces before and after an array element
            for (var i = 0; i < temp_members_arr.length; ++i) {
                temp_members_arr[i] = $.trim(temp_members_arr[i]);
            }

            // count number of elements (section members) in the array 
            members_count = temp_members_arr.length;
            // display array elements separated with commas 
            this.value = temp_members_arr.join(', ');
        }

        // display number of section members for double checking by user
        $("#orchestra_section_members_count").val(members_count + " person in this section");
    });

    var orchestra_members = [];

    $("#orchestra_section_add").click(function () {
        var section_name = $("#orchestra_section_name").val();

        // combine all members' names into array
        var section_members = $("#orchestra_section_members").val().split(", ");

        // store section_members array into associative array with index section_name
        orchestra_members[section_name] = section_members;

        $("#orchestra_member_list tbody tr").remove();

        var counter = 1;

        for (var i in orchestra_members)
        {
            var name_list = "";

            $.each(orchestra_members[i], function (index, value) {
                name_list += value + "<br>";
            });

            $('#orchestra_member_list tbody').append('<tr><th>' + counter + '</th><td>'
                    + i + '</td><td>' + orchestra_members[i].length + '</td><td>' + name_list
                    + '</td><td>' + 'Edit' + '</td></tr>');

            counter += 1;
        }

        $("#orchestra_section_name").val("");
        $("#orchestra_section_members").val("");

    });

    //validation

    // validate for chromatic solo form
    chromatic_form_validate = function () {
        // makes all error message invisble
        $(".error_msg").css("display", "none");
        $('input').css("border", "1px solid #ced4da");

        var solo_category = document.forms["chromatic_solo_form"]["solo_category"].value;
        var solo_contestant_name = document.forms["chromatic_solo_form"]["solo_contestant_name"].value;
        var solo_title = document.forms["chromatic_solo_form"]["solo_title"].value;
        var solo_composer = document.forms["chromatic_solo_form"]["solo_composer"].value;
        var solo_arranger = document.forms["chromatic_solo_form"]["solo_arranger"].value;
        var solo_accompaniment = document.forms["chromatic_solo_form"]["solo_accompaniment"].value;
        var solo_pianist = document.forms["chromatic_solo_form"]["solo_pianist"].value;

        var validate = true;

        // validation for contestant name input
        if (solo_contestant_name.length === 0) {
            $("#cname_empty").css("display", "block");
            $('input[name="solo_contestant_name"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (solo_contestant_name.length > 30) {
            $("#cname_maxlength").css("display", "block");
            $('input[name="solo_contestant_name"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(solo_contestant_name)) {
            $("#cname_isnum").css("display", "block");
            $('input[name="solo_contestant_name"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for song title input
        if (solo_title.length === 0) {
            $("#title_empty").css("display", "block");
            $('input[name="solo_title"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (solo_title.length > 30) {
            $("#title_maxlength").css("display", "block");
            $('input[name="solo_title"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(solo_title)) {
            $("#title_isnum").css("display", "block");
            $('input[name="solo_title"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for composer input
        if (solo_composer.length === 0) {
            $("#compsr_empty").css("display", "block");
            $('input[name="solo_composer"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (solo_composer.length > 30) {
            $("#compsr_maxlength").css("display", "block");
            $('input[name="solo_composer"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(solo_composer)) {
            $("#compsr_isnum").css("display", "block");
            $('input[name="solo_composer"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for arranger input
        if (solo_arranger.length === 0) {
            $("#arranger_empty").css("display", "block");
            $('input[name="solo_arranger"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (solo_arranger.length > 30) {
            $("#arranger_maxlength").css("display", "block");
            $('input[name="solo_arranger"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(solo_arranger)) {
            $("#arranger_isnum").css("display", "block");
            $('input[name="solo_arranger"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for pianist input
        if (!$("#solo_pianist_outer").hasClass("d-none")) {
            if (solo_pianist.length === 0) {
                $("#pianist_empty").css("display", "block");
                $('input[name="solo_pianist"]').css("border", "1px solid #ff7d7d");
                validate = false;
            }
            if (solo_pianist.length > 30) {
                $("#pianist_maxlength").css("display", "block");
                $('input[name="solo_pianist"]').css("border", "1px solid #ff7d7d");
                validate = false;
            }
            if ($.isNumeric(solo_pianist)) {
                $("#pianist_isnum").css("display", "block");
                $('input[name="solo_pianist"]').css("border", "1px solid #ff7d7d");
                validate = false;
            }
        }

        // check if the form is fully validate
        if (!validate) {
            return false;
        }

    };


});
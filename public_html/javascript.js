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

    $("#ensemble_member_count").on('change', function () {
        if (this.value === "Quartet (4 person)") {

            // makes div invisible by adding d-none class
            $("#ensemble_third_outer").addClass("d-none");
            $("#ensemble_forth_outer").addClass("d-none");

            // remove required attribute from #ensemble_third and #ensemble_forth
//            $("#ensemble_third_outer #ensemble_third").prop('required', false);
//            $("#ensemble_forth_outer #ensemble_forth").prop('required', false);

        } else if (this.value === "Quintet (5 person)") {

            // makes div visible by removing d-none class
            $("#ensemble_third_outer").removeClass("d-none");

            // add required attribute to #ensemble_third
//            $("#ensemble_third_outer #ensemble_third").prop('required', true);

            // makes div invisible by adding d-none class
            $("#ensemble_forth_outer").addClass("d-none");

            // remove required attribute from #ensemble_forth
//            $("#ensemble_forth_outer #ensemble_forth").prop('required', false);

        } else if (this.value === "Sextet (6 person)") {

            // makes div visible by removing d-none class
            $("#ensemble_third_outer").removeClass("d-none");

            // add required attribute to #ensemble_third
//            $("#ensemble_third_outer #ensemble_third").prop('required', true);

            // makes div visible by removing d-none class
            $("#ensemble_forth_outer").removeClass("d-none");

            // add required attribute to #ensemble_forth
//            $("#ensemble_forth_outer #ensemble_forth").prop('required', true);

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
        } else {
            // store it into array
            temp_members_arr = this.value;

            //clear spaces before and after an array element
            temp_members_arr = $.trim(temp_members_arr);

            // count number of elements (section members) in the array 
            members_count = 1;
            // display array elements 
            this.value = temp_members_arr;
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
        if ($.isNumeric(solo_contestant_name) || /\d/.test(solo_contestant_name)) {
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
        if ($.isNumeric(solo_composer) || /\d/.test(solo_composer)) {
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
        if ($.isNumeric(solo_arranger) || /\d/.test(solo_arranger)) {
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
            if ($.isNumeric(solo_pianist) || /\d/.test(solo_pianist)) {
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

    // validate for ensemble form
    ensemble_form_validate = function () {
        // makes all error message invisble
        $(".error_msg").css("display", "none");
        $('input').css("border", "1px solid #ced4da");

        var ensemble_category = document.forms["ensemble_form"]["ensemble_category"].value;
        var ensemble_team_name = document.forms["ensemble_form"]["ensemble_team_name"].value;
        var ensemble_member_count = document.forms["ensemble_form"]["ensemble_member_count"].value;
        var ensemble_title = document.forms["ensemble_form"]["ensemble_title"].value;
        var ensemble_composer = document.forms["ensemble_form"]["ensemble_composer"].value;
        var ensemble_arranger = document.forms["ensemble_form"]["ensemble_arranger"].value;
        var ensemble_first = document.forms["ensemble_form"]["ensemble_first"].value;
        var ensemble_second = document.forms["ensemble_form"]["ensemble_second"].value;
        var ensemble_third = document.forms["ensemble_form"]["ensemble_third"].value;
        var ensemble_forth = document.forms["ensemble_form"]["ensemble_forth"].value;
        var ensemble_bass = document.forms["ensemble_form"]["ensemble_bass"].value;
        var ensemble_chord = document.forms["ensemble_form"]["ensemble_chord"].value;

        var validate = true;

        // validation for ensemble team name input
        if (ensemble_team_name.length === 0) {
            $("#ename_empty").css("display", "block");
            $('input[name="ensemble_team_name"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (ensemble_team_name.length > 30) {
            $("#ename_maxlength").css("display", "block");
            $('input[name="ensemble_team_name"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(ensemble_team_name) || /\d/.test(ensemble_team_name)) {
            $("#ename_isnum").css("display", "block");
            $('input[name="ensemble_team_name"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for song title input
        if (ensemble_title.length === 0) {
            $("#title_empty").css("display", "block");
            $('input[name="ensemble_title"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (ensemble_title.length > 30) {
            $("#title_maxlength").css("display", "block");
            $('input[name="ensemble_title"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(ensemble_title)) {
            $("#title_isnum").css("display", "block");
            $('input[name="ensemble_title"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for composer input
        if (ensemble_composer.length === 0) {
            $("#compsr_empty").css("display", "block");
            $('input[name="ensemble_composer"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (ensemble_composer.length > 30) {
            $("#compsr_maxlength").css("display", "block");
            $('input[name="ensemble_composer"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(ensemble_composer) || /\d/.test(ensemble_composer)) {
            $("#compsr_isnum").css("display", "block");
            $('input[name="ensemble_composer"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for arranger input
        if (ensemble_arranger.length === 0) {
            $("#arranger_empty").css("display", "block");
            $('input[name="solo_arranger"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (ensemble_arranger.length > 30) {
            $("#arranger_maxlength").css("display", "block");
            $('input[name="ensemble_arranger"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(ensemble_arranger) || /\d/.test(ensemble_arranger)) {
            $("#arranger_isnum").css("display", "block");
            $('input[name="ensemble_arranger"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for first player input
        if (ensemble_first.length === 0) {
            $("#first_empty").css("display", "block");
            $('input[name="ensemble_first"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (ensemble_first.length > 30) {
            $("#first_maxlength").css("display", "block");
            $('input[name="ensemble_first"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(ensemble_first) || /\d/.test(ensemble_first)) {
            $("#first_isnum").css("display", "block");
            $('input[name="ensemble_first"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for second player input
        if (ensemble_second.length === 0) {
            $("#second_empty").css("display", "block");
            $('input[name="ensemble_second"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (ensemble_second.length > 30) {
            $("#second_maxlength").css("display", "block");
            $('input[name="ensemble_second"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(ensemble_second) || /\d/.test(ensemble_second)) {
            $("#second_isnum").css("display", "block");
            $('input[name="ensemble_second"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for third player input
        if (!$("#ensemble_third_outer").hasClass("d-none")) {
            if (ensemble_third.length === 0) {
                $("#third_empty").css("display", "block");
                $('input[name="ensemble_third"]').css("border", "1px solid #ff7d7d");
                validate = false;
            }
            if (ensemble_third.length > 30) {
                $("#third_maxlength").css("display", "block");
                $('input[name="ensemble_third"]').css("border", "1px solid #ff7d7d");
                validate = false;
            }
            if ($.isNumeric(ensemble_third) || /\d/.test(ensemble_third)) {
                $("#third_isnum").css("display", "block");
                $('input[name="ensemble_third"]').css("border", "1px solid #ff7d7d");
                validate = false;
            }
        }

        // validation for forth player input
        if (!$("#ensemble_forth_outer").hasClass("d-none")) {
            if (ensemble_forth.length === 0) {
                $("#forth_empty").css("display", "block");
                $('input[name="ensemble_forth"]').css("border", "1px solid #ff7d7d");
                validate = false;
            }
            if (ensemble_forth.length > 30) {
                $("#forth_maxlength").css("display", "block");
                $('input[name="ensemble_forth"]').css("border", "1px solid #ff7d7d");
                validate = false;
            }
            if ($.isNumeric(ensemble_forth) || /\d/.test(ensemble_forth)) {
                $("#forth_isnum").css("display", "block");
                $('input[name="ensemble_forth"]').css("border", "1px solid #ff7d7d");
                validate = false;
            }
        }

        // validation for bass player input
        if (ensemble_bass.length === 0) {
            $("#bass_empty").css("display", "block");
            $('input[name="ensemble_bass"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (ensemble_bass.length > 30) {
            $("#bass_maxlength").css("display", "block");
            $('input[name="ensemble_bass"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(ensemble_bass) || /\d/.test(ensemble_bass)) {
            $("#bass_isnum").css("display", "block");
            $('input[name="ensemble_bass"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for chord player input
        if (ensemble_chord.length === 0) {
            $("#chord_empty").css("display", "block");
            $('input[name="ensemble_chord"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (ensemble_chord.length > 30) {
            $("#chord_maxlength").css("display", "block");
            $('input[name="ensemble_chord"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(ensemble_chord) || /\d/.test(ensemble_chord)) {
            $("#chord_isnum").css("display", "block");
            $('input[name="ensemble_chord"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // check if the form is fully validate
        if (!validate) {
            return false;
        }

    };

    // validate for chromatic solo form
    orchestra_form_validate = function () {
        // makes all error message invisble
        $(".error_msg").css("display", "none");
        $('input').css("border", "1px solid #ced4da");

        var orchestra_name = document.forms["orchestra_form"]["orchestra_name"].value;
        var orchestra_title = document.forms["orchestra_form"]["orchestra_title"].value;
        var orchestra_composer = document.forms["orchestra_form"]["orchestra_composer"].value;
        var orchestra_arranger = document.forms["orchestra_form"]["orchestra_arranger"].value;

        var validate = true;

        // validation for contestant name input
        if (orchestra_name.length === 0) {
            $("#oname_empty").css("display", "block");
            $('input[name="orchestra_name"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (orchestra_name.length > 30) {
            $("#oname_maxlength").css("display", "block");
            $('input[name="orchestra_name"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(orchestra_name) || /\d/.test(orchestra_name)) {
            $("#oname_isnum").css("display", "block");
            $('input[name="orchestra_name"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for song title input
        if (orchestra_title.length === 0) {
            $("#title_empty").css("display", "block");
            $('input[name="orchestra_title"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (orchestra_title.length > 30) {
            $("#title_maxlength").css("display", "block");
            $('input[name="orchestra_title"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(orchestra_title)) {
            $("#title_isnum").css("display", "block");
            $('input[name="orchestra_title"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for composer input
        if (orchestra_composer.length === 0) {
            $("#compsr_empty").css("display", "block");
            $('input[name="orchestra_composer"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (orchestra_composer.length > 30) {
            $("#compsr_maxlength").css("display", "block");
            $('input[name="orchestra_composer"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(orchestra_composer) || /\d/.test(orchestra_composer)) {
            $("#compsr_isnum").css("display", "block");
            $('input[name="orchestra_composer"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for arranger input
        if (orchestra_arranger.length === 0) {
            $("#arranger_empty").css("display", "block");
            $('input[name="orchestra_arranger"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (orchestra_arranger.length > 30) {
            $("#arranger_maxlength").css("display", "block");
            $('input[name="orchestra_arranger"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(orchestra_arranger) || /\d/.test(orchestra_arranger)) {
            $("#arranger_isnum").css("display", "block");
            $('input[name="orchestra_arranger"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // check if orchestra member has at least 7 person. 
        var member_count = 0;

        if (jQuery.isEmptyObject(orchestra_members)) {
            $("#member_count_insufficient").css("display", "block");
            validate = false;
        } else {
            for (var section in orchestra_members) {
                member_count += orchestra_members[section].length;
            }
            if (member_count < 7) {
                $("#member_count_insufficient").css("display", "block");
                validate = false;
            }
        }

        // check if the form is fully validate
        if (!validate) {
            return false;
        }

    };


});
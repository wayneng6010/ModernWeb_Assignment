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
        if (this.value === "ses1") {
            $("#seminar_date").val("2 / 8 / 2020");
            $("#seminar_time").val("11:00 AM - 11:50 AM");
        } else if (this.value === "ses2") {
            $("#seminar_date").val("2 / 8 / 2020");
            $("#seminar_time").val("12:00 AM - 12:50 PM");
        } else if (this.value === "ses3") {
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
        if (this.value === "4") {

            // makes div invisible by adding d-none class
            $("#ensemble_third_outer").addClass("d-none");
            $("#ensemble_forth_outer").addClass("d-none");

            // remove required attribute from #ensemble_third and #ensemble_forth
//            $("#ensemble_third_outer #ensemble_third").prop('required', false);
//            $("#ensemble_forth_outer #ensemble_forth").prop('required', false);

        } else if (this.value === "5") {

            // makes div visible by removing d-none class
            $("#ensemble_third_outer").removeClass("d-none");

            // add required attribute to #ensemble_third
//            $("#ensemble_third_outer #ensemble_third").prop('required', true);

            // makes div invisible by adding d-none class
            $("#ensemble_forth_outer").addClass("d-none");

            // remove required attribute from #ensemble_forth
//            $("#ensemble_forth_outer #ensemble_forth").prop('required', false);

        } else if (this.value === "6") {

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
            if (temp_members_arr === "") {
                members_count = 0;
            } else {
                members_count = 1;
            }

            // display array elements 
            this.value = temp_members_arr;
        }

        // display number of section members for double checking by user
        $("#orchestra_section_members_count").val(members_count + " person in this section");
    });

    var orchestra_members = {};
    var orchestra_members_temp = {};

    $("#orchestra_section_add").click(function () {
        // makes all error message invisble
        $(".error_msg").css("display", "none");
        $('input').css("border", "1px solid #ced4da");
        $('textarea').css("border", "1px solid #ced4da");



        var orchestra_section_name = document.forms["orchestra_form"]["orchestra_section_name"].value;
        var orchestra_section_members = document.forms["orchestra_form"]["orchestra_section_members"].value;

        var orchestra_section_members_temp = orchestra_section_members.split(", ");
        orchestra_members_temp[orchestra_section_name] = orchestra_section_members_temp;

        var validate = true;

        // validation for same section name
        if (orchestra_members.hasOwnProperty(orchestra_section_name)) {
            alert("Section name exist");
            validate = false;
        }

        // validation for orchestra section name input
        if (orchestra_section_name.length === 0) {
            $("#section_empty").css("display", "block");
            $('input[name="orchestra_section_name"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (orchestra_section_name.length > 30) {
            $("#section_maxlength").css("display", "block");
            $('input[name="orchestra_section_name"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(orchestra_section_name) || /\d/.test(orchestra_section_name)) {
            $("#section_isnum").css("display", "block");
            $('input[name="orchestra_section_name"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        for (var i in orchestra_members_temp)
        {
            $.each(orchestra_members_temp[i], function (index, value) {
                // validation for orchestra section name input
                if (value.length === 0) {
                    $("#member_empty").css("display", "block");
                    $('textarea[name="orchestra_section_members"]').css("border", "1px solid #ff7d7d");
                    validate = false;
                }
                if (value.length > 30) {
                    $("#member_maxlength").css("display", "block");
                    $('textarea[name="orchestra_section_members"]').css("border", "1px solid #ff7d7d");
                    validate = false;
                }
                if ($.isNumeric(value) || /\d/.test(value)) {
                    $("#member_isnum").css("display", "block");
                    $('textarea[name="orchestra_section_members"]').css("border", "1px solid #ff7d7d");
                    validate = false;
                }
            });
        }

        if (validate) {
            $("#orchestra_section_members_count").val("");

            var section_name = $("#orchestra_section_name").val();

            // combine all members' names into array
            var section_members = $("#orchestra_section_members").val().split(", ");

            // store section_members array into associative array with index section_name
            orchestra_members[section_name] = section_members;

            $("#orchestra_member_list tbody tr").remove();

            var counter = 1;
            var total_member = 0;

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
                total_member += orchestra_members[i].length;
            }

            $('#orchestra_member_list tbody').append('<tr style="background-color: #7a7a7a; color: white;"><th></th><td class="text-right"><b>Total</b></td><td>' + total_member + '</td><td></td><td></td></tr>');

            $("#orchestra_section_name").val("");
            $("#orchestra_section_members").val("");

//            alert(JSON.stringify(orchestra_members));

        }

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

    function orchestra_register_submit() {
//        for (var i in orchestra_members)
//        {
//            $.each(orchestra_members[i], function (index, value) {
//                orchestra_members_JSON += value + "<br>";
//            });
//        }
        var orchestra_members_json = JSON.stringify(orchestra_members);
//        alert(orchestra_members_json);
        $.ajax({
            url: 'php/competition_register_orchestra_query.php',
            type: 'post',
//            contentType: "application/json",
            data: {
                section_arr: orchestra_members_json,
                orchestra_category: $("#orchestra_category").val(),
                orchestra_name: $("#orchestra_name").val(),
                orchestra_title: $("#orchestra_title").val(),
                orchestra_composer: $("#orchestra_composer").val(),
                orchestra_arranger: $("#orchestra_arranger").val()
            },
            success: function (data) {
                alert("Saved successfully");
//                document.body.innerHTML += data;
            },
            error: function (exception) {
                alert('Exception:' + exception);
            }
        });
    }
    // validate for orchestra form
    orchestra_form_validate = function () {

        // makes all error message invisble
        $(".error_msg").css("display", "none");
        $('input, textarea').css("border", "1px solid #ced4da");

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
        orchestra_register_submit();
    };

    // instant validation on semiar form
    $("#seminar_quantity").on('change', function () {
        this.value = this.value.replace(/e|-/g, '');
        if (!Number.isInteger(this.value)) {
            this.value = Math.round(this.value);
        }
        if (this.value > 5) {
            this.value = 5;
        }
        if (this.value < 1) {
            this.value = 1;
        }
    });

    // validate for seminar form
    seminar_form_validate = function () {
        // makes all error message invisble
        $(".error_msg").css("display", "none");
        $('input').css("border", "1px solid #ced4da");

        var seminar_quantity = document.forms["seminar_form"]["seminar_quantity"].value;

        var validate = true;

        // validation for contestant name input
        if (seminar_quantity.length === 0) {
            $("#qty_empty").css("display", "block");
            $('input[name="seminar_quantity"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (seminar_quantity > 5) {
            $("#qty_maxQty").css("display", "block");
            $('input[name="seminar_quantity"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (seminar_quantity < 1) {
            $("#qty_minQty").css("display", "block");
            $('input[name="seminar_quantity"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (!$.isNumeric(seminar_quantity) || Number.isInteger(seminar_quantity)) {
            $("#qty_isInt").css("display", "block");
            $('input[name="seminar_quantity"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // check if the form is fully validate
        if (!validate) {
            return false;
        }

    };

    // validate for login form
    login_form_validate = function () {
        // makes all error message invisble
        $(".error_msg").css("display", "none");
        $('input').css("border", "1px solid #ced4da");

        var login_email = document.forms["login_form"]["login_email"].value;
        var login_pwd = document.forms["login_form"]["login_pwd"].value;

        var validate = true;

        // validation for contestant name input
        if (login_email.length === 0) {
            $("#email_empty").css("display", "block");
            $('input[name="login_email"]').css("border", "1px solid #ff7d7d");
            validate = false;
        } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(login_email) === false) {
            $("#email_invalid").css("display", "block");
            $('input[name="login_email"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        if (login_pwd.length === 0) {
            $("#pwd_empty").css("display", "block");
            $('input[name="login_pwd"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // check if the form is fully validate
        if (!validate) {
            return false;
        }

    };

    // validate for register form
    $("#reg_hpno").on('change', function () {
        this.value = this.value.replace(/\D|-/g, '');
    });

    $("#reg_fname").on('change', function () {
        this.value = $.trim(this.value);
    });

    register_form_validate = function () {
        // makes all error message invisble
        $(".error_msg").css("display", "none");
        $('input').css("border", "1px solid #ced4da");

        var reg_fname = document.forms["register_form"]["reg_fname"].value;
        var reg_email = document.forms["register_form"]["reg_email"].value;
        var reg_hpno = document.forms["register_form"]["reg_hpno"].value;
        var reg_pwd = document.forms["register_form"]["reg_pwd"].value;
        var reg_cpwd = document.forms["register_form"]["reg_cpwd"].value;

        var validate = true;

        // validation for full name input
        if (reg_fname.length === 0) {
            $("#fname_empty").css("display", "block");
            $('input[name="reg_fname"]').css("border", "1px solid #ff7d7d");
            validate = false;
        } else if (!reg_fname.match(' ')) {
            $("#fname_notFull").css("display", "block");
            $('input[name="reg_fname"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (reg_fname.length > 30) {
            $("#fname_maxlength").css("display", "block");
            $('input[name="reg_fname"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if ($.isNumeric(reg_fname) || /\d/.test(reg_fname)) {
            $("#fname_isnum").css("display", "block");
            $('input[name="reg_fname"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for email input
        if (reg_email.length === 0) {
            $("#email_empty").css("display", "block");
            $('input[name="reg_email"]').css("border", "1px solid #ff7d7d");
            validate = false;
        } else if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(reg_email) === false) {
            $("#email_invalid").css("display", "block");
            $('input[name="reg_email"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        if (reg_pwd.length === 0) {
            $("#pwd_empty").css("display", "block");
            $('input[name="reg_pwd"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for full name input
        if (reg_hpno.length === 0) {
            $("#hpno_empty").css("display", "block");
            $('input[name="reg_hpno"]').css("border", "1px solid #ff7d7d");
            validate = false;
        } else if (!$.isNumeric(reg_hpno) || /\D/.test(reg_hpno)) {
            $("#hpno_isnum").css("display", "block");
            $('input[name="reg_hpno"]').css("border", "1px solid #ff7d7d");
            validate = false;
        } else if (reg_hpno.substring(0, 2) === "04" && reg_hpno.length < 9) {
            $("#hpno_isMin").css("display", "block");
            $('input[name="reg_hpno"]').css("border", "1px solid #ff7d7d");
            validate = false;
        } else if (reg_hpno.substring(0, 2) === "01" && reg_hpno.length < 10) {
            $("#hpno_isMin").css("display", "block");
            $('input[name="reg_hpno"]').css("border", "1px solid #ff7d7d");
            validate = false;
        } else if (reg_hpno.substring(0, 2) !== "04" && reg_hpno.substring(0, 2) !== "01") {
            $("#hpno_prefix").css("display", "block");
            $('input[name="reg_hpno"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (reg_hpno.substring(0, 2) === "01" && reg_hpno.length > 11) {
            $("#hpno_isMax").css("display", "block");
            $('input[name="reg_hpno"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (reg_hpno.substring(0, 2) === "04" && reg_hpno.length > 10) {
            $("#hpno_isMax").css("display", "block");
            $('input[name="reg_hpno"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for password input
        if (reg_pwd.length === 0) {
            $("#pwd_empty").css("display", "block");
            $('input[name="reg_pwd"]').css("border", "1px solid #ff7d7d");
            validate = false;
        } else if (reg_pwd.length < 8) {
            $("#pwd_secure").css("display", "block");
            $('input[name="reg_pwd"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (reg_pwd.length > 20) {
            $("#pwd_maxlength").css("display", "block");
            $('input[name="reg_pwd"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // validation for confirm password input
        if (reg_cpwd.length === 0) {
            $("#cpwd_empty").css("display", "block");
            $('input[name="reg_cpwd"]').css("border", "1px solid #ff7d7d");
            validate = false;
        } else if (reg_cpwd.length < 8) {
            $("#cpwd_secure").css("display", "block");
            $('input[name="reg_cpwd"]').css("border", "1px solid #ff7d7d");
            validate = false;
        } else if (reg_cpwd !== reg_pwd) {
            $("#cpwd_match").css("display", "block");
            $('input[name="reg_cpwd"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }
        if (reg_cpwd.length > 20) {
            $("#cpwd_maxlength").css("display", "block");
            $('input[name="reg_cpwd"]').css("border", "1px solid #ff7d7d");
            validate = false;
        }

        // check if the form is fully validate
        if (!validate) {
            return false;
        }

    };

    $("#reset_btn").click(function () {
        var reset_confirm = confirm("Are you sure to reset the entire form?");
        if (reset_confirm) {
            // makes all error message invisble
            $(".error_msg").css("display", "none");
            $('input').css("border", "1px solid #ced4da");
            // clear all orchestra members 
            orchestra_members = [];
            orchestra_members_temp = [];
            // orchestra_member_list
            $("#orchestra_member_list tbody").html('<tr id="list_empty_row"><th colspan="5" class="text-center">No section is added</th></tr>');
            $(this).closest('form').find("input[type=text], input[type=number], textarea").val("");
        }
    });



});
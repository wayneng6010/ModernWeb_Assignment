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
            $("#solo_pianist_outer #solo_pianist").prop('required', true);
            // makes div visible by removing d-none class
            $("#solo_pianist_outer").removeClass("d-none");

        } else {

            // remove required attribute to #solo_pianist
            $("#solo_pianist_outer #solo_pianist").prop('required', false);
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


});
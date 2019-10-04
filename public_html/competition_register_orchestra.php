
<!DOCTYPE html>
<html>
    <head>
        <title>Register - Orchestra</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="icon" href="../Asset/tab_icon.png">
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" crossorigin="anonymous"></script>
        <link rel="stylesheet" type="text/css" href="styles.css">
        <script src="javascript.js"></script>
    </head>
    <body>
        <?php include 'navbar.php'; ?>
        
        <!--height spacing-->
        <div class="height_spacing"></div>

        <div class="container-fluid mt-4 px-5">
            <div class="center mt-3 d-block mx-auto">
                <div class="py-0">
                    <h2 class="text-center">Orchestra Registration</h2>
                    <hr>

                    <form name="chromatic_solo_form">
                        <div class="form-group row col-sm-8 px-0 mt-4 mx-auto mb-4">
                            <label for="solo_category" class="col-form-label col-sm-2">Category</label>
                            <div class="col-sm-10">
                                <select class="form-control" id="solo_category" style="border-color: grey;" required>
                                    <option disabled>Choose a category</option>
                                    <option>Elementary (age of 12 and below)</option>
                                    <option>Middle-High School (age of 13~18)</option>
                                    <option>Adults (age of 19~59)</option>
                                    <option>Senior (age of 60 and above)</option>
                                </select>
                            </div>
                        </div>

                        <!--form left-->
                        <div class="col-sm-6 float-left">
                            <label>Orchestra and Song Details</label>
                            <div class="input-group mb-3 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <img src="../Asset/contestant_icon.svg" alt="@" width="20">
                                    </div>
                                </div>
                                <input type="text" class="form-control" id="ensemble_team_name" placeholder="Orchestra Name" required>
                            </div>

                            <div class="input-group mb-3 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <img src="../Asset/song_title_icon.svg" alt="@" width="20">
                                    </div>
                                </div>
                                <input type="text" class="form-control" id="ensemble_title" placeholder="Song Title" required>
                            </div>

                            <div class="input-group mb-3 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <img src="../Asset/composer_icon.svg" alt="@" width="20">
                                    </div>
                                </div>
                                <input type="text" class="form-control" id="ensemble_composer" placeholder="Composer" required>
                            </div>

                            <div class="input-group mb-3 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <img src="../Asset/arranger_icon.svg" alt="@" width="20">
                                    </div>
                                </div>
                                <input type="text" class="form-control" id="ensemble_arranger" placeholder="Arranger" required>
                            </div>
                        </div>

                        <!--form right-->
                        <div id="orchestra_members_outer" class="col-sm-6 float-right">
                            <label for="solo_accompaniment">Orchestra Members</label>

                            <div class="input-group mb-3 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <img src="../Asset/group_icon.svg" alt="@" width="20">
                                    </div>
                                </div>
                                <input type="text" class="form-control" id="orchestra_section_name" placeholder="Section Name" required>
                            </div>

                            <div class="input-group mb-3 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <img src="../Asset/harmonica_icon.svg" alt="@" width="20">
                                    </div>
                                </div>
                                <textarea class="form-control" id="orchestra_section_members" style="height: 92px;" placeholder="Section Members' Names ( separate each member by an new line or comma )" required></textarea>
                            </div>

                            <div class="container row mx-0 px-0">
                                <div class="form-group col-sm-8 px-1">
                                    <input type="text" class="form-control text-center" id="orchestra_section_members_count" placeholder="-" readonly required>
                                </div>

                                <div class="form-group col-sm-4 px-1">
                                    <button id="orchestra_section_add" class="btn btn-success btn-block">Add Section</button>
                                </div>
                            </div>

                        </div>

                        <div class="clearfix pt-4" style="clear: both;">
                            <label>Orchestra Members Overview</label>
                            <table class="table table-striped" id="orchestra_member_list">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Section Name</th>
                                        <th scope="col">Number of Members</th>
                                        <th scope="col">Members</th>
                                        <th scope="col">Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr id="list_empty_row">
                                        <th colspan="5" class="text-center">No section is added</th>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div class=" col-sm-3 float-right px-3 mt-2 mb-4">
                            <button type="submit" class="btn btn-success btn-block">Confirm</button>
                        </div>
                    </form>

                </div>
            </div>
        </div>

        
    </body>
</html>
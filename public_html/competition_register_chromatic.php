<?php
session_start();
include 'php/competition_register_chromatic_query.php';
?>
<!DOCTYPE html>
<html>
    <head>
        <title>Register - Chromatic Solo</title>
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
            <div class="center pt-2 d-block mx-auto">
                <div class="py-0">
                    <h2 class="text-center">Chromatic Solo Registration</h2>
                    <hr>

                    <form method="post" name="chromatic_solo_form" onsubmit="return chromatic_form_validate()" action="<?php echo filter_input(INPUT_SERVER, 'PHP_SELF', FILTER_SANITIZE_URL) ?>">
                        <div class="form-group row col-sm-8 px-0 mt-4 mx-auto mb-4">
                            <label for="solo_category" class="col-form-label col-sm-2">Category</label>
                            <div class="col-sm-10">
                                <select class="form-control" name="solo_category" id="solo_category" style="border-color: grey;" required>
                                    <option disabled>Choose a category</option>
                                    <option value="cat1">Elementary (age of 12 and below)</option>
                                    <option value="cat2">Middle-High School (age of 13~18)</option>
                                    <option value="cat3">Adults (age of 19~59)</option>
                                    <option value="cat4">Senior (age of 60 and above)</option>
                                </select>
                            </div>
                        </div>

                        <!--form left-->
                        <div class="col-sm-6 float-left">
                            <label>Contestant and Song Details</label>
                            <div class="input-group mb-3 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <img src="../Asset/contestant_icon.svg" alt="@" width="20">
                                    </div>
                                </div>
                                <input type="text" class="form-control" name="solo_contestant_name" id="solo_contestant_name" placeholder="Contestant Name" >
                                <div class="error_msg" id="cname_empty"><p>Please fill in contestant name.</p></div>
                                <div class="error_msg" id="cname_maxlength"><p>Contestant name is too long. Maximum 30 characters.</p></div>
                                <div class="error_msg" id="cname_isnum"><p>Contestant name should not be an number or contain any number.</p></div>
                            </div>

                            <div class="input-group mb-3 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <img src="../Asset/song_title_icon.svg" alt="@" width="20">
                                    </div>
                                </div>
                                <input type="text" class="form-control" name="solo_title" id="solo_title" placeholder="Song Title" >
                                <div class="error_msg" id="title_empty"><p>Please fill in song title.</p></div>
                                <div class="error_msg" id="title_maxlength"><p>Song title is too long. Maximum 30 characters.</p></div>
                                <div class="error_msg" id="title_isnum"><p>Song title should not be an number.</p></div>
                            </div>

                            <div class="input-group mb-3 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <img src="../Asset/composer_icon.svg" alt="@" width="20">
                                    </div>
                                </div>
                                <input type="text" class="form-control" name="solo_composer" id="solo_composer" placeholder="Composer" >
                                <div class="error_msg" id="compsr_empty"><p>Please fill in composer name.</p></div>
                                <div class="error_msg" id="compsr_maxlength"><p>Composer name is too long. Maximum 30 characters.</p></div>
                                <div class="error_msg" id="compsr_isnum"><p>Composer name should not be an number or contain any number.</p></div>
                            </div>

                            <div class="input-group mb-3 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <img src="../Asset/arranger_icon.svg" alt="@" width="20">
                                    </div>
                                </div>
                                <input type="text" class="form-control" name="solo_arranger" id="solo_arranger" placeholder="Arranger" >
                                <div class="error_msg" id="arranger_empty"><p>Please fill in arranger name.</p></div>
                                <div class="error_msg" id="arranger_maxlength"><p>Arranger name is too long. Maximum 30 characters.</p></div>
                                <div class="error_msg" id="arranger_isnum"><p>Arranger name should not be an number or contain any number.</p></div>
                            </div>
                        </div>

                        <!--form right-->
                        <div class="col-sm-6 float-right">
                            <div class="form-group">
                                <label for="solo_accompaniment">Accompaniment</label>
                                <select class="form-control" name="solo_accompaniment" id="solo_accompaniment" >
                                    <option disabled>Choose an accompaniment</option>
                                    <option>Piano</option>
                                    <option>CD</option>
                                    <option>None</option>
                                </select>
                            </div>

                            <div id="solo_pianist_outer" class="input-group mb-3 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <img src="../Asset/pianist_icon.svg" alt="@" width="20">
                                    </div>
                                </div>
                                <input type="text" class="form-control" name="solo_pianist" id="solo_pianist" placeholder="Pianist Name" >
                                <div class="error_msg" id="pianist_empty"><p>Please fill in pianist name.</p></div>
                                <div class="error_msg" id="pianist_maxlength"><p>Pianist name is too long. Maximum 30 characters.</p></div>
                                <div class="error_msg" id="pianist_isnum"><p>Pianist name should not be an number or contain any number.</p></div>
                            </div>

                        </div>
                        <div class="clearfix"></div>
                        <div class="col-sm-2 float-left px-3 mt-2 mb-4">
                            <button type="button" id="reset_btn" class="btn btn-info btn-block">Reset</button>
                        </div>
                        <div class="col-sm-3 float-right px-3 mt-2 mb-4">
                            <button type="submit" name="reg_submit" class="btn btn-success btn-block">Confirm</button>
                        </div>
                        
                    </form>

                </div>
            </div>
        </div>

        
    </body>
</html>

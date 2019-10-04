
<!DOCTYPE html>
<html>
    <head>
        <title>Sign Up</title>
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

        <!--content-->
        <div class="container-fluid mt-5 px-5">
            <div class="login_container center d-block mx-auto w-50">
                <h2 class="text-center">Register an Account</h2>                    
                <hr>
                <form class="d-block mx-auto pt-2">
                    <!--username-->
                    <div class="input-group mb-3 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img src="../Asset/contact_name_icon.svg" alt="@" width="20">
                            </div>
                        </div>
                        <input type="text" class="form-control" id="username" placeholder="Name" required>
                    </div>
                    <!--email-->
                    <div class="input-group mb-3 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img src="../Asset/contact_email_icon.svg" alt="@" width="20">
                            </div>
                        </div>
                        <input type="email" class="form-control" id="email" placeholder="Email" required>
                    </div>
                    <!--phone number-->
                    <div class="input-group mb-3 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img src="../Asset/signup_phone_icon.svg" alt="@" width="20">
                            </div>
                        </div>
                        <input type="text" class="form-control" id="hp_no" placeholder="Phone Number" required>
                    </div>
                    <!--password-->
                    <div class="input-group mb-3 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img src="../Asset/login_psw_icon.svg" alt="@" width="20">
                            </div>
                        </div>
                        <input type="password" class="form-control" id="password" placeholder="Password" required>
                    </div>
                    <!--confirm password-->
                    <div class="input-group mb-3 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img src="../Asset/login_psw_icon.svg" alt="@" width="20">
                            </div>
                        </div>
                        <input type="password" class="form-control" id="confirm_password" placeholder="Confirm Password" required>
                    </div>
                    <button type="submit" class="btn btn-success btn-block mb-2">SIGN UP</button>
                    <p class="text-center">
                        <a href="log_in.php">Log in your account &#8594;</a>
                    </p>
                </form>
            </div>
        </div>

        
    </body>
</html>

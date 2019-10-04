
<!DOCTYPE html>
<html>
    <head>
        <title>Log In</title>
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
        <div class="container-fluid mt-5 pt-3 px-5">
            <div class="login_container center d-block mx-auto w-50">
                <h2 class="text-center">Account Login</h2>                    
                <hr>
                <form class="d-block mx-auto">
                    <!--email-->
                    <div class="pt-2 input-group mb-3 mr-sm-2">
                        <div class="input-group-prepend">
                            <div class="input-group-text">
                                <img src="../Asset/contact_email_icon.svg" alt="@" width="20">
                            </div>
                        </div>
                        <input type="email" class="form-control" id="email" placeholder="Email" required>
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
                    <button type="submit" class="btn btn-success btn-block mb-2">LOGIN</button>
                    <p class="text-center">
                        <a href="sign_up.php">Create your account &#8594;</a>
                    </p>
                </form>
            </div>
        </div>
        
        
    </body>
</html>

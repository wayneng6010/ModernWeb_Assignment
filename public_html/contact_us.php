
<!DOCTYPE html>
<html>
    <head>
        <title>Contact Us</title>
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
        <div class="container-fluid mt-4 px-5">
            <div class="center mt-4">
                <div class="py-0">
                    
                    <!--jumbotron banner-->
                    <div class="jumbotron py-4 text-center">
                        <h1 class="display-6">Feel Free to Contact Us</h1>
                        <p class="lead">We’re here to help and answer any question you might have. We look forward to hearing from you !</p>
                    </div>
                    
                    <h3 class="text-center">Drop us a mail</h3>
                    <hr>
                    
                    <!--send email form-->
                    <form class="pt-3 d-block mx-auto">
                        <!--left side-->
                        <div class="col-sm-6 float-left">   
                            <div class="input-group mb-3 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <img src="../Asset/contact_name_icon.svg" alt="@" width="20">
                                    </div>
                                </div>
                                <input type="text" class="form-control" id="username" placeholder="Name" required>
                            </div>

                            <div class="input-group mb-3 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <img src="../Asset/contact_email_icon.svg" alt="@" width="20">
                                    </div>
                                </div>
                                <input type="email" class="form-control" id="email" placeholder="Email" required>
                            </div>

                            <div class="input-group mb-3 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <img src="../Asset/contact_subject_icon.svg" alt="@" width="20">
                                    </div>
                                </div>
                                <input type="text" class="form-control" id="subject" placeholder="Subject" required>
                            </div>
                        </div>  
                        
                        <!--right side-->
                        <div class="col-sm-6 float-right">
                            <div class="input-group mb-3 mr-sm-2">
                                <div class="input-group-prepend">
                                    <div class="input-group-text">
                                        <img src="../Asset/contact_msg_icon.svg" alt="@" width="20">
                                    </div>
                                </div>
                                <textarea class="form-control" id="message" placeholder="Message" style="height: 146px;" required></textarea>
                            </div>
                            <button type="submit" class="btn btn-success px-5 mb-3 float-right">Submit</button>
                        </div>

                    </form>
                    
                    <div style="clear: both;"></div>
                    
                    <!--contact information-->
                    <h3 class="text-center mt-3">Contact Information</h3>
                    <hr>
                    <div class="row my-4 text-center" id="contact_info_outer">
                        <div class="col-sm-4">
                            <p class="mb-1"><b><i>Visit us</i></b></p>
                            <p>11, Harmonica Music Center, <br>Jalan Faraday, 11700 Penang</p>
                        </div>
                        <div class="col-sm-4">
                            <p class="mb-1"><b><i>Call us</i></b></p>
                            <p>+60 1110961899</p>
                        </div>
                        <div class="col-sm-4">
                            <p class="mb-1"><b><i>Mail us</i></b></p>
                            <p>info.harfest@gmail.com</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        
    </body>
</html>

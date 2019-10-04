
<!DOCTYPE html>
<html>
    <head>
        <title>Register - Overview</title>
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
            <h2 class="text-center">Registration Submission Overview</h2>
            <hr>
            <!--chromatic solo table-->
            <h4 class="text-center mt-4 mb-3">Chromatic Solo</h4>
            <table class="table table-striped mb-5" id="solo_overview">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Contestant Name</th>
                        <th scope="col">Song Title</th>
                        <th scope="col">Accompaniment</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="list_empty_row">
                        <th colspan="5" class="text-center">No registration</th>
                    </tr>
                </tbody>
            </table>

            <!--ensemble table-->
            <h4 class="text-center mb-3">Ensemble</h4>
            <table class="table table-striped mb-5" id="ensemble_overview">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Team Name</th>
                        <th scope="col">Song Title</th>
                        <th scope="col">Team Members</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="list_empty_row">
                        <th colspan="5" class="text-center">No registration</th>
                    </tr>
                </tbody>
            </table>

            <!--orchestra table-->
            <h4 class="text-center mb-3">Orchestra</h4>
            <table class="table table-striped mb-5" id="orchestra_overview">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Orchestra Name</th>
                        <th scope="col">Song Title</th>
                        <th scope="col">Sections</th>
                        <th scope="col">Total Number of Members</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr id="list_empty_row">
                        <th colspan="6" class="text-center">No registration</th>
                    </tr>
                </tbody>
            </table>
        </div>

        <!--blank spacing-->
        <div style="height: 50px;"></div>

        <nav class="navbar fixed-bottom navbar-expand-sm navbar-dark bg-dark justify-content-end">
            <ul class="navbar-nav">
                <li class="nav-item">
                    <p class="nav-link my-0 mr-3" style="color: white;">Total - MYR 0.00</p>
                </li>
            </ul>
            <a href="checkout.php" class="btn btn-success px-5" id="checkout_btn">Check Out</a>
        </nav>

        
    </body>
</html>

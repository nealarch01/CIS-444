<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>NBA Teams</title>
    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <div class="main-container">
        <h3 class="main-header"> 
        <?php
            $winsInput = $_POST["wins"];
            echo "Teams with greater than or equal to: {$winsInput} wins";
            $mySQLDB = mysqli_connect('localhost', 'root', '12345');
            if (!$mySQLDB) {
                echo "<br>There was an error doing a query";
                mysqli_close($mySQLDB);
                exit;
            }
            $selectedDB = mysqli_select_db($mySQLDB, "Assignment6");
            if (!$selectedDB) {
                echo "<br>There was an error opening the database";
                mysqli_close($mySQLDB);
                exit;
            }
            $queryString = "SELECT * FROM Teams WHERE overallWins >= {$winsInput}";
            $queryResult = mysqli_query($mySQLDB, $queryString);
            echo "<table>";
            echo "<tr>" . 
                    "<th>Team ID</th>" .
                    "<th>Team Name</th>" .
                    "<th>Start Year</th>" .
                    "<th>Owner</th>" .
                    "<th>General Manager</th>" .
                    "<th>Coach</th>" .
                    "<th>MVP</th>" .
                    "<th>Arena Address</th>" .
                    "<th>City</th>" .
                    "<th>State</th>" .
                    "<th>ZIP</th>" .
                    "<th>Phone #</th>" .
                    "<th>Div Wins</th>" .
                    "<th>Div Loses</th>" .
                    "<th>Conf Wins</th>" .
                    "<th>Conf Loses</th>" .
                    "<th>Overall Wins</th>" .
                    "<th>Overall Loses</th>" .
                "</tr>";
            while ($singleRowData = mysqli_fetch_assoc($queryResult)) {
                echo "<tr>";
                    foreach($singleRowData as $value) {
                        echo "<td> {$value} </td>";
                    }
                echo "</tr>";
            }
            echo "</table>";
            mysqli_close($mySQLDB);
        ?>
        </h3>
    </div>
</body>
</html>
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
            echo "Teams with {$winsInput} or more wins";
            $mySQLDB = mysqli_connect('localhost', 'root', '12345');
            if (!$mySQLDB) {
                echo "<br>There was an error doing a query";
                mysqli_close($mySQLDB);
                exit;
            }

            // using try catch exception block since mysqli_select_db throws an exception and cannot be caught by an if statement
            try {
                $selectedDB = mysqli_select_db($mySQLDB, "Assignment6");
            } catch (mysqli_sql_exception) {
                echo "<br>There was an error selecting the database";
                exit;
            }

            $queryString = "SELECT * FROM Teams WHERE overallWins >= {$winsInput}";
            $queryResult = mysqli_query($mySQLDB, $queryString);
            $numberOfResults = mysqli_num_rows($queryResult);

            // do not print the table if there are not results found
            if ($numberOfResults == 0) {
                echo "<br>There are no teams with {$winsInput} wins or more";
                exit;
            }

            // start of table
            echo "<table> <tr>";
            // printing all the columns
            while ($singleColumn = mysqli_fetch_field($queryResult)) {
                echo "<th>{$singleColumn->name}</th>";
            }
            echo "</tr>";

            // printing all row and cell data
            while ($singleRowData = mysqli_fetch_assoc($queryResult)) {
                echo "<tr>";
                    foreach ($singleRowData as $value) {
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
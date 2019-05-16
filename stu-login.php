<html>
  <head>
    <title>Student-Login</title>
    <meta charset="UTF-8">
    <link rel="stylesheet" type="text/css" href="css/stu-login.css">
  </head>
  <body>
  
    <div class="container">



      <div id="login-form">
        <center>
          <img id="logo" src="img/stu.png">
          <form class="placeholders" action="dashboard.php" method="post">
            <h2 id="head"> Student Login </h2>
            <input id="username" type="text" name="uname" placeholder="Username" required><br>
            <input id="pass" type="password" name="pass" placeholder="Password" required>
            <input id="input-btn" type="submit" value="" /><br>
            <a id="r-pass" href="r_pass.php"> Reset Password </a><br>
          </form>
        </center>
      </div>


      <div id="signup-form">
        <center><h2 id="head"> Student Signup </h2></center>
        <div class="chatbox">
        </div>
          <div id="bmsg-area">
          <input type="text" id="input" placeholder="Wait..." >

 
 <button class="button" id="button" onclick="send()" >SEND</button>
        </div>
      </div>


      <!-- <div id="overlay">
        <div id="signin-overlay">
          Welcome back.
        </div>

        <div id="signup-overlay">
          Don't have an account?
          Create One
        </div>
      </div> -->



    </div>


    <script type="text/javascript" src="jquery/jquery.js"></script>
    <script src="js/chatcode.js"></script>
  </body>
</html>
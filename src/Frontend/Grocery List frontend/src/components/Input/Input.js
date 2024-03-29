import React from 'react';
import './Input.css'

class Input extends React.Component {
    render() {
        return (
            <div class="container-fluid" id="container-fluid">
                <h2>Popup Form</h2>
                <p>Click on the button at the bottom of this page to open the login form.</p>
                <p>Note that the button and the form is fixed - they will always be positioned to the bottom of the browser window.</p>

                <button class="open-button" onclick="openForm()">+</button>

                <div class="form-popup" id="myForm">
                    <form action="/action_page.php" class="form-container">
                        <h1>Login</h1>

                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" required></input>

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="psw" required></input>

                        <button type="submit" class="btn">Login</button>
                        <button type="button" class="btn cancel" onclick="closeForm()">Close</button>
                    </form>
                    <script>
                    function openForm() {
                    document.getElementById("myForm").style.display = "block"
                    }

                    function closeForm() {
                    document.getElementById("myForm").style.display = "none"
                    }
                    </script>
                </div>

            

            </div>
        )
    }
}

export default Input;
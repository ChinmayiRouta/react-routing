import React from "react";
export default function Registration() {
  return (
    <div>
      <p />
      <h2>Registration Form</h2>
      <form action="register" method="post" />

      <label for="username">Username:</label>
      <br></br>
      <input type="text" name="username" />
      <br></br>

      <label for="email">Email:</label>
      <br></br>
      <input type="email" name="email" />
      <br></br>

      <label for="password">Password:</label>
      <br></br>
      <input type="password" name="password" />
      <br></br>

      <label for="gender">Gender:</label>
      <br></br>
      <input type="radio" name="gender" value="male" />
      <label for="male">Male</label>
      <input type="radio" name="gender" value="female" />
      <label for="female">Female</label>
      <input type="radio" name="gender" value="other" />
      <label for="Other">other</label>
      <br></br>

      <label>Role:</label>
      <br></br>
      <input type="radio" name="role" value="admin" />
      <label for="admin">Admin</label>
      <input type="radio" name="role" value="user" />
      <label for="user">Customer</label>
      <br></br>

      <label>Address:</label>
      <br></br>
      <textarea name="address" rows="4" cols="40"></textarea>
      <br></br>

      <input type="submit" value="Register"></input>
    </div>
  );
}

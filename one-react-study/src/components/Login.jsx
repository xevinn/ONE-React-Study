import { useState } from "react";

export default function Login() {
  return (
    <div>
      <h2>Login</h2>
      <div>
        ID : 
        <input type="text" />
      </div>
      <div>
        PW : 
        <input type="password" />
      </div>
      <div>
        <button type="button">Login</button>
      </div>
    </div>
  );
}
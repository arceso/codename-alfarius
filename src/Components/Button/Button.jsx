import React from "react";

const oauthSignIn = () => {
  // Google's OAuth 2.0 endpoint for requesting an access token
  let oauth2Endpoint = "https://accounts.google.com/o/oauth2/v2/auth";

  // Create <form> element to submit parameters to OAuth 2.0 endpoint.
  let form = document.createElement("form");
  form.setAttribute("method", "GET"); // Send as a GET request.
  form.setAttribute("action", oauth2Endpoint);

  // Parameters to pass to OAuth 2.0 endpoint.
  let params = {
    client_id:
      "455339909818-q4d9d2j0hkncdc9mnog1tl5of6rupg5o.apps.googleusercontent.com",
    redirect_uri: "http://localhost:3000/LoggedIn",
    response_type: "token",
    scope: "profile email openid",
    include_granted_scopes: "true"
  };

  // Add form parameters as hidden input values.
  for (let p in params) {
    let input = document.createElement("input");
    input.setAttribute("type", "hidden");
    input.setAttribute("name", p);
    input.setAttribute("value", params[p]);
    form.appendChild(input);
  }

  // Add form to page and submit it to open the OAuth 2.0 endpoint.
  document.body.appendChild(form);
  form.submit();
};

export default () => <button onClick={oauthSignIn}>Loggeanízate!</button>;

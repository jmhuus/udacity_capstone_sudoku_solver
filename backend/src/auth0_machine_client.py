"""
This file makes a machine-to-machine request as opposed to a user-to-machine
request. Essentially, this code requests a JWT token to act on behalf of the
'SudokuAPI (Test Application) MACHINE TO MACHINE' application, which has it's
own set of permissions AND can access the SudokuAPI.

See this Auth0 blog post for more details:
https://auth0.com/blog/using-m2m-authorization/
"""
import http.client
import json
import os


def get_admin_jwt_token():
    conn = http.client.HTTPSConnection(
        "jordan-flask-authentication-practice.auth0.com")
    payload = json.dumps({
      "client_id": os.environ["AUTH0_ADMIN_M2M_CLIENT_ID"],
      "client_secret":
      os.environ["AUTH0_ADMIN_M2M_CLIENT_SECRET"],
      "audience": os.environ["AUTH0_API_AUDIENCE"],
      "grant_type": "client_credentials"
    })
    headers = {'content-type': "application/json"}
    conn.request("POST", "/oauth/token", payload, headers)
    res = conn.getresponse()
    data = res.read()
    conn.close()
    return json.loads(data.decode("utf-8"))["access_token"]


def get_gamer_jwt_token():
    conn = http.client.HTTPSConnection(
        "jordan-flask-authentication-practice.auth0.com")
    payload = json.dumps({
      "client_id": os.environ["AUTH0_GAMER_M2M_CLIENT_ID"],
      "client_secret":
      os.environ["AUTH0_GAMER_M2M_CLIENT_SECRET"],
      "audience": os.environ["AUTH0_API_AUDIENCE"],
      "grant_type": "client_credentials"
    })
    headers = {'content-type': "application/json"}
    conn.request("POST", "/oauth/token", payload, headers)
    res = conn.getresponse()
    data = res.read()
    conn.close()
    return json.loads(data.decode("utf-8"))["access_token"]

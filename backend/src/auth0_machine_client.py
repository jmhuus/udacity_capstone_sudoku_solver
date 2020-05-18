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


def get_admin_jwt_token():
    conn = http.client.HTTPSConnection("jordan-flask-authentication-practice.auth0.com")
    payload = "{\"client_id\":\"yTRW0CYiuMO1hjlvw06OhH7AxbWDnMKY\",\"client_secret\":\"OvyJYUteenQPL8gsBbbC6ksQSbtG_Yjp4Pv6BjpKjVDDHM3IDv960XojImLDTOrd\",\"audience\":\"sudoku-api\",\"grant_type\":\"client_credentials\"}"
    headers = { 'content-type': "application/json" }
    conn.request("POST", "/oauth/token", payload, headers)
    res = conn.getresponse()
    data = res.read()
    conn.close()
    return json.loads(data.decode("utf-8"))["access_token"]


def get_gamer_jwt_token():
    conn = http.client.HTTPSConnection("jordan-flask-authentication-practice.auth0.com")
    payload = "{\"client_id\":\"a5RyVox4oYemxRJHNvKslJ7uvLTigiQu\",\"client_secret\":\"Q1D-UbCA1gJYD17GGFfm54bypM7CqHclpxPxgw04bIzy_9aO5AlMPxms57CKN3L5\",\"audience\":\"sudoku-api\",\"grant_type\":\"client_credentials\"}"
    headers = { 'content-type': "application/json" }
    conn.request("POST", "/oauth/token", payload, headers)
    res = conn.getresponse()
    data = res.read()
    conn.close()
    return json.loads(data.decode("utf-8"))["access_token"]

#!/bin/bash

# Admin
export AUTH0_ADMIN_M2M_CLIENT_ID="yTRW0CYiuMO1hjlvw06OhH7AxbWDnMKY"
export AUTH0_ADMIN_M2M_CLIENT_SECRET="OvyJYUteenQPL8gsBbbC6ksQSbtG_Yjp4Pv6BjpKjVDDHM3IDv960XojImLDTOrd"

# Gamer
export AUTH0_GAMER_M2M_CLIENT_ID="a5RyVox4oYemxRJHNvKslJ7uvLTigiQu"
export AUTH0_GAMER_M2M_CLIENT_SECRET="Q1D-UbCA1gJYD17GGFfm54bypM7CqHclpxPxgw04bIzy_9aO5AlMPxms57CKN3L5"

# General Auth0 Details
export AUTH0_APP_DOMAIN_NAME="jordan-flask-authentication-practice.auth0.com"
export AUTH0_API_AUDIENCE="sudoku-api"

# Run the application
python api_test.py

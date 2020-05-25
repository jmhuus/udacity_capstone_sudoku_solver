import os
import json

payload = json.dumps({
  "client_id": os.environ["AUTH0_ADMIN_M2M_CLIENT_ID"],
  "client_secret":
  os.environ["AUTH0_ADMIN_M2M_CLIENT_SECRET"],
  "audience": os.environ["AUTH0_API_AUDIENCE"],
  "grant_type": "client_credentials"
})


print(type(payload))

import requests

# Vul je eigen client_id en client_secret in
client_id = '782uvjphfp5clg'
client_secret = 'WPL_AP1.B4fzOf5PHewEoVPp.IXSJxg=='

# Endpoint voor het verkrijgen van een access token
token_url = 'https://www.linkedin.com/oauth/v2/accessToken'

# Parameters voor de aanvraag
payload = {
    'grant_type': 'client_credentials',
    'client_id': client_id,
    'client_secret': client_secret
}

# Voer de aanvraag uit
response = requests.post(token_url, data=payload)

# Controleer het antwoord
if response.status_code == 200:
    access_token = response.json().get('access_token')
    print(f"Access Token: {access_token}")
else:
    print(f"Error: {response.json()}")

# Vul je eigen access_token en organization_id in
#access_token = 'YOUR_ACCESS_TOKEN'
'''organization_id = '9257266'

# Endpoint voor het ophalen van shares
url = f'https://api.linkedin.com/v2/shares?q=owners&owners=urn:li:organization:{organization_id}'

# Headers voor de API-aanroep
headers = {
    'Authorization': f'Bearer {access_token}',
    'X-Restli-Protocol-Version': '2.0.0'
}

# Voer de aanvraag uit
response = requests.get(url, headers=headers)

# Controleer het antwoord
if response.status_code == 200:
    shares = response.json()
    print("Shares:", shares)
else:
    print(f"Error: {response.status_code} - {response.text}")'''

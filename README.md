# Start server

## version json-server 1.0.0 and above

npx json-server --watch server/db.json --port 3000

## version json-server up to ^0.17.4

npx json-server --watch server/db.json --routes server/routes.json --port 3000

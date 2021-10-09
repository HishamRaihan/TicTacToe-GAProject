#!/bin/bash

curl --include --request POST "https://tic-tac-toe-api-development.herokuapp.com/games" \
    --header "Content-type: application/json" \
     --header "Authorization: Bearer ${TOKEN}" \

# print a new line , so th ebash propmt is on its own line
echo

# TOKEN=2b50c85f4122cae0659facbf1ea319ae  sh curl-scripts/games/create-game.sh

#!/bin/bash

curl --include --request POST "https://tic-tac-toe-api-development.herokuapp.com/games" \
    --header "Content-type: application/json" \
     --header "Authorization: Bearer ${TOKEN}" \

   # --data '{
    #     "game": {
    #       "cells": ["","","","","","","","",""],
    #       "over": false,
    #       "_id": "5e823ba98929cc4e95e2f5d9",
    #       "owner": "5e82311c8929cc4e95e2f5d8",
    #       "createdAt": "2020-03-30T18:34:17.772Z",
    #       "updatedAt": "2020-03-30T18:34:17.772Z",
    #       "__v": 0
    #     }
    #   }
# print a new line , so th ebash propmt is on its own line

echo

# TOKEN=2b50c85f4122cae0659facbf1ea319ae  sh curl-scripts/games/create-game.sh

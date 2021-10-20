# $ TOKEN=6ffca35d4d8db043e3f0b95ab718828a sh curl-scripts/auth/sign-out.sh

curl "https://tic-tac-toe-api-production.herokuapp.com/sign-out" \
   --include \
  --request DELETE \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
echo

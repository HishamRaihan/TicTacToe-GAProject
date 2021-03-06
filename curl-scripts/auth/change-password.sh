# Run the sign-in script first
#  EMAIL=h@example.com PASSWORD=123 sh curl-scripts/auth/sign-in.sh

# VARIABLE=VALUE sh curl-scripts/auth/change-password.sh
# TOKEN=2b50c85f4122cae0659facbf1ea319ae OLD_PW=123 NEW_PW=hhh sh curl-scripts/auth/change-password.sh

curl "https://tic-tac-toe-api-production.herokuapp.com/change-password" \
  --include \
  --request PATCH \
  --header "Content-Type: application/json" \
  --header "Authorization: Bearer ${TOKEN}" \
  --data '{
    "passwords":{
      "old" : "'"${OLD_PW}"'",
      "new" : "'"${NEW_PW}"'"
    }
  }'

echo
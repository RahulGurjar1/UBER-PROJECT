## /users/register

### Method
POST

### Description
Registers a new user.

### Request Body
- fullname: { firstname: string, lastname: string }
- email: string
- password: string

### Status Codes
- 201: Returns a JSON object with token and newly created user
- 400: Invalid request body or validation errors

### Example Response
```json
{
  "token": "example_token_here",
  "user": {
    "fullname":{
        "firstname": "John",
        "lastname": "Doe",
    },
    "email": "john.doe@example.com",
  }
}
```
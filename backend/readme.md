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
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

## /users/login

### Method
POST

### Description
Logs in an existing user.

### Request Body
- email: string
- password: string

### Status Codes
- 200: Returns a JSON object with token and user details
- 400: Invalid request body or validation errors
- 401: Invalid email or password

### Example Response
```json
{
  "token": "example_token_here",
  "user": {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

## /users/profile

### Method
GET

### Description
Gets the profile information of the authenticated user.

### Headers
- Authorization: Bearer {token}

### Status Codes
- 200: Returns user profile data
- 401: Unauthorized (invalid or missing token)

### Example Response
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "_id": "user_id"
}
```

## /users/logout

### Method
GET

### Description
Logs out the currently authenticated user by blacklisting their token.

### Authentication
Requires either:
- Authorization header with Bearer token
- Token in cookies

### Status Codes
- 200: Successfully logged out
- 401: Unauthorized (invalid or missing token)

### Example Response
```json
{
  "message": "Logged out successfully"
}
```


# Captain Endpoints

## /captains/register

### Method
POST

### Description
Registers a new captain with vehicle details.

### Request Body
- fullname: 
  - firstname: string (min 3 characters)
  - lastname: string (min 3 characters)
- email: string (valid email format)
- password: string (min 6 characters)
- vehicle:
  - color: string (min 3 characters)
  - plate: string (min 3 characters)
  - capacity: number (min 1)
  - vehicleType: string (enum: 'car', 'motorcycle', 'auto')

### Status Codes
- 201: Returns a JSON object with token and newly created captain
- 400: Invalid request body or validation errors

### Example Request
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.captain@example.com",
  "password": "password123",
  "vehicle": {
    "color": "Black",
    "plate": "ABC-123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```
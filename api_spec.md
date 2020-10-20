# API Spec

## Design Pattern
- Controller
- Service
- Repository
- Entity

`Controller -> Service -> Repository -> Entity`

## Get Post
### Request
- Method: `GET`
- Endpoint: `/api/v1/posts/{id}`
- Header:
  - Content-Type: `application/json`

### Response
```json
{
    "code": "number",
    "status": "string",
    "data": {
        "id": "uint, unique, pk",
        "title": "string",
        "slug": "string",
        "body": "text",
        "createdAt": "date",
        "updatedAt": "date"
    }
}
```

## Create Post
### Request
- Method: `POST`
- Endpoint: `/api/v1/posts`
- Header:
  - Content-Type: `application/json`
  - Accept: `application/json`
- Body:
    ```json
    {
        "title": "string",
        "body": "text"
    }
    ```

### Response
```json
{
    "code": "number",
    "status": "string",
    "data": {
        "id": "uint, unique, pk",
        "title": "string",
        "slug": "string",
        "body": "text",
        "createdAt": "date",
        "updatedAt": "date"
    } 
}
```
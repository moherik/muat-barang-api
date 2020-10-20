# Muat Barang - API Spec

## Create Packet
### Request:
- Method: `POST`
- Endpoint: `api/v1/packets`
- Header:
    - Accept: `application/json`
    - Content-Type: `application/json`
- Body:
    ```json
    {
        "user_id": "uint64",
        "packet": {
            "image": "string",
            "type": "string",
            "desc": "string",
        },
        "pick": {
            "sender_name": "string",
            "sender_phone": "string",
            "location": {
                "city": "string",
                "address": "string",
                "lat_long": "string",
                "detail": "string"
             },
        },
        "delivery": {
            "type": "string",
            "receiver_name": "string",
            "receiver_phone": "string",
            "locations": [
                {
                    "city": "string",
                    "address": "string",
                    "lat_long": "string",
                    "detail": "string"
                },
                {
                    "city": "string",
                    "address": "string",
                    "lat_long": "string",
                    "detail": "string"
                }
            ]
        }
    }
    ```

### Response:
```json
{
    "code": "uint16",
    "status": "string",
    "data": {
        "id": "uint64",
        "status": "string",
        "created_at": "time",
        "updated_at": "time",
    }
}
```
export const schema = {
    "models": {
        "Vessel": {
            "name": "Vessel",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "IMO": {
                    "name": "IMO",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "MMSI": {
                    "name": "MMSI",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "SHIPNAME": {
                    "name": "SHIPNAME",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "FLAG": {
                    "name": "FLAG",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "MARKET": {
                    "name": "MARKET",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "TYPE_NAME": {
                    "name": "TYPE_NAME",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "LAT": {
                    "name": "LAT",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "LON": {
                    "name": "LON",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "LAST_PORT": {
                    "name": "LAST_PORT",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "CURRENT_PORT": {
                    "name": "CURRENT_PORT",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "NEXT_PORT": {
                    "name": "NEXT_PORT",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "NEXT_PORT_NAME": {
                    "name": "NEXT_PORT_NAME",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "DISTANCE_TO_GO": {
                    "name": "DISTANCE_TO_GO",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "DUSTANCE_TRAVELLED": {
                    "name": "DUSTANCE_TRAVELLED",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "SPEED": {
                    "name": "SPEED",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "AVG_SPEED": {
                    "name": "AVG_SPEED",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "MAX_SPEED": {
                    "name": "MAX_SPEED",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "Vessels",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "aws_api_key",
                    "properties": {}
                },
                {
                    "type": "aws_cognito_user_pools",
                    "properties": {}
                },
                {
                    "type": "aws_iam",
                    "properties": {}
                },
                {
                    "type": "aws_lambda",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {},
    "codegenVersion": "3.4.4",
    "version": "945d3c5a4d4093c1ed94ee9abd6ff261"
};
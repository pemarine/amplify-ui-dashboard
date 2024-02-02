export type AmplifyDependentResourcesAttributes = {
  "api": {
    "amplifyDashboard": {
      "GraphQLAPIEndpointOutput": "string",
      "GraphQLAPIIdOutput": "string",
      "GraphQLAPIKeyOutput": "string"
    }
  },
  "auth": {
    "amplifyDashboard": {
      "AppClientID": "string",
      "AppClientIDWeb": "string",
      "IdentityPoolId": "string",
      "IdentityPoolName": "string",
      "UserPoolArn": "string",
      "UserPoolId": "string",
      "UserPoolName": "string"
    },
    "userPoolGroups": {
      "userPoolsGroupRole": "string"
    }
  },
  "function": {
    "S3Trigger98cc7fd7": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    },
    "amplifydashboardVesselFunctions": {
      "Arn": "string"
    },
    "updateVesselMarineTraffic": {
      "Arn": "string",
      "LambdaExecutionRole": "string",
      "LambdaExecutionRoleArn": "string",
      "Name": "string",
      "Region": "string"
    }
  },
  "storage": {
    "amplifyDashboardStorage": {
      "BucketName": "string",
      "Region": "string"
    }
  }
}
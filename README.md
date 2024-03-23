## Description
The provided code is a Node.js Express router module that implements CRUD (Create, Read, Update, Delete) operations for managing data entries through HTTP endpoints. It includes Swagger documentation to describe these endpoints.

## Swagger Documentation:

Swagger is integrated to document the API endpoints. The documentation includes details such as summaries, request bodies, parameters, and responses for each endpoint.

[Link](https://scalex-finance-assignment-production.up.railway.app/api-docs/)

## Technologies Used:
Express: A web application framework for Node.js used to handle routing and middleware.

Swagger: A tool for documenting and testing APIs.

## API Reference

#### Create Data

```http
  POST /data
```

#### Update Data

```http
  PUT /data
```
#### Retrive all 

```http
  GET /data
```
#### Retrive one single entry

```http
  PUT /data/:id
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |



#### Delete

```http
  DELETE /data/:id
```




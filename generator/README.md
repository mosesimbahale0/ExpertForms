

# Expert Forms Spring Service

A Spring Boot application integrated with MongoDB for managing posts. This project includes Docker support for containerization.

---

## Features
- CRUD operations for posts etc...
- MongoDB as the database.
- Dockerized for easy deployment.

---

## Prerequisites
- Java 17+
- Maven 3+
- Docker (optional for containerization)

---

## Run Without Container

1. **Create a `.env` File**  
   Add the MongoDB URI to the `.env` file at the root of the project:
   ```env
   SPRING_DATA_MONGODB_URI=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/<database>?retryWrites=true&w=majority

2. Open with Intellij and click run   
   


# Build docker image

# ./gradlew build

# navigate to roo of the project with Dockerfile
`docker build -t expert-forms-spring-service .`


# Run as acontainer
`docker run -e SPRING_DATA_MONGODB_URI="mongodb+srv://mosesimbahale0:laura@cluster0.zx9ga.mongodb.net/ExpertForms?retryWrites=true&w=majority&appName=Cluster0" -p 9000:9000 expert-forms-spring-service`


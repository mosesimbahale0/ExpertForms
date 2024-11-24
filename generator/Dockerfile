# Use an official OpenJDK runtime as a parent image
FROM openjdk:17-jdk-slim

# Set the working directory in the container
WORKDIR /app

# Copy the Spring Boot JAR file into the container
COPY build/libs/*.jar app.jar

# Expose the application port (optional, but useful for documentation)
EXPOSE 9000

# Run the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]

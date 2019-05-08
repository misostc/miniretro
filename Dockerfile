FROM maven:3-jdk-11 AS builder

COPY pom.xml /usr/src/mymaven/
COPY ./src/main/app/*.json /usr/src/mymaven/src/main/app/
WORKDIR /usr/src/mymaven
RUN mvn -B  verify clean --fail-never

ADD . /usr/src/mymaven
RUN mvn -B install

FROM openjdk:11-jre
VOLUME /tmp
COPY --from=builder /usr/src/mymaven/target/miniretro-*.jar app.jar
ENTRYPOINT ["java","-Djava.security.egd=file:/dev/./urandom","-jar","/app.jar"]
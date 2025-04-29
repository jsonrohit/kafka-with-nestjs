## Kafka with Nestjs 
In this project i have integrated kafka. and you can check how its work.

## Project setup
1. Clone the repository.

2. Run the following command in your terminal:

```bash
npm install
```

## Download Apache Kafka & ZooKeeper
Download the required binaries:

Download liks:
1.  Apche kafka https://www.apache.org/dyn/closer.cgi?path=/kafka/4.0.0/kafka_2.13-3.6.2.tgz
2.  Apache ZooKeeper https://www.apache.org/dyn/closer.lua/zookeeper/zookeeper-3.9.3/apache-zookeeper-3.8.4.tar.gz

**Note:-** You may use other versions as needed.

- Unzip both Kafka and ZooKeeper archives into separate folders.

## Start ZooKeeper & Kafka Servers 
**Start ZooKeeper:-**
Navigate to the extracted ZooKeeper folder (e.g., apache-zookeeper-3.8.4-bin) and run:
```bash
bin/zkServer.sh start
```
**Start Kafka:-**
Navigate to the Kafka folder (e.g., kafka_2.13-3.6.2) and run:
```bash
bin/kafka-server-start.sh config/server.properties
```
✅ Both ZooKeeper and Kafka should now be running.

## ✅ Running Application
1. Start the NestJS project with:
```bash
npm run start:dev
```

## Testing Kafka Producer
1. Open the kafka.http file inside the http folder.

2. Send the GET request using Rest Client extension in VS Code.

**Note:-** If you don’t have the extension, you can install it from the VS Code marketplace or use tools like Postman to hit the endpoint.

3. Check the terminal/console output for received Kafka messages.
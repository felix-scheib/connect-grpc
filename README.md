# gRPC-Web with Connect

```shell
protoc -I . \
 --es_out ./client/src \
 --es_opt target=ts \
 --connect-es_out ./client/src \
 --connect-es_opt target=ts \
 ./protobuf/service.proto
```

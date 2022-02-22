FROM golang:rc-alpine3.10 AS builder

WORKDIR $GOPATH/src/fullcycle/desafio-go/

COPY . .

RUN go build -o /go/bin/desafio

FROM scratch

COPY --from=builder /go/bin/desafio /go/bin/desafio

ENTRYPOINT ["/go/bin/desafio"]
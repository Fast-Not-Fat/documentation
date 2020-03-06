---
id: room
title: Room
sidebar_label: Room
---

## Create

| Name   |      Emitter      |  Params |
|----------|---------------|-------|
| `room:create` | client | ❌ |
| `room:create:success` |  server | `roomId` |


## Join

| Name   |      Emitter      |  Params |
|----------|---------------|-------|
| `room:join` |    client   |  ❌ |
| `room:join:success` |    server   | ❌  |
| `room:join:error` |    server   |   { status: `number`, message: `string` } |

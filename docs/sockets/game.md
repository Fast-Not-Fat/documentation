---
id: game
title: Game
sidebar_label: Game
---

### `game:start`
Ask to start a new game when players are ok

- **Flow:** Client ➡️ Server
- **Data:**
```json
null
```

### `game:start:success`
Validation to start a new game

- **Flow:** Server ➡️ Client
- **Data:**
```json
null
```

### `game:start:error`
Error while creating game

- **Flow:** Server ➡️ Client
- **Data:**
```
{
  code: number,
  data: null,
  message: string
}
```


## Router

### `game:router:update`
Update screen type on clients

- **Flow:** Server ➡️ Client
- **Data:**
```
{
    type: round | motion
}
```

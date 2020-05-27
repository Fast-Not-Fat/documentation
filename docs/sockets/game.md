---
id: game
title: Game
sidebar_label: Game
---

Types used for those exchanges

```typescript
enum SceneTypes {
  transition = 'transition',
  round = 'round',
}

enum GameStatus {
  play = 'play',
  pause = 'pause',
}
```

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

### `game:scene-type:update`
Update scene type (between round & transition).

- **Flow:** Server ➡️ Client
- **Data:**
```
{
    type: SceneTypes
}
```

### `game:status:update`
Ask from client to update gma status to 'play' or 'pause'.

- **Flow:** Client ➡️ Server
- **Data:**
```
{
    status: GameStatus
}
```

### `game:status:update:success`
Users can pause the game.

- **Flow:** Server ➡️ Client 
- **Data:**
```
{
    status: GameStatus
}
```

### `game:status:update:error`


- **Flow:** Server ➡️ Client 
- **Data:**
```
{
  code: number,
  data: null,
  message: string
}
```

### `game:end`
End of the game

- **Flow:** Server ➡️ Client
- **Data:**
```
{}
```

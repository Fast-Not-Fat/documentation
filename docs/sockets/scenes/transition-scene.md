---
id: transition-scene
title: TransitionScene
sidebar_label: TransitionScene
---

## Transition lifecycle
### `transition:init`
Initialization of a transition

- **Flow:** Server ➡️ Client
- **Data:** **TBD**
```
{}
```

### `transition:player:ready`
Emit when a player is ready. Once all players will be ready, `transition:start` will be sent.

- **Flow:** Client ➡️ Server
- **Data:**
```
null
```

### `transition:start`
Start transition.

- **Flow:** Server ➡️ Client
- **Data:**
```
null
```

### `transition:ended`
Emit when transition has been done for clients (handle motions delay, interactions delay etc...). This will init a new round if there are remaining life or this will trigger the end of the game if no one remains.

- **Flow:** Client ➡️ Server
- **Data:**
```
null
```

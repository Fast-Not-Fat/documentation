---
id: round-scene
title: RoundScene
sidebar_label: RoundScene
---

Types used for those exchanges

```typescript
enum MemberStatus {
  waiting = 'waiting',
  active = 'active',
  arrived = 'arrived',
}

enum MemberSkins {
  slobbery = 'slobbery',
  lifeguard = 'lifeguard',
  injured = 'injured',
  rebel = 'rebel',
  glasses = 'glasses',
}

type Position = {
  x: number,
  y: number,
}
type Velocity = {
  x: number,
  y: number,
}
type Dimension = {
  width: number;
  height: number;
}

interface Member {
  id: string;
  isDrag: boolean;
  status: MemberStatus;
  skin: MemberSkins;
  manager: PlayerId,
  dimensions: Dimension,
  position: Position,
  velocity: Velocity,
}
```

## Round lifecycle
### `round:init`
Send all necessary data to all players to init round on screens.

- **Flow:** Server ➡️ Client
- **Data:**
```
{
    id: number
    world: 'jungle' | 'river' | 'desert' | 'mountain'
    duration: number (ms)
    roles: {
        [playerId: string]: {
            type: 'trap' | 'platform' | 'blank',
            properties: { interval: number } | null | null
        }
        ...
    }
}
```

### `round:player:ready`
Emit when a player is ready. Once all players will be ready, `round:start` will be sent.

- **Flow:** Client ➡️ Server
- **Data:**
```
null
```

### `round:start`
Start round & timer.

- **Flow:** Server ➡️ Client
- **Data:**
```
null
```

### `round:tick`
This event is send each tick of the round and contain all realtime data.

- **Flow:** Server ➡️ Client
- **Data:**
```
{
​	members: {
    ​	"memberId1": Member,
    ​	"memberId2": Member,
    ​	"memberId3": Member,
    ​	"memberId4": Member,
    ​	"memberId5": Member,
    ​	"memberId6": Member,   
    }
}
```

### `round:fail`
To announce that players failed to accomplish the round. If players have remaining life, it will trigger a `game:router:update` to show a motion.

If they don't have any available life, it will trigger a `game:router:update` to show an ending motion & a `game:end`.

- **Flow:** Server ➡️ Client
- **Data:**
```
{
    // TODO: Type
}           
```

### `round:success`
To announce that player accomplished the round. It will trigger a `game:router:update` to show a motion.

- **Flow:** Server ➡️ Client
- **Data:**
```
{
    // TODO: Type
}
```


## Member lifecycle
### `round:member:spawned`
Emitted when a member spawns.

- **Flow:** Client ➡️ Server
- **Data:**
```
{
    memberId: string
}           
```

### `round:member:drag:start`
Emitted when a player starts dragging a member.

- **Flow:** Client ➡️ Server
- **Data:**
```
{
    memberId: string
}
```

### `round:member:drag:end`
Emitted when a player stops dragging a member.

- **Flow:** Client ➡️ Server
- **Data:**
```
{
    memberId: string
}
```

### `round:member:move`
Emitted when a member is moving (drag or drop).

- **Flow:** Client ➡️ Server
- **Data:**
```
{
    memberId: string,
    x: number,
    y: number,
}
```

### `round:member:trapped`
Emitted when a member collides a trap.

- **Flow:** Client ➡️ Server
- **Data:**
```
{
    memberId: string
}           
```

### `round:member:dropped`
Emitted when a member is being drop and touched the bottom of the game area.

- **Flow:** Client ➡️ Server
- **Data:**
```
{
    memberId: string
}
```

### `round:member:arrived`
Emitted when a member has be placed into the arrival platform.

- **Flow:** Client ➡️ Server
- **Data:**
```
{
    memberId: string
}
```

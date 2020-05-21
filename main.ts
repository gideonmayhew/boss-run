namespace SpriteKind {
    export const boss = SpriteKind.create()
    export const bossprjetil = SpriteKind.create()
}
namespace myTiles {
    //% blockIdentity=images._tile
    export const tile0 = img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`
    //% blockIdentity=images._tile
    export const tile1 = img`
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 7 
`
}
sprites.onOverlap(SpriteKind.bossprjetil, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.destroy(effects.disintegrate, 10)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 10)
    bosshellth += -1
    if (bosshellth == 0) {
        game.over(true)
    } else if (bosshellth == 50) {
        time_bettwen_boss_move = 1000
    }
})
function doSomething () {
    bosshellth = 100
    time_betwen_boss_fire = 100
    time_bettwen_boss_move = 2000
    the_boss = sprites.create(img`
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
c c c c c c c c c c c c c c c c c c c c c c c c 
`, SpriteKind.boss)
    the_boss.setPosition(145, 54)
    the_boss.setVelocity(0, 50)
}
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = jump
    }
})
let bime_sinse_lest_boss = 0
let is_boss_ataking = false
let projectile: Sprite = null
let lastfiretime = 0
let the_boss: Sprite = null
let time_betwen_boss_fire = 0
let time_bettwen_boss_move = 0
let bosshellth = 0
let jump = 0
let mySprite: Sprite = null
mySprite = sprites.create(img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, SpriteKind.Player)
tiles.setTilemap(tiles.createTilemap(
            hex`0a0008000000000000000000000000000001010100000000000000000000000000000101000000000000000000000000000000000000000001010100000000000000000000000000000001010101010101010101`,
            img`
. . . . . . . . . . 
. . . 2 2 2 . . . . 
. . . . . . . . . . 
2 2 . . . . . . . . 
. . . . . . . . . . 
. . 2 2 2 . . . . . 
. . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 
`,
            [myTiles.tile0,myTiles.tile1],
            TileScale.Sixteen
        ))
info.setLife(10)
let gravity = 300
jump = 32
let r = 150
let ps = 150
let timebuttwen = 100
jump = 0 - Math.sqrt(2 * (gravity * jump))
mySprite.ay = gravity
controller.moveSprite(mySprite, r, 0)
let pleft = false
doSomething()
game.onUpdateInterval(100, function () {
	
})
game.onUpdate(function () {
    if (mySprite.vx < 0) {
        pleft = true
    } else if (mySprite.vx > 0) {
        pleft = false
    }
    if (controller.B.isPressed()) {
        if (game.runtime() > lastfiretime + timebuttwen) {
            if (pleft) {
                projectile = sprites.createProjectileFromSprite(img`
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
`, mySprite, 0 - r, 0)
            } else {
                projectile = sprites.createProjectileFromSprite(img`
1 1 1 1 
1 1 1 1 
1 1 1 1 
1 1 1 1 
`, mySprite, r, 0)
            }
            projectile.vx += mySprite.vx
            lastfiretime = game.runtime()
        }
    }
})
game.onUpdate(function () {
    if (is_boss_ataking) {
        if (game.runtime() > bime_sinse_lest_boss + time_betwen_boss_fire) {
            projectile = sprites.createProjectileFromSprite(img`
b b b b 
b b b b 
b b b b 
b b b b 
`, the_boss, -75, 0)
            projectile.setKind(SpriteKind.bossprjetil)
            projectile.y += Math.randomRange(-16, 16)
            bime_sinse_lest_boss = game.runtime()
            if (bosshellth < 40) {
                if (the_boss.isHittingTile(CollisionDirection.Bottom) || the_boss.isHittingTile(CollisionDirection.Top)) {
                    projectile = sprites.createProjectileFromSprite(img`
b b b b 
b b b b 
b b b b 
b b b b 
`, the_boss, -75, 0)
                    projectile.setKind(SpriteKind.bossprjetil)
                    projectile.y += Math.randomRange(-50, 50)
                    bime_sinse_lest_boss = game.runtime()
                }
            }
        }
    }
})
forever(function () {
    if (the_boss.isHittingTile(CollisionDirection.Bottom) || the_boss.isHittingTile(CollisionDirection.Top)) {
        the_boss.setVelocity(0, 0)
        is_boss_ataking = true
        pause(time_bettwen_boss_move)
        is_boss_ataking = false
        if (the_boss.isHittingTile(CollisionDirection.Top)) {
            the_boss.vy = 50
        } else {
            the_boss.vy = -50
        }
        if (bosshellth < 50) {
            if (the_boss.isHittingTile(CollisionDirection.Top)) {
                the_boss.vy = 70
            } else {
                the_boss.vy = -70
            }
        }
        if (bosshellth < 20) {
            if (the_boss.isHittingTile(CollisionDirection.Top)) {
                the_boss.vy = 150
            } else {
                the_boss.vy = -150
            }
        }
    }
    pause(100)
})

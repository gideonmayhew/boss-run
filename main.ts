namespace SpriteKind {
    export const boss = SpriteKind.create()
    export const bossprjetil = SpriteKind.create()
}
sprites.onOverlap(SpriteKind.bossprjetil, SpriteKind.Player, function (sprite, otherSprite) {
    info.changeLifeBy(-1)
    sprite.destroy(effects.disintegrate, 10)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (mySprite.isHittingTile(CollisionDirection.Bottom)) {
        mySprite.vy = jump
    }
})
function doSomething () {
    bosshellth = 100
    time_betwen_boss_fire = 100
    time_bettwen_boss_move = 2000
    the_boss = sprites.create(img`
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        cccccccccccccccccccccccc
        `, SpriteKind.boss)
    the_boss.setPosition(145, 54)
    the_boss.setVelocity(0, 50)
}
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.boss, function (sprite, otherSprite) {
    sprite.destroy(effects.disintegrate, 10)
    bosshellth += -1
    if (bosshellth == 0) {
        game.over(true)
    } else if (bosshellth == 50) {
        time_bettwen_boss_move = 1000
    }
})
let bime_sinse_lest_boss = 0
let is_boss_ataking = false
let projectile: Sprite = null
let lastfiretime = 0
let the_boss: Sprite = null
let time_bettwen_boss_move = 0
let time_betwen_boss_fire = 0
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
tiles.setTilemap(tiles.createTilemap(hex`3c000800000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000001010100000000000000000000000000000000000000000000000000000000000000000000000000000000000200000000000002000000000000000000000000000000000000000101000000000000020000000000020000000000000100000000000000000000000000000000000000000000000001010000020000000200000000000000000000000000000000000000000000000000010000000000000200000000000000010100000000000101000000000000000000000000010101000000000000010100000000010100000000000000000000000000000000000000000000000000000000000000000000000101010000000000000000000000000000000000000000000000000000000001010100000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101010101`, img`
    ............................................................
    .................222........................................
    ............................22...................2..........
    ..............22................................2...........
    ...22.....22............222......22....22...................
    ................222............................222..........
    .......2....................................................
    222222222222222222222222222222222222222222222222222222222222
    `, [myTiles.tile0,myTiles.tile1,myTiles.tile2], TileScale.Sixteen))
scene.cameraFollowSprite(mySprite)
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
                `, the_boss, 75, 0)
            the_boss.setFlag(SpriteFlag.AutoDestroy, false)
            projectile.setFlag(SpriteFlag.AutoDestroy, false)
            projectile.setKind(SpriteKind.bossprjetil)
            projectile.y += randint(-10, 10)
            bime_sinse_lest_boss = game.runtime()
            if (bosshellth < 150) {
                if (the_boss.isHittingTile(CollisionDirection.Bottom) || the_boss.isHittingTile(CollisionDirection.Top)) {
                    projectile = sprites.createProjectileFromSprite(img`
                        b b b b 
                        b b b b 
                        b b b b 
                        b b b b 
                        `, the_boss, -75, 0)
                    projectile.ax += 50
                    projectile.ax += -50
                    the_boss.setFlag(SpriteFlag.AutoDestroy, false)
                    projectile.setFlag(SpriteFlag.AutoDestroy, false)
                    projectile.setKind(SpriteKind.bossprjetil)
                    projectile.y += randint(-50, 50)
                    bime_sinse_lest_boss = game.runtime()
                }
            }
        }
    }
})
forever(function () {
    pause(5000)
    tiles.placeOnRandomTile(the_boss, myTiles.tile2)
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
game.onUpdateInterval(100, function () {
	
})

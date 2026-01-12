// Spaceship prefab
class Spaceship extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame, pointvalue) {
        super(scene, x, y, texture, frame)
        scene.add.existing(this)    // add to existing scene
        this.points = pointvalue    // store pointValue
        this.moveSpeed = 3          // spaceship speed in pixels/frame
    }

    update() {
        // move spaceship left
        this.x -= this.moveSpeed
        
        // wrap from left to right edge
        if(this.x <= 0 - this.width) {
            this.x = game.config.width
        }
    }
}
import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
  constructor () {
    super('game')
  }

  iter = 0


  preload () {
    this.load.image('1', 'assets/donut1.webp')
    this.load.image('2', 'assets/donut2.webp')
    this.load.image('3', 'assets/donut3.webp')
    this.load.image('4', 'assets/donut4.webp')
    this.load.image('5', 'assets/donut5.webp')
    this.load.image('6', 'assets/donut6.webp')
    this.load.image('7', 'assets/donut7.webp')
    this.load.image('8', 'assets/donut8.webp')
    this.load.image('9', 'assets/donut9.webp')
    this.load.image('10', 'assets/donut10.webp')
    this.load.image('11', 'assets/donut11.webp')
    this.load.image('none', 'assets/none.webp')
    this.load.image('background', 'assets/background.webp')
    this.load.audio('pop', 'assets/pop.mp3')
  }

  create () {
    this.pop = this.sound.add('pop')
    this.matter.world.setBounds(0, 0, 768, 1000, 32, true, true, false, true)
    this.background = this.add.tileSprite(window.innerWidth / 2, 600, 0, 0, 'background').setScale(0.95)

    this.input.on('pointerdown', function (pointer) {
      this.matter.add.sprite(pointer.x, pointer.y, Phaser.Math.Between(1, 5)).setCircle()
    }, this)

    this.matter.world.on('collisionstart', (event, bodyA, bodyB) => {
      if ((bodyA.mass === bodyB.mass)) {
        console.log(bodyA)
        let textureid
        if (bodyA.gameObject.texture.key < 9) {
          textureid = +bodyA.gameObject.texture.key + 1
          console.log(textureid)
        } else {
          textureid = 9
        }
        this.matter.add.sprite(bodyA.position.x, bodyA.position.y, textureid).setCircle()
        bodyA.gameObject.setTexture('none')
        bodyB.gameObject.setTexture('none')
        bodyA.destroy()
        bodyB.destroy()
        this.pop.play()
      }
    })
  }

  update () {
    this.background.tilePositionX = Math.fround(this.iter) * 200
    this.iter += 0.0003
  }
}

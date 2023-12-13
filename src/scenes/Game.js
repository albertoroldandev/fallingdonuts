import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
  constructor () {
    super('game')
  }

  iter = 0
  score = 0

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
    this.currentDonut = 1

    this.matter.world.setBounds(0, 0, 768, 1000, 32, true, true, false, true)
    this.background = this.add.tileSprite(window.innerWidth / 2, 600, 0, 0, 'background').setScale(0.95)
    this.pop = this.sound.add('pop')
    const style = { color: '#FFF', fontSize: 36, fontStyle: 'bold', fontFamily: 'Georgia' }
    this.scoreText = this.add.text(30, 30, 'Score: 0', style)
    this.nextDonutText = this.add.text(440, 30, 'Next Donut:', style)
    this.nextDonutImage = this.add.image(720, 52, this.currentDonut)
    this.nextDonutImage.displayHeight = 40
    this.nextDonutImage.displayWidth = 40
    this.endLine = this.add.rectangle(0, 110, 1540, 4, 0xFFFFFF)

    this.input.on('pointerdown', function (pointer) {
      this.matter.add.sprite(pointer.x, pointer.y, this.currentDonut).setCircle()
      this.currentDonut = Phaser.Math.Between(1, 5)
      this.nextDonutImage.setTexture(this.currentDonut)
      this.nextDonutImage.displayHeight = 40
      this.nextDonutImage.displayWidth = 40
    }, this)

    this.matter.world.on('collisionstart', (event, bodyA, bodyB) => {
      if ((bodyA.label === bodyB.label) && (bodyA.gameObject.texture.key === bodyB.gameObject.texture.key)) {
        let textureid = 0
        if (bodyB.gameObject.texture.key < 11) {
          textureid = +bodyB.gameObject.texture.key + 1
          console.log(textureid)
        } else {
          textureid = 11
        }
        this.matter.add.sprite(bodyB.position.x, bodyB.position.y - 10, textureid).setCircle()
        this.score += (textureid * 5)
        const value = `Score: ${this.score}`
        this.scoreText.text = value
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

import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
  constructor () {
    super('game')
  }

  preload () {
    this.load.image('donut1', 'assets/donut1.webp')
    this.load.image('donut2', 'assets/donut2.webp')
    this.load.image('donut3', 'assets/donut3.webp')
    this.load.image('donut4', 'assets/donut4.webp')
    this.load.image('donut5', 'assets/donut5.webp')
    this.load.image('donut6', 'assets/donut6.webp')
    this.load.image('donut7', 'assets/donut7.webp')
    this.load.image('donut8', 'assets/donut8.webp')
    this.load.image('donut9', 'assets/donut9.webp')
    this.load.image('donut10', 'assets/donut10.webp')
    this.load.image('donut11', 'assets/donut11.webp')
  }

  create () {
    this.matter.world.setBounds(0, 0, 768, 1024, 32, true, true, false, true)

    const donuts = ['donut1', 'donut2', 'donut3', 'donut4', 'donut5']

    this.input.on('pointerdown', function (pointer) {
      this.matter.add.image(pointer.x, pointer.y, Phaser.Utils.Array.GetRandom(donuts)).setCircle()
    }, this)
  }
}

import Phaser from 'phaser'

export default class Game extends Phaser.Scene {
  constructor () {
    super('title')
  }

  preload () {
    this.load.image('logo', 'assets/logo.webp')
  }

  create () {
    this.add.image(320, 426, 'logo').setScale(0.6)
  }
}

import './style.css'
import Phaser from 'phaser'
import Game from './scenes/Game'
import Title from './scenes/Title'

const config = {
  type: Phaser.WEBGL,
  width: 768,
  height: 1024,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH
  },
  canvas: document.getElementById('gameCanvas'),
  backgroundColor: '#FFFFFF',
  scene: Game,
  physics: {
    default: 'matter',
    matter: {
      enableSleeping: true
    }
  }
}

export default new Phaser.Game(config)

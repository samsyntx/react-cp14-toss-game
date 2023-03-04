import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHead: true, totalRes: 0, headRes: 0, tailRes: 0}

  clickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
  }

  render() {
    const {displayTossNum} = this.state
    let imgSrc = ''
    let headRes = 0
    let tailRes = 0
    let totalRes = 0
    if (displayTossNum === 0) {
      imgSrc = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      headRes += 1
      totalRes += 1
    } else {
      imgSrc = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'
      tailRes += 1
      totalRes += 1
    }

    return (
      <div className="main-container-bg">
        <div className="coin-toss-bg-container">
          <h1 className="coin-toss-game-heading">Coin Toss Game</h1>
          <p className="coin-toss-game-paragraph">Heads (or) Tails</p>
          <div className="head-tail-image">
            <img className="head-tail-img" src={imgSrc} alt="head" />
          </div>
          <button
            onClick={this.clickTossButton}
            className="head-tail-button"
            type="button"
          >
            Toss Coin
          </button>
          <div className="toss-score-result-container">
            <p>Total: {totalRes}</p>
            <p>Heads: {headRes}</p>
            <p>Tails: {tailRes}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss

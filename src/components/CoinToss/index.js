import {Component} from 'react'
import './index.css'

class CoinToss extends Component {
  state = {isHead: true, totalRes: 0, headRes: 0, tailRes: 0}

  clickTossButton = () => {
    const tossResult = Math.floor(Math.random() * 2)
    if (tossResult === 0) {
      this.setState(prevState => ({
        isHead: true,
        totalRes: prevState.totalRes + 1,
        headRes: prevState.headRes + 1,
      }))
    } else {
      this.setState(prevState => ({
        isHead: false,
        totalRes: prevState.totalRes + 1,
        tailRes: prevState.tailRes + 1,
      }))
    }
  }

  render() {
    const {isHead, totalRes, headRes, tailRes} = this.state

    const tossImgSrc = isHead
      ? 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
      : 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

    return (
      <div className="main-container-bg">
        <div className="coin-toss-bg-container">
          <h1 className="coin-toss-game-heading">Coin Toss Game</h1>
          <p className="coin-toss-game-paragraph">Heads (or) Tails</p>
          <div className="head-tail-image">
            <img className="head-tail-img" src={tossImgSrc} alt="toss result" />
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

// Write your code here
import {Component} from 'react'
import './index.css'
import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}

  onWithDraw = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }

  render() {
    const {amount} = this.state
    const {denominationsList} = this.props
    const name = 'Sarah Williams'
    const initial = name.slice(0, 1)

    return (
      <div className="app-container">
        <div className="card-container">
          <div className="name-container">
            <h1 className="logo">{initial}</h1>
            <h1 className="name">{name}</h1>
          </div>
          <div className="amount-container">
            <p className="your-bal">Your Balance</p>
            <div>
              <p className="amount">{amount}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="withdraw-des">CHOOSE SUM (IN RUPEES)</p>
          <ul className="denominations-container">
            {denominationsList.map(each => (
              <DenominationItem
                onWithDraw={this.onWithDraw}
                denominationDetails={each}
                key={each.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal

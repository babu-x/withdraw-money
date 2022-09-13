// Write your code here
import './index.css'

const DenominationItem = props => {
  const {denominationDetails, onWithDraw} = props
  const {value} = denominationDetails

  const onWithDrawAmount = () => {
    onWithDraw(value)
  }

  return (
    <li className="list-item-container">
      <button type="button" className="button" onClick={onWithDrawAmount}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem

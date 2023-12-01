import "./Header.scss"

const Header = ({btn}) => {
  return (
    <header>
        <h1>Products List</h1>
        <div className="buttons">
            {btn.map((item, index) => (
                <button key={index}>{item.toUpperCase()}</button>
            ))}
        </div>
    </header>
  )
}

export default Header

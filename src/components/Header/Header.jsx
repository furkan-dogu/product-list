import "./Header.scss"

const Header = () => {
    const btn = ["ALL", "ELECTRONICS", "JEWELERY", "MEN'S CLOTHING", "WOMEN'S CLOTHING"]
  return (
    <header>
        <h1>Products List</h1>
        <div className="buttons">
            {btn.map((item) => (
                <button>{item}</button>
            ))}
        </div>
    </header>
  )
}

export default Header
const Form =() => {
    return(
        <form action='get' >
            <input type="text" name='firstName' placeholder="First Name"/>
            <input type="text" name='lastName' placeholder="Last Name"/>
            <input type="text" name='age' placeholder="Age"/>
            <div>
            <input type="radio" name='gender' value="male"/>Male
            <input type="radio" name='gender' value="female"/>Female
            </div>
            <h4>Select your destination</h4>
            <select name="destination">
            <option value="">-- Choose a destination --</option>
            <option value="Israel">Israel</option>
            <option value="Ukraine">Ukraine</option>
            <option value="USA">USA</option>
            </select>
            <div>
            <h4>Dietary restrictions:</h4>
            <input type="checkbox" name='nutsFree' />Nuts free
            <input type="checkbox" name='lactoseFree' />Lactose free
            <input type="checkbox" name='vegan' />Vegan
            </div>
            <button type="submit">Submit</button>
      </form>
    )
}

export default Form
const getData = async () => {
    const response = await fetch("http://localhost:3000/users");
    const result = await response.json();
    console.log(result)

    const root = document.querySelector("#root>h1")
    root.textContent = `Wellcome, ${result.firstname} ${result.lastname}!!!`
}
getData()
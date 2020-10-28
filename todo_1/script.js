let itemsList = []

const addItem = () => {
    const item = document.querySelector("input[name='item']").value
    if (item !== "" && !itemsList.includes(item)) {
        itemsList.push(item)
        renderList()
    }
}

const removeItem = (index) => {
    itemsList = itemsList.filter((item) =>
        item !== itemsList[index]
    )
    renderList()
}

const renderList = () => {
    document.querySelector("#taskCount").textContent = itemsList.length.toString()
    let itemDivs = ""
    itemsList.reverse().forEach((item, index) => {
        itemDivs +=
            "<div class=\"item\">" +
            "   <div class='itemText'>" + item + "</div>" +
            "   <button onclick='removeItem(" + index + ")'>\n" +
            "      <img src='images/cancel.png'/>\n" +
            "   </button>" +
            "</div>"
    })
    document.querySelector("#itemList").innerHTML = itemDivs
}
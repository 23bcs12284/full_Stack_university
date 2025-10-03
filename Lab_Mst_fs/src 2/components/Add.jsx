import './Add.css'

function Add() {
  function handle() {
    const val = document.getElementById("add-item").value;
    if (val === "") {
      alert("Please enter a valid item");
      return;
    }

    const list = document.querySelector(".list");
    const item = document.createElement("div");
    item.className = "item";

    const text = document.createTextNode(val);
    item.appendChild(text);

  
    const btn = document.createElement("button");
    btn.innerText = "Remove";
    btn.onclick = function () {
      list.removeChild(item);
    };
    item.appendChild(btn);

  
    list.appendChild(item);

    
    document.getElementById("add-item").value = "";
  }

  return (
    <div className="add">
      <input type="text" placeholder="Add item" id="add-item" />
      <button onClick={handle}>Add</button>
      <div className="list"></div>
    </div>
  );
}

export default Add;

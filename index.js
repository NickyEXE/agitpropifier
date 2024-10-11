console.log("cheese")

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault()
  const header = e.target.header.value
  const ps = e.target.content.value.split("\n")
  document.body.innerHTML = `<main>
      <div id="pamphlet">
      </div>
    </main>`
  const pamphlet = document.getElementById("pamphlet")
  const h1 = document.createElement("h1")
  h1.innerText = header
  pamphlet.appendChild(h1)
  ps.forEach(p => {
    const ptag = document.createElement("p")
    ptag.innerText = p
    pamphlet.appendChild(ptag)
  })
})

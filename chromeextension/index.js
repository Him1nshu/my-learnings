let myLeads = []
const inputEl = document.getElementById("input-el")
const inputBtn = document.getElementById("input-btn")
const ulEl = document.getElementById("ul-el")


const leadsFromLocalStorage = JSON.parse( localStorage.getItem("myLeads") )
if (leadsFromLocalStorage) {
    myLeads = leadsFromLocalStorage
    render(myLeads)
}

function render(leads) {
        myLeads.push(inputEl.value)
        ulEl.innerHTML += `
            <li>
                <a target='_blank' href='inputEl.value' >
                    ${inputEl.value}
                </a>
            </li>
        `
    inputEl.value = ""
}


// inputBtn.addEventListener("click", function() {
//     myLeads.push(inputEl.value)
//     ulEl.innerHTML += `
//             <li>
//                 <a target='_blank' href='inputEl.value' >
//                     ${inputEl.value}
//                 </a>
//             </li>
//         `
//     inputEl.value = ""
// })


const deleteBtn = document.getElementById("delete-btn")

deleteBtn.addEventListener("dblclick", function() {
    localStorage.clear()
    myLeads = []
    render(myLeads)
})


const tabBtn = document.getElementById("tab-btn")

tabBtn.addEventListener("click", function(){    
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myLeads.push(tabs[0].url)
        localStorage.setItem("myLeads", JSON.stringify(myLeads) )
        render(myLeads)
    })
})

inputBtn.addEventListener("click", function() {
    myLeads.push(inputEl.value)
    inputEl.value = ""
    localStorage.setItem("myLeads", JSON.stringify(myLeads) )
    render(myLeads)
})
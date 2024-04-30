const malhaF = [
    [[],[],[],[],[]],
    [[],[],[],[],[]],
    [[],[],[],[],[]],
    [[],[],[],[],[]]
];

const tableBody = document.getElementById('table-body')

malhaF.forEach((row)=>{
    let tr = document.createElement('tr')

    row.forEach(()=>{
        let td = document.createElement('td');
       
        td.innerHTML=`<td></td>`
       
        tr.appendChild(td)
    })
    tableBody.appendChild(tr)
})

.addEventListener
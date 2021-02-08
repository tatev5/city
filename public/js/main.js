const select = document.getElementById('select');
const p = document.getElementById('p');
const costOfShipping = [];

select.addEventListener('change', handeSelectChange);

fetch('http://localhost:3000/submit/city', {
    method: 'GET'
})
.then(res => res.json())
.then(data => {
    console.log(data);
    data.forEach(d => {
        costOfShipping.push(d)
        createOptions(d);
    })
})
.catch(err => {
    console.error(err.message);
})

function createOptions (opt) {
    const option = document.createElement('option');
    option.innerHTML = opt.startingPoint + ' ' + opt.endPoint;
    select.appendChild(option);
}

function handeSelectChange (ev) {
    for (let i = 0; i < costOfShipping.length; i++) {
        if (ev.target.value === costOfShipping[i].startingPoint + ' ' + costOfShipping[i].endPoint) {
            p.innerHTML = `The cost of cargo transportation from ${costOfShipping[i].startingPoint} to ${costOfShipping[i].endPoint} is ${costOfShipping[i].costOfDelivery}`;
         } 
    } 
}
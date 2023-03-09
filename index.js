let frmJson = [{
    type: 'text',
    id: 'txFName',
    class: 'form-control',
    label: 'First Name',
    validation: 'is-valid'
}, {
    type: 'text',
    id: 'txLName',
    class: 'form-control',
    label: 'Last Name',
    validation: 'is-valid'
}, {
    type: 'textarea',
    id: 'txArea',
    class: 'form-control',
    label: 'Location',
    validation: 'is-valid'
}, {
    type: 'text',
    id: 'txAddress',
    class: 'form-control',
    label: 'Address',
    validation: 'is-valid'
}, {
    type: 'email',
    id: 'inputEmail',
    class: 'form-control',
    label: 'Email',
    validation: 'is-invalid'
}, {
    type: 'password',
    id: 'txPassword',
    class: 'form-control',
    label: 'Password',
    validation: 'is-valid'
}, {
    type: 'date',
    id: 'txtDob',
    class: 'form-control',
    label: 'Date Of Birth'
}, {
    type: 'checkbox',
    id: 'btnCheck',
    class: 'form-check-input',
    label: 'Accept Terms & Condition'
}, {
    type: 'button',
    id: 'btnSave',
    class: 'btn btn-primary',
    label: 'Submit'
}
];

let frmHTML = '';
for (let i = 0; i < frmJson.length; i++) {
    if (frmJson[i].type != 'button') {
        frmHTML = `${frmHTML} 
        <form class="row-md-6">
        <div class="col-md-4 align-items-center">
          <label for="validationServer" class="form-label">${frmJson[i].label}</label>
          <input type="${frmJson[i].type}" class="${frmJson[i].class} ${frmJson[i].validation}" id="validationServer" value="" Required>
          <div class="invalid-feedback">
          Enter Valid Details
          </div>
          <div class="valid-feedback">
          Good 
          </div>
        </div>`;
    } else {
        frmHTML = `${frmHTML}
        <button class="btn btn-primary btn-sm al gap-3" type="${frmJson[i].type}" onclick="onsaveclick()" >${frmJson[i].label}</button> `;
    }
}
document.getElementById('dynamicFrm').innerHTML = frmHTML;
// document.getElementById('jsonForm').innerText = JSON.stringify(frmJson);
function onsaveclick() {
    var frm = {
        firstName: document.getElementById('txFName').value,
        lastName: document.getElementById('txLName').value,
        TxtArea: document.getElementById('txArea').value,
        Address: document.getElementById('txAddress').value,
        Email: document.getElementById('inputEmail').value,
        password: document.getElementById('txPassword').value,
        terms: document.getElementById('btnCheck').checked,
        Date_of_birthday: document.getElementById('txtDob').value
    };
    console.log(frm);
}
let frmJson = [{
    type: 'text',
    id: 'txFName',
    class: 'form-control',
    label: 'First Name'
}, {
    type: 'text',
    id: 'txLName',
    class: 'form-control',
    label: 'Last Name'
}, {
    type: 'email',
    id: 'txEmail',
    class: 'form-control',
    label: 'Email'
},{
    type: 'password',
    id: 'txPassword',
    class: 'form-control',
    label: 'Password'
},{
    type: 'date',
    id: 'txtDob',
    class: 'form-control',
    label: 'Date Of Birth'
},{
    type: 'checkbox',
    id: 'btnCheck',
    class: '',
    label: 'Accept Terms & Condition'
}, {
    type: 'button',
    id: 'btnSave',
    class: 'btn btn-primary',
    label: 'Save'
}];

let frmHTML = '';
for (let i = 0; i < frmJson.length; i++) {
    if (frmJson[i].type != 'button') {
        frmHTML = `${frmHTML} <div class="form-group">
        <label for="${frmJson[i].id}">${frmJson[i].label}</label>
        <input type="${frmJson[i].type}" class="${frmJson[i].class}" id="${frmJson[i].id}"/>
        </div>`;
    } else {
        frmHTML = `${frmHTML}
        <button type="${frmJson[i].type}" class="${frmJson[i].class}" id="${frmJson[i].id}" onclick="onsaveclick()">${frmJson[i].label}</button>
        `;
    }
}
document.getElementById('dynamicFrm').innerHTML = frmHTML;
// document.getElementById('jsonForm').innerText = JSON.stringify(frmJson);
function onsaveclick(){
    let frm = {
        firstName: document.getElementById('txFName').value,
        lastName: document.getElementById('txLName').value,
        email:  document.getElementById('txEmail').value,
        password: document.getElementById('txPassword').value,
        terms: document.getElementById('btnCheck').checked,
        Date_of_birthday:document.getElementById('txtDob').value
    };
    console.log(frm);
}
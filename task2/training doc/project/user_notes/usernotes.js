var addnotes = document.getElementById('add_notes');
var add_notes_btn = document.getElementById('add_notes_btn');
var cancel_notes = document.getElementById('cancel_notes');
var text_error = document.getElementById('text_error');
var dataindex;
var indexno;
var notesdata;
var noteid;
var editable_notes;
var updateindex;

//function  for add user notes and reset button  validate field
function addenablenotes() {
    let textareafield = document.getElementById("textareafield").value;
    if (textareafield == "") {
        text_error.innerHTML = ""; 
    }
    else {
        add_notes_btn.disabled = true;
        reset.disabled = true;
    }
};

// function for remove disabled from add button and reset button
function validator() {
    let reset = document.getElementById('reset_notes');
    let textareafield = document.getElementById("textareafield").value;
    if (textareafield !== "") {
        add_notes_btn.disabled = false;
        reset.disabled = false;
    }
};

// function for insert user notes

function addnotesquestion() {
    let add_notes_btn = document.getElementById('add_notes_btn');
    // for check the value of add button and then  add usernotes
    if (add_notes_btn.value == 'Add') {
        let textareafield = document.getElementById("textareafield").value;
        var sendurl = "https://ignatiuz.webtalkx.com/api/I2BNotes/InsertUserNote";
        fetch(sendurl, {
            method: "POST",
            body: JSON.stringify({
                AddedUserID: 6,
                RefRecordingID: 647,
                NoteText: textareafield
            }),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((res) => {
            return res.json();
        }).then((data) => {
            // console.log(data);
            if (data[0].ResponseStatus == 'Success') {
                console.log("data Post Sucessfully");
                // for getting data from  API after add notes
                getnotes();
                // reset usernotes  textarea field after add notes
                document.getElementById('dataform').reset();
            }
        }).catch(error =>{
            // for handle error
            console.log(error);
        });
    }
};

// for getusernotes inside js data table
getnotes();
let tablebody = document.getElementById('mytable');
function getnotes() {
    fetch("https://ignatiuz.webtalkx.com/api/I2BNotes/GetRecordingRequestNotes", {
        method: "POST",
        body: JSON.stringify({
            AddedUserID: 6,
            RefRecordingID: 647,
        }),
        headers: {
            "Content-Type": "application/json"
        }
    }).then((res) => {
        // console.log(res);
        return res.json();
    }).then((data) => {
        // console.log(data);
        notesdata = data;
        // console.log(notesdata)
        let tabledata = "";
        // for insert index no inside table
        indexno = 0;
        data.forEach((values) => {
            indexno++;
            tabledata +=
       ` <tr>
             <td>${indexno}</td>
             <td>${values.NoteText}</td>
             <td>
             <button type="button" class="btn btn-danger delete_btn" data-bs-toggle="modal"data-bs-target="#exampleModal"><i class="fa fa-trash" aria-hidden="true"></i></button> 
             </td>  
             <td>
             <button type="button" class="btn btn-primary edit_btn" ><i class="fa fa-edit" aria-hidden="true"></i></button> 
             </td>  
        </tr>`
        });
        if (tablebody && tabledata) {
            tablebody.innerHTML = tabledata;
            $(document).ready(function () {
                $('#myTable').DataTable();
            });
        }
        // for delete usernotes from data table
        deleterow(); 
        // for update usernotes from data table
        updaterow(); 
        // for clear textarea field after update usernote
        let textareafield = document.getElementById("textareafield");
        textareafield.value = ""; 
    }).catch(error =>{
        // for handle error
        console.log("something went Wrong" , error)
    });
};

// for reset user notes textfiels on reset button
let textareafield = document.getElementById("textareafield");  
let reset = document.getElementById('reset_notes');
reset.addEventListener('click', () => {
    document.getElementById('dataform').reset();
    reset.disabled = true;
    if(add_notes_btn.disabled == false){
        add_notes_btn.disabled = true;
    }
});

// for find rownumber for  delete usernotes

function deleterow() {
    let delete_btn = document.getElementsByClassName('delete_btn');
    let btn_len = delete_btn.length;
    for (let i = 0; i < btn_len; i++) {
        if (delete_btn[i]) {
            delete_btn[i].addEventListener('click', () => {
                if (notesdata[i]) {
                    dataindex = notesdata[i];
                    // console.log("this is my notes index" , dataindex)
                }
            });
        }
    }
};

// for delete user notes from data table
var confdelete = document.getElementById('confdelete');
var delete_url = "https://ignatiuz.webtalkx.com/api/I2BNotes/DeleteUserNote";
confdelete.addEventListener('click', function confirmdeletenotes() {
    if (dataindex) {
        fetch(delete_url, {
            method: "PUT",
            body: JSON.stringify(dataindex),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }
        }).then((res) => {
            // console.log(res);
            return res.json();
        }).then((data) => {
            // console.log(data);
            if (data[0].ResponseStatus == 'Success') {
                console.log("delete notes sucessfully")
        //    calling getnotes() for getusernotes inside js data table after delete usernotes
                getnotes();
            }
        });
    }
});

// for update usernotes field

function updaterow() {
    let edit_btn = document.getElementsByClassName('edit_btn');
    // console.log(edit_btn);
    let btn_len = edit_btn.length;
    // console.log(btn_len);
    for (let i = 0; i < btn_len; i++) {
        // console.log(edit_btn[i]);
        if (edit_btn[i]) {
            edit_btn[i].addEventListener('click', (e) => {
                if (notesdata[i]) {
                    updateindex = notesdata[i];
                    if (add_notes_btn) {
                        add_notes_btn.value = "Update";
                        add_notes_btn.disabled = false;
                    }
                    if (add_notes_btn.value == 'Update') 
                    {
                        let row = edit_btn[i].parentNode;
                        let column = row.parentNode;
                        // get the noteid of particular user notes
                        noteid = notesdata[i].NoteID;
                        // console.log(noteid);
                        let tablerow = column.getElementsByTagName('td');
                        let textareafields = document.getElementById("textareafield");
                        //    console.log (tablerow[1].innerText);
                        editable_notes = tablerow[1].innerText;
                        // console.log(editable_notes ,"edit notes");
                        textareafields.value = editable_notes;
                        //  console.log(usernotesdata)
                        add_notes_btn.addEventListener('click', function updatedata() {
                            // get updated value of textarea field
                            let updatetext = textareafields.value;
                            let usernotesdata = JSON.stringify({ "NoteID": noteid, "NoteText": updatetext });
                            let update_url = "https://ignatiuz.webtalkx.com/api/I2BNotes/UpdateUserNote"
                            fetch(update_url, {
                                method: "PUT",
                                body: usernotesdata,
                                headers: {
                                    "Content-Type": "application/json; charset=UTF-8"
                                }
                            }).then((res) => {
                                return res.json()
                            }).then((e) => {
                                // calling getnotes() for get usernotes inside js data table after edit usernotes
                                getnotes();
                                if (add_notes_btn.value == 'Update') {
                                    add_notes_btn.value = 'Add'
                                    add_notes_btn.disabled = true;
                                }
                                // reset value of textarea field
                                document.getElementById('dataform').reset();
                            });
                        });
                    }
                }
            });
        }
    }
};







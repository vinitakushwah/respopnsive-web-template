
var recentquestion = document.getElementById('recentquestion');

var url = "https://stage.webtalkx.com/api/I2BRecordingRequest/GetUserQuestionnare";

var tablebody = document.getElementById('mytable');

var table = document.getElementsByClassName('table');
var dataindex;


var objectdata;



// console.log(recentquestion);
function getquestion() {
    fetch(url, {

        method: "POST",

        body: JSON.stringify({
            UserID: 1,

        }),

        headers: {
            "Content-Type": "application/json"

        }
    }).then((response) => {
        // console.log(response)
        return response.json();
    }).then((data) => {
        objectdata = data;
        // console.log(objectdata, "this is my")
        let tabledata = "";
        let index = 0;
        data.forEach((values) => {
            // console.log(values);
            index++;
            tabledata +=
                `  <tr>
                     <td>${index}</td>
                     <td>${values?.QuestionText}</td>
                     <td>${values?.CreatedDate.slice(0, 10)}</td>
                     <td>
                     <button type="button" class="btn btn-danger delete_btn" data-bs-toggle="modal" data-bs-target="#exampleModal"><i class="fa fa-trash" aria-hidden="true"></i></button> 
                   </td>    
                  </tr>`
        });

        document.getElementById('mytable').innerHTML = tabledata;

        $(document).ready(function () {
            $('#myTable').DataTable();
        });

        deleterow();

    })
}





//  for find the row index of questions
function deleterow() {
    var delete_btn = document.getElementsByClassName('delete_btn');

    // console.log(delete_btn)
    let btn_len = delete_btn.length;

    //  console.log(btn_len)

    for (let i = 0; i < btn_len; i++) {

        // console.log(delete_btn[i]);
        if (delete_btn[i]) {

            delete_btn[i].addEventListener('click', () => {


                if (objectdata[i]) {

                    // console.log(objectdata[i])

                    dataindex = objectdata[i];

                    console.log(dataindex, "this is my row index")
                }

            })

        }

    }

}



// for confirm delete question 

var confdelete = document.getElementById('confdelete');
var delete_url = "https://stage.webtalkx.com/api/I2BRecordingRequest/DeleteQuestionFromUserQuestionnare"

// console.log(confdelete)
confdelete.addEventListener('click', function confirmdelete() {

    if (dataindex) {

        fetch(delete_url, {

            method: "PUT",
            body: JSON.stringify(dataindex),
            headers: {
                "Content-Type": "application/json; charset=UTF-8"
            }

        }).then((response) => {

            // console.log(response , "this is my delete response")

            return response.json();

        }).then((data) => {

            // console.log(data, "this is my delete data");

            getquestion();

        })
    }
})












































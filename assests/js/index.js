$("#add_user").submit(function(event){
    alert("Data Inserted Succesfully!")
})

$("#update_user").submit(function(event){
    event.preventDefault();

var unindexed_array = $(this).serializeArray();
var data ={}

$.map(unindexed_array, function(n,i){
    data[n['name']]=n['value']
})

console.log(data);

var request ={
    "url":`http://localhost:3000/api/users/${data.id}`,
    "method": "PUT",
    "data":data
}

$.ajax(request).done(function(response){
    alert("Data Updated succesfully")
})

})

if(window.location.pathname == "/"){
    $ondelete = $(".table tbody td a.delete")
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

            
    var request ={
        "url":`http://localhost:3000/api/users/${id}`,
        "method": "DELETE",
    }
//gf
    if(confirm("Do you really want to delete this record?")){
        $.ajax(request).done(function(response){
            alert("Data Deleted succesfully")
            location.reload()
        })
    }

    })
}

$("#loginform").submit(function(event){
    event.preventDefault();
    var id = $("#please").val();
    var password = $("#password").val();

    if(id == "11" && password == "teacher"){
        location.assign("http://localhost:3000")

    }else if(id == 22 && password == "student"){
        location.assign("http://localhost:3000/student")
    }

    alert(id2)
})
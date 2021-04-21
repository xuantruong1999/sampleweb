function myFunction(){
    var classValue = $("#navbarCollapse").attr("class");
    if(!classValue.includes("show")){
        $("#navbarCollapse").attr("class","navbar-collapse collapse show")
    }
    else{
        $("#navbarCollapse").attr("class","navbar-collapse collapse")
    }
}
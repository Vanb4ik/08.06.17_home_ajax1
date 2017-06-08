
var xhr = new XMLHttpRequest();
xhr.open("post", "/demo.json");

xhr.responseType="json";
xhr.addEventListener("readystatechange",function ()
{
    if (this.readyState !==XMLHttpRequest.DONE)
    {
        return;
    }
    /*var i =JSON.parse(this.responseText);*/
    console.log(this.response.length);
    for (var i=0;i<xhr.response.length;i++)
    {
        var div = document.createElement("div");
        var label = document.createElement("label");

        var temp = document.createElement(xhr.response[i].type);
        if(xhr.response[i].answeres)
        {
            for (var j=0;j<xhr.response[i].answeres.length;j++)
            {
                var option = document.createElement("option");
                option.innerHTML=xhr.response[i].answeres[j];
                option.value=option.innerHTML;
                temp.appendChild(option);
            }
        }

        label.innerHTML=xhr.response[i].question;
        div.appendChild(label);
        div.appendChild(temp);
        document.forms.form1.appendChild(div);
    }
});
xhr.send(null);








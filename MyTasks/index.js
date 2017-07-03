/**
 * Created by root on 2017/7/3.
 */
/* content data*/
var storage = localStorage.tasksList
var list
if(storage===undefined || storage=== "undefined"){
    list = new Array()
}
else{
    list=JSON.parse(storage)
}

function initList(){
    for(x in list){
        var task=list[x]
        appendItem(task.content,task.date,task.finish)
    }
}

function saveList() {
    localStorage.tasksList=JSON.stringify(list)
}

function addList(content,date,finish){
    var task = {
        "content":content,
        "date":date,
        "finish":finish
    }

    list.push(task)

    appendItem(content,date,finish)
}

function appendItem(content,date,finish){
    var node= "<li class=\"taskList-item taskList-content\"> <div class=\"leftSpan\"> <div class=\"isFinish"
    if(finish){
        node+=" on"
    }
    node+="\" onclick=\"taskFinish(this)\"></div></div>"
    node+="<div class=\"rightSpan\"> <input class=\"task-content\" readonly ondblclick=\"this.readOnly=false\" onchange=\"this.readOnly=true\" value=\""+content+"\">"
    node+="<div class=\"task-span\"> <div class=\"left\">"+date+"</div> <div class=\"right\" onclick=\"deleteTask(this)\">删除</div> <div style=\"clear:both\"></div> </div></div></li>"
    $('#taskList').append(node)
}

function deleteList(pos){
    if(pos-1<list.length){
        list.splice(pos-1,1)

        $("#taskList li:eq("+pos+")").remove()
    }
}

function updateList(pos,content,date,finish){
    if(pos-1<list.length){
        if(content!=null){
            list[pos-1].content=content
        }
        if(date!=null){
            list[pos-1].date=date
        }
        if(finish!=null){
            list[pos-1].finish=finish
        }
    }
}

function getNowFormatDate() {
    var date = new Date();
    var seperator1 = "-";
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    var strDate = date.getDate();
    if (month >= 1 && month <= 9) {
        month = "0" + month;
    }
    if (strDate >= 0 && strDate <= 9) {
        strDate = "0" + strDate;
    }
    var currentdate = year + seperator1 + month + seperator1 + strDate;
    return currentdate;
}
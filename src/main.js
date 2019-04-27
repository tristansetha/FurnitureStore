import './styles.css';
import $ from 'jquery';

$(document).ready(function(){
    $("#showByTypeId").click(function(event){
      event.preventDefault();
    let selectedOption = $("#selectType").val();
    // console.log(selectedOption);

    let promise = new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      let url = `https://it771mq5n2.execute-api.us-west-2.amazonaws.com/production/furniture`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(Error(request.statusText));
        }
      }
      request.open("GET", url, true);
      request.send();
    });

    promise.then(function(response){
      let body = JSON.parse(response);
      let bodyData = body.body.data;
      console.log("" + bodyData[5].type);
      if (bodyData.length === 0) {
        $('#showFurniture').text('No furniture')
      } else {
        for (let i = 0; i < bodyData.length; i++) {
          if (("" + bodyData[i].type) === selectedOption) {
            $('#showFurniture').prepend(`<br><li><img src="${bodyData[i].imageUrl}"></img></li>`);
            $('#showFurniture').prepend(`<br><li>${bodyData[i].name}</li>`);
          } 
        }
      }
    })
  })
  $("#reset").click(function(){
  location.reload();
})
})
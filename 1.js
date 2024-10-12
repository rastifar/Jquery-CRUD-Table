$(document).ready(function () {
  let cloneId = 0

  $(".rowInfo").text($(".table #tbody tr").length);
  $('.notConfirmedRowInfo').text(count())
  
  $("#addRow").click(function () {
    cloneId++;
    $("#tbody").prepend(`
        <tr>
        <th  scope="row">
            <div class="d-flex h-25">
            <button class="btn btn-danger me-4 my-1 py-1 delete" style="width: 40%;">
                <img src="./assets/pic/icons8-delete-24.png" > Delete</button>
            <button class="btn btn-primary  me-4 my-1 py-1 clone" style="width: 40%;">
                <img src="./assets/pic/icons8-clone-64.png" style="width: 25px; height: 25px;"> Clone</button>
            </div>
            </th>
        <td class="h-25">
            <input class="w-100 py-1 my-1" type="text"  id="NumberInput">
        </td>
        <td class="h-25">
            <input class="w-100 py-1 my-1" type="text" id="TypeInput">
        </td class="h-25">
        <td >
            <div class="d-flex py-1">
            <div class="form-check me-2 py-1">
                <input class="form-check-input" type="radio" name="status${cloneId}" value="New" id="NewRadio">
                <label class="form-check-label" for="NewRadio">
                New
                </label>
              </div>
              <div class="form-check me-2 py-1">
                <input class="form-check-input" type="radio" name="status${cloneId}" value="InProgress" id="InprogressRadio">
                <label class="form-check-label" for="InprogressRadio">
                 In progress
                </label>
              </div>
              <div class="form-check me-2 py-1">
                <input class="form-check-input" type="radio" name="status${cloneId}" value="Confirm" id="confirmedRadio">
                <label class="form-check-label" for="confirmedRadio">
                    confirmed
                </label>
              </div>   
            </div>              
        </td>   
</tr> `);

    $(".rowInfo").text($(".table #tbody tr").length);
    $(".notConfirmedRowInfo").text(count());

  });

  $(".table").click(function (e) {
   
    if ($(e.target).text().trim() == "Delete") {
      
      $(e.target).closest("tr").remove();
      $(".rowInfo").text($(".table #tbody tr").length);
      $(".notConfirmedRowInfo").text(count());
    } else if ($(e.target).text().trim() == "Clone") {     
      cloneId++
      let row = $(e.target).closest("tr").clone().find('input:radio').attr('name','status'+ cloneId).end() 
      
      
      $(e.target).closest("tr").after(row);
      //  $(e.target).closest("tr").insertAfter(r);
      $(".rowInfo").text($(".table #tbody tr").length);
      $(".notConfirmedRowInfo").text(count());

    } else if ($(e.target).val() == "Confirm") {
     
      $("input[type=text]",$(e.target).parent().parent().parent().parent()).prop("disabled", true);
      $(".rowInfo").text($(".table #tbody tr").length);
      $(".notConfirmedRowInfo").text(count());
    } else if (
      $(e.target).val() == "InProgress" ||
      $(e.target).val() == "New"
    ) {
      $(
        "input[type=text]",
        $(e.target).parent().parent().parent().parent()
      ).prop("disabled", false);
       $(".rowInfo").text($(".table #tbody tr").length);
      $(".notConfirmedRowInfo").text(count());
    }
    else{
      $(".rowInfo").text($(".table #tbody tr").length);
      $(".notConfirmedRowInfo").text(count());
    }
  });

  

  function count(){
    let temp=0   
    $(".table #tbody tr #confirmedRadio").each(function(){  
      if(!$(this).prop("checked")){
        temp++
      }    
    })
  return temp
  }
});
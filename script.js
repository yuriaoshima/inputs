$('#checkInput').on('change', function() {
  handleCheckBox("#checkInput", "#checkVal")
});

$('#colorInput').on('change', function() {
  handleChanges("#colorInput", "#colorVal")
});

$('#dateInput').on('change', function() {
  handleChanges("#dateInput", "#dateVal")
});

$('#emailInput').on('change', function() {
  handleChanges("#emailInput", "#emailVal")
});

$('#monthInput').on('change', function() {
  handleChanges("#monthInput", "#monthVal")
});

$('#numInput').on('change', function() {
  handleChanges("#numInput", "#numVal")
});

$('#passInput').on('change', function() {
  handleChanges("#passInput", "#passVal")
});

$('#yesInput').on('change', function() {
  handleChanges("#yesInput", "#radioVal")
});

$('#noInput').on('change', function() {
  handleChanges("#noInput", "#radioVal")
});

$('#rangeInput').on('change', function() {
  handleChanges("#rangeInput", "#rangeVal")
});

$('#searchInput').on('change', function() {
  handleChanges("#searchInput", "#searchVal")
});

$('#telInput').on('change', function() {
  handleChanges("#telInput", "#telVal")
});

$('#textInput').on('change', function() {
  handleChanges("#textInput", "#textVal")
});

$('#timeInput').on('change', function() {
  handleChanges("#timeInput", "#timeVal")
});

$('#urlInput').on('change', function() {
  handleChanges("#urlInput", "#urlVal")
});

$('#selectInput').on('change', function() {
  handleChanges("#selectInput", "#selectVal")
});

$('#listInput').on('change', function() {
  handleChanges("#listInput", "#listVal")
});

function handleChanges(inputId, valueId) {
  var inputVal = $(inputId).val();
  $(valueId).text(inputVal);
}

function handleCheckBox(inputId, valueId) {
  var inputVal = $(inputId).val();
  $(valueId).text(inputVal);
}

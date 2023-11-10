function ValidUrl(str) {
  var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
  '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
  '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
  '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
  '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
  '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
  if(!pattern.test(str)) {
    return false;
  } else {
    return true;
  }
}
function changeLang() {
    // var filename = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
    var url = document.URL;
    var value = url.substring(url.lastIndexOf('/') + 1);
    if (ValidUrl(value) || value.trim() == '') {
        document.location = "en/" + value;
    } else {
        document.location = "en/" + value;
    }
}

function changeLangEn() {
    //var filename = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
    var url = document.URL;
    var value = url.substring(url.lastIndexOf('/') + 1);
    if (ValidUrl(value) || value.trim() == '') {
        document.location = "../" + value;
    } else {
        document.location = "../" + value;
    }
}
function popupHide(id){
				$('#popup_bg').hide();
				$('#'+id).hide();
      }
      
function popupShow(id){
				$('#popup_bg').show();
				$('#'+id).show();
}
/////////////////// menu ///////////////////

$(".orderCancelBtn").click(function(e){
    $.ajax({
        url: '/orders/' + $(e.target).data('id'),
        type: 'DELETE',
        processData: false,
        contentType: false,
        success: function () {
            window.location = '';
        }
    });
});

$("#unfollowBtn").click(function(){
    $("#unfollowForm").submit();
});
$("#unfollowForm").submit(function(e){
    $.ajax({
        url: e.target.action,
        type: 'DELETE',
        data: new FormData(this),
        processData: false,
        contentType: false,
        success: function () {
            window.location = '';
        }
    });
    e.preventDefault();
});

$("#unfollowProjectBtn").click(function(){
    $("#unfollowProjectForm").submit();
});
$("#unfollowProjectForm").submit(function(e){
    $.ajax({
        url: e.target.action,
        type: 'DELETE',
        data: new FormData(this),
        processData: false,
        contentType: false,
        success: function () {
            window.location = '';
        }
    });
    e.preventDefault();
});

$("#followBtn").click(function(){
    $("#followForm").submit();
});

$("#avatarBtn").click(function (e) {
    $("#avatarFile").click();
    e.preventDefault();
});

$("#avatarFile").change(function () {
  var maxsize = 300 *1024; //300KB
  var allowedImgExt=".jpg|.jpeg|.bmp|.png|"//全部图片格式类型
  var invalidSizeMsg = "上传的图片文件大小不能超过300K";
  var invalidBrowserMsg = "您的浏览器暂不支持计算上传文件的大小，请确保上传文件不要超过300K，建议使用Chrome、FireFox 浏览器";
  var invalidImageTypeMsg = "请上传" + allowedImgExt + "类型的图片文件";

  var fileName = this.files[0].name;
  var fileSize = this.files[0].size;

  if(!fileSize || !fileName || fileSize < 0){
    alert(invalidBrowserMsg);
    return;
  }

  var ext = fileName.substr(fileName.lastIndexOf('.')).toLowerCase();
  if(!ext || allowedImgExt.indexOf(ext+"|") === -1){
    alert(invalidImageTypeMsg);
    return;
  }

  if(fileSize > maxsize){
    alert(invalidSizeMsg);
    return;
  }

  $("#avatarForm").submit();
});
// $("#avatarForm").submit(function (e) {
//     $.ajax({
//         url: e.target.action,
//         type: e.target.method,
//         // data: new FormData(this),
//         files: $(":file", this),
//         iframe: true,
//         processData: false,
//         contentType: false,
//         success: function (data) {
//             console.log();
//             $('#userAvatar').attr('src', $.parseJSON($(data).text()).file);
//         }
//     });
//     e.preventDefault();
// });



$("#loginForm").submit(function (e) {
    e.preventDefault();
    var message = '';
    if ($('[name="username"]').val() == '') {
        message = "用户名不能为空";
    } else if ($('[name="password"]').val() == '') {
        message = "密码不能为空";
    }
    if (message == '') {
        e.target.submit();
    } else {
        $("#messageSpan").text(message);
    }

});


$("#logout").click(function (e) {
    e.preventDefault();
    $.ajax({
        url: '/session',
        type: 'DELETE',
        success: function () {
            window.location = '/';
        }
    });
});

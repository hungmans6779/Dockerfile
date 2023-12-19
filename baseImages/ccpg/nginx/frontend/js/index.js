// 新增財力證明欄位
function addFinancialItem(event) {
    let financialLength = $(".financial-block .item").length
    let target = event.currentTarget
    switch (financialLength) {
        case 1:
            financialNumber = 2
            break;
        case 2:
            financialNumber = 3
            break;
        case 3:
            financialNumber = 4
            break;
        case 4:
            financialNumber = 5
            $(target).addClass("hide")
            break;
    }
    if (financialLength < 5) {
        var newFinancial = '<div class="item"><div class="delete-item" onclick="deleteItem(event)"><img src="images/icon/minus.svg" alt=""></div><div class="subtitle">財力證明 ' + financialNumber + '</div><div class="item-box"><div class="upload-btn"><label for="">選擇檔案</label><input type="file"></div></div></div>'
        $(".financial-block .item-block").append(newFinancial);
    }
}
// 新增基本資料及聯名團體欄位
function addGroupItem(event) {
    let groupNumber;
    let groupLength = $(".group-block .item").length
    let target = event.currentTarget

    switch (groupLength) {
        case 1:
            groupNumber = 2
            break;
        case 2:
            groupNumber = 3
            break;
        case 3:
            groupNumber = 4
            break;
        case 4:
            groupNumber = 5
            $(target).addClass("hide")
            break;
    }
    if (groupLength < 5) {
        var newGroup = '<div class="item"><div class="delete-item" onclick="deleteItem(event)"><img src="images/icon/minus.svg" alt=""></div><div class="subtitle">基本資料及聯名<br class="mb">團體相關資料 ' + groupNumber + '</div><div class="item-box"><div class="upload-btn"><label for="">選擇檔案</label><input type="file"></div></div></div>'
        $(".group-block .item-block").append(newGroup);
    }
}
// 新增基本其他欄位
function addOtherItem(event) {
    let otherNumber;
    let otherLength = $(".other-block .item").length
    let target = event.currentTarget
    switch (otherLength) {
        case 1:
            otherNumber = 2
            break;
        case 2:
            otherNumber = 3
            break;
        case 3:
            otherNumber = 4
            break;
        case 4:
            otherNumber = 5
            $(target).addClass("hide")
            break;
    }
    if (otherLength < 5) {
        var newOther = '<div class="item"><div class="delete-item" onclick="deleteItem(event)"><img src="images/icon/minus.svg" alt=""></div><div class="subtitle">其他 ' + otherNumber + '</div><div class="item-box"><div class="upload-btn"><label for="">選擇檔案</label><input type="file"></div></div></div>'
        $(".other-block .item-block").append(newOther);
    }
}
// 刪除欄位
function deleteItem(event) {
    let target = event.currentTarget
    $(target).parents(".item").remove()
    if ($(".financial-block .item").length !== 5) {
        $(".financial-block .add-block").removeClass("hide")
    }
    if ($(".group-block .item").length !== 5) {
        $(".group-block .add-block").removeClass("hide")

    }
    if ($(".other-block .item").length !== 5) {
        $(".other-block .add-block").removeClass("hide")

    }
}
function openPop(target) {
    if (target == "financial") {
        $(".popup[data-pop='" + target + "']").fadeIn()
    }
    if (target == "photo") {
        $(".popup[data-pop='" + target + "']").fadeIn()
    }
    if (target == "personal") {
        $(".popup[data-pop='" + target + "']").fadeIn()
    }
    if (target == "group") {
        $(".popup[data-pop='" + target + "']").fadeIn()
    }
    if (target == "other") {
        $(".popup[data-pop='" + target + "']").fadeIn()
    }
    if (target == "uploadPhoto") {
        $(".popup[data-pop='" + target + "']").fadeIn()
    }
}
// 打開補件區塊
function openCase() {
    $(".upload").fadeIn()
}
function verifyId(id) {
    id = id.trim();

    if (id.length != 10) {
        $('.pid').next().attr("data-alert", "身份證字號須為 10 碼");
        $('.pid.input-block').addClass('error')
        return false
    } else {
        $('.pid').next().removeAttr("data-alert", "身份證字號須為 10 碼");
        $('.pid.input-block').removeClass('error')
    }


    let countyCode = id.charCodeAt(0);
    if (countyCode < 65 | countyCode > 90) {
        $('.pid').next().attr("data-alert", "第一碼須為英文字母");
        $('.pid.input-block').addClass('error')
        return false
    } else {
        $('.pid').next().removeAttr("data-alert", "第一碼須為英文字母");
        $('.pid.input-block').removeClass('error')
    }

    let genderCode = id.charCodeAt(1);
    if (genderCode != 49 && genderCode != 50) {
        $('.pid').next().attr("data-alert", "性別代碼不正確，第一個數字須為 1 或 2");
        $('.pid.input-block').addClass('error')
        return false
    } else {
        $('.pid').next().removeAttr("data-alert", "性別代碼不正確，第一個數字須為 1 或 2");
        $('.pid.input-block').removeClass('error')
    }

    let serialCode = id.slice(2)
    for (let i in serialCode) {
        let c = serialCode.charCodeAt(i);
        if (c < 48 | c > 57) {
            $('.pid').next().attr("data-alert", "數字區出現非數字字元");
            $('.pid.input-block').addClass('error')
            return false
        } else {
            $('.pid').next().removeAttr("data-alert", "數字區出現非數字字元");
            $('.pid.input-block').removeClass('error')
        }
    }

    let conver = "ABCDEFGHJKLMNPQRSTUVXYWZIO"
    let weights = [1, 9, 8, 7, 6, 5, 4, 3, 2, 1, 1]

    id = String(conver.indexOf(id[0]) + 10) + id.slice(1);

    checkSum = 0
    for (let i = 0; i < id.length; i++) {
        c = parseInt(id[i])
        w = weights[i]
        checkSum += c * w
    }

    verification = checkSum % 10 == 0

    if (verification) {
        $('.pid').next().removeAttr("data-alert", "不是正確的身分證字號");
        $('.pid.input_block').removeClass('error')
    } else {
        $('.pid').next().attr("data-alert", "不是正確的身分證字號");
        $('.pid.input_block').addClass('error')
    }
    return verification
}
function sendInfo() {
    let idVal = $("#personalId").val()
    if (verifyId(idVal)) {
    } else {
        return false
    }
    if ($("#year").val() == "") {
        $('.year').next().attr("data-alert", "請選擇出生年月日");
        $('.year.input-block').addClass('error')
        return false
    } else {
        $('.year').next().removeAttr("data-alert", "請選擇出生年月日");
        $('.year.input-block').removeClass('error')
    }
    if ($("#month").val() == "") {
        $('.month').next().attr("data-alert", "請選擇出生年月日");
        $('.month.input-block').addClass('error')
        return false
    } else {
        $('.month').next().removeAttr("data-alert", "請選擇出生年月日");
        $('.month.input-block').removeClass('error')
    }
    if ($("#day").val() == "") {
        $('.day').next().attr("data-alert", "請選擇出生年月日");
        $('.day.input-block').addClass('error')
        return false
    } else {
        $('.day').next().removeAttr("data-alert", "請選擇出生年月日");
        $('.day.input-block').removeClass('error')
    }
    if ($("#verify").val() == "") {
        $('.verify').next().attr("data-alert", "請輸入驗證碼");
        $('.verify.input-block').addClass('error')
        return false
    } else {
        $('.verify').next().removeAttr("data-alert", "請選擇出生年月日");
        $('.verify.input-block').removeClass('error')
    }
    if ($("#verify").val() != 6) {
        $('.verify').next().attr("data-alert", "請輸入六位數字");
        $('.verify.input-block').addClass('error')
        return false
    } else {
        $('.verify').next().removeAttr("data-alert", "請輸入六位數字");
        $('.verify.input-block').removeClass('error')
    }
}
function openList(event) {
    let actived = event.currentTarget
    if ($(actived).hasClass('active')) {
        $(actived).removeClass('active')
        $(actived).parents().children(".item").slideUp()
        $(".list h3 span").removeClass("active")
    } else {
        $(actived).addClass('active')
        $(actived).parents().children(".item").slideDown()
        $(".list h3 span").addClass("active")
    }
}
function reset() {
    $("#form-info")[0].reset();
}
$(window).on("load", function () {
    $(".loading").fadeOut(350);
});
// 關閉popup
$(".understand").click(function () {
    $(".popup").fadeOut()
})


// 裁切圖片
var $uploadCrop,
    oldImg = new Image(),
    file, oldImgDataUrl
function readFile(input) {
    if (input.files && input.files[0]) {
        file = input.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            oldImgDataUrl = e.target.result;
            oldImg.src = oldImgDataUrl;
            $uploadCrop.croppie('bind', {
                url: oldImgDataUrl
            }).then(function () {
                console.log('jQuery bind complete');
            });
        }
        reader.readAsDataURL(file);
    }
    else {
        alert("Sorry - you're browser doesn't support the FileReader API");
    }
}
$uploadCrop = $('#demo-basic').croppie({
    viewport: {
        width: 250,
        height: 250,
        type: 'square',
    },
    enableExif: true,
    enableOrientation: true
});
function displayCropImg(src) {
    var html = "<img src='" + src + "' />";
    // $("#newImg").html(html); //暫時預覽
}
function cropRotate(deg) {
    $uploadCrop.croppie('rotate', parseInt(deg));
}
// 個人照片 取消按鈕
function cancelUpload() {
    $(".popup").fadeOut()
    $(".up-part2").addClass("hide")
    $(".up-part1").removeClass("hide")
}
$('#upload_img').on('change', function () {
    $(".up-part1").addClass("hide")
    $(".up-part2").removeClass("hide")
    readFile(this);
});
$('#crop-btn').on('click', function () {
    var fileSize = Math.round(file.size / 1000)
    $uploadCrop.croppie('result', {
        type: 'canvas',
        size: 'viewport'
    }).then(function (src) {
        displayCropImg(src);  //裁切後的圖片
    });
    $(".popup").fadeOut()
    $(".photo-block .upload-success").addClass("active") //成功上傳區塊顯示
    $(".photo-block .upload-input").fadeOut() //選擇檔案按鈕隱藏
    $(".photo-block .upload-success .size").text(fileSize + "KB")
});





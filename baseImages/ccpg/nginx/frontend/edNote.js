$(function () {
  let startTime = '2022/11/1 18:00:00'; //開始時間 yyyy/mm/dd 00:00:00 中間記得要空格
  let endTime = '2022/11/31 19:00:00'; //結束時間
  let nowDate = new Date();
  let h3HintHtml = '2022/8/21(日)AM 03:00~06:00系統維護中，暫停相關服務，造成不便，尚祈見諒。如有任何疑問，請洽本行客服專線：02-8751-6665。';

  if (Date.parse(startTime) < nowDate && Date.parse(endTime) > nowDate) {
    //時間介於 start time ~ end time 中，則顯示h3HintHtml自訂文字
    $('.system-warn-text').html(h3HintHtml);
    //欄位鎖定
    $('#personalId').attr('disabled', true);
    $('#year').attr('disabled', true);
    $('#month').attr('disabled', true);
    $('#day').attr('disabled', true);
    $('#picCode').attr('disabled', true);
    $('.system-warn').show();
  }
});

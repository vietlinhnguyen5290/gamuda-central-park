// Dán vào Google Sheet: Tiện ích mở rộng > Apps Script. Deploy > New deployment > Web app
// Execute as: Me, Who has access: Anyone. Copy URL Web app dán vào SHEET_ENDPOINT trong index.html
const HEADERS = ['Thời gian','Họ tên','Số điện thoại','Loại căn','Mục đích','utm_source','utm_medium','utm_campaign','utm_content','fbclid','Trang'];

function doPost(e) {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Lead') ||
             SpreadsheetApp.getActiveSpreadsheet().insertSheet('Lead');
  if (sh.getLastRow() === 0) sh.appendRow(HEADERS);
  const d = JSON.parse(e.postData.contents || '{}');
  sh.appendRow([d.thoiGian, d.hoTen, "'" + (d.soDienThoai || ''), d.loaiCan, d.mucDich,
    d.utm_source || '', d.utm_medium || '', d.utm_campaign || '', d.utm_content || '', d.fbclid || '', d.trang]);
  return ContentService.createTextOutput('ok');
}

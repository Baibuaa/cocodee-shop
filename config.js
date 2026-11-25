/* ===========================================================
   ตั้งค่าร้าน — แก้ไฟล์นี้ไฟล์เดียวพอ
   =========================================================== */
window.SHOP = {
  // 1) วาง URL Web App จาก Google Apps Script ตรงนี้ (ลงท้ายด้วย /exec)
  SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbxZnrE7RMF_mlf3T1docj9VjUeFyjpn6nYfN9SP2twCVJMIVEGauu09qt0VexwXo9xm3Q/exec',

  // 2) โฟลเดอร์รูป — ปกติใช้ 'images/' (โฟลเดอร์ใน GitHub repo นี้)
  IMG_BASE: 'images/',

  SHIPPING_FEE: 40,      // ค่าส่ง (บาท)
  FREE_SHIP_MIN: 300,    // ซื้อครบเท่านี้ ส่งฟรี

  // 3) ข้อมูลผู้ส่ง (พิมพ์บนใบปะหน้า)
  SENDER: {
    name: 'ร้านโกโก้ดี (COCODEE)',
    phone: '08x-xxx-xxxx',
    address: '123 ถ.ตัวอย่าง แขวงลาดยาว เขตจตุจักร กรุงเทพฯ 10900'
  },

  // 4) สินค้า — sku ต้องตรงกับใน apps-script/Code.gs
  //    bin = ตำแหน่งชั้นวางในคลัง (ใช้ตอนหยิบสินค้า)
  PRODUCTS: [
    {
      sku: 'CD-MILK-50', name: 'โกโก้ดี มิลค์ช็อกโกแลต', size: '50 กรัม', price: 45,
      img: 'products/milk.svg', bin: 'A-01', color: '#a0643c',
      tag: 'ขายดี',
      features: ['นมสดเข้มข้น หวานละมุน', 'โกโก้ 35%', 'ละลายในปาก']
    },
    {
      sku: 'CD-DARK-50', name: 'โกโก้ดี ดาร์ก 70%', size: '50 กรัม', price: 59,
      img: 'products/dark.svg', bin: 'A-02', color: '#3b2418',
      tag: 'เข้มข้น',
      features: ['โกโก้ 70% หวานน้อย', 'เมล็ดโกโก้ไทย จ.จันทบุรี', 'อุดมด้วยสารต้านอนุมูลอิสระ']
    },
    {
      sku: 'CD-ALMD-50', name: 'โกโก้ดี อัลมอนด์', size: '50 กรัม', price: 65,
      img: 'products/almond.svg', bin: 'B-01', color: '#c8892e',
      tag: 'กรุบกรอบ',
      features: ['อัลมอนด์อบเต็มเม็ด', 'มิลค์ช็อกโกแลตเนื้อเนียน', 'กินเพลิน ไม่เลี่ยน']
    }
  ]
};

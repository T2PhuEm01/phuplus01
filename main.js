// const cardImg = document.querySelector('.card_img');

// cardImg.addEventListener('click', function() {
//   cardImg.classList.toggle('fullscreen');
// });

const cardImg = document.querySelector('.card_img');

cardImg.addEventListener('click', function() {
  if (cardImg.classList.contains('fullscreen')) {
    // Nếu có lớp "fullscreen", xóa lớp và trả lại kích thước ban đầu
    cardImg.classList.remove('fullscreen');
  } else {
    // Nếu không có lớp "fullscreen", thêm lớp để kích hoạt chế độ toàn màn hình
    cardImg.classList.add('fullscreen');
  }
});
let str;
let input;
let i;
let j;
let choose=1;
let firstTime=true;
let total;
let arr=[];
do{
  if(!firstTime){
    choose= +prompt("1. Nhập chuỗi\n2. Hiển thị chuỗi\n3. Loại bỏ các khoảng trắng ở đầu và cuối chuỗi\n4. Đảo ngược chuỗi ký tự\n5. Đếm số lượng từ trong chuỗi ký tự\n6. Tìm kiếm và thay thế các ký tự trong chuỗi gốc\n7. Thoát chương trình");
  }
  switch(choose){
    case 1:
      str=prompt("Mời nhập chuỗi");
      break;
    case 2:
      alert(str);
      break;
    case 3:
      input=prompt("Mời nhập vào từ cần đếm");
      if(arr.includes(input)){
        arr=str.split(/\s+/);
        i=0
        while(i<arr.length){
          if(arr[i]===input){
            total++;
          }
        }
        alert("Từ xuất hiên "+total+" lần");
      }else{
        alert("Không tìm thấy từ trong mảng");
      }
      break;
    case 4:
      arr=str.split(/\s+/).trim();
      alert("Từ dài nhất: "+Math.max(...arr.map(word=>word.length))+"\nTừ ngắn nhất: "+Math.minmin(...arr.map(word=>word.length)))
      break;
    case 5:
      arr=[];
      i=0
      while(i<str.length){
            arr[i]=(arr[i]||0)+1;
            total=Math.max(total, arr[i]);
        i++;
      }
      break;
    case 6:
      input=prompt("Mời nhập ký tự cần thay thế");
      if(input.length===1){
        if(str.includes(input)){
          total=prompt("Mời nhập ký tự thay thế");
          if(total.length===1){
            str=str.replaceAll(input,total)
          }else{
            alert("Nhập vào không phải chỉ 1 ký tự");
          }
        }else{
          alert("Ký tự không xuất hiện trong chuỗi");
        }
      }
      break;
  }
  firstTime=false;
} while(choose!==7);

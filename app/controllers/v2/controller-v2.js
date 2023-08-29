export const BASE_URL = "https://64df717b71c3335b2582a1ca.mockapi.io/food"

const CON_MON = true
const MON_CHAY = true

export let fetchFoodList = () => { 
    axios.get(BASE_URL)
    .then((res) => {
           renderFoodList(res.data)
            console.log(res);
          })
          .catch((err) => {
           console.log(err);
          });
 }

let renderFoodList = (list) => {  
    let contentHTML = ""
    list.reverse().forEach((food) => { 
        let {ma,ten,loai,gia,khuyenMai,tinhTrang,hinhMon,moTa} = food
        let StringTr = /*html*/    
         `
                        <tr>
                            <td>${ma}</td>
                            <td>${ten}</td>
                            <td>${loai == MON_CHAY ? "Chay" : "Mặn"}</td>
                            <td>${gia}</td>
                            <td>${khuyenMai}</td>
                            <td>0</td>
                            <td>${tinhTrang == CON_MON ? "Còn" : "Hết"}</td>
                            <td>
                                <button class="btn btn-warning" onclick = "editFood(${ma})">Sửa</button>
                                <button class="btn btn-danger" onclick = "deleteFood(${ma})">Xóa</button>
                            </td>                
                        </tr>
        `
        contentHTML += StringTr
     })
     document.getElementById("tbodyFood").innerHTML = contentHTML
 }

export let showMessage = (mesaage,isSucces = true) => { 
    Toastify({
        text: mesaage,
        className: "info",
        style: {
          background: isSucces ? "green" : "red",
        }
      }).showToast();
 }

export let layThongTinTuForm = () => { 
    var ma = document.getElementById("foodID").value
    var ten = document.getElementById("tenMon").value
    var loai = document.getElementById("loai").value == "loai1"
    var gia = document.getElementById("giaMon").value
    var khuyenMai = document.getElementById("khuyenMai").value
    var tinhTrang = document.getElementById("tinhTrang").value == "1"
    var hinhMon = document.getElementById("hinhMon").value
    var moTa = document.getElementById("moTa").value
    return {
        ma ,ten ,loai ,gia ,khuyenMai ,tinhTrang ,hinhMon ,moTa
    }
 }

export let showThongTinLenForm = (food) => { 
    let {  ma ,ten ,loai ,gia ,khuyenMai ,tinhTrang ,hinhMon ,moTa} = food
    document.getElementById("foodID").value = ma
    document.getElementById("tenMon").value = ten
    document.getElementById("loai").value = `${loai ? "loai1" : "loai2"}`
    document.getElementById("giaMon").value = gia
    document.getElementById("khuyenMai").value = khuyenMai
    document.getElementById("tinhTrang").value = `${tinhTrang ? "1" : "0"}`
    document.getElementById("hinhMon").value = hinhMon
    document.getElementById("moTa").value = moTa
}
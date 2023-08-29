import { BASE_URL, fetchFoodList, layThongTinTuForm, showMessage, showThongTinLenForm } from "./controller-v2.js";

fetchFoodList()

document.getElementById("btnThem").addEventListener('click', () => { 
    document.getElementById("foodID").readOnly = false
    document.getElementById("foodForm").reset()
 })

window.deleteFood = (ma) => { 
    axios.delete(`${BASE_URL}/${ma}`)
    .then((res) => {
            fetchFoodList()
            showMessage("Xóa thành công")
            console.log(res);
          })
          .catch((err) => {
            showMessage("Lỗi",false)
           console.log(err);
          });
 }

window.addFood = () => { 
    var data = layThongTinTuForm()
    axios.post(BASE_URL,data)
    .then((res) => {
            $('#exampleModal').modal('hide')
            fetchFoodList()
            showMessage("Thêm thành công")
            console.log(res);
          })
          .catch((err) => {
            showMessage("Lỗi")
           console.log(err);
          });
 }

window.editFood = (ma) => { 
    $('#exampleModal').modal('show')
    axios.get(`${BASE_URL}/${ma}`)
    .then((res) => {
            document.getElementById("foodID").readOnly = true
            showThongTinLenForm(res.data)
            console.log(res);
          })
          .catch((err) => {
           console.log(err);
          });
 }

window.updateFood = () => { 
    let data = layThongTinTuForm()
    axios.put(`${BASE_URL}/${data.ma}`,data)
    .then((res) => {
            $('#exampleModal').modal('hide')
            fetchFoodList()
            showMessage("Cập nhật thành công")
            console.log(res);
          })
          .catch((err) => {
            showMessage("Lỗi",false)
           console.log(err);
          });
 }
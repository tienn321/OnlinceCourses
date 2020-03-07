import api from '../Api';

//thông tin lưu trữ localStorage
const local = {
  userLogin: 'userLogin',
  token: 'accessToken',
  groupID: 'GP01'
}

class CourseService{
  getAllCourses = () => {
    return api({
      method: "get",
      url: 'QuanLyKhoaHoc/LayDanhSachKhoaHoc?MaNhom=' + local.groupID
    })
  };

  getCourseCategories = () => {
    return api({
      method: "get",
      url: "QuanLyKhoaHoc/LayDanhMucKhoaHoc"
    });
  };

  getCourseDetail = maKhoaHoc => {
    return api({
      method: "get",
      url: `QuanLyKhoaHoc/LayThongTinKhoaHoc?maKhoaHoc=${maKhoaHoc}`
    });
  };

  getCoursesByCategory = maDanhMuc => {
    return api({
      method: "get",
      url: `QuanLyKhoaHoc/LayKhoaHocTheoDanhMuc?maDanhMuc=${maDanhMuc}&MaNhom=` + local.groupID
    });
  }

}
 
export default new CourseService();
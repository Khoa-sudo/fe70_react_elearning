import { history } from "../../App";
import { quanLyNguoiDungService } from "../../services/QuanLyNguoiDungService";
import { ACCESSTOKEN, http, USER_LOGIN } from "../../util/settings/config";
import { DANG_NHAP_ACTION } from "../types/QuanLyNguoiDungType";

export const dangNhapAction = (thongTinDangNhap) => {
  return async (dispatch) => {
    try {
      const result = await quanLyNguoiDungService.dangNhap(thongTinDangNhap);
      if (result.status === 200) {
        dispatch({
          type: DANG_NHAP_ACTION,
          thongTinDangNhap:result.data,
        });
      }

      console.log("result dangNhapAction", result);
    } catch (error) {
        console.log('error',error.response?.data)
    }
  };
};



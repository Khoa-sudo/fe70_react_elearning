import { USER_LOGIN, TOKEN_CYBERSOFT } from "../../util/settings/config";
import { DANG_NHAP_ACTION } from "../types/QuanLyNguoiDungType";

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const stateDefault = {
  userLogin: user,
};

export const QuanLyNguoiDungReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case DANG_NHAP_ACTION: {
      const { thongTinDangNhap } = action;
      localStorage.setItem(USER_LOGIN, JSON.stringify(thongTinDangNhap));
      localStorage.setItem(TOKEN_CYBERSOFT, thongTinDangNhap.accessToken);
      return { ...state, userLogin: thongTinDangNhap };
    }
    default:
      return { ...state };
  }
};

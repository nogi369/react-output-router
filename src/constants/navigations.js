// ベースPATH
export const BASE_PATH = "react-output-router";

// リンク先一覧(遷移先定義の際に使用)
export const NAVIGATION_LIST = {
  HOME: `${BASE_PATH}/`,
  DETAILE: `${BASE_PATH}/detail/:id/`,
  CREATE: `${BASE_PATH}/create/`,
  EDIT: `${BASE_PATH}/edit/:id/`,
};

// パス一覧(画面遷移時に使用)
export const NAVIGATION_PATH = {
  HOME: `${BASE_PATH}/`,
  // DETAILE: `${BASE_PATH}/detail/`,
  // CREATE: `${BASE_PATH}/create/`,
  // EDIT: `${BASE_PATH}/edit/`,
};

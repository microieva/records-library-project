export const GET_RECORDS = "GET_RECORDS";
export const GET_USER = "GET_USER";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGOUT = "LOGOUT";
export const BORROW_RECORD = "BORROW_RECORD";
export const SHOW_SELECTION = "SHOW_SELECTION";
export const REMOVE_RECORD = "REMOVE_RECORD";
export const SHOW_RECORD_FORM = "SHOW_RECORD_FORM";
export const ADD_RECORD = "ADD_RECORD";

export type AppState = {
  //form: FormState;
  records: RecordsState;
  user: UserState;
  ui: UiState;
};

export type FormState = {
  addRecord: {};
};

export type RecordsState = {
  records: Record[];
};

export type UserState = User;

export type UiState = Ui;

export type Record = {
  _id?: string | undefined;
  image: string;
  title: string;
  authors: string[];
  publishedYear: number;
  label: string;
  genres: string[];
  tracks?: Track[];
  available: boolean;
  favorite: boolean;
};

export type Track = {
  name: string;
  duration: number;
  sampleUrl: string;
};

export type User = {
  _id?: string;
  name: string;
  email: string;
  borrowedRecords: string[];
  isAdmin: boolean;
};

export type Ui = {
  selectionOpen: boolean;
  recFormOpen: boolean;
};

//----------------------------------------------------------------------ACTION TYPES

//- - - - - - - - - -Record Actions
export type RecordActions = GetRecordsAction | AddNewRecordAction;

export type GetRecordsAction = {
  type: typeof GET_RECORDS;
  payload: {
    records: Record[];
  };
};

export type AddNewRecordAction = {
  type: typeof ADD_RECORD;
  payload: Record;
};

//- - - - - - - - - - - - User Actions
export type UserActions =
  | GetUserAction
  | LoginSuccessAction
  | LogoutAction
  | BorrowRecordAction
  | RemoveRecordAction;

export type GetUserAction = {
  type: typeof GET_USER;
  payload: {
    user: User;
  };
};

export type LoginSuccessAction = {
  type: typeof LOGIN_SUCCESS;
  payload: { loginResponse: LoginResponse; history: any };
};

export type LoginResponse = {
  user: {
    name: string;
    email: string;
    borrowedRecords: string[];
    isAdmin: boolean;
    //photo: string
    _id: string;
  };
  token: string;
};

export type LogoutAction = {
  type: typeof LOGOUT;
  //payload here is history object?
  payload: any;
};

export type BorrowRecordAction = {
  type: typeof BORROW_RECORD;
  payload: string;
};

export type RemoveRecordAction = {
  type: typeof REMOVE_RECORD;
  payload: string;
};

//- - - - - - - - - - - UI Actions
export type UiActions = ShowSelectionAction | ShowRecordFormAction;

export type ShowRecordFormAction = {
  type: typeof SHOW_RECORD_FORM;
  payload: boolean;
};

export type ShowSelectionAction = {
  type: typeof SHOW_SELECTION;
  payload: boolean;
};

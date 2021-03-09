export const GET_RECORDS = "GET_RECORDS";

export type AppState = {
  records: RecordsState;
  users: UsersState;
};

export type RecordsState = {
  records: Record[];
};

export type Track = {
  name: string;
  duration: number;
  sampleUrl: string;
};

export type Record = {
  image: string;
  title: string;
  authors: string[];
  publishedYear: number;
  label: string;
  genres: string[];
  tracks: Track[];
  available: boolean;
  favorite: boolean;
};

export type UsersState = {
  users: User[];
};

export type User = {
  name: string;
  email: string;
  borrowedRecords: string[];
};

export type RecordActions = GetRecordsAction;
export type GetRecordsAction = {
  type: typeof GET_RECORDS;
  payload: {
    records: Record[];
  };
};

/*export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const TOGGLE_DRAWER = 'TOGGLE_DRAWER'
//export const SHOW_CART = 'SHOW_CART'
export const GET_COUNTRIES = 'GET_COUNTRIES'

export type Country = {
  flag: string;
  name: string;
  capital: string;
  population: number;
  languages: Language[];
};

export type Language = {
  name: string;
};

export type Anchor = 'right' | 'left';

export type AppState = {
  countries: CountriesState,
  cart: CartState
  ui: UiState,
}

export type CountriesState = {
  countries: Country[]
}

export type CartState = {
  inCart: Country[]
}

export type UiState = {
  // showCart: {
  //   [key in DialogType]?: boolean
  // }
}
export type CountryActions = GetCountriesAction
export type GetCountriesAction = {
  type: typeof GET_COUNTRIES
  payload: {
    countries: Country[]
  }
}
//------------------------------------------------------------------------
export type CartActions = AddCountryAction | RemoveCountryAction 

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country,
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country,
  }
}

//---------------------------------------------------------------------
export type UiActions = ToggleDrawerAction
export type ToggleDrawerAction = {
  type: typeof TOGGLE_DRAWER
  payload: {
    //dialog: DialogType,
    anchor: Anchor
  }
}





export type InputProps = {
  filterInput: string,
  handleFilterChange: ((event: React.ChangeEvent<HTMLInputElement>) => void) | undefined
}
*/

// Enum
//export enum DialogType {
// Cart = 'cart',
// Themes = 'themes'
//   SignIn = 'signIn',
//   SignUp = 'signUp',
//}

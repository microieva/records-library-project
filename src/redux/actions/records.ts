import { Dispatch } from "redux";
import { GET_RECORDS, RecordActions, Record, ADD_RECORD } from "../../types";

export function getRecords(records: Record[]): RecordActions {
  return {
    type: GET_RECORDS,
    payload: {
      records,
    },
  };
}

export function fetchRecords() {
  return async (dispatch: Dispatch) => {
    try {
      const response = await fetch("http://localhost:3001/api/v1/records");
      const data = await response.json();
      dispatch(getRecords(data));
    } catch (e) {
      console.log("ERROR______", e);
    }
  };
}

export function addRecord(record: Record): RecordActions {
  return {
    type: ADD_RECORD,
    /*payload: {
      _id: "",
      image: form.add.values.image,
      title: form.add.values.title,
      authors: form.add.values.authors,
      publishedYear: form.add.values.publishedYear,
      label: form.add.values.label,
      genres: form.add.values.genres,
      //tracks: form.add.values.tracks
      available: form.add.values.available,
      favorite: form.add.values.favorite
    }*/
    payload: record,
  };
}

/*export const addMember = () => {
  return (dispatch, getState) => {
    const form = getState().form;
    const id = uuidv4()
    const member = {
      id: id,
      firstName: form.member.values.firstName,
      lastName: form.member.values.lastName,
      phoneNumber: form.member.values.phoneNumber,
      gender: form.member.values.gender
    };
    dispatch({
      type: ADD_MEMBER,
      payload: member,
    });
    dispatch(reset('member'))
  }
}*/

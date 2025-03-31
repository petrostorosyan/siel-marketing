import axios from "../axios";
import {
  blogAll,
  blogId,
  contractNumberSearch,
  cooperationInfo,
  payment,
  paymentStatusCheck,
  portfolioAllUrl,
  portfolioSearch,
  portfolioStudentId,
  portfolioStudentWorkAll,
  portfolioTypesUrl,
  portfolioWorkId,
  practiceRegister,
  prePaymentInfo,
  studentId,
  studentRegister,
} from "../api-urls/api.urls.service";



// <---------------------------------  Student register  ------------------------------>

export const getStudentRegister = async (data) => {
  let result = {};
  try {
    const response = await axios.post(studentRegister, data);
    result = response.config.data;   
    return response.status == 200 ? result : [];
  } catch (error) {
    return error;
  }
};

// <---------------------------------  Portfolio types  ------------------------------>

export const getPortfolioTypes = async (name) => {
  let result = {};
  try {
    // const response = await axios.get(portfolioTypesUrl + `/${name}`,{ headers: {
    //   'Cache-Control': 'no-cache',}});
    const response = await axios.get(portfolioTypesUrl + `/${name}`);
    result = response.data.type_enums;
    return result;
  } catch (error) {
    return error;
  }
};

// <---------------------------------  Portfolio all  ------------------------------>

export const getPortfolioAll = async (data) => {
  let result = {};
  try {
    // const start = performance.now();
    const response = await axios.post(portfolioAllUrl, data);
    // const duration = performance.now() - start;
    // console.log(`Get all portfolio request time ${duration}`);
    result = response.data;   
    return response.status == 200 ? result : [];
  } catch (error) {
    return error;
  }
};


// <---------------------------------  Portfolio Student id  ------------------------------>

export const getStudentId = async (id) => {
  let result = {};
  try {
    const response = await axios.get(portfolioStudentId + `/${id}`);
    result = response.data;
    return result;
  } catch (error) {
    return error;
  }
};

// <---------------------------------  Portfolio Student work id  ------------------------------>

export const getStudentWorkId = async (id) => {
  let result = {};
  try {
    const response = await axios.get(portfolioWorkId + `/${id}`);
    result = response.data;
    return result;
  } catch (error) {
    return error;
  }
};

// <---------------------------------  Portfolio Student work all  ------------------------------>

export const getPortfolioStudentWorkAll = async (data) => {
  let result = {};
  try {
    const response = await axios.post(portfolioStudentWorkAll, data);
    result = response.data;   
    return response.status == 200 ? result : [];
  } catch (error) {
    return error;
  }
};


// <---------------------------------  Portfolio Search  ------------------------------>

export const getPortfolioSearch = async (data) => {
  let result = {};
  try {
    const response = await axios.post(portfolioSearch, data);
    result = response.data.paged_collection;   
    return response.status == 200 ? result : [];
  } catch (error) {
    return error;
  }
}


// <---------------------------------  Prepayment ------------------------------>

export const getPrePaymentInfo = async (id) => {
  let result = {};
  try {
    const response = await axios.get(prePaymentInfo + `/${id}`);
    result = response.data;   
    return response.status == 200 ? result : [];
  } catch (error) {
    return error;
  }
}


// <---------------------------------- Payment --------------------------------->

export const paymentRequest = async (id) => {
  let result = {};
  try {
    const response = await axios.post(payment, {id: id});
    result = response.data;   
    return response.status == 200 ? result : [];
  } catch (error) {
    return error;
  }
}


// <---------------------------------- Payment status check --------------------------------->

export const paymentStatus = async (data) => {
  let result = {};
  try {
    const response = await axios.post(paymentStatusCheck, data);
    result = response.data;   
    return response.status == 200 ? result : [];
  } catch (error) {
    return error;
  }
}


// <---------------------------------- Blog All --------------------------------->

// export const allBlogs = async (data) => {
//   let result = {};
//   try {
//     const response = await axios.post(blogAll, data, { headers: {'Cache-Control': 'no-cache'}});
//     result = response.data;   
//     return response.status == 200 ? result : [];
//   } catch (error) {
//     return error;
//   }
// }



// <---------------------------------  Blog ------------------------------>

export const getBlog = async (id) => {
  let result = {};
  try {
    const response = await axios.get(blogId + `/${id}`);
    result = response.data;   
    return response.status == 200 ? result : [];
  } catch (error) {
    return error;
  }
}


// <---------------------------------- Contract Number Search --------------------------------->

export const contractSearch = async (data) => {
  let result = {};
  try {
    const response = await axios.post(contractNumberSearch, data);
    result = response.data;   
    return response.status == 200 ? result : [];
  } catch (error) {
    return error;
  }
}


// <---------------------------------- Cooperation data --------------------------------->

export const cooperationData = async (data) => {
  let result = {};
  try {
    const response = await axios.post(cooperationInfo, data);
    result = response.data;   
    return response.status == 200 ? result : [];
  } catch (error) {
    return error;
  }
}

// <---------------------------------- Practice register --------------------------------->

export const practiceRegistration = async (data) => {
  let result = {};
  try {
    const response = await axios.post(practiceRegister, data);
    result = response.data;   
    return response.status == 200 ? result : [];
  } catch (error) {
    return error;
  }
}
document.addEventListener('DOMContentLoaded', async () => {
  // request json file from amazonaws
  let data  = await requestUrl();
  const lists = JSON.parse(data);

  // filter out companies in specific state
  let locateBtn = document.getElementById('locatebtn');
  locateBtn.addEventListener('click', function(){
      let val = document.getElementById('state').value;
      let validCompanies = locate(val);
      output(validCompanies);
      console.log(validCompanies)
  });

  // filter out companies founded before/after certain year
  let beforeBtn = document.getElementById('before');
  let yrBtn = document.getElementById('yrbtn');
  yrBtn.addEventListener('click', function(){
    let val = document.getElementById('yr').value;
    let validCompanies = beforeBtn.checked
    ? findBefore(val)
    : findAfter(val)
    output(validCompanies);
    console.log(validCompanies)
  });

  // filter out companies based on employee size
  let sizebtn = document.getElementById('sizebtn');
  sizebtn.addEventListener('click', function(){
      let val = document.getElementById('employeeSize').value;
      let validCompanies = findCompanyBetweenSize(val);
      output(validCompanies);
      console.log(validCompanies)
  });


  // filter out company based on categories
  let typebtn = document.getElementById('typebtn');
  typebtn.addEventListener('click', function(){
      let val = document.getElementById('type').value;
      let validCompanies = findType(val);
      output(validCompanies);
      console.log(validCompanies)
  });



  function locate(state){
    let capState = state.toUpperCase();
    return lists.reduce(function(result, cur){
      let curState = cur['state'];
      if(curState === capState) result.push(cur['company_name']);
      return result;
    },[]);
  }


  function findBefore(year){
    if(checkformat(year)){
    let numYear = Number(year);
    return lists.reduce(function(result, cur){
      let curYear = cur['year_founded'];
      if(curYear <= numYear) result.push(cur['company_name']);
      return result;
    },[]);
    }
  }


  function findAfter(year){
    if(checkformat(year)){
    let numYear = Number(year);
    return lists.reduce(function(result, cur){
      let curYear = cur['year_founded'];
      if(curYear >= numYear) result.push(cur['company_name']);
      return result;
    },[]);
    }
  }

  function findCompanyBetweenSize(selected){
    return lists.reduce(function(result, cur){
      let curYear = cur['full_time_employees'];
      if(selected === curYear) result.push(cur['company_name']);
        return result;
    },[]);
  }

  function findType(selected){
    return lists.reduce(function(result, cur){
      let curType = cur['company_category'];
      if(selected === curType) result.push(cur['company_name']);
        return result;
    },[]);
  }

  function checkformat(input){
    console.log(typeof input)
    if(input.length !== 4) {
      alert('please input a correct format. Ex: 2000')
      return false;
    }
    let n = Number(input);
    console.log(n)
    if(isNaN(n)){
      alert('please input year!')
      return false;
    }
    return true;;
  }

  function output(val) {
    document.getElementById("output").innerHTML =
    `Number of Companies: ${val.length}
Companies: ${val}`
  }

});

function requestUrl(){
  return new Promise(function(resolve, reject){
    let query = new XMLHttpRequest();
    let url = 'https://s3-us-west-2.amazonaws.com/bain-coding-challenge/data.json'
    query.onreadystatechange = function(e) {
      if (query.readyState === 4) {
        if (query.status === 200) {
          resolve(query.response)
        } else {
          reject(query.status)
        }
      }
    }
    query.ontimeout = function () {
      reject('timeout')
    }

    query.open('GET', url);
    query.send();
  })
}

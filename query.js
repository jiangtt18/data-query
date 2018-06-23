var btn = document.getElementById('button');
btn.addEventListener('click', function(){
  console.log('here');
  let val = document.getElementById('down').value;
  let val2 = document.getElementById('employeeSize').value;
  let val3 = document.getElementById('type').value;

  document.getElementById("demo").innerHTML = findCompanyBetweenSize(val,val2);
  document.getElementById("demo").innerHTML = findType(val3);



});


function locate(state){
  let capState = state.toUpperCase();
  return json.reduce(function(result, cur){
    let curState = cur['state'];
    if(curState === capState) result.push(cur['company_name']);
    return result;
  },[]);
}

function findBefore(year){
  let numYear = Number(year);
  return json.reduce(function(result, cur){
    let curYear = cur['year_founded'];
    if(curYear <= numYear) result.push(cur['company_name']);
    return result;
  },[]);
}


function findAfter(year){
  let numYear = Number(year);
  return json.reduce(function(result, cur){
    let curYear = cur['year_founded'];
    if(curYear >= numYear) result.push(cur['company_name']);
    return result;
  },[]);
}

function findCompanyBetweenSize(selected){
  return json.reduce(function(result, cur){
    let curYear = cur['full_time_employees'];
    if(selected === curYear) result.push(cur['company_name']);
      return result;
  },[]);
}

function findType(selected){
  return json.reduce(function(result, cur){
    let curType = cur['company_category'];
    if(selected === curType) result.push(cur['company_name']);
      return result;
  },[]);
}

// let query = new XMLHttpRequest();
// query
// .open('GET',
// 'https://s3-us-west-2.amazonaws.com/bain-coding-challenge/data.json');
//
// query.onload = function(){
//   var data = JSON.parse(query.responseText);
//   console.log(data[0]);
// };
//
// query.send();


var json = [
{
"company_name_id": "3-round-stones-inc",
"company_name": "3 Round Stones, Inc.",
"url": "http://3RoundStones.com",
"year_founded": 2010,
"city": "Washington",
"state": "DC",
"country": "us",
"zip_code": 20004,
"full_time_employees": "1-10",
"company_type": "Private",
"company_category": "Data/Technology",
"revenue_source": "Data analysis for clients, Database licensing, Subscriptions",
"business_model": "Business to Business, Business to Consumer",
"social_impact": "",
"description": "3 Round Stones produces a platform for publishing data on the Web. 3 Round Stones provides commercial support for the Callimachus Data Platform, used by the Fortune 2000 and US Government Agencies publishing and consuming data.  Headquartered in Arlington, Virginia, we're seasoned entrepreneurs who are passionate about solving real world problems through open data and open Web standards.",
"description_short": "Our Open Source platform is used by the Fortune2000 and US Government Agencies to collect, publish and reuse data, both public and proprietary.",
"source_count": "NA",
"data_types": "",
"example_uses": "",
"data_impacts": "[]",
"financial_info": "3 Round Stones is a profitable, self-funded, woman-owned start-up.  Our team has several successful serial entrepreneurs.  As entrepreneurs, we've benefited from the valuable guidance by seasoned advisers and mentors in the mid-Atlantic region who have guided our team through multiple start-ups, outside funding and an acquisition by a Fortune 100 company in 2005.",
"last_updated": "2014-11-12 14:44:25.969871"
},
{
"company_name_id": "48-factoring-inc",
"company_name": "48 Factoring Inc.",
"url": "https://www.48factoring.com",
"year_founded": 2014,
"city": "Philadelphia",
"state": "PA",
"country": "us",
"zip_code": 19087,
"full_time_employees": "51-200",
"company_type": "Private",
"company_category": "Finance & Investment",
"revenue_source": "Financial Services",
"business_model": "Business to Business",
"social_impact": "Small Business Owners",
"description": "The company mission is to provide finance to small business. We also provide financing to small business with bad credit too on the basis of future credit.",
"description_short": "48 Factoring Inc. is one of the best financial services company using unique factoring 2.0 financial product which helps business to grow.",
"source_count": "11-50",
"data_types": "Business",
"example_uses": "",
"data_impacts": "[u'Cost efficiency', u'Job growth', u'Revenue growth']",
"financial_info": "",
"last_updated": "2015-05-18 11:36:39.902880"
},
{
"company_name_id": "5psolutions",
"company_name": "5PSolutions",
"url": "www.5psolutions.com",
"year_founded": 2007,
"city": "Fairfax",
"state": "VA",
"country": "us",
"zip_code": 22003,
"full_time_employees": "1-10",
"company_type": "Private",
"company_category": "Data/Technology",
"revenue_source": "Subscriptions, User fees for web or mobile access",
"business_model": "Business to Business, Business to Consumer, Business to Government",
"social_impact": "",
"description": "At 5PSolutions, we wish to make all basic information of different categories easily available to via tablets or phones.",
"description_short": "5PSolutions are artisans of mobile platforms.",
"source_count": "NA",
"data_types": "",
"example_uses": "",
"data_impacts": "[]",
"financial_info": "",
"last_updated": "2014-11-12 15:09:35.485949"
},
{
"company_name_id": "abt-associates",
"company_name": "Abt Associates",
"url": "abtassoc.com",
"year_founded": 1965,
"city": "Cambridge",
"state": "MA",
"country": "us",
"zip_code": 2138,
"full_time_employees": "1,001-5,000",
"company_type": "Private",
"company_category": "Research & Consulting",
"revenue_source": "Data analysis for clients, Database licensing",
"business_model": "",
"social_impact": "",
"description": "Abt Associates is a mission-driven, international company conducting research and program implementation in the fields of health, social and environmental policy, and international development. The company has multiple offices in the U.S. and program offices in more than 40 countries.",
"description_short": "Abt Associates is a mission-driven, global leader in research and program implementation in the fields of health, social and environmental policy, and international development.",
"source_count": "101+",
"data_types": "",
"example_uses": "",
"data_impacts": "[]",
"financial_info": "Employee-owned company. $552M/year.",
"last_updated": "2014-09-11 17:23:21.390289"
},
{
"company_name_id": "accela",
"company_name": "Accela",
"url": "http://www.accela.com",
"year_founded": 1999,
"city": "San Ramon",
"state": "CA",
"country": "us",
"zip_code": 94583,
"full_time_employees": "501-1,000",
"company_type": "Private",
"company_category": "Governance",
"revenue_source": "Not reported by company",
"business_model": "Business to Consumer",
"social_impact": "Citizen engagement and participation, Good governance, Public safety",
"description": "Accela powers thousands of services and millions of transactions for more than 500 public agencies worldwide, enabling governments to connect with citizens and streamline processes related to land management, asset management, licensing, and public health & safety. Accela addresses a broad range of agency, business and citizen needs, and includes built-in payment, scheduling, compliance and information transparency. Together with our partners, Accela can custom-tailor solutions based on precise agency specifications, or deploy packaged solutions based on best practice templates and pre-defined services in a matter of a few weeks.",
"description_short": "Accela improves citizen engagement by making it easier to do government business, driving civic innovation and improving transparency, accuracy and accountability.",
"source_count": "101+",
"data_types": "Health/Healthcare, Housing, Public Safety",
"example_uses": "",
"data_impacts": "[]",
"financial_info": "",
"last_updated": "2014-09-16 16:30:49.172802"
},
{
"company_name_id": "accenture",
"company_name": "Accenture",
"url": "http://www.accenture.com/us-en/pages/index.aspx",
"year_founded": 1989,
"city": "Chicago",
"state": "IL",
"country": "us",
"zip_code": 60601,
"full_time_employees": "10,001+",
"company_type": "Public",
"company_category": "",
"revenue_source": "Not reported by company",
"business_model": "Business to Business",
"social_impact": "",
"description": "Accenture delivers its services and solutions through 19 focused industry groups in five operating groups. This industry focus provides Accenture’s professionals with a thorough understanding of industry evolution, business issues and applicable technologies, enabling Accenture to deliver solutions tailored to each client's industry.",
"description_short": "Accenture provides management consulting, technology and outsourcing services.",
"source_count": "NA",
"data_types": "Health/Healthcare",
"example_uses": "",
"data_impacts": "[]",
"financial_info": "",
"last_updated": "2014-09-18 15:44:37.967430"
},
];

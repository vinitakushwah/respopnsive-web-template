

const alldata = {
  Security_Audit: [
    { "name": "Please introduce yourself and explain your role in the company." },
    { "name": "What is the status and update process  of your IT infrastructure security policy?" },
    { "name": "How are access privileges in your organization granted?" },
    { "name": "What methods do you use to protect your data?" },
    { "name": "What is the status and update process of your disaster recovery plan?" },
    { "name": "How are employees updated on existing security procedures and policies?" }
  ],

  general: [
    { "name": "Please introduce yourself and describe briefly your background?" },
    { "name": "How did you hear about this position?" },
    { "name": "What type of work environment do you prefer?" },
    { "name": "How do you deal with pressure or stressful situations?" },
    { "name": "Do you prefer working independently or in a team?" },
    { "name": "When you’re balancing multiple projects, how do you keep yourself organized?" },
    { "name": "What did you do in the last year to improve your knowledge?" },
    { "name": "What are your salary expectations?" },
    { "name": "Are you applying for other jobs?" },
    { "name": "From your resume it seems you took a gap year. Please explain why that was?" },
    { "name": "What are your career goals?" },
  ],
  security1: [
    { "name": "Please introduce yourself and describe briefly your role in the organization?" },
    { "name": "What is the nature of the security problem, as it has been observed so far?" },
    { "name": "What groups or organizations were affected by the incident? Are they aware of the incident?" },
    { "name": "What IT infrastructure components (servers, websites, networks, etc.) are directly affected by the incident?" },
    { "name": "What applications and data processes make use of the affected IT infrastructure components?" },
    { "name": "Are you aware of compliance or legal obligations tied to the incident? (e.g., PCI, breach notification laws, etc.)" },
    { "name": "How accurately did the vendor's implementation team translate your requirements into the solution design? How was that achieved?" },
    { "name": "Does the affected IT infrastructure pose any risk to other organizations?" }
  ],
  security2: [
    { "name": "Please introduce yourself and describe briefly your role in the organization?" },
    { "name": "What analysis actions were taken to during the initial survey when qualifying the incident?" },
    { "name": "What commands or tools were executed on the affected systems as part of the initial survey?" },
    { "name": "How long has your organization been using the software, with how many users and in which geographies?" },
    { "name": "What measures were taken to contain the scope of the incident? (e.g., disconnected from the network)" },
    { "name": "What alerts were generated by the existing security infrastructure components? (e.g., IDS, anti-virus, etc.)" },
    { "name": "If logs were reviewed, what suspicious entries were found? What additional suspicious events or state information, was observed?" },
    { "name": "What mechanisms did the response team follow  to communicate the handlings of the incident? (e.g., email, phone conference, etc.)" },
    { "name": "What was the schedule of internal and external progress updates and who was responsible for leading them?" },
    { "name": "Who conducted the “in the field” examination of the affected IT infrastructure and was what observed?" }
  ],
  vendor1: [
    { "name": "Please introduce yourself and describe briefly your role in the organization?" },
    { "name": "How do you assess your cybersecurity posture and with what frequency?" },
    { "name": "Please explain the status of your information security awareness program?" },
    { "name": "Please explain the status and update process of your business continuity plan?" },
    { "name": "What regulatory compliance standards does your organization maintain?" },
    { "name": "What are your key data and information security policies and procedures?" },
    { "name": "How does your organization mantains network security?" }
  ],
  vendor2: [
    { "name": "Please introduce yourself and describe briefly your role in the organization?" },
    { "name": "Describe the geographical location/key countries you operate in. Please provide details of operations in emerging markets." },
    { "name": "What does the company consider to be the material risks and opportunities in relation to ESG for the business?" },
    { "name": "What is management’s view of the overall maturity status of its existing ESG policies, processes and systems?" },
    { "name": "Have you assigned a designated point person for day-to-day ESG matters? Please provide details." },
    { "name": "Do you provide ESG training to staff? If so please provide details of the type of training, how often, whether it includes senior management." },
    { "name": "Have you established an ESG committee/steering committee to monitor performance and if so who is it chaired by and how often does it meet?" },
    { "name": "Please summarise the key ESG issues which are included within the corporate risk register." },
    { "name": "Please describe arrangements in place for monitoring and reporting ESG issues and performance to senior management/the Board. In your response please confirm what KPIs are monitored (if any) and how frequently reporting is undertaken and how information is collated and stored (e.g. use of IT systems etc.?)" },
    { "name": "Does the company have an environmental policy which sets out clear commitments and targets to improve the company’s environmental footprint? Please provide details and indicate who in the organisation signs off the policy." },
    { "name": "Please provide details of who is responsible for environmental management on a day-to-day basis including key roles and responsibilities," },
    { "name": "Provide details of any significant projects/initiatives that have been implemented to improve environmental performance/standards/compliance at the company." },
    { "name": "Provide details of any serious incidents/regulatory breaches in the last 3 years. In your answer, provide details of the nature of the incident, what improvements were made/lessons learnt and whether there was any regulatory action (enforcement/prosecution/quantity of fine)." },
    { "name": "What are the company’s primary energy (e.g. gas, coal, diesel, heating oil, electricity) and water sources (river/lake or groundwater extraction, public mains) and what initiatives/plans (if any) have been put in place to monitor, reduce consumption and improve efficiencies?" },
    { "name": "Please explain how the company assesses contaminated land risks in the acquisition of new assets." },
    { "name": "Provide details of key waste streams generated and how these are managed/disposed of, including any particular waste management initiatives that have been implemented to minimise or reuse/ recycle wastes." },
    { "name": "Describe any chemicals/hazardous substances used or present on site, including storage and handling arrangements (drums, tanks, aboveground/underground storage etc.)." },
    { "name": "Is the company considering the use of more environmentally friendly and safer raw materials/ chemicals in the production process? How is this being addressed?" },
    { "name": "How is corporate governance managed across the company and its operations? Please provide details of any associated key policies." },
    { "name": "What does the organization currently do to safeguard against illegal practices?" }
  ],

  offline_meet: [
    { "name": "Please provide a detailed update of the current week's activities and accomplishments?" },
    { "name": "Please provide a 30 second summary update of the current week's activities and accomplishments?" },
    { "name": "Please provide details on the planned activities and priorities for next week?" },
    { "name": "Please provide a 30 sec summary on the planned activities and priorities for next week?" },
    { "name": "Any existing roadblocks or help needed?" }
  ],

  SampQuestion2: [
    { "name": "Please introduce yourself and what is your professional relationship to the candidate and how did it begin?" },
    { "name": "How long did you work with the candidate and what positions did you both hold while your worked with the candidate?" },
    { "name": "What were the candidate’s responsibilities while working at your company and how did these responsibilities change over time?" },
    { "name": "If you had the opportunity, would you re-hire this job candidate? Why?" },
    { "name": "What are the candidate’s biggest strengths and weaknesses?" },
    { "name": "What are the candidate’s professional strengths and how were they an asset for the team and your company?" },
    { "name": "Please tell me what it’s like to work with the job candidate." },
    { "name": "What advice would you give to successfully manage the job candidate?" },
    { "name": "Is there anything else you like to share about the candidate that hasn't been asked?" },
    { "name": "What are the most challenging aspects of the role that the candidate held and the work that the candidate did at your company?" },
    { "name": "How would you describe the candidate’s reliability and dependability?" },
    { "name": "What was one of the candidate’s most memorable accomplishments while working with you?" },
    { "name": "What type of work environment do you think the candidate would be most likely to thrive in, and why?" },
    { "name": "Would you recommend this candidate?" },

  ],

  SampQuestion3: [
    { "name": "Please introduce yourself and what is your relatioship with the candidate." },
    { "name": "How long did the candidate work for you?" },
    { "name": "What were the candidates job duties and responsibilities?" },
    { "name": "How old was the person the candidate cared for?" },
    { "name": "Were you satisfied with the candidates job performance? Why or why not?" },
    { "name": "Did you feel like you were always informed of what was going on while the candidates was caring for patients?" },
    { "name": "Were they always reachable while they were working for you?" },
    { "name": "Were they punctual, and did that continue to be the case the entire time they worked for you?" },
    { "name": "Does this person work well independently?" },
    { "name": "Did this person show initiative?" },
    { "name": "What were some areas in which they could improve?" },
    { "name": "What was your child’s or relative’s (whomever was cared for) feedback about this person?" },
    { "name": "Tell me one of the great things they used to do with your kids or loved one?" },
    { "name": "Did you get the feeling that this person was enthusiastic and happy about doing this job?" },
    { "name": " What did this person do to keep the person or people in their care active? (Talk to them, read stories, play music, go for walks, etc. This will help you get an idea of what the day-to-day activities might look like." },
    { "name": "What was your favorite thing about working with this person?" },
    { "name": "Is there anything we should know as a future potential employer of this person, either personality-wise or compensation-wise or behaviorally?" },
  ],

  SampQuestion4: [
    { "name": "Please introduce yourself and provide some background on your relationship with the realtor?" },
    { "name": "What was the purpose of hiring a realtor, and did you make your selection?" },
    { "name": "How well did the realtor market your home? Please provide any examples that stood out." },
    { "name": "Did the realtor work alone or was a team involved. Please describe your experience in either situation." },
    { "name": "How well were you kept informed about progress? How satisfied were you with the realtor's communication?" },
    { "name": "Please describe your experience working with the realtor during the stages of listing, showing and closing?" },
    { "name": "On a scale of 1 – 10, with 10 being the highest, how satisfied are you with the realtor?" },
  ],

  SampQuestion5: [
    { "name": "Please introduce yourself and provide some background on the tenant and the property, incl length of lease agreement and type of property." },
    { "name": "How much was the monthly rent and was rent paid on time and in full?" },
    { "name": "Did the tenant take care of the property? Anything that stood out?" },
    { "name": "How did the tenant communicate with you?" },
    { "name": "On a scale of 1 – 10, with 10 being the highest, how satisfied are you with the tenant?" },
    { "name": "Would you rent to this tenant again?" },
  ],

  SampQuestion6: [
    { "name": "Please introduce yourself and provide some background on your relationship with the financial advisory, how did you get connected? How long have you been a client?" },
    { "name": "Has the advisor been very clear about explaining how he or she gets paid?" },
    { "name": "Does your advisor have discretionary authority, which allows him or her to invest, transfer or otherwise act on your money without prior consent? Or does the advisor seek your approval and understanding before initiating each and every transaction?" },
    { "name": "How would you rate the level of communication? Do you feel you are adequately educated so you can make informed decisions?" },
    { "name": "Is there anything you would change or wish you could improve in your advisory relationship." },
    { "name": "How would you rate the level of communication? Do you feel you are adequately educated so you can make informed decisions?" },
    { "name": "How satisfied have you been with the performance of the advisor?" },
    { "name": "What additional advice do you have in working with the advisor?" },
    { "name": "On a scale of 1 – 10, with 10 being the highest, how satisfied are you with the advisor?" },

  ],

  SampQuestion7: [
    { "name": "Please introduce yourself and provide some background on your relationship with contractor?" },
    { "name": "What kind of work did the contractor do for you?" },
    { "name": "How did you select the contractor and did you check credentials?" },
    { "name": " Did you have a clear idea of what the contractor was going to do?" },
    { "name": "Please describe your experience working with the contractor? How well did the contractor respond to questions or change requests and were you satisfied with the results?" },
    { "name": "How satisfied have you been with regards to staying in budget and meeting the timeline?" },
    { "name": "What additional advice do you have in working with contractor?" },
    { "name": "On a scale of 1 – 10, with 10 being the highest, how satisfied are you with the contractor?" },
    { "name": "Would you hire the contractor again?" },
  ],

  SampQuestion8: [
    { "name": "Please introduce yourself and What is your company’s past and current relationship with service provider?" },
    { "name": "When and why did you decide to contract with service provider? What was your organization hoping to achieve?" },
    { "name": "Please describe the service provider engagement with regards to project scope, team composition onshore and offshore, and roles & responsibilities." },
    { "name": "How long did it take the service provider to complete the engagement?" },
    { "name": "What were your resource requirements for the service provider engagement in terms of people assigned and related time commitment? What tasks were you responsible for completing during the engagement?" },
    { "name": "Did service provider follow a methodology and/or leverage specific accelerators, templates and best practices in support of the project?" },
    { "name": "What was the process to manage scope, time and budget during the project?" },
    { "name": "On a scale of 1 – 10, with 10 being the highest, how satisfied are you with the contractor?" },
    { "name": "How did service provider maintain clear communications and effective project management during the engagement lifecycle - and what could have been done better?" },
    { "name": "Please describe your experience during go live and the subsequent support process? How well did service provider respond to help or issue requests and were you satisfied with the results?" },
    { "name": "How satisfied have you been with service provider with regards to meeting milestones, issuing change orders and changing key personal?" },
    { "name": "How well does the solution perform from a technical and functional perspective vs. your expectations?" },
    { "name": "What significant benefits have you realized since the engagement completion? What has the return on investment (ROI) been so far?" },
    { "name": "How flexible has service provider been in terms of handling challenges and conflict situations on the project? Please provide an example." },
    { "name": "Did service provider properly scope the engagement and understand your objectives, needs and preferences?" },
    { "name": "Are the actual service cost inline with what you planned for in the beginning of the engagement?" },
    { "name": "Would you hire the contractor again?" },
    { "name": "How satisfied are you with the speed of the engagement and did the total time spent meet your initial expectations?" },
    { "name": " Was the team delivering your project the same as proposed during contracting, and did the team meet your expectations in terms of skill, experience and flexibility?" },
    { "name": "What additional advice do you have in working with service provider?" },
    { "name": "If there was one thing you could have changed about service provider in the performance of the engagement, what would it be?" },
    { "name": " One a scale of 1 – 10, with 10 being the highest, how satisfied are you with service provider as your vendor?" },
  ],

  SampQuestion9: [
    { "name": "Please introduce yourself and when and why did you decide to look for software provided by the vendor? What was your organization hoping to achieve?" },
    { "name": "What other vendor products did you consider and how did you conduct the software selection process?" },
    { "name": " Why did you decide to go with the software vendor and which modules of the vendor's software plaform  incl. software version did you choose to buy?" },
    { "name": "How long has your organization been using the software, with how many users and in which geographies?" },
    { "name": "Please describe the software implementation project with regards to implementation scope, team composition and roles & responsibilities. How long did it take to implement the system?" },
    { "name": " What were your resource requirements for the implementation (e.g. time, people, etc)? What tasks were you responsible for completing during the implementation?" },
    { "name": "How well did the vendor's implementation team understand your industry and your specific business needs?" },
    { "name": "How accurately did the vendor's implementation team translate your requirements into the solution design? How was that achieved?" },
    { "name": "How did the vendor maintain clear communications and effective project management during the implementation lifecycle? What could the vendor have done better?" },
    { "name": "Have you done any custom development or modifications, to enhance the standard functionality of the software? If yes, why and how?" },
    { "name": "How well did the vendor build and test the system? Did you experience any surprises or what could the vendor have done better?" },
    { "name": "How did the software provider team prepare your user communty from a change management and training perspective? What feedback have you gotten from your users?" },
    { "name": "Please describe your experience during go live and the subsequent support process? How well did the vendor respond to help or issue requests and were you satisfied with the results?" },
    { "name": "How satisfied have you been with the software provider with regards to: staying in budget, issuing change orders, meeting milestone and changing key personal?" },
    { "name": "How well does the system perform vs. your expectations - from a technical and functional perspective? Are there any workarounds to use that you did not know about beforehand?" },
    { "name": " How much time, resources and expertise does it take your organisation to manage the software system?" },
    { "name": "What significant benefits have you realized since implementing the system? What has the return on investment (ROI) been so far?" },
    { "name": " What would you do differently with regards to software selection, implementation or support?" },
    { "name": "What additional advice do you have in working with the software provider?" },
    { "name": "If there was one thing you could have changed about the vendor in the performance of the engagement, what would it be?" },
    { "name": "On a scale of 1 – 10, with 10 being the highest, how satisfied are you with the software provider as your vendor?" },
  ]
};

var genral_head= document.getElementById('genral_head');
var security_btn = document.getElementById("security_btn");
var incident_head = document.getElementById('incident_head');
var it_Security = document.getElementById('IT_head');
var esg = document.getElementById('Esg_head');
var meeting_data = document.getElementById('meeting_head');


// for open accordion on select Option value

function selectedvalue() {

  var select = document.getElementById('select').value;
  // console.log(select);

 if(select == "Hiring"){
  security_btn.style.display = 'none';
  incident_head.style.display = 'none';
  it_Security.style.display = 'none';
  esg.style.display = 'none';
  meeting_data.style.display = 'none';
    let myCollapse = document.getElementById('flush-collapseTwo')
    let collapseOne = document.getElementById('flush-collapseOne')
    let bsCollapse = new bootstrap.Collapse(myCollapse, {
      toggle:true

    } 
   
    )
  }
  else if(select == "Compilance"){
    incident_head.style.display = 'none';
    it_Security.style.display = 'none';
    esg.style.display = 'none';
    meeting_data.style.display = 'none';
    genral_head.style.display = 'none';
    let myCollapse = document.getElementById('flush-collapseOne')
    let bsCollapse = new bootstrap.Collapse(myCollapse, {
      toggle:true
    })
  }

  else if(select == "Security"){
    security_btn.style.display = 'none';
    it_Security.style.display = 'none';
    esg.style.display = 'none';
    meeting_data.style.display = 'none';
    genral_head.style.display = 'none';
    let myCollapse = document.getElementById('flush-collapsefour')
    let bsCollapse = new bootstrap.Collapse(myCollapse, {
      toggle:true
    })
  }

  else if(select == "Vendor Managment"){
    security_btn.style.display = 'none';
    it_Security.style.display = 'none';
    meeting_data.style.display = 'none';
    genral_head.style.display = 'none';
    incident_head.style.display = 'none';
    let myCollapse = document.getElementById('flush-collapsesix')
    let bsCollapse = new bootstrap.Collapse(myCollapse, {
      toggle:true
    })
  }
  else if(select == "Offline Meeting"){
    it_Security.style.display = 'none';
    meeting_data.style.display = 'none';
    genral_head.style.display = 'none';
    incident_head.style.display = 'none';
    security_btn.style.display = 'none';

    let myCollapse = document.getElementById('flush-collapseseven')
    let bsCollapse = new bootstrap.Collapse(myCollapse, {
      toggle:true
    })
  }
};


var accordion = document.getElementsByClassName('accordion');
var accordionheader = document.getElementById('flush-headingOne');
var accordionbody1 = document.getElementById('accordianbody1');

// for getsecurity question
var securityaudit = alldata.Security_Audit;
securityauditlength = securityaudit.length;
// console.log(securityauditlength)
getsecurity_audit();
function getsecurity_audit() {
  let Securityaudit = document.getElementById('Securityaudit')
  let listquestion = '';

  // console.log(securityaudit)
  for (let i = 0; i < securityauditlength; i++) {
    let securitydata = securityaudit[i].name;
    // var listquestion ;

    listquestion +=
      `<li>${securitydata}</li>`
  }
  // console.log(listquestion);
  if (listquestion) {
    Securityaudit.innerHTML = listquestion;
  }
};


// for genral question
var hiring = alldata.general;
var hiringlength = hiring.length;
gethiring();
function gethiring() {
  let genral = document.getElementById('genral');
  let listquestion = "";
  for (let i = 0; i < hiringlength; i++) {
    let hiringdata = hiring[i].name;
    // console.log(hiringdata);
    listquestion += `<li>${hiringdata}</li>`
  }
  if (listquestion) {
    genral.innerHTML = listquestion;
  }
};

var security2 = alldata.security2;
var securitylength = security2.length;
// for incident response review
getsecurity_2()
function getsecurity_2() {
  Response_Review = document.getElementById('Response_Review');
  let listquestion = "";
  for (let i = 0; i < securitylength; i++) {
    let security2data = security2[i].name;
    listquestion +=
      `<li>${security2data}</li>`
  }
  if (listquestion) {
    Response_Review.innerHTML = listquestion;
  }
};


// for IT security due diligence

var vandorm = alldata.vendor1;
var vandorlength = vandorm.length;
vandor1();
function vandor1() {
  let IT_Security = document.getElementById('IT_Security');
  let listquestion = "";
  for (let i = 0; i < vandorlength; i++) {
    let vendorm_1 = vandorm[i].name;
    listquestion += `<li>${vendorm_1}</li>`
  }
  if (listquestion) {
    IT_Security.innerHTML = listquestion;
  }

};

// for Esg due diligence

var vandor = alldata.vendor2;
var vandor_length = vandor.length;
vandor2();
function vandor2() {
  let Esg_Due = document.getElementById('Esg_Due');

  let listquestion = "";
  for (let i = 0; i < vandor_length; i++) {

    let vendorm_2 = vandor[i].name;
    listquestion += `<li>${vendorm_2}</li>`
  }
  if (listquestion) {
    Esg_Due.innerHTML = listquestion;
  }
};


// for weekly status meeting

var status_meeting = alldata.offline_meet;
var status_meetlength = status_meeting.length;

meeting();
function meeting() {
  let Status_Meeting = document.getElementById('Status_Meeting');
  let listquestion = "";
  for (let i = 0; i < status_meetlength; i++) {
    let meet = status_meeting[i].name;
    listquestion += `<li>${meet}</li>`
  }
  if (listquestion) {
    Status_Meeting.innerHTML = listquestion
  }
};












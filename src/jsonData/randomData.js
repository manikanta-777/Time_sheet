function generateRandomDate() {
    const start = new Date(2022, 0, 1);
    const end = new Date(); 
    const randomDate = new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
    return randomDate.toISOString().split('T')[0];
  }
  
  function generateRandomData() {
    const candidateData=[{userName:'Mani', domain:'Python'},{userName:'John', domain:'Web Development'},{userName:'Alice', domain:'Python'},{userName:'Bob', domain:'Data Science'},{userName:'Charlie', domain:'IoT'},{userName:'Olivia', domain:'Python'},
    {userName:'David', domain:'SAP'},{userName:'Emma', domain:'Machine Learning'},{userName:'Frank', domain:'Data Science'},{userName:'Grace', domain:'IoT'}]
    const statuses = ['Pending', 'Approved', 'Rejected', 'Clarification Pending'];
  
    const data = [];
  
    for (let i = 0; i < 100; i++) {
      const index = Math.floor(Math.random() * candidateData.length)
      const entry = {
        id:i+1,
        name: candidateData[index].userName,
        domain: candidateData[index].domain,
        department: 'IT',
        company: 'Rapid Tech Serv.',
        weekEnding: generateRandomDate(),
        totalHours: Math.floor(Math.random() * (60 - 20 + 1)) + 20,
        submissionDate: generateRandomDate(),
        status: statuses[Math.floor(Math.random() * statuses.length)],
      };
  
      data.push(entry);
    }
  
    return {data,candidateData};
  }
  
  export default generateRandomData
//   const jsonData = generateRandomData();
//   console.log(jsonData);

  
// A mock function to mimic making an async request for data
export function createLawyer(lawyerData) {
  return new Promise(async (resolve) => {
    const response = await fetch('http://localhost:8080/lawyers', {
      method: 'POST',
      body: JSON.stringify(lawyerData),
      headers: { 'content-type': 'application/json' }
    })
    const data = await response.json();
    // TODO: on server it will only return some info of user (not password)
    resolve({ data })
  });
}


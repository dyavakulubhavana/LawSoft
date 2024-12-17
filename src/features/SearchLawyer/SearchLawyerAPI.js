// A mock function to mimic making an async request for data
export function fetchLawyers() {
  return new Promise(async (resolve) =>{
    const response = await fetch('http://localhost:8080/lawyers');
    const data = await response.json();
    resolve({data})
  });
}

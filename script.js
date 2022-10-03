class Functionalities {
  async fetchDetail(url) {
    const API = "https://lets-preview.herokuapp.com/api/url?url=";
    try {
      const response = await fetch(API + url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  }
}
const FunctionalitiesClass = new Functionalities();

async function handleSubmit(event) {
  event.preventDefault();
  const url = event.target[0].value;
  const data = await FunctionalitiesClass.fetchDetail(url);
  console.log(data);
}

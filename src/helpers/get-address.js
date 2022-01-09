export async function getAddress(ip){
    const response = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_zxBW24vpVKakPg8wSY0wzK0zgntCo&ipAddress=${ip}`);

    return await response.json();
}
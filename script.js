async function fetchData() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1', {
        
    });
    const record = await res.json();
    document.getElementById("user_id").innerHTML = JSON.stringify(record.userId);
    document.getElementById("id").innerHTML = JSON.stringify(record.id);
    document.getElementById("title").innerHTML = JSON.stringify(record.title);
    document.getElementById("completed").innerHTML = JSON.stringify(record.completed);
}
fetchData().then(() => console.log("Data fetched")).catch((err) => console.log(err));

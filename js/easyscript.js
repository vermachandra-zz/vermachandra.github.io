document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getAPI);

function getText() {
    fetch('text.txt')
        .then(function (res) {
            return (res.text()).then(function (data) {
                document.getElementById('output').innerHTML = data;
            });
        }).catch(function (rej) {
            document.getElementById('output').innerHTML = rej;
        })
}


function getJson() {
    fetch('posts.json')
        .then(function (res) {
            return res.json();
        })
        .then(function (data) {
            let output = '';
            data.forEach(function (post) {
                output += `<li>${post.id} ${post.name} </li>`
            })
            document.getElementById('output').innerHTML = output;
        })
        .catch(function(error){
            document.getElementById('output').innerHTML = error;
        })
}


function getAPI()
{
    fetch('https://api.github.com/users')
    .then(function (res){
        return(res.json());
    })
    .then(function(data){
        let output = '';
        let counter = 1;
        data.forEach(function(user){
            output += `<li>${counter} ${user.id} ${user.login} </li>`
            counter ++;
        })
        document.getElementById('output').innerHTML = output;
    })
    .catch(function(err){
        document.getElementById('output').innerHTML = err;
    })
}
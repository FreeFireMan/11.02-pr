/* 1  є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі. створити скрипт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці. Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться. */
/*let content = document.getElementById('content');
let ul = document.createElement('ul');
    for (let i = 0; i < document.getElementsByTagName('h2').length; i+=0) {
        let li = document.getElementsByTagName('h2')[i];
        ul.append(li);
    }

content.append(ul); */

/* 2 Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок. Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html */
/*let rules = [
    {
        title: 'Первое правило Бойцовского клуба.',
        body: 'Никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Второе правило Бойцовского клуба.',
        body: 'Никогда никому не рассказывать о Бойцовском клубе.'
    },
    {
        title: 'Третье правило Бойцовского клуба.',
        body: 'В схватке участвуют только двое.'
    },
    {
        title: 'Четвертое правило Бойцовского клуба.',
        body: 'Не более одного поединка за один раз.'
    },
    {
        title: 'Пятое правило Бойцовского клуба.',
        body: 'Бойцы сражаются без обуви и голые по пояс.'
    },
    {
        title: 'Шестое правило Бойцовского клуба.',
        body: 'Поединок продолжается столько, сколько потребуется.'
    },
    {
        title: 'Седьмое правило Бойцовского клуба.',
        body: 'Если противник потерял сознание или делает вид, что потерял, или говорит «Хватит» — поединок окончен.'
    },
    {
        title: 'Восьмое и последнее правило Бойцовского клуба.',
        body: 'Новичок обязан принять бой.'
    },
];
let wrap = document.createElement('div');
wrap.classList.add('wrap');
document.body.prepend(wrap);
for (const rule of rules) {
    let rules = document.createElement('div');
    rules.classList.add('rules');
    wrap.append(rules);

    let title = document.createElement('div');
    title.innerText = rule.title
    title.classList.add('title');
    rules.append(title);
    let body = document.createElement('div');
    body.innerText = rule.body;
    body.classList.add('body');
    rules.append(body);
} */

/* 3 *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі users. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт в свій блок (блок в блоці). */
/*fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(result => {
        for (const user of result) {
            let div = document.createElement('div');

            div.innerText = `${user.id}, ${user.name}, ${user.username}, ${user.email}, ${user.phone}, ${user.website},`

                let divAddress = document.createElement('div');
                divAddress.innerText = `address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}, geo: ${user.address.geo.lat}, ${user.address.geo.lng},`;
                div.append(divAddress);

                let divCompany = document.createElement('div');
                divCompany.innerText = `company: ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`
                div.append(divCompany);
            
            document.body.appendChild(div);
        }
    }) */

/* 4 *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі posts. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці). */
/*fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(result => {
        for (const post of result) {
            let div = document.createElement('div');
            div.innerText = `${post.userId}, ${post.id}, ${post.title}, ${post.body}`
            document.body.appendChild(div);
        }
    }) */

/* 5 *** за допомогою fetch (як в прикладі) отримати від jsonplaceholder всі comments. За допомогою document.createElement вивести їх в браузер. Помістити кожен окремий об'єкт в блок, при цьому кожен внутрішній об'єкт(якщо він існує) в свій блок (блок в блоці). */
/*fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(result => {
        for (const comment of result) {
            let div = document.createElement('div');
            div.innerText = `${comment.postId}, ${comment.id}, ${comment.name}, ${comment.email}, ${comment.body}`
            document.body.appendChild(div);
        }
    }) */

/* 6 ****** при помощи fetch (как в примере) получить от jsonplaceholder все posts. Внутри последнего then() сделать еще один fetch который сделает запрос и получит все comments. Объеденить соответсвующий post с соответсвующими comment и вывести в браузер. Подсказка : в каждом comment есть поле postId которое определяет какой комментарий принадлежит какому посту
© 2021 GitHub, Inc. */
/*fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(resultPosts => {
        fetch('https://jsonplaceholder.typicode.com/comments')
            .then(response => response.json())
            .then(resultComments =>{
                for (const post of resultPosts) {
                    for (const comment of resultComments) {
                        if (post.id === comment.postId) {
                            let div = document.createElement('div');
                            div.innerText = `Post: ${post.userId}, ${post.id}, ${post.title}, ${post.body}. Comment: ${comment.postId}, ${comment.id}, ${comment.name}, ${comment.email}, ${comment.body}.`;
                            document.body.appendChild(div);
                        }
                    }
                }
            })
    }) */
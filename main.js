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


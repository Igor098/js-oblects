const hero = {
    name: 'Алексей',
    age: 8,
    intellect: 10,
    communicationSkills: 4,
    creativeSkills: 3,
    socialSkills: 4,
    health: 100
}

const school = (obj) => {
    [...Array(11)].forEach((element) => {
        obj.age ++;
        obj.intellect ++;
        obj.communicationSkills ++;

        //Открыл в себе страсть к программированию после того, как сломал школьный компьютер
        if (obj.age === 10){
            obj.intellect += 2;
            obj.creativeSkills += 2;
        }

        //Лучший друг по школе – Миша
        if (obj.age === 12){
            obj.friends = ['Миша'];
            obj.socialSkills += 2;
        }

        //Родители переживают развод
        if (obj.age === 14){
            obj.emotionalResilience = 2;
            obj.socialSkills --;
            obj.health -= 4;
        }

        //Влюбился в одноклассницу Аню
        if (obj.age === 16){
            obj.communicationSkills += 2;
            obj.emotionalResilience += 2;
            obj.health = obj.health + 5 ? obj.health += 5 <= 100 : obj.health = 100;
        }

        //Разрыв отношений
        if (obj.age === 17){
            obj.communicationSkills += 2;
            obj.socialSkills --;
            obj.health -= 10;
        }

        // Поступление в универ
        if (obj.age === 18){
            obj.intellect += 2;
            obj.socialSkills += 2;
        }
    })
    return obj;
}

const university = (obj) => {
    [...Array(4)].forEach((element) => {
        obj.age ++;
        obj.intellect ++;
        obj.communicationSkills ++;

        // Начал первые серьезные отношения с девушкой Настей, но вскоре они расстались из-за разных взглядов на жизнь.
        if (obj.age === 19){
            obj.emotionalResilience += 2;
            obj.socialSkills -= 2;
            obj.health -= 4;
        }

        //Увлекается созданием игр, выигрывает студенческий конкурс с вероятностью 50%
        if (Math.floor(Math.random() * 10) >= 5){
            obj.creativeSkills += 2;
            obj.intellect ++;
        }

        //Новый друг - Арсений
        if (obj.age === 20){
            obj.friends.push('Арсений');
            obj.socialSkills += 2;
            obj.communicationSkills ++;
            obj.health = obj.health + 6 ? obj.health += 6 < 100 : obj.health = 100;
        }

        //Заканчивает универ с отличием с вероятностью 70%
        if (obj.age === 21){
            if (Math.floor(Math.random() * 10) >= 3){
                obj.intellect += 5;
                obj.creativeSkills += 5;
                obj.health -= 5;
            } else {
                obj.intellect += 2;
                obj.creativeSkills += 1;
            }
        }
    })
    return obj;
}

const career = (obj) => {
    [...Array(8)].forEach((element) => {
        obj.age ++;

        //Получает работу в крупной игровой студии. Там встречает свою будущую жену Ольгу.
        if (obj.age === 23){
            obj.emotionalResilience += 2;
            obj.socialSkills += 2;
            obj.communicationSkills ++;
        }

        //Женится на Ольге.
        if (obj.age === 24){
            obj.emotionalResilience += 2;
            obj.wife = 'Ольга';
            obj.socialSkills ++;
            obj.health = obj.health + 5 ? obj.health += 5 <= 100 : obj.health = 100;
        }

        //Работает над крупным игровым проектом, который становится успешным с вероятностью 30%.
        if (Math.floor(Math.random() * 10) >= 7){
            obj.creativeSkills += 2;
            obj.health -= 20
        }

        //У Алексея и Ольги рождается сын, Никита.
        if (obj.age === 28){
            obj.childs = ['Никита'];
            obj.socialSkills += 3;
            obj.emotionalResilience += 2;
            obj.health = obj.health + 10 ? obj.health += 10 < 100 : obj.health = 100;
        }
    })
    return obj;
}

console.log(career(university(school(hero))))
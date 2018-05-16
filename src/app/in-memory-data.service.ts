import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Машинка 80х', iurl: 'assets/catalog/80х.jpg' },
      { id: 11, name: 'Домик-полка', iurl: 'assets/catalog/Домик-полка.jpg', isecurl: 'assets/catalog/80х.jpg', description: 'Детский домик изготавливается из одного мебельного щита за несколько часов. Домик так же используется в качестве полки.<br>Инструкция включает в себя:<br>1. Полный список материалов<br>2. Пример раскройки мебельного щита<br>3. Список заготовок с размерами<br>4. Подробные чертежи всех деталей с размерами<br>5. 3D модели всех деталей<br>6. 3D схема сборки<br>7. Советы по изготовлению деталей<br>8. Рекомендации по финишной обработке'},
      { id: 12, name: 'Комплекс', iurl: 'assets/catalog/Комплекс.jpg' },
      { id: 13, name: 'Спортивная машинка', iurl: 'assets/catalog/Спортивная.png' },
      { id: 14, name: 'Лампа', iurl: 'assets/catalog/Лампа.jpg' },
      { id: 15, name: 'Лошадка', iurl: 'assets/catalog/Лошадка.png' },
      { id: 16, name: 'Ретро', iurl: 'assets/catalog/Ретро.png' },
      { id: 17, name: 'Скворечник', iurl: 'assets/catalog/Домик-полка-копия.jpg' },
      { id: 17, name: 'Скворечник', iurl: 'assets/catalog/Лампа-копия.jpg' },
      { id: 17, name: 'Скворечник', iurl: 'assets/catalog/Комплекс.jpg' }
    ];
    return {heroes};
  }
}


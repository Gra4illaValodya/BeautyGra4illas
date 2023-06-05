import { createStore } from 'vuex';

export const store = createStore({
	state: {
		services: [
			{
				id: 1,
				photo: 'https://savanna.in.ua/wp-content/uploads/2019/01/tatoo-tatuazh-800x500.jpg',
				title: 'ПЕРМАНЕНТ МАКIЯЖУ',
				description:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dolor ipsa tempora qui dignissimos id voluptas! Placeat obcaecati natus fuga quia, nostrum doloremque blanditiis odio aperiam, ipsa id, veniam expedita.'
			},
			{
				id: 2,
				photo: 'https://savanna.in.ua/wp-content/uploads/2019/01/botoks-inekcii-golovna-800x500.jpg',
				title: 'БОТОКС ТА ІН’ЄКЦІЇ КРАСИ',
				description:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dolor ipsa tempora qui dignissimos id voluptas! Placeat obcaecati natus fuga quia, nostrum doloremque blanditiis odio aperiam, ipsa id, veniam expedita.'
			},
			{
				id: 3,
				photo: 'https://savanna.in.ua/wp-content/uploads/2019/01/naroshchennya-vij-savanna-800x500.jpg',
				title: 'НАРОЩЕННЯ ВІЙ',
				description:
					'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam dolor ipsa tempora qui dignissimos id voluptas! Placeat obcaecati natus fuga quia, nostrum doloremque blanditiis odio aperiam, ipsa id, veniam expedita.'
			}
		]
	}
});

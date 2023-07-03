<template>
	<div class="logoView">
		weqw
		<div v-for="item in olympiaeurope" :key="item.code" class="f">
			<div v-html="item.icon" class="icon"></div>
			<span class="text">{{ item.amenity }}</span>
		</div>
	</div>
</template>

<script setup>
import amenities from '@/ame/amenities.json';
import { ref, onMounted } from 'vue';
// console.log('amenities', amenities);

const providerStringOlympiaeurope = amenities.olympiaeurope;
const providerStringGetaroom = amenities.getaroom;
const providerDarinaholidays = amenities.darinaholidays;
const providerSmyrooms = amenities.smyrooms;
const providerRestelhotelsseller = amenities.restelhotelsseller;
const providerMikitravel = amenities.mikitravel;
const providerHprotravel = amenities.hprotravel;

// console.log('providerStringOlympiaeurope', providerStringOlympiaeurope);
// console.log('providerStringGetaroom', providerStringGetaroom);
// console.log('providerDarinaholidays', providerDarinaholidays);
// console.log('providerSmyrooms', providerSmyrooms);

const olympiaeurope = ref([]);
const getaroom = ref([]);
const darinaholidays = ref([]);
const smyrooms = ref([]);
const restelhotelsseller = ref([]);
const mikitravel = ref([]);
const hprotravel = ref([]);

const getIcon = (provider, code) => {
	if (provider === 'GENERAL') {
		// 1  ОХОРОНА ОХОРОНА ОХОРОНА ОХОРОНА ОХОРОНА ОХОРОНА ОХОРОНА ОХОРОНА ОХОРОНА ОХОРОНА
		if (
			code === 'Guarder\u00eda o actividades supervisadas' ||
			code === '38bd7e4b-12bd-42a6-a45b-a10577c88793' ||
			code === '080fcd4a-85a1-4911-9372-8f6085cb3252' ||
			code === 'b09e147c-8ba1-4496-a3d1-349f68bd01b7' ||
			code === '25' ||
			code === '133c' ||
			code === '12a8' ||
			code === '135a'
		) {
			return '<i class="fa-regular fa-shield-exclamation"></i>';
		}
		// 1 ИНТЕРНЕТ ИНТЕРНЕТ ИНТЕРНЕТ ИНТЕРНЕТ
		if (code === '1389') {
			return '<i class="fa-solid fa-wifi"></i>';
		} else if (code === '12df') {
			return '<i class="fa-solid fa-hand-sparkles"></i>';
		} // ssdsdsdsdsdsdsd
		else if (code === 'Aparcamiento') {
			return '<i class="fa-solid fa-house"></i>';
		} //dsdsdsdsdsdsds
		else if (code === 'Servicio de lavandería') {
			return '<i class="fa-duotone fa-washing-machine"></i>';
		}

		// 2 ROOM CLEANING ROOM CLEANING ROOM CLEANING ROOM CLEANING ROOM CLEANING
		else if (code === '10ef') {
			return '<i class="fa-sharp fa-solid fa-vacuum"></i>';
		}

		// 3 БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР
		else if (code === '1082') {
			return '<i class="fa-solid fa-martini-glass-citrus"></i> ';
		}
		// 4 БАГАЖ БАГАЖ БАГАЖ БАГАЖ БАГАЖ БАГАЖ БАГАЖ
		else if (code === 'Luggage storage') {
			return '<i class="fa-sharp fa-solid fa-suitcase-rolling"></i>';
		}
		//ВЗНАТИ ЧИ ПОДХОДИТЬ ИКОНКА
		// 5  БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН
		else if (code === '1191') {
			return '<i class="fa-solid fa-person-swimming"></i>';
		}
		// 6 БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС
		else if (
		
			code === '10db'
		) {
			return '<i class="fa-duotone fa-user-tie-hair"></i>';
		}
		// 6 БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД
		else if (code === 'Mesa de bilhar ou de snooker' ) {
			return '<i class="fa-solid fa-circle-dot"></i>';
		}
		// 7 КОНСЕРЖ
		else if (
			code === 'Concierge services' ||
			code === 'Servicios de conserjer\u00eda' ||
			code === 'Porter/bellhop' ||
			code === 'Facchino' ||
			code === '\u00c9picerie' ||
			code === '1080' ||
			code === '12a7' ||
			code === '1384' ||
			code === '1122' ||
			code === '139a' ||
			code === '12e6' ||
			code === '1131' ||
			code === '1015'
		) {
			return '<i class="fa-regular fa-bell-concierge"></i>';
		}
		// 8 ВIШАЛКА ВIШАЛКА ВIШАЛКА ВIШАЛКА ВIШАЛКА ВIШАЛКА
		else if (
		
			code === '1026'
		) {
			return '<i class="fa-solid fa-clothes-hanger"></i>';
		}
		//  9  ГЛОБАЛЬНО ГЛОБАЛЬНО ГЛОБАЛЬНО ГЛОБАЛЬНО ГЛОБАЛЬНО
		else if (
		
			code === '1230'
		) {
			return '<i class="fa-regular fa-globe"></i>';
		}


		// ГОДИННИК ГОДИННИК ГОДИННИК ГОДИННИК ГОДИННИК ГОДИННИК
		else if (code === '10d2' || code === '1027') {
			return '<i class="fa-regular fa-clock"></i>';
		}
		// 10 ГРИЛЬ ГРИЛЬ ГРИЛЬ ГРИЛЬ ГРИЛЬ ГРИЛЬ ГРИЛЬ ГРИЛЬ
		else if (
		
			
			code === '100b'
		) {
			return '<i class="fa-brands fa-gripfire"></i>';
		}
		// 11 годинник з стрелкой
		else if (

		
			code === '1219'
		) {
			return '<i class="fa-solid fa-clock-rotate-left"></i>';
		}

		// 12 ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ
		else if (

			
			code === '1260'
		) {
			return '<i class="fa-duotone fa-shower"></i>';
		}
		// 13 ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ
		else if (

		
			code === '102d'
		) {
			return '<i class="fa-regular fa-house"></i>';
		}
		// 13  ДИТЯЧИЙ КЛУБ ДИТЯЧИЙ КЛУБ ДИТЯЧИЙ КЛУБ ДИТЯЧИЙ КЛУБ ДИТЯЧИЙ КЛУБ  ДИТЯЧИЙ КЛУБ ДИТЯЧИЙ КЛУБ ДИТЯЧИЙ КЛУБ ДИТЯЧИЙ КЛУБ ДИТЯЧИЙ КЛУБ  ДИТЯЧИЙ КЛУБ ДИТЯЧИЙ КЛУБ ДИТЯЧИЙ КЛУБ ДИТЯЧИЙ КЛУБ ДИТЯЧИЙ КЛУБ
		else if (

			
			code === '11d6'
		) {
			return '<i class="fa-solid fa-child-reaching"></i>';
		}
		// 14 TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV TV
		else if (


			
			code === '10ac'
		) {
			return '<i class="fa-sharp fa-regular fa-tv"></i>';
		}
		// 15 КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ
		else if (
			
			code === '1092'
		) {
			return '<i class="fa-regular fa-smoking"></i>';
		}
		// 16 HE КУРIННЯ HE КУРIННЯ HE КУРIННЯ  HE КУРIННЯ  HE КУРIННЯ HE  КУРIННЯ HE КУРIННЯ
		else if (
			
			code === '1075'
		) {
			return '<i class="fa-solid fa-ban-smoking"></i>';
		}
		// 17 САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД САД
		else if (
		
			code === '12f7'
		) {
			return '<i class="fa-duotone fa-bench-tree"></i>';
		}
		// 18 СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ
		else if (
		
			code === '1187'
		) {
			return '<i class="fa-regular fa-dumbbell"></i>';
		}
		// 19 CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK
		else if (
			
			code === '1123'
		) {
			return '<i class="fa-solid fa-check"></i>';
		}
		// 19 NO CHECK  NO CHECK  NO CHECK  NO CHECK  NO CHECK  NO CHECK  NO CHECK  NO CHECK  NO CHECK  NO CHECK
		else if (
			code === 'Sin servicio de transporte accesible' ||
			code === 'O transporte oferecido pelo alojamento n\u00e3o \u00e9 acess\u00edvel' ||
			code === 'Disable facilities ' ||
			code === '130e'
		) {
			return '<i class="fa-regular fa-x"></i>';
		}
		// 20 COFFEE COFFEE COFFEE COFFEE COFFEE COFFEE COFFEE COFFEE COFFEE COFFEE COFFEE COFFEE COFFEE COFFEE COFFEE COFFEE COFFEE COFFEE
		else if (
		
			code === '125c'
		) {
			return '<i class="fa-regular fa-mug-hot"></i>';
		}
		// 21 СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ
		else if (
		
			code === '1342'
		) {
			return '<i class="fa-sharp fa-regular fa-vault"></i>';
		}

		// 22 IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД
		else if (
			
			code === '1037'
		) {
			return '<i class="fa-regular fa-wheelchair"></i>';
		}

		//  23 ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ
		else if (
			
			code === '1010'
		) {
			return '<i class="fa-duotone fa-toilet"></i>';
		}
		//  24 ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР
		else if (
			
			code === '11e5'
		) {
			return '<i class="fa-solid fa-right-left"></i>';
		}
		//ПЕРЕПИТАТИ ЗА ИКОНКУ
		// 25 РУКОСТИСКАННЯ РУКОСТИСКАННЯ РУКОСТИСКАННЯ РУКОСТИСКАННЯ РУКОСТИСКАННЯ РУКОСТИСКАННЯ РУКОСТИСКАННЯ РУКОСТИСКАННЯ
		else if ( code === '10cb') {
			return '<i class="fa-sharp fa-light fa-handshake"></i>';
		}

		// 26 РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН
		else if (
			
			code === '1025'
		) {
			return '<i class="fa-solid fa-fork-knife"></i>';
		}

		//  27 ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ
		else if (
			
			code === '108f'
		) {
			return '<i class="fa-sharp fa-solid fa-escalator"></i>';
		}
		//HEMA
		// 28 ТЕРАСА ТЕРАСА ТЕРАСА ТЕРАСА ТЕРАСА ТЕРАСА ТЕРАСА ТЕРАСА
		else if (
			
			code === '11a6'
		) {
			return '';
		}
		// 29 ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC
		else if (
			
			code === '1192'
		) {
			return '<i class="fa-solid fa-table-tennis-paddle-ball"></i>';
		}

		// 30 МЕДИЦИНА МЕДИЦИНА МЕДИЦИНА МЕДИЦИНА МЕДИЦИНА МЕДИЦИНА МЕДИЦИНА МЕДИЦИНА МЕДИЦИНА МЕДИЦИНА МЕДИЦИНА МЕДИЦИНА МЕДИЦИНА МЕДИЦИНА МЕДИЦИНА
		else if (

		
			code === '1050'
		) {
			return '<i class="fa-solid fa-briefcase-medical"></i>';
		}
		

		// 31 ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ
		else if (
			
			code === '1061'
		) {
			return '<i class="fa-duotone fa-washing-machine"></i>';
		}
		// 32 ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ
		else if (
			
			code === '12ea'
		) {
			return '<i class="fa-solid fa-umbrella-beach"></i>';
		}

		// 33 ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ
		else if (
			
			code === '1295'
		) {
			return '<i class="fa-solid fa-square-parking"></i>';
		}
		//  34  ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР  ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР  ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР
		else if (code === 'Bagageiro') {
			return '<i class="fa-regular fa-door-open"></i>';
		}
		// 35 НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ
		else if (
			
			code === '1003'
		) {
			return '<i class="fa-solid fa-person-breastfeeding"></i>';
		}
		// 36 СПА СПА СПА СПА СПА СПА СПА СПА СПА СПА СПА СПА СПА СПА СПА СПА СПА СПА СПА СПА СПА СПА СПА СПА
		else if (
			
			code === '13ac'
		) {
			return '<i class="fa-solid fa-spa"></i>';
		}
		// 37 ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII
		else if (code === 'Assistance pour visites/billets' || code === 'Tours/ticket assistance') {
			return '<i class="fa-solid fa-spa"></i>';
		}
		// 38 САУНА САУНА САУНА САУНА САУНА САУНА САУНА САУНА САУНА САУНА САУНА САУНА САУНА САУНА САУНА САУНА
		else if (
			
			
			code === '1129'
		) {
			return '<i class="fa-regular fa-heat"></i>';
		}
		// 39 БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК
		else if (
			
			code === '1226'
		) {
			return '<i class="fa-regular fa-money-bill-trend-up"></i>';
		}
		// 40 МАРКЕТ МАРКЕТ МАРКЕТ МАРКЕТ МАРКЕТ МАРКЕТ МАРКЕТ МАРКЕТ МАРКЕТ МАРКЕТ МАРКЕТ МАРКЕТ
		else if (
			
			code === '11b4'
		) {
			return '<i class="fa-regular fa-cart-shopping-fast"></i>';
		}
		// 41 РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР
		else if (
			
			code === '124e'
		) {
			return '<i class="fa-light fa-arrow-up-wide-short"></i>';
		}
		// 41 ВIДСТАНЬ ВIДСТАНЬ ВIДСТАНЬ ВIДСТАНЬ ВIДСТАНЬ ВIДСТАНЬ ВIДСТАНЬ ВIДСТАНЬ ВIДСТАНЬ
		else if (
			
			code === '1125'
		) {
			return '<i class="fa-regular fa-right-left"></i>';
		}

		// 42 ДЖАКУЗИ ДЖАКУЗИ ДЖАКУЗИ ДЖАКУЗИ ДЖАКУЗИ ДЖАКУЗИ ДЖАКУЗИ ДЖАКУЗИ ДЖАКУЗИ ДЖАКУЗИ ДЖАКУЗИ ДЖАКУЗИ ДЖАКУЗИ ДЖАКУЗИ
		else if (
			
			code === '11e0'
		) {
			return '<i class="fa-light fa-hot-tub-person"></i>';
		}
		// 43 ВЕЛОСИПЕД ВЕЛОСИПЕД ВЕЛОСИПЕД ВЕЛОСИПЕД ВЕЛОСИПЕД ВЕЛОСИПЕД ВЕЛОСИПЕД ВЕЛОСИПЕД ВЕЛОСИПЕД ВЕЛОСИПЕД ВЕЛОСИПЕД ВЕЛОСИПЕД ВЕЛОСИПЕД ВЕЛОСИПЕД
		else if (
			
			code === '116f'
		) {
			return '<i class="fa-regular fa-bicycle"></i>';
		}
		// НЕМА ИКОНКИ
		// 44 АКВАПАРК АКВАПАРК АКВАПАРК АКВАПАРК АКВАПАРК АКВАПАРК АКВАПАРК АКВАПАРК АКВАПАРК АКВАПАРК АКВАПАРК АКВАПАРК
		else if (
			
			code === '1114'
		) {
			return '<i class="fa-sharp fa-regular fa-person-sledding"></i>';
		}
		// 45 GAME GAME GAME GAME GAME GAME GAME GAME GAME GAME GAME GAME GAME GAME GAME GAME GAME GAME GAME GAME GAME GAME GAME GAME
		else if (
		
			code === '12e2'
		) {
			return '<i class="fa-regular fa-gamepad-modern"></i>';
		}
		// 46 NEWSPAPER NEWSPAPER NEWSPAPER NEWSPAPER NEWSPAPER NEWSPAPER NEWSPAPER NEWSPAPER NEWSPAPER NEWSPAPER NEWSPAPER NEWSPAPER
		else if (
			
			code === '1073'
		) {
			return '<i class="fa-light fa-newspaper"></i>';
		}
		// 47 СВАДЬБА СВАДЬБА СВАДЬБА СВАДЬБА СВАДЬБА СВАДЬБА СВАДЬБА СВАДЬБА СВАДЬБА СВАДЬБА СВАДЬБА СВАДЬБА СВАДЬБА СВАДЬБА
		else if (
			
			code === '111e'
		) {
			return '<i class="fa-regular fa-rings-wedding"></i>';
		}
		// 48 БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА
		else if (
			
			code === '1086'
		) {
			return '<i class="fa-regular fa-books"></i>';
		}
		// 49 ДОРОГА  ДОРОГА  ДОРОГА  ДОРОГА  ДОРОГА ДОРОГА  ДОРОГА  ДОРОГА  ДОРОГА  ДОРОГА ДОРОГА  ДОРОГА  ДОРОГА  ДОРОГА  ДОРОГА
		else if (
			
			code === '1042'
		) {
			return '<i class="fa-solid fa-road"></i>';
		}
		// 50 БЕЗПЛАТНО БЕЗПЛАТНО БЕЗПЛАТНО БЕЗПЛАТНО БЕЗПЛАТНО БЕЗПЛАТНО БЕЗПЛАТНО БЕЗПЛАТНО БЕЗПЛАТНО БЕЗПЛАТНО
		else if (
			
			code === 'Servicio gratuito de compra de comestibles'
		) {
			return '<i class="fa-regular fa-hands-holding-dollar"></i>';
		}
		// 51 НОЖНИЦI НОЖНИЦI НОЖНИЦI НОЖНИЦI НОЖНИЦI НОЖНИЦI НОЖНИЦI НОЖНИЦI НОЖНИЦI НОЖНИЦI НОЖНИЦI НОЖНИЦI
		else if ( code === '100f') {
			return '<i class="fa-regular fa-scissors"></i>';
		}
		// 52 КОНФЕРЕНЦ КОНФЕРЕНЦ КОНФЕРЕНЦ КОНФЕРЕНЦ КОНФЕРЕНЦ КОНФЕРЕНЦ КОНФЕРЕНЦ КОНФЕРЕНЦ КОНФЕРЕНЦ КОНФЕРЕНЦ КОНФЕРЕНЦ КОНФЕРЕНЦ
		else if (
			
			code === '1202'
		) {
			return '<i class="fa-thin fa-people-line"></i>';
		}
		// 53 МИКРОХВИЛЬОВКА МИКРОХВИЛЬОВКА МИКРОХВИЛЬОВКА МИКРОХВИЛЬОВКА МИКРОХВИЛЬОВКА МИКРОХВИЛЬОВКА МИКРОХВИЛЬОВКА МИКРОХВИЛЬОВКА
		else if (
			
			code === '13a8'
		) {
			return '<i class="fa-regular fa-microwave"></i>';
		}
		// 54 САНIТАР САНIТАР САНIТАР САНIТАР САНIТАР
		else if (code === 'Salas de tratamentos de spa') {
			return '<i class="fa-regular fa-hand-sparkles"></i>';
		}
		
		// 55 РОЗЕТКА РОЗЕТКА РОЗЕТКА РОЗЕТКА РОЗЕТКА РОЗЕТКА РОЗЕТКА РОЗЕТКА РОЗЕТКА РОЗЕТКА РОЗЕТКА РОЗЕТКА РОЗЕТКА РОЗЕТКА РОЗЕТКА
		else if (
			code === 'Esta\u00e7\u00e3o de carregamento de ve\u00edculos el\u00e9tricos' ||
			code === 'Borne de recharge pour voiture \u00e9lectrique' ||
			code === 'Colonnina di ricarica per auto elettriche' ||
			code === 'Punto de recarga' ||
			code === 'Base de carregamento' ||
			code === 'Dispositivi a risparmio energetico nelle camere' ||
			code === 'Energy-saving features in guest rooms' ||
			code === 'Energy-saving features in guest rooms' ||
			code === 'Dispositivos de ahorro de energ\u00eda en las habitaciones' ||
			code === '1320' ||
			code === '1313' ||
			code === '12f4'
		) {
			return '<i class="fa-sharp fa-regular fa-plug-circle-bolt"></i>';
		}
		// 56 СЕРДЦЕ СЕРДЦЕ СЕРДЦЕ СЕРДЦЕ СЕРДЦЕ СЕРДЦЕ СЕРДЦЕ СЕРДЦЕ СЕРДЦЕ СЕРДЦЕ СЕРДЦЕ СЕРДЦЕ СЕРДЦЕ СЕРДЦЕ
		else if (
			code === 'Health club' ||
			code === 'Centro benessere' ||
			code === '1051' ||
			code === '12d9'
		) {
			return '<i class="fa-regular fa-heart"></i>';
		}
		// 57 ГОЛЬФ ГОЛЬФ ГОЛЬФ ГОЛЬФ ГОЛЬФ ГОЛЬФ ГОЛЬФ ГОЛЬФ ГОЛЬФ ГОЛЬФ ГОЛЬФ ГОЛЬФ ГОЛЬФ ГОЛЬФ ГОЛЬФ ГОЛЬФ ГОЛЬФ ГОЛЬФ
		else if (
			code === 'Golfe nas imedia\u00e7\u00f5es' ||
			code === 'Golf \u00e0 proximit\u00e9' ||
			code === 'Golf nelle vicinanze' ||
			code === 'Terrain de golf sur place' ||
			code === 'Campo de golfe no local' ||
			code === 'Golf course on site' ||
			code === 'Campo da golf in loco' ||
			code === 'Campo de golf en las instalaciones' ||
			code === 'Clases de golf con un profesional' ||
			code === 'Aulas de golfe com um profissional' ||
			code === 'Le\u00e7ons de golf avec un professionnel' ||
			code === 'Golf lessons with a pro' ||
			code === 'Lezioni di golf con un professionista' ||
			code === 'Minigolfe no local' ||
			code === 'Miniature golf on site' ||
			code === 'Minigolf in loco' ||
			code === 'Minigolf en las instalaciones' ||
			code === 'Golf en las inmediaciones' ||
			code === 'Golfing nearby' ||
			code === '21' ||
			code === '22' ||
			code === '1174' ||
			code === '115c'
		) {
			return '<i class="fa-regular fa-golf-ball-tee"></i>';
		}
		// 58 ЛИЖI ЛИЖI ЛИЖI ЛИЖI ЛИЖI ЛИЖI ЛИЖI ЛИЖIЛИЖI ЛИЖI ЛИЖI ЛИЖI ЛИЖI ЛИЖI ЛИЖI ЛИЖIЛИЖI ЛИЖI ЛИЖI ЛИЖI ЛИЖI ЛИЖI ЛИЖI ЛИЖIЛИЖI ЛИЖI ЛИЖI ЛИЖI ЛИЖI ЛИЖI ЛИЖI ЛИЖI
		else if (
			code === 'Ski nautique sur place' ||
			code === "Sci d'acqua in loco" ||
			code === 'Esqui aqu\u00e1tico no local' ||
			code === 'Esqu\u00ed n\u00e1utico en las instalaciones' ||
			code === '1090' ||
			code === '12db' ||
			code === '113d' ||
			code === '1032' ||
			code === '10cf' ||
			code === '11e2' ||
			code === '138d'
		) {
			return '<i class="fa-regular fa-person-ski-jumping"></i>';
		}
		// 59 ЛОДКА ЛОДКА ЛОДКА ЛОДКА ЛОДКА ЛОДКА ЛОДКА
		else if (
			code === 'Windsurf in loco' ||
			code === 'Planche \u00e0 voile sur place' ||
			code === '17' ||
			code === '6' ||
			code === '10ca' ||
			code === '139e' ||
			code === '1179' ||
			code === '1071' ||
			code === '13ab' ||
			code === '109b' ||
			code === '1518' ||
			code === '1182' ||
			code === '1012'
		) {
			return '<i class="fa-regular fa-sailboat"></i>';
		}
		//60 АВТО АВТО АВТО АВТО АВТО АВТО АВТО АВТО АВТО АВТО АВТО
		else if (
			code === 'Parcheggio gratuito con servizio di ritiro e riconsegna auto' ||
			code === 'Carport' ||
			code === 'Abrigo para ve\u00edculos' ||
			code === 'Cochera' ||
			code === 'Limo or town car service available' ||
			code === 'Servicio de limusina o coche con ch\u00f3fer disponible' ||
			code === 'Service de limousine ou berline disponible' ||
			code === 'Service de limousine ou berline disponible' ||
			code === 'Limo or Town Car service available' ||
			code === 'Servi\u00e7o de limusina/carro dispon\u00edvel' ||
			code === '11' ||
			code === '101c' ||
			code === '1237' ||
			code === '12c0' ||
			code === '105c'
		) {
			return '<i class="fa-regular fa-car-side"></i>';
		}
		//61 БОУЛИНГ БОУЛИНГ БОУЛИНГ БОУЛИНГ БОУЛИНГ БОУЛИНГ БОУЛИНГ БОУЛИНГ БОУЛИНГ
		else if (
			code === 'Bowling alley on site' ||
			code === 'Bowling sur place' ||
			code === 'Sal\u00e3o de bowling no local' ||
			code === 'Bolera en las instalaciones' ||
			code === 'Bowling in loco' ||
			code === '1150'
		) {
			return '<i class="fa-regular fa-bowling-ball-pin"></i>';
		}
		//62 БАСКЕТБОЛ БАСКЕТБОЛ БАСКЕТБОЛ БАСКЕТБОЛ БАСКЕТБОЛ БАСКЕТБОЛ БАСКЕТБОЛ БАСКЕТБОЛ
		else if (
			code === 'Basketball on site' ||
			code === 'Basket-ball sur place' ||
			code === 'Basquetebol no local' ||
			code === 'Baloncesto en las instalaciones' ||
			code === 'Basket in loco' ||
			code === '1501'
		) {
			return '<i class="fa-regular fa-basketball"></i>';
		}
		//63 КОНЦЕРТЫ КОНЦЕРТЫ КОНЦЕРТЫ КОНЦЕРТЫ КОНЦЕРТЫ КОНЦЕРТЫ КОНЦЕРТЫ КОНЦЕРТЫ КОНЦЕРТЫ
		else if (
			code === 'Conciertos o espect\u00e1culos en directo' ||
			code === 'Ocio nocturno' ||
			code === 'Casa club' ||
			code === 'Entretenimento noturno' ||
			code === 'Concertos/espet\u00e1culos ao vivo' ||
			code === 'Sal\u00e3o de festas' ||
			code === 'Club-house' ||
			code === 'Clubhouse' ||
			code === 'Concerts/spectacles en directs' ||
			code === 'Animations en soir\u00e9e' ||
			code === 'Concerts/live shows' ||
			code === 'Evening entertainment' ||
			code === 'Concerti/show dal vivo' ||
			code === 'Club house' ||
			code === '9' ||
			code === '1156' ||
			code === '12a2' ||
			code === '1152' ||
			code === '106d' ||
			code === '1510' ||
			code === '12e5' ||
			code === '1041' ||
			code === '1154'
		) {
			return '<i class="fa-regular fa-party-horn"></i>';
		}
		//64 ДИТИНА   ДИТИНА   ДИТИНА   ДИТИНА   ДИТИНА   ДИТИНА   ДИТИНА   ДИТИНА   ДИТИНА   ДИТИНА
		else if (
			code === 'Juguetes infantiles' ||
			code === 'Juguetes para beb\u00e9s' ||
			code === 'Brinquedos para beb\u00e9/crian\u00e7a' ||
			code === 'Brinquedos para crian\u00e7as' ||
			code === 'Jouets pour b\u00e9b\u00e9/jeune enfant' ||
			code === 'Jouets pour les enfants' ||
			code === 'Infant/toddler toys' ||
			code === "Children's toys" ||
			code === 'Giocattoli per bambini e neonati' ||
			code === 'Giocattoli per bambini'
		) {
			return '<i class="fa-sharp fa-regular fa-baby"></i>';
		}
		/// НЕМА ИКОНКИ
		//65 ТАНЦI ТАНЦI ТАНЦI ТАНЦI ТАНЦI ТАНЦI ТАНЦI ТАНЦI ТАНЦI ТАНЦI ТАНЦI ТАНЦI ТАНЦI
		else if (
			code === 'Sala de baile' ||
			code === 'Sal\u00e3o de baile' ||
			code === 'Salle de bal' ||
			code === 'Ballroom' ||
			code === 'Sala da ballo' ||
			code === '1007' ||
			code === '1155'
		) {
			return '';
		}
		//66  ДОЛАР ДОЛАР ДОЛАР ДОЛАР ДОЛАР ДОЛАР ДОЛАР ДОЛАР ДОЛАР ДОЛАР ДОЛАР ДОЛАР ДОЛАР ДОЛАР ДОЛАР ДОЛАР
		else if (
			code === 'Sala da ballo' ||
			code === 'Noleggio con conducente o limousine disponibile' ||
			code ===
				'Reinvestimento nella comunit\u00e0/sostenibilit\u00e0 (almeno il 10% del fatturato)' ||
			code === 'Sustainability/community reinvestment (10% revenue or more)' ||
			code ===
				'Reinversi\u00f3n en sostenibilidad o la comunidad (al menos un 10\u00a0% de los ingresos)' ||
			code === '08c4f384-02d7-4807-b520-ded1ee44e7cf'
		) {
			return '<i class="fa-solid fa-dollar-sign"></i>';
		}
		//67  МЕБЛI МЕБЛI МЕБЛI МЕБЛI МЕБЛI МЕБЛI МЕБЛI МЕБЛI МЕБЛI МЕБЛI МЕБЛI МЕБЛI МЕБЛI МЕБЛI МЕБЛI МЕБЛI МЕБЛI
		else if (
			code === 'Mobili\u00e1rio de exterior' ||
			code === 'Mobiliario exterior' ||
			code === "Mobilier d'ext\u00e9rieurs" ||
			code === "Mobilier d'ext\u00e9rieur" ||
			code === 'Outdoor furniture' ||
			code === '1328' ||
			code === '1053' ||
			code === '10eb' ||
			code === '1987'
		) {
			return '<i class="fa-regular fa-chair"></i>';
		}
		//68 КОНДИЦIОНЕР КОНДИЦIОНЕР КОНДИЦIОНЕР КОНДИЦIОНЕР КОНДИЦIОНЕР КОНДИЦIОНЕР КОНДИЦIОНЕР КОНДИЦIОНЕР КОНДИЦIОНЕР КОНДИЦIОНЕР
		else if (
			code === 'Air conditioning' ||
			code === 'Ar condicionado' ||
			code === 'Aire acondicionado' ||
			code === 'Climatisation' ||
			code === 'Climatizzatore' ||
			code === '2' ||
			code === '134f' ||
			code === '12a1' ||
			code === '1116' ||
			code === '1126'
		) {
			return '<i class="fa-regular fa-air-conditioner"></i>';
		}
		//69 ВИВIСКА ВИВIСКА ВИВIСКА ВИВIСКА ВИВIСКА ВИВIСКА ВИВIСКА ВИВIСКА ВИВIСКА ВИВIСКА ВИВIСКА ВИВIСКА ВИВIСКА
		else if (
			code === 'Braille o se\u00f1alizaci\u00f3n en relieve' ||
			code === 'Braille ou sinalização em relevo' ||
			code === 'Braille or raised signage' ||
			code === 'Segnaletica in braille o in rilievo' ||
			code === 'Sentiero ben illuminato per l\u2019ingresso' ||
			code === 'Sentiero senza scale per l\u2019ingresso' ||
			code === 'Signal\u00e9tique en braille ou en relief' ||
			code === 'd1834d75-71c0-4d74-aa3c-db1cd2c8be99' ||
			code === '10a5' ||
			code === '102b' ||
			code === '1330' ||
			code === '1143' ||
			code === '1130' ||
			code === '1166'
		) {
			return '<i class="fa-light fa-scanner-touchscreen"></i>';
		}
		//70 СВIТЛО СВIТЛО СВIТЛО СВIТЛО СВIТЛО СВIТЛО СВIТЛО СВIТЛО СВIТЛО СВIТЛО СВIТЛО СВIТЛО СВIТЛО СВIТЛО СВIТЛО СВIТЛО СВIТЛО
		else if (
			code === 'Camino hacia la entrada bien iluminado' ||
			code === 'Caminho iluminado at\u00e9 \u00e0 entrada' ||
			code === 'Well-lit path to entrance' ||
			code === 'Sentiero ben illuminato per l’ingresso' ||
			code === "Chemin d'acc\u00e8s \u00e0 l'entr\u00e9e bien \u00e9clair\u00e9" ||
			code === 'Chemin d\u2019acc\u00e8s \u00e0 l\u2019entr\u00e9e bien \u00e9clair\u00e9' ||
			code === 'Lampadine a LED' ||
			code === 'LED light bulbs' ||
			code === 'Bombillas LED'
		) {
			return '<i class="fa-regular fa-lamp-street"></i>';
		}
		//71 ХОЛОДИЛЬНИК ХОРОДИЛЬНИК ХОРОДИЛЬНИК ХОРОДИЛЬНИК ХОРОДИЛЬНИК ХОРОДИЛЬНИК ХОРОДИЛЬНИК ХОРОДИЛЬНИК ХОРОДИЛЬНИК
		else if (
			code === 'Frigor\u00edfico compartido' ||
			code === 'Shared refrigerator' ||
			code === 'Frigor\u00edfico partilhado' ||
			code === 'Frigorifero condiviso' ||
			code === 'R\u00e9frig\u00e9rateur partag\u00e9' ||
			code === '3aff70ae-b827-49a2-bd2b-480a7f1d5a54' ||
			code === '1048' ||
			code === '1326' ||
			code === '106e'
		) {
			return '<i class="fa-regular fa-refrigerator"></i>';
		}
		//72 КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ КОНЬ
		else if (
			code === 'Equitaci\u00f3n en los alrededores' ||
			code === 'Horse riding nearby' ||
			code === 'Passeios a cavalo nas imedia\u00e7\u00f5es' ||
			code === 'Gite a cavallo nelle vicinanze' ||
			code === 'Promenades \u00e0 cheval \u00e0 proximit\u00e9' ||
			code === '19' ||
			code === '1177' ||
			code === '12c7' ||
			code === '1055' ||
			code === '1023'
		) {
			return '<i class="fa-sharp fa-regular fa-horse-head"></i>';
		}
		//73 СХОДИ СХОДИ СХОДИ СХОДИ СХОДИ СХОДИ СХОДИ СХОДИ СХОДИ СХОДИ СХОДИ СХОДИ СХОДИ СХОДИ СХОДИ СХОДИ СХОДИ СХОДИ
		else if (
			code === 'Upper floors accessible by stairs only' ||
			code === 'Pisos superiores apenas acess\u00edveis por escadas' ||
			code === 'Piani superiori accessibili solo tramite scale' ||
			code === '\u00c9tages sup\u00e9rieurs accessibles uniquement par des escaliers' ||
			code === 'Corrimani lungo le scale' ||
			code === 'Handrails in stairways' ||
			code === 'Barandillas en las escaleras'
		) {
			return '<i class="fa-regular fa-stairs"></i>';
		}
		//74 ПЕСНЯ ПЕСНЯ ПЕСНЯ ПЕСНЯ ПЕСНЯ ПЕСНЯ ПЕСНЯ ПЕСНЯ ПЕСНЯ ПЕСНЯ ПЕСНЯ ПЕСНЯ ПЕСНЯ ПЕСНЯ ПЕСНЯ ПЕСНЯ ПЕСНЯ ПЕСНЯ
		else if (code === 'Karaoke' || code === '115a') {
			return '<i class="fa-regular fa-microphone-stand"></i>';
		}
		//75 ОДIЯЛО ОДIЯЛО ОДIЯЛО ОДIЯЛО ОДIЯЛО ОДIЯЛО ОДIЯЛО ОДIЯЛО ОДIЯЛО ОДIЯЛО ОДIЯЛО ОДIЯЛО ОДIЯЛО ОДIЯЛО ОДIЯЛО ОДIЯЛО
		else if (
			code === 'Changement des draps (sur demande)' ||
			code === 'Changement des serviettes (sur demande)' ||
			code === 'Change of bed sheets (on request)' ||
			code === 'Troca de len\u00e7\u00f3is (mediante pedido)' ||
			code === 'Troca de toalhas (mediante pedido)' ||
			code === 'Change of towels (on request)' ||
			code === 'Cambio degli asciugamani (su richiesta)' ||
			code === 'Cambio delle lenzuola (su richiesta)' ||
			code === 'Cambio de s\u00e1banas (previa solicitud)' ||
			code === 'Cambio de toallas (previa solicitud)' ||
			code === '3d8a7661-92fd-46b5-9ef7-cf958eaaeff6' ||
			code === '1100' ||
			code === '104d' ||
			code === '1274' ||
			code === '10d8' ||
			code === '1285' ||
			code === '134a' ||
			code === '10a6' ||
			code === '1509' ||
			code === '1064'
		) {
			return '<i class="fa-duotone fa-blanket"></i>';
		}
		//76 КОВОРКИНГ КОВОРКИНГ КОВОРКИНГ КОВОРКИНГ КОВОРКИНГ КОВОРКИНГ КОВОРКИНГ КОВОРКИНГ КОВОРКИНГ
		else if (code === 'Spazi per coworking' || code === 'Espacios de cotrabajo') {
			return '<i class="fa-solid fa-house-laptop"></i>';
		}
		//77  ОВОЧI ОВОЧI ОВОЧI ОВОЧI ОВОЧI ОВОЧI ОВОЧI ОВОЧI ОВОЧI ОВОЧI ОВОЧI
		else if (
			code === 'Alimenti biologici' ||
			code === 'Coworking spaces' ||
			code === 'Organic food' ||
			code === 'Alimentos org\u00e1nicos' ||
			code === '1367' ||
			code === '1128' ||
			code === '11ac'
		) {
			return '<i class="fa-regular fa-salad"></i>';
		}
		//78 ОКНО ОКНО ОКНО ОКНО ОКНО ОКНО ОКНО ОКНО ОКНО ОКНО ОКНО ОКНО
		else if (
			code === 'Doppi vetri su tutte le finestre' ||
			code === 'Double-glazing on all windows' ||
			code === 'Doble acristalamiento en todas las ventanas' ||
			code === '1039' ||
			code === '126e'
		) {
			return '<i class="fa-sharp fa-regular fa-window-frame"></i>';
		}
		//79  ХУДОЖКА  ХУДОЖКА  ХУДОЖКА  ХУДОЖКА  ХУДОЖКА  ХУДОЖКА  ХУДОЖКА  ХУДОЖКА  ХУДОЖКА
		else if (
			code === 'Galleria d\u2019arte in loco' ||
			code === 'Art gallery on site' ||
			code === 'Galer\u00eda de arte en las instalaciones'
		) {
			return '<i class="fa-regular fa-palette"></i>';
		}
		//80 ЗВУК ЗВУК ЗВУК ЗВУК ЗВУК ЗВУК ЗВУК ЗВУК ЗВУК ЗВУК ЗВУК ЗВУК ЗВУК
		else if (
			code === 'Appareils d\u2019assistance auditive mis \u00e0 disposition' ||
			code === 'Dispositivos de audici\u00f3n asistida disponibles' ||
			code === 'Assistive listening devices available' ||
			code === "Dispositivi con tecnologia assistiva per l'audio disponibili" ||
			code === 'Dispositivos de assist\u00eancia auditiva' ||
			code === "Dispositivi con tecnologia assistiva per l'audio disponibili" ||
			code === 'Dispositivos de assist\u00eancia auditiva' ||
			code === '9c093fb3-e6b6-4f2f-92b0-6f6c6586fc8b' ||
			code === '1052' ||
			code === '1098' ||
			code === '10fa' ||
			code === '1097' ||
			code === '10f6' ||
			code === '105a' ||
			code === '1515' ||
			code === '10ad'
		) {
			return '<i class="fa-regular fa-volume"></i>';
		}
		//81 MASC  MASC  MASC  MASC  MASC  MASC  MASC  MASC  MASC  MASC  MASC  MASC
		else if (
			code === '6aff5593-a11e-4d0c-a5f4-7d77c1c23dff' ||
			code === '1161' ||
			code === '1162'
		) {
			return '<i class="fa-regular fa-masks-theater"></i>';
		}
		//82 ANIMAL
		else if (
			code === 'fc419fff-c43c-4d01-822d-aaceb20526eb' ||
			code === 'Pets Allowed' ||
			code === '11cc' ||
			code === '11d1' ||
			code === '12b0' ||
			code === '12b4' ||
			code === '110d' ||
			code === '12af' ||
			code === '12d7' ||
			code === '105e'
		) {
			return '<i class="fa-regular fa-dog"></i>';
		}
		//82 ГРАДУСНИК
		else if (
			code === '4d86220c-6f24-4920-95b4-4482c27ed1b1' ||
			code === 'a528b8d4-1377-4d6d-ab2f-8eef288ea68f'
		) {
			return '<i class="fa-regular fa-temperature-low"></i>';
		}
		//82 КУХНЯ
		else if (
			code === 'd5baa1af-97cb-44d7-8c50-9266b51bee39' ||
			code === 'cbf1e949-d66a-490b-bfca-561141117244' ||
			code === '1263' ||
			code === '1344' ||
			code === '1289' ||
			code === '1264' ||
			code === '1077' ||
			code === '133b'
		) {
			return '<i class="fa-regular fa-oven"></i>';
		}
		//83 БУДИЛЬНИК
		else if (
			code === '792bdff6-1852-4e31-9e08-29483a7917e1' ||
			code === '10af' ||
			code === '1257' ||
			code === '1256'
		) {
			return '<i class="fa-regular fa-alarm-clock"></i>';
		}
		//84 ТЕЛЕФОН
		else if (
			code === 'c33e41e6-e7e3-4736-ac91-9d321412b54f' ||
			code === '1269' ||
			code === '1035' ||
			code === '10e9' ||
			code === '11bc' ||
			code === '10ea' ||
			code === '10e8' ||
			code === '1244' ||
			code === '11bd'
		) {
			return '<i class="fa-regular fa-phone"></i>';
		}
		//85 МОРОЗИВО
		else if (code === 'cf1079bb-6898-4e80-bd8a-74a727a45d3b' || code === '1057') {
			return '<i class="fa-duotone fa-ice-cream"></i>';
		}
		//86 FAX
		else if (code === '5' || code === '1204') {
			return '<i class="fa-regular fa-fax"></i>';
		}
		//87 МОЛИТВА
		else if (code === '4' || code === '150f' || code === '10a2' || code === '1022') {
			return '<i class="fa-regular fa-hands-praying"></i>';
		}
		//88 КАЗИНО
		else if (code === '7' || code === '11f2' || code === '1151') {
			return '<i class="fa-regular fa-cards"></i>';
		}
		//89 КИЛИМ
		else if (code === '101d') {
			return '<i class="fa-solid fa-rug"></i>';
		}
		//90 КРОВАТЬ
		else if (
			code === '1043' ||
			code === '1343' ||
			code === '1258' ||
			code === '1329' ||
			code === '1222' ||
			code === '125d' ||
			code === '128e' ||
			code === '1031'
		) {
			return '<i class="fa-regular fa-bed"></i>';
		}
		//91 РАДИО
		else if (code === '1083') {
			return '<i class="fa-regular fa-radio"></i>';
		}
		//92 ТАПОЧКИ
		else if (code === '1083') {
			return '<i class="fa-regular fa-shoe-prints"></i>';
		}
		//93 !COMPUTER
		else if (code === '10df' || code === '1325' || code === '1399' || code === '1029') {
			return '<i class="fa-regular fa-computer"></i>';
		}
		//94 КАМИН
		else if (code === '1157' || code === '1349') {
			return '<i class="fa-regular fa-fireplace"></i>';
		}
		//95 ВЕНТИЛЯТОР
		else if (code === '1044') {
			return '<i class="fa-regular fa-fan-table"></i>';
		}
		//96 PILLOW
		else if (code === '132a' || code === '10f3' || code === '1286') {
			return '<i class="fa-regular fa-mattress-pillow"></i>';
		}
		//97 BOTTLE
		else if (code === '1013' || code === '10de') {
			return '<i class="fa-regular fa-bottle-water"></i>';
		}
		//98 DRYER
		else if (code === '103b') {
			return '<i class="fa-sharp fa-regular fa-dryer"></i>';
		}
		//99 РИБАЛКА
		else if (code === '1045') {
			return '<i class="fa-solid fa-fishing-rod"></i>';
		}
		//100 ПОТЯГ
		else if (code === '11fb' || code === '12be') {
			return '<i class="fa-solid fa-fishing-rod"></i>';
		}
		//101 ПОСУДА
		else if (code === '125e') {
			return '<i class="fa-sharp fa-regular fa-plate-utensils"></i>';
		}
		//102 ДИВАН
		else if (code === '1095') {
			return '<i class="fa-regular fa-couch"></i>';
		}
		//103 WINE
		else if (code === '1227' || code === '1312' || code === '1167' || code === '130d') {
			return '<i class="fa-regular fa-wine-bottle"></i>';
		}
		//104 ДАЙВИНГ
		else if (code === '1171' || code === '13a1' || code === '1093') {
			return '<i class="fa-regular fa-mask-snorkel"></i>';
		}
		//105 MOSKITO
		else if (code === '1324') {
			return '<i class="fa-sharp fa-regular fa-mosquito-net"></i>';
		}
		//106  GARAGE
		else if (code === '1234') {
			return '<i class="fa-regular fa-garage"></i>';
		}
		//107 18+
		else if (code === '11ce') {
			return '<i class="fa-regular fa-hand-point-up"></i>';
		}
		//108 БАДМЕНТОН
		else if (code === '1005') {
			return '<i class="fa-regular fa-badminton"></i>';
		}
		//109 ДАРТС
		else if (code === '1033') {
			return '<i class="fa-regular fa-bullseye-arrow"></i>';
		}
		//110 ПАРАШУТ
		else if (code === '1079' || code === '1190' || code === '112d' || code === '1040') {
			return '<i class="fa-regular fa-parachute-box"></i>';
		}
		//111 ГОРИ
		else if (code === '12f6' || code === '1181' || code === '1054') {
			return '<i class="fa-regular fa-mountain"></i>';
		}
		//112 СЕМЯ
		else if (code === '1506') {
			return '<i class="fa-solid fa-family-dress"></i>';
		}
		//113 ФУТБОЛ
		else if (code === '12d6' || code === '1507' || code === '1047' || code === '1193') {
			return '<i class="fa-regular fa-futbol"></i>';
		}
		//114 ЗБРОЯ
		else if (code === '12fc') {
			return '<i class="fa-regular fa-gun"></i>';
		}
		//115 КОВЗАНКИ
		else if (code === '12d0') {
			return '<i class="fa-sharp fa-regular fa-ice-skate"></i>';
		}
		//116 MOTOBIKE
		else if (code === '10bb') {
			return '<i class="fa-regular fa-motorcycle"></i>';
		}
		//117 CD CD CD
		else if (code === '101f' || code === '103c' || code === '1020') {
			return '<i class="fa-regular fa-compact-disc"></i>';
		}
		//118 INFO
		else if (code === '121d') {
			return '<i class="fa-regular fa-circle-info"></i>';
		}
		//119 ПЕКАРНЯ
		else if (code === '1006') {
			return '<i class="fa-regular fa-croissant"></i>';
		}
		//120 БИНОКОЛЬ
		else if (code === '12f8' || code === '1300' || code === '12ff') {
			return '<i class="fa-regular fa-binoculars"></i>';
		}
		//121 MP3 MP3
		else if (code === '105b') {
			return '<i class="fa-regular fa-mp3-player"></i>';
		}
		//122 ХАЛАТ
		else if (code === '1272') {
			return '<i class="fa-solid fa-uniform-martial-arts"></i>';
		}
		//123 ШРИФТ БРАЙЛЯ
		else if (code === '1272') {
			return '<i class="fa-sharp fa-regular fa-border-top"></i>';
		}
		//123 NETFLIX
		else if (code === '13a9') {
			return '<i class="fa-regular fa-n"></i>';
		}
		//124 FRUITS
		else if (code === '1049') {
			return '<i class="fa-regular fa-pineapple"></i>';
		}
		//125 CAMP
		else if (code === '1018' || code === '1019') {
			return '<i class="fa-sharp fa-regular fa-campground"></i>';
		}
		//126 Helicopter
		else if (code === '139b') {
			return '<i class="fa-regular fa-helicopter"></i>';
		}
		//127 RUN RUN
		else if (code === '1178' || code === '1076') {
			return '<i class="fa-solid fa-person-running"></i>';
		}
		//128  projector
		else if (code === '1138') {
			return '<i class="fa-regular fa-projector"></i>';
		}
		//129  ПОШТА
		else if (code === '1081') {
			return '<i class="fa-regular fa-envelopes-bulk"></i>';
		}
		return '';
	}
};
// ПАРКОВКА <i class="fa-solid fa-heart-circle-plus"></i>
</script>

<style lang="scss" scoped>
.logoView {
	padding-top: 100px;
}
.f {
	display: flex;
}
.icon {
	padding-right: 10px;
	font-size: 20px;
}
.text {
	padding-left: 10px;
	font-size: 20px;
}
</style>

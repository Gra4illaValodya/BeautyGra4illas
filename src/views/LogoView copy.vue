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
		if (
			code === 'Internet disponible' ||
			code === 'Accès Internet' ||
			code === 'Acesso \u00e0 Internet' ||
			code === 'Accesso a Internet' ||
			code === 'Internet access' ||
			code === 'Free WiFi' ||
			code === 'Wifi (gratis)' ||
			code === 'Internet sem fios gr\u00e1tis' ||
			code === 'Wi-Fi gratuito' ||
			code === 'Acc\u00e8s Wi-Fi gratuit' ||
			code === 'Internet com fios gr\u00e1tis' ||
			code === 'Conexi\u00f3n a Internet por cable gratis' ||
			code === 'Connessione Internet via cavo gratis' ||
			code === 'Internet par c\u00e2ble gratuit' ||
			code === 'Free wired Internet' ||
			code === 'Wifi gratis' ||
			code === 'Wi-fi gr\u00e1tis' ||
			code === 'Acesso \u00e0 internet - sem fios' ||
			code === 'Acesso \u00e0 internet - sem fios' ||
			code === 'Acc\u00e8s Internet sans fil' ||
			code === 'Accesso a Internet - Wi-Fi' ||
			code === 'WiFi (surcharge)' ||
			code === 'Wi-Fi (con supplemento)' ||
			code === 'Wifi (de pago)' ||
			code === 'Acc\u00e8s Wi-Fi (en suppl\u00e9ment)' ||
			code === 'Internet sem fios (sobretaxa)' ||
			code === 'WLAN access' ||
			code === 'Accesso WLAN' ||
			code === 'Acesso \u00e0 Internet sem fios' ||
			code === 'Acc\u00e8s Internet WiFi' ||
			code === 'Acesso \u00e0 Internet sem fios' ||
			code === 'Conexi\u00f3n WLAN a Internet' ||
			code === 'Free wired internet' ||
			code === 'Conexi\u00f3n a Internet en las zonas comunes (alta velocidad)' ||
			code === 'Acc\u00e8s Internet \u00e0 haut d\u00e9bit dans les espaces communs' ||
			code === 'Internet access in public areas - high speed' ||
			code === '9a1222ca-cd79-4147-915b-8d2ed10325a5' ||
			code === 'cf1fce3f-1583-4a37-b5f9-57512284bc53' ||
			code === 'a4157b2e-2469-49cc-b3a2-95c1e6631463' ||
			code === '94128ac4-de0f-4ef7-bb6d-aa890d4f08a9' ||
			code === '62' ||
			code === '64' ||
			code === '11c1' ||
			code === '1127' ||
			code === '11c0' ||
			code === '1355' ||
			code === '1357' ||
			code === '1323' ||
			code === '114e' ||
			code === '11bb' ||
			code === '11b5' ||
			code === '1118' ||
			code === '12eb' ||
			code === '1321' ||
			code === '11ba' ||
			code === '11b6' ||
			code === '11c8' ||
			code === '10c9' ||
			code === '11c2'
		) {
			return '<i class="fa-solid fa-wifi"></i>';
		}
		// ЧИСТОТА ЧИСТОТА ЧИСТОТА ЧИСТОТА ЧИСТОТА ЧИСТОТА ЧИСТОТА ЧИСТОТА ЧИСТОТА ЧИСТОТА ЧИСТОТА ЧИСТОТА ЧИСТОТА ЧИСТОТА
		else if (
			code === 'Servicio de habitaciones' ||
			code === 'Utilizzati prodotti ecosostenibili per le pulizie' ||
			code === 'Politica per lo smaltimento degli alimenti completa' ||
			code === "Articoli per l'igiene personale ecosostenibili" ||
			code === 'Forniti prodotti ecosostenibili per le pulizie' ||
			code === "Distributore d'acqua" ||
			code === 'Eco-friendly cleaning products used' ||
			code === 'Comprehensive food waste policy' ||
			code === 'Eco-friendly toiletries' ||
			code === 'Eco-friendly cleaning products provided' ||
			code === 'Se utilizan productos de limpieza ecol\u00f3gicos' ||
			code === 'Comprehensive food waste policy' ||
			code === 'Eco-friendly toiletries' ||
			code === 'Eco-friendly cleaning products provided' ||
			code === 'Pol\u00edtica integral de desechos alimentarios' ||
			code === 'Art\u00edculos de higiene personal ecol\u00f3gicos' ||
			code === 'Se proporcionan productos de limpieza ecol\u00f3gicos' ||
			code === '853bcc04-95c7-4d45-9b93-891c72600480' ||
			code === 'Commonly-touched surfaces are cleaned with disinfectant' ||
			code === '31b16bcb-bdb2-43a4-9f25-7a6d45b16fbe' ||
			code === '25298762-63f3-4f52-8b0f-f46c164372a2' ||
			code === '8ad91ab8-f638-416f-8c55-4770993c0fbf' ||
			code === '41a35c4b-5d11-4d80-b0ca-c76423dd5b30' ||
			code === 'fda95c50-4933-4f4b-987e-ec98294675c9' ||
			code === 'e9e68c2f-a233-4f8a-899c-08d23bc1dc55' ||
			code === '85d219aa-3a58-4235-b90d-5deb26730df4' ||
			code === '5fe7830d-c82f-43e6-beb1-5953d89eee64' ||
			code === '10e4' ||
			code === '1350' ||
			code === '1266'
		) {
			return '<i class="fa-solid fa-hand-sparkles"></i>';
		} else if (code === 'Aparcamiento') {
			return '<i class="fa-solid fa-house"></i>';
		} else if (code === 'Servicio de lavandería') {
			return '<i class="fa-duotone fa-washing-machine"></i>';
		}

		// 2 ROOM CLEANING ROOM CLEANING ROOM CLEANING ROOM CLEANING ROOM CLEANING
		else if (
			code === 'Housekeeping on request' ||
			code === 'Servicio de limpieza a petici\u00f3n' ||
			code === '0178b1e9-4478-40f5-92f3-82dafa958c12' ||
			code === 'd38d9458-438e-4231-801b-dbdee4620831' ||
			code === '36' ||
			code === '119c' ||
			code === '121f' ||
			code === '10f2' ||
			code === '1208' ||
			code === '1505' ||
			code === 'Service de chambre' ||
			code === 'Room Service' ||
			code === 'Servi\u00e7o de quartoss' ||
			code === 'Servizio in camera' ||
			code === 'Serviço de quartos' ||
			code === 'Service de m\u00e9nage sur demande' ||
			code === 'Pulizie su richiesta' ||
			code === 'Caff\u00e8/t\u00e8 nelle aree comuni'
		) {
			return '<i class="fa-sharp fa-solid fa-vacuum"></i>';
		}

		// 3 БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР БАР
		else if (
			code === 'N\u00famero de bares en la playa: 1' ||
			code === 'N\u00famero de bares: 5' ||
			code === 'N\u00famero de bares: 4' ||
			code === 'Nombre de bars/salons : 4' ||
			code === 'N\u00famero de bares: 1' ||
			code === 'N\u00famero de bares/salas comuns: 1' ||
			code === 'Number of bars/lounges - 1' ||
			code === 'N\u00famero de bares en la playa: 2' ||
			code === 'N\u00famero de bares: 10' ||
			code === 'Numero di bar sulla spiaggia: 2' ||
			code === "Numero di bar sull'acqua: 1" ||
			code === 'Numero di bar/lounge: 10' ||
			code === 'N\u00famero de bares/salas comuns: 10' ||
			code === 'N\u00famero de bares de praia: 2' ||
			code === 'N\u00famero de bares en la piscina: 1' ||
			code === 'N\u00famero de bares \u00e0 beira da piscina: 1' ||
			code === 'fd29d490-2e8c-4760-a75d-1dcd24065bb6' ||
			code === '61537275-66be-4b0c-948b-a31678dd6520' ||
			code === '700611aa-5b60-4789-9ee0-77d7784c35f5' ||
			code === '93de2850-5257-4822-abff-7d70c942cbc7' ||
			code === 'Bar / Pub ' ||
			code === '10' ||
			code === '34' ||
			code === '33' ||
			code === '100a' ||
			code === '1195' ||
			code === '106f' ||
			code === '1310' ||
			code === '10f5' ||
			code === '100d' ||
			code === '1512' ||
			code === '1065' ||
			code === '1119' ||
			code === '1199' ||
			code === '1303' ||
			code === '104b' ||
			code === '1364' ||
			code === 'Mini-club' ||
			code === 'Mini-clube' ||
			code === 'Miniclub' ||
			code === 'Bar/lounge' ||
			code === 'Bar o lounge' ||
			code === 'Bar/Lounge' ||
			code === 'Bar/caffetteria' ||
			code === 'Bar/salon' ||
			code === 'Discoteca' ||
			code === 'N\u00famero de bares: 2' ||
			code === 'N\u00famero de bares/salas comuns: 2' ||
			code === 'Bo\u00eete de nuit' ||
			code === 'Nombre de bars/salons : 2' ||
			code === 'Petit-d\u00e9jeuner inclus' ||
			code === 'Nombre de restaurants : 2' ||
			code === 'Nightclub' ||
			code === 'Number of bars/lounges - 2' ||
			code === 'Night club' ||
			code === 'Numero di bar/lounge: 2' ||
			code === 'Numero di bar/caff\u00e8: 2' ||
			code === 'Nombre de bars/salons : 1' ||
			code === 'Nombre de bars en bord de piscine : 1' ||
			code === 'Nombre de restaurants : 1' ||
			code === 'Numero di bar/lounge: 1' ||
			code === 'Numero di bar accanto alla piscina: 1' ||
			code === 'N\u00famero de bares/salas comuns: 3' ||
			code === 'Bar junto \u00e0 piscina' ||
			code === 'N\u00famero de bares: 3' ||
			code === 'Bar junto a la piscina' ||
			code === 'Chiringuito de playa' ||
			code === 'Cocktail di benvenuto' ||
			code === 'Numero di bar/lounge: 3' ||
			code === 'Bar accanto alla piscina' ||
			code === 'Bar sulla spiaggia' ||
			code === 'Nombre de bars/salons : 3' ||
			code === 'Bar en bord de piscine' ||
			code === 'Bar de plage' ||
			code === 'Number of bars/lounges - 3' ||
			code === 'Poolside bar' ||
			code === 'Beach bar' ||
			code === "Numero di bar sull'acqua: 2" ||
			code === 'Nombre de bars en milieu de piscine : 2' ||
			code === 'N\u00famero de bares junto a la piscina: 1' ||
			code === 'N\u00famero de bares/salas comuns: 5' ||
			code === 'N\u00famero de bares junto \u00e0 piscina: 1' ||
			code === 'Mini-club' ||
			code === 'Snack-bar/charcutaria' ||
			code === 'Nombre de bars/salons : 5' ||
			code === 'Numero di bar/lounge: 5' ||
			code === 'Nombre de bars/salons : 8' ||
			code === 'Nombre de bars en bord de piscine : 3' ||
			code === 'N\u00famero de bares/salas comuns: 8' ||
			code === 'N\u00famero de bares junto \u00e0 piscina: 3' ||
			code === 'Number of bars/lounges - 8' ||
			code === 'Number of poolside bars - 3' ||
			code === 'Numero di ristoranti: 7' ||
			code === 'Numero di bar/lounge: 8' ||
			code === 'Numero di bar accanto alla piscina: 3' ||
			code === 'N\u00famero de caf\u00e9s/cafetarias: 8' ||
			code === 'N\u00famero de bares: 8' ||
			code === 'N\u00famero de bares junto a la piscina: 3' ||
			code === 'Numero di bar/lounge: 7' ||
			code === 'Numero di bar accanto alla piscina: 2' ||
			code === 'Nombre de bars/salons : 7' ||
			code === 'Number of bars/lounges - 7' ||
			code === 'Number of poolside bars - 2' ||
			code === 'N\u00famero de bares/salas comuns: 7' ||
			code === 'N\u00famero de bares junto \u00e0 piscina: 2' ||
			code === 'N\u00famero de bares: 7' ||
			code === 'N\u00famero de bares junto a la piscina: 2' ||
			code === 'Nombre de bars de plage : 1' ||
			code === 'Number of poolside bars - 1' ||
			code === 'Number of beach bars - 1' ||
			code === 'N\u00famero de bares de praia: 1' ||
			code === 'N\u00famero de bares en la playa: 1'
		) {
			return '<i class="fa-solid fa-martini-glass-citrus"></i>';
		}
		// 4 БАГАЖ БАГАЖ БАГАЖ БАГАЖ БАГАЖ БАГАЖ БАГАЖ
		else if (
			code === 'Luggage storage' ||
			code === 'Una sala de reuniones' ||
			code === 'Consigna de equipaje' ||
			code === 'Depósito de bagagens' ||
			code === 'Deposito bagagli' ||
			code === 'Consigne \u00e0 bagages' ||
			code === 'Bagagiste/groom' ||
			code === '12a6'
		) {
			return '<i class="fa-sharp fa-solid fa-suitcase-rolling"></i>';
		}

		// 5  БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН БАСЕЙН
		else if (
			code === 'N\u00famero de piscinas cubiertas: 1' ||
			code === 'Cabines de piscine (en suppl\u00e9ment)' ||
			code === 'N\u00famero de piscinas al aire libre: 2' ||
			code === 'N\u00famero de bares/salas comuns: 4' ||
			code === 'N\u00famero de piscinas exteriores: 2' ||
			code === 'N\u00famero de bares/salas comuns: 4' ||
			code === 'N\u00famero de piscinas exteriores: 2' ||
			code === "Numero di piscine all'aperto: 6" ||
			code === 'N\u00famero de piscinas al aire libre: 6' ||
			code === 'Nombre de piscines ext\u00e9rieures : 6' ||
			code === 'Number of outdoor pools - 6' ||
			code === 'N\u00famero de piscinas exteriores: 6' ||
			code === 'N\u00famero de piscinas al aire libre: 7' ||
			code === 'N\u00famero de piscinas exteriores: 7' ||
			code === 'Number of outdoor pools - 7' ||
			code === "Numero di piscine all'aperto: 7" ||
			code === 'Nombre de piscines ext\u00e9rieures : 7' ||
			code === 'N\u00famero de piscinas al aire libre: 8' ||
			code === 'N\u00famero de piscinas cubiertas: 4' ||
			code === 'Numero di piscine al coperto: 4' ||
			code === "Numero di piscine all'aperto: 8" ||
			code === 'N\u00famero de piscinas exteriores: 8' ||
			code === 'N\u00famero de piscinas interiores: 4' ||
			code === 'Caba\u00f1as de piscina gratuitas' ||
			code === '579d9c14-03c2-47d2-97bd-b2967901c1e3' ||
			code === '6e1fead1-6120-4c5f-bfd6-53616c550fa5' ||
			code === '5d9c77ea-dc98-422b-9f09-98607464ea96' ||
			code === '953364a2-ffb8-44f7-9d34-279eae130d0b' ||
			code === 'Pool' ||
			code === '12' ||
			code === '66' ||
			code === '46' ||
			code === '48' ||
			code === '47' ||
			code === '120c' ||
			code === '120f' ||
			code === '1209' ||
			code === '1210' ||
			code === '136e' ||
			code === '1213' ||
			code === '10b4' ||
			code === '1370' ||
			code === '150b' ||
			code === '10b1' ||
			code === '150c' ||
			code === '1060' ||
			code === '1373' ||
			code === '114a' ||
			code === '1513' ||
			code === '1214' ||
			code === '1212' ||
			code === 'Outdoor pool' ||
			code === "Children's pool" ||
			code === 'Piscina al aire libre' ||
			code === 'Piscina infantil' ||
			code === 'Piscina exterior' ||
			code === 'Piscina para crian\u00e7as' ||
			code === "Piscina all'aperto" ||
			code === 'Piscina per bambini' ||
			code === 'Piscine ext\u00e9rieure' ||
			code === 'Piscine pour enfants' ||
			code === 'Tumbonas de piscina' ||
			code === 'Nombre de piscines ext\u00e9rieures : 1' ||
			code === "Numero di piscine all'aperto: 1" ||
			code === 'Piscina interior' ||
			code === 'Cabanas junto \u00e0 piscina gr\u00e1tis' ||
			code === 'Piscina cubierta' ||
			code === 'Piscina al coperto' ||
			code === 'Cabine a bordo piscina gratuite' ||
			code === 'Piscine couverte' ||
			code === 'Piscine couverte' ||
			code === 'Cabines de piscine gratuites' ||
			code === 'Indoor pool' ||
			code === 'Free pool cabanas' ||
			code === 'N\u00famero de piscinas al aire libre: 1' ||
			code === 'N\u00famero de bares en la piscina: 2' ||
			code === 'N\u00famero de piscinas exteriores: 3' ||
			code === 'N\u00famero de piscinas interiores: 1' ||
			code === 'Outdoor pool' ||
			code === 'Nombre de piscines ext\u00e9rieures : 3' ||
			code === 'Nombre de piscines couvertes : 1' ||
			code === "Numero di piscine all'aperto: 3" ||
			code === 'Numero di piscine al coperto: 1' ||
			code === 'Piscine' ||
			code === 'Nombre de piscines couvertes : 2' ||
			code === 'Piscina' ||
			code === 'Numero di piscine al coperto: 2' ||
			code === 'Swimming pool' ||
			code === 'Number of outdoor pools - 3' ||
			code === 'Number of indoor pools - 2' ||
			code === 'Nombre de piscines ext\u00e9rieures : 5' ||
			code === 'Piscina exterior sazonal' ||
			code === 'Piscine ext\u00e9rieure ouverte en saison' ||
			code === 'N\u00famero de piscinas exteriores: 5' ||
			code === 'Outdoor seasonal pool' ||
			code === 'Number of outdoor pools - 5' ||
			code === "Numero di piscine all'aperto: 5" ||
			code === "Piscina estiva all'aperto" ||
			code === 'N\u00famero de piscinas al aire libre: 5' ||
			code === 'Piscina al aire libre de temporada' ||
			code === 'Nombre de bars en bord de piscine : 2' ||
			code === 'Number of outdoor pools - 1' ||
			code === 'Number of indoor pools - 1' ||
			code === 'N\u00famero de piscinas exteriores: 1' ||
			code === 'N\u00famero de piscinas cubiertas: 1'
		) {
			return '<i class="fa-solid fa-person-swimming"></i>';
		}
		// 6 БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС БIЗНЕС
		else if (
			code === 'Centro de negocios o salas de reuni\u00f3n accesibles en silla de ruedas' ||
			code === 'Salas de reuni\u00f5es/business center com acesso para cadeira de rodas' ||
			code === 'Wheelchair-accessible meeting spaces/business center' ||
			code === 'Business center/spazi per riunioni accessibili in sedia a rotelle' ||
			code ===
				"Centre d'affaires/salles de réunion accessibles aux personnes en fauteuil roulant" ||
			code === 'f138706c-dbfd-4929-8fc5-d958465f6082' ||
			code === 'Business Center' ||
			code === '15' ||
			code === '44' ||
			code === '43' ||
			code === '11ff' ||
			code === '1200' ||
			code === 'Business center' ||
			code === 'Business center' ||
			code === 'Una sala de reuniones' ||
			code === 'Centro de negocios' ||
			code === 'Uma sala de reuni\u00f5es' ||
			code === 'Centre d\u2019affaires' ||
			code === 'Services de concierge' ||
			code === 'Servizi concierge' ||
			code === 'Espa\u00e7o para confer\u00eancias' ||
			code === 'Servi\u00e7os de concierge' ||
			code === 'Concierge services'
		) {
			return '<i class="fa-duotone fa-user-tie-hair"></i>';
		}
		// 6 БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД БIЛЬЯРД
		else if (
			code === 'Table de billard' ||
			code === 'Billiards or pool table' ||
			code === 'Tavolo da biliardo' ||
			code === 'Mesa de billar o pool' ||
			code === 'Mesa de bilhar ou de snooker' ||
			code === '1170'
		) {
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
		// 7 ВИНО ВИНО ВИНО ВИНО ВИНО ВИНО ВИНО ВИНО ВИНО ВИНО ВИНО
		else if (
			code === 'Taquillas disponibles' ||
			code === '10a7' ||
			code === '1145' ||
			code === '133a' ||
			code === '12a5' ||
			code === '10a3' ||
			code === '111c' ||
			code === 'Porter/bellhop' ||
			code === 'Facchino' ||
			code === '\u00c9picerie'
		) {
			return '<i class="fa-duotone fa-wine-bottle"></i>';
		}
		// 8 ВIШАЛКА ВIШАЛКА ВIШАЛКА ВIШАЛКА ВIШАЛКА ВIШАЛКА
		else if (
			code === 'Coffee shop or caf\u00e9' ||
			code === 'Portero o botones' ||
			code === 'Taquillas disponibles'
		) {
			return '<i class="fa-solid fa-clothes-hanger"></i>';
		}
		//  9  ГЛОБАЛЬНО ГЛОБАЛЬНО ГЛОБАЛЬНО ГЛОБАЛЬНО ГЛОБАЛЬНО
		else if (
			code === 'Multilingual staff' ||
			code === 'Personnel polyglotte' ||
			code === 'Personale che conosce la lingua dei segni' ||
			code === 'Sign language-capable staffs' ||
			code === 'Personal que conoce la lengua de signos' ||
			code === '1221' ||
			code === '1229' ||
			code === '1358' ||
			code === '111d' ||
			code === 'Multilingual staff' ||
			code === 'Atenci\u00f3n multiling\u00fce' ||
			code === 'Equipa multilingue' ||
			code === 'Personale poliglotta' ||
			code === 'Personnel polyglotte'
		) {
			return '<i class="fa-regular fa-globe"></i>';
		}

		//////// HEMA
		// ГОДИННИК ГОДИННИК ГОДИННИК ГОДИННИК ГОДИННИК ГОДИННИК
		else if (code === '10d2' || code === '1027') {
			return '<i class="fa-regular fa-clock"></i>';
		}
		// 10 ГРИЛЬ ГРИЛЬ ГРИЛЬ ГРИЛЬ ГРИЛЬ ГРИЛЬ ГРИЛЬ ГРИЛЬ
		else if (
			code === 'd419d269-e34f-47ba-9f5f-daf81390e45a' ||
			code === '\u00c1rea para parrillas' ||
			code === 'Grelhadores de churrasco' ||
			code === 'Barbecue(s)' ||
			code === 'Barbecue grill(s)' ||
			code === 'Area barbecue'
		) {
			return '<i class="fa-brands fa-gripfire"></i>';
		}
		// 11 годинник з стрелкой
		else if (
			code === "Centre d'affaires ouvert 24 h/24" ||
			code === 'Business center aperto 24 ore su 24' ||
			code === '24-hour business center' ||
			code === 'Business center aberto 24 horas' ||
			code === 'Centro de negocios 24 horas' ||
			code === 'Orari del parcheggio - 24 ore su 24' ||
			code === 'Lot hours - 24 hours' ||
			code === 'Horario del aparcamiento: 24 horas' ||
			code === 'Servicio de recepci\u00f3n 24 horas' ||
			code === '1daaf8a8-e290-4 ae0-bac8-94f679f2a8a4' ||
			code === '65' ||
			code === '37' ||
			code === '49' ||
			code === '1218' ||
			code === '121a' ||
			code === '1217' ||
			code === '12dd' ||
			code === '24-hour front desk' ||
			code === 'Recepci\u00f3n abierta las 24 horas' ||
			code === 'Rece\u00e7\u00e3o 24 horas' ||
			code === 'Reception aperta 24 ore su 24' ||
			code === 'R\u00e9ception ouverte 24 h/24'
		) {
			return '<i class="fa-solid fa-clock-rotate-left"></i>';
		}

		// 12 ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ ДУШ
		else if (
			code === 'Roll-in shower (in select rooms)' ||
			code === 'Ducha adaptada (en algunas habitaciones)' ||
			code === 'Ba\u00f1o accesible (en algunas habitaciones)' ||
			code === 'Numero di vasche idromassaggio: 3' ||
			code === 'Nombre de bains \u00e0 remous : 3' ||
			code === 'N\u00famero de ba\u00f1eras de hidromasaje: 1' ||
			code === 'Number of spa tubs - 1' ||
			code === 'N\u00famero de banheiras de hidromassagem: 1' ||
			code === 'Nombre de bains \u00e0 remous : 1' ||
			code === 'Water dispenser' ||
			code === '108c' ||
			code === '10c5' ||
			code === '1347' ||
			code === '1103' ||
			code === '125b' ||
			code === '110f' ||
			code === '112c' ||
			code === '1284' ||
			code === '1108' ||
			code === '1109' ||
			code === '1107' ||
			code === '1265' ||
			code === '10fe' ||
			code === '1102' ||
			code === '125a' ||
			code === '134e' ||
			code === '103f' ||
			code === 'Roll-in shower' ||
			code === 'Doccia a filo pavimento' ||
			code === 'Douche accessible en fauteuil roulant' ||
			code === 'Douche accessible en fauteuil roulant (dans certaines chambres)' ||
			code === 'Doccia a filo pavimento (in alcune camere)' ||
			code === 'Ba\u00f1era de hidromasaje'
		) {
			return '<i class="fa-duotone fa-shower"></i>';
		}
		// 13 ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ ДОМ
		else if (
			code === 'Cabine sulla spiaggia (con supplemento)' ||
			code === 'Caba\u00f1as de piscina (de pago)' ||
			code === 'Barracas junto \u00e0 piscina (sobretaxa)' ||
			code === 'Reception hall' ||
			code === '38' ||
			code === '1066' ||
			code === '124d' ||
			code === '102c' ||
			code === '110b' ||
			code === '110c' ||
			code === '110e' ||
			code === '1117' ||
			code === '12c6' ||
			code === '123e' ||
			code === '113c' ||
			code === '10ab' ||
			code === '123b' ||
			code === '123d' ||
			code === 'Habitaci\u00f3n accesible' ||
			code === 'Cabanas de praia gr\u00e1tis' ||
			code === 'Sala de ordenadores' ||
			code === 'Cabine sulla spiaggia gratuite'
		) {
			return '<i class="fa-regular fa-house"></i>';
		}
		// 13  ДИТЯЧИЙ КЛУБ ДИТЯЧИЙ КЛУБ ДИТЯЧИЙ КЛУБ ДИТЯЧИЙ КЛУБ ДИТЯЧИЙ КЛУБ
		else if (
			code === 'Raquetebol/Squash no local' ||
			code === 'Animazione per bambini (con supplemento)' ||
			code === 'Jeux pour les enfants' ||
			code === "Children's games" ||
			code === 'Animazione per bambini' ||
			code === 'Club infantil gratuito' ||
			code === 'Playground on site' ||
			code === 'ae88fa98-d933-48fc-9096-071dc59a011d' ||
			code === '095b2309-ab07-49cb-be64-3acdf5811885' ||
			code === '397b0a59-349b-445c-9794-ee706a0d8eb2' ||
			code === '9' ||
			code === '23' ||
			code === '19' ||
			code === '12e1' ||
			code === '10dc' ||
			code === '107f' ||
			code === '123f' ||
			code === '10ce' ||
			code === '1028' ||
			code === 'Club infantil' ||
			code === 'Kids Club' ||
			code === 'Clube para crian\u00e7as (gr\u00e1tis)' ||
			code === 'Miniclub per bambini (gratuito)' ||
			code === 'Animazione per bambini (gratuita)' ||
			code == "Children's club (free)" ||
			code === 'Aire de jeux sur place' ||
			code === 'Miniclub per bambini' ||
			code === "Children's club" ||
			code === 'Club pour enfants' ||
			code === 'Clube infantil'
		) {
			return '<i class="fa-solid fa-child-reaching"></i>';
		}
		// 14 TV TV TV TV TV TV TV TV TV TV TV TV TV TV
		else if (
			code === 'Cable/Satellite TV' ||
			code === '2afa6168-4264-4292-8b13-a9ca8b206609' ||
			code === '85c71e5d-89e2-4555-91a8-7b0beb3d7602' ||
			code === '1899583c-2375-464f-8511-5011b8a091ad' ||
			code === '39' ||
			code === '40' ||
			code === '1113' ||
			code === '126b' ||
			code === '1016' ||
			code === '133f' ||
			code === '10e5' ||
			code === '10a9' ||
			code === 's1020' ||
			code === '1163' ||
			code === '1101' ||
			code === '126c' ||
			code === '1159' ||
			code === '1153' ||
			code === '132f' ||
			code === '10cd' ||
			code === '111b' ||
			code === '111a' ||
			code === '10aa' ||
			code === '1394' ||
			code === '1002' ||
			code === 'Television in common areas' ||
			code === 'Televisi\u00f3n en las zonas comunes' ||
			code === 'Televisore nelle aree comuni' ||
			code === 'T\u00e9l\u00e9vision dans les espaces communs'
		) {
			return '<i class="fa-sharp fa-regular fa-tv"></i>';
		}
		// 15 КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ КУРIННЯ
		else if (
			code === 'Estabelecimento para n\u00e3o fumadores' ||
			code === 'Espacios para fumadores (bajo multa)' ||
			code === 'Designated smoking areas (fines apply)' ||
			code === 'Aree designate per fumatori (si applicano penali)' ||
			code === '\u00c1reas especificas para fumadores (multas aplic\u00e1veis)' ||
			code === 'Espaces fumeurs pr\u00e9vus (sous peine d\u2019amendes)' ||
			code === '12b6' ||
			code === '10e3' ||
			code === 'Designated smoking areas' ||
			code === 'Espacios para fumadores' ||
			code === '\u00c1reas para fumadores' ||
			code === 'Aree designate per i fumatori' ||
			code === 'Espaces fumeurs pr\u00e9vus' ||
			code === 'Estabelecimento para n\u00e3o fumadores'
		) {
			return '<i class="fa-regular fa-smoking"></i>';
		}
		// 16 HE КУРIННЯ HE КУРIННЯ HE КУРIННЯ  HE КУРIННЯ  HE КУРIННЯ HE  КУРIННЯ HE КУРIННЯ
		else if (
			code === 'Alojamiento libre de humos' ||
			code === 'Alojamento para n\u00e3o fumadores' ||
			code === 'Non-Smoking' ||
			code === 'ede15225-8c31-4ef1-9634-b591596edcc0' ||
			code === 'Non smoking rooms' ||
			code === '1074' ||
			code === 'Smoke-free ' ||
			code === 'Struttura riservata ai non fumatori' ||
			code === 'H\u00e9bergement non-fumeurs' ||
			code === 'Alojamiento libre de humos'
		) {
			return '<i class="fa-solid fa-ban-smoking"></i>';
		}
		// 17 САД САД САД САД САД САД САД САД САД САД САД САД
		else if (
			code === 'Area per picnic' ||
			code === 'Parque infantil no local' ||
			code === 'Outdoor entertainment area' ||
			code === 'Espace de loisirs en plein air' ||
			code === 'Zona de entretenimento no exterior' ||
			code === 'Zona de entretenimiento al aire libre' ||
			code === 'Giardino sul tetto' ||
			code === 'Rooftop garden' ||
			code === 'Jard\u00edn en la azotea' ||
			code === '45' ||
			code === '52' ||
			code === '1238' ||
			code === '115d' ||
			code === '1115' ||
			code === '1341' ||
			code === '107a' ||
			code === '1072' ||
			code === 'Garden' ||
			code === 'Jard\u00edn' ||
			code === 'Giardino' ||
			code === 'Jardim' ||
			code === 'Giardino' ||
			code === 'Jardin' ||
			code === '\u00c1rea de p\u00edcnic' ||
			code === '\u00c1rea para piqueniques' ||
			code === 'Aire de pique-nique' ||
			code === 'Picnic area' ||
			code === 'Area per picnic'
		) {
			return '<i class="fa-duotone fa-bench-tree"></i>';
		}
		// 18 СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ СПОРТЗАЛ
		else if (
			code === 'Aulas de fitness no local' ||
			code === 'Cours de fitness sur place' ||
			code === 'Centre de remise en forme' ||
			code === 'Corsi di fitness in loco' ||
			code === 'Gimnasio 24 horas' ||
			code === '24-hour fitness facilities' ||
			code === 'Palestra aperta 24 ore su 24' ||
			code === 'Salle de fitness ouverte 24 h/24' ||
			code === 'Sala de fitness 24 horas por dia' ||
			code === 'Clases de gimnasia en las instalaciones' ||
			code === 'Fitness classes on site' ||
			code === '305c4929-6527-4fe1-9d7b-415b5b1fb60f' ||
			code === 'Fitness Center' ||
			code === '13' ||
			code === '1175' ||
			code === '1172' ||
			code === '12e0' ||
			code === '12ce' ||
			code === 'Acceso gratuito a un gimnasio cercano' ||
			code ===
				'Utiliza\u00e7\u00e3o gr\u00e1tis de centro de fitness nas imedia\u00e7\u00f5es' ||
			code === 'Acc\u00e8s gratuit \u00e0 la salle de remise en forme voisine' ||
			code === 'Free use of nearby fitness center' ||
			code === 'Uso gratuito della palestra nelle vicinanze' ||
			code === 'Sala de fitness' ||
			code === 'Gimnasio' ||
			code === 'Palestra' ||
			code === 'Salle de fitness' ||
			code === 'Fitness facilities' ||
			code === 'Aulas de fitness no local	'
		) {
			return '<i class="fa-regular fa-dumbbell"></i>';
		}
		// 19 CHECK CHECK CHECK CHECK CHECK CHECK CHECK CHECK
		else if (
			code === 'Servicios de accesibilidad en la habitaci\u00f3n (en algunas habitaciones)' ||
			code === 'Centro de bienestar' ||
			code === 'Check-out veloce' ||
			code === 'Express check-out' ||
			code === 'Check-out r\u00e1pido' ||
			code === 'Service de d\u00e9part express' ||
			code === 'In-room accessibility (in select rooms)' ||
			code === 'Daily' ||
			code === 'Tous les jours' ||
			code === 'Diariamente' ||
			code === 'Salle de r\u00e9ception' ||
			code === 'Ponton' ||
			code === 'Tutti i giorni' ||
			code === 'Exploraci\u00f3n de cuevas o espeleolog\u00eda en las inmediaciones' ||
			code === 'Esplorazioni speleologiche nelle vicinanze' ||
			code === 'Cave exploring/spelunking nearby' ||
			code === 'Explora\u00e7\u00e3o de grutas/espeleologia nas imedia\u00e7\u00f5es' ||
			code === 'Socorrista en las instalaciones' ||
			code === 'Lifeguard on site' ||
			code === 'Nadador-salvador no local' ||
			code === 'Ma\u00eetre-nageur sur place' ||
			code === 'Politica di riciclaggio completa' ||
			code === 'Corrimani lungo i corridoi' ||
			code === 'Comprehensive recycling policy' ||
			code === 'Handrails in hallways' ||
			code === 'Pol\u00edtica integral de reciclaje' ||
			code === 'Barandillas en los pasillos' ||
			code === 'Dispensador de agua' ||
			code === '6e76be26-a6d4-4e3a-8f88-f68f6960ef86' ||
			code === 'Facility' ||
			code === '47b87ea2-83e7-4d0c-8085-37867e40a92d' ||
			code === '4b17af0b-90cb-47c2-af3a-0d94352a4943' ||
			code === '12' ||
			code === '8' ||
			code === '125f' ||
			code === '1271' ||
			code === '10da' ||
			code === '10e0' ||
			code === '10cc' ||
			code === '10ec' ||
			code === '1094' ||
			code === '1259' ||
			code === '1030' ||
			code === '1262' ||
			code === '1337' ||
			code === '104e' ||
			code === '1239' ||
			code === '105d' ||
			code === '1070' ||
			code === '1508' ||
			code === '10b9' ||
			code === '1186' ||
			code === '121b' ||
			code === '1514' ||
			code === '1374' ||
			code === '1261' ||
			code === '109d' ||
			code === '1014' ||
			code === '12f3' ||
			code === '108d' ||
			code === '1176' ||
			code === '1067' ||
			code === '1144' ||
			code === '1038' ||
			code === '1011' ||
			code === '12fb' ||
			code === '109c' ||
			code === '104a' ||
			code === '10d4' ||
			code === '123a' ||
			code === '1091' ||
			code === 'In-room accessibility' ||
			code === 'Acessibilidade nos quartos' ||
			code === 'Sala ricevimenti' ||
			code === 'Check-in veloce' ||
			code === 'Assistenza per tour e biglietti' ||
			code === 'Percorso accessibile in sedia a rotelle' ||
			code === 'Rece\u00e7\u00e3o gr\u00e1tis' ||
			code === 'Apoio para excurs\u00f5es/compra de bilhetes' ||
			code === 'Asistencia tur\u00edstica y para la compra de entradas' ||
			code === 'Check-in expr\u00e9s' ||
			code === 'Express check-in' ||
			code === 'Armadietti disponibili' ||
			code === 'Servicios de accesibilidad en la habitaci\u00f3n (en algunas habitaciones)'
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
		// 20 COFFEE COFFEE COFFEE COFFEE COFFEE COFFEE
		else if (
			code === 'Coffee/tea in common areas' ||
			code === 'Nombre de caf\u00e9s : 8' ||
			code === 'N\u00famero de caf\u00e9s/cafetarias: 8' ||
			code === 'Number of coffee shops/cafes - 8' ||
			code === 'N\u00famero de cafeter\u00edas: 8' ||
			code === 'Numero di bar/caff\u00e8: 8' ||
			code === 'Numero di bar/caff\u00e8: 1' ||
			code === 'Caffetteria' ||
			code === 'Number of coffee shops/cafes - 1' ||
			code === 'N\u00famero de caf\u00e9s/cafetarias: 1' ||
			code === 'Nombre de caf\u00e9s : 1' ||
			code === 'Filtri per t\u00e8/caff\u00e8 riutilizzabili' ||
			code === 'Reusable coffee/tea filters' ||
			code === 'Filtros de t\u00e9 y caf\u00e9 reutilizables' ||
			code === '3901a661-6028-4c46-96d9-ac3106410e11' ||
			code === '10e6' ||
			code === '10dd' ||
			code === '119a' ||
			code === '1268' ||
			code === '1017' ||
			code === 'Coffee shop or caf\u00e9' ||
			code === 'Cafeter\u00eda' ||
			code === 'Caf\u00e9/ch\u00e1 nos espa\u00e7os comuns' ||
			code === 'Cafetaria' ||
			code === 'Caf\u00e9' ||
			code === 'N\u00famero de cafeter\u00edas: 2' ||
			code === 'N\u00famero de caf\u00e9s/cafetarias: 2' ||
			code === 'Nombre de caf\u00e9s : 2' ||
			code === 'Number of coffee shops/cafes - 2' ||
			code === 'Caf\u00e9/th\u00e9 dans les espaces communs' ||
			code === 'T\u00e9 o caf\u00e9 en las zonas comunes' ||
			code === 'Coffee/tea in common areas'
		) {
			return '<i class="fa-regular fa-mug-hot"></i>';
		}
		// 21 СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ СЕЙФ
		else if (
			code === '8e833b32-f9ab-4009-98cd-2e46cae7ef55' ||
			code === '1089' ||
			code === '1336' ||
			code === '1315' ||
			code === '1348' ||
			code === 'Safe-deposit box at front desk' ||
			code === 'Caja fuerte en la recepci\u00f3n' ||
			code === 'Cofre na rece\u00e7\u00e3o' ||
			code === 'Cassetta di sicurezza presso la reception' ||
			code === 'Coffre-fort / consigne \u00e0 la r\u00e9ception' ||
			code === 'Servicios de conserjer\u00eda'
		) {
			return '<i class="fa-sharp fa-regular fa-vault"></i>';
		}

		// 22 IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД IHBAЛIД
		else if (
			code === 'Accessible aux personnes en fauteuil roulant' ||
			code === '4e9a979c-1f31-45a1-9b4c-758c0c4e508a' ||
			code === '1' ||
			code === '61' ||
			code === '1036' ||
			code === '1332' ||
			code === '10b7' ||
			code === '10b8' ||
			code === '1290' ||
			code === '131f' ||
			code === '1318' ||
			code === 'Wheelchair accessible parking' ||
			code === 'Ducha accesible en silla de ruedas' ||
			code === 'Aparcamiento accesible en silla de ruedas' ||
			code === 'Ba\u00f1o accesible en silla de ruedas' ||
			code === 'Polib\u00e3 adaptado para cadeiras de rodas' ||
			code === 'Casa de banho acess\u00edvel para cadeiras de rodas' ||
			code === 'Estacionamento com acesso para cadeira de rodas' ||
			code === 'Camere accessibili ai disabili' ||
			code === 'Parcheggio accessibile in sedia a rotelle' ||
			code ===
				'Accessibilit\u00e9 de la chambre aux personnes \u00e0 mobilit\u00e9 r\u00e9duite' ||
			code === 'Parking accessible aux personnes en fauteuil roulant' ||
			code === 'Salle de bain accessible aux personnes \u00e0 mobilit\u00e9 r\u00e9duite' ||
			code ===
				'Chambre accessible aux personnes \u00e0 mobilit\u00e9 r\u00e9duite (dans certaines chambres)' ||
			code === 'Rampe d\u2019acc\u00e8s pour personnes en fauteuil roulant' ||
			code === 'Camere per persone con disabilit\u00e0 (solo alcune)' ||
			code === 'Lounge com acesso para cadeira de rodas' ||
			code === 'Restaurante no local com acesso para cadeira de rodas' ||
			code ===
				'Acesso para cadeiras de rodas (poder\u00e1 haver algumas limita\u00e7\u00f5es)' ||
			code === 'Portaria com acesso para cadeira de rodas' ||
			code === 'Rece\u00e7\u00e3o com acesso para cadeira de rodas' ||
			code === 'Lounge accesible en silla de ruedas' ||
			code === 'Restaurante en las instalaciones accesible en silla de ruedas' ||
			code === 'Accesible en silla de ruedas (puede tener limitaciones)' ||
			code === 'Recepci\u00f3n accesible en silla de ruedas' ||
			code === 'Lounge accessibile in sedia a rotelle' ||
			code === 'Ristorante in loco accessibile in sedia a rotelle' ||
			code === 'Accessibile in sedia a rotelle (possibilit\u00e0 di limitazioni)' ||
			code === 'Reception accessibile in sedia a rotelle' ||
			code === 'Area accoglienza accessibile in sedia a rotelle' ||
			code === 'Salon accessible aux personnes en fauteuil roulant' ||
			code === 'Restaurant sur place accessible aux personnes en fauteuil roulant' ||
			code ===
				"Accessible aux personnes en fauteuil roulant (des restrictions peuvent s'appliquer)" ||
			code === 'Conciergerie accessible aux personnes en fauteuil roulant' ||
			code === 'R\u00e9ception accessible aux personnes en fauteuil roulant' ||
			code === 'Wheelchair-accessible lounge' ||
			code === 'Wheelchair-accessible on-site restaurant' ||
			code === 'Wheelchair accessible (may have limitations)' ||
			code === 'Wheelchair-accessible concierge desk' ||
			code === 'Wheelchair-accessible registration desk' ||
			code === 'Ruta accesible en silla de ruedas' ||
			code === 'Alguns quartos s\u00e3o acess\u00edveis para pessoas com defici\u00eancia' ||
			code === 'Chuveiro acess\u00edvel a cadeira de rodas (em alguns quartos)' ||
			code === 'Casa de banho acess\u00edvel para cadeiras de rodas (em alguns quartos)' ||
			code === 'Casa de banho acess\u00edvel para cadeiras de rodas (em alguns quartos)' ||
			code === 'Caminho acess\u00edvel em cadeira de rodas' ||
			code ===
				'Salle de bains accessible aux personnes \u00e0 mobilit\u00e9 r\u00e9duite (dans certaines chambres)' ||
			code === 'Bagno per persone con disabilit\u00e0 (in alcune camere)' ||
			code === "Rampe d'acc\u00e8s pour personnes en fauteuil roulant" ||
			code === "Rampe d'ascenseur accessible aux personnes en fauteuil roulant" ||
			code === 'Toilettes publiques accessibles aux personnes en fauteuil roulant' ||
			code === 'Spa accessibile in sedia a rotelle' ||
			code === 'Toilette pubblica accessibile in sedia a rotelle' ||
			code === 'Wheelchair-accessible public washroom' ||
			code === 'Wheelchair-accessible spa' ||
			code === 'Sanit\u00e1rios com acesso para cadeira de rodas' ||
			code === 'Habitaci\u00f3n accesible en silla de ruedas' ||
			code === 'Ba\u00f1o p\u00fablico accesible en silla de ruedas' ||
			code === 'Accessible bathroom (in select rooms)' ||
			code ===
				'Accessible aux personnes en fauteuil roulant (des restrictions peuvent s’appliquer)' ||
			code === '"Caminho at\u00e9 ao elevador acess\u00edvel em cadeira de rodas' ||
			code === 'Wheelchair-accessible path to elevator' ||
			code === "Percorso fino all'ascensore accessibile in sedia a rotelle" ||
			code === 'Accessibile in sedia a rotelle - no' ||
			code === 'Accesible en silla de ruedas: no' ||
			code === 'Acesso para cadeiras de rodas - n\u00e3o' ||
			code === 'Accessible aux personnes en fauteuil roulant - N/A' ||
			code === 'Wheelchair accessible - no' ||
			code === 'Wheelchair-accessible pool' ||
			code === 'Piscina accessibile in sedia a rotelle' ||
			code === 'Piscina com acesso para cadeira de rodas' ||
			code === 'Piscina accesible en silla de ruedas' ||
			code === 'Piscine accessible aux personnes en fauteuil roulant' ||
			code === 'Rampe d\u2019ascenseur accessible aux personnes en fauteuil roulant' ||
			code === 'Navetta non accessibile alle persone con disabilit\u00e0' ||
			code === 'Accesible en silla de ruedas' ||
			code === 'Wheelchair accessible' ||
			code === 'Acesso para cadeiras de rodas' ||
			code === 'Accessible aux personnes en fauteuil roulant'
		) {
			return '<i class="fa-regular fa-wheelchair"></i>';
		}

		//  23 ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ ТУАЛЕТ
		else if (
			code === 'Accessible bathroom' ||
			code === "Solo WC a risparmio d'acqua" ||
			code === 'Water-efficient toilets only' ||
			code === 'Solo hay ba\u00f1os con uso eficiente del agua' ||
			code === '126d' ||
			code === 'Accessible bathroom'
		) {
			return '<i class="fa-duotone fa-toilet"></i>';
		}
		//  24 ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР ТРАНСФЕР
		else if (
			code === 'Train station pickup (surcharge)' ||
			code === 'Airport transportation' ||
			code === 'Cruise terminal shuttle (surcharge)' ||
			code === 'Free shopping center shuttle' ||
			code === 'Accessible train station shuttle' ||
			code === 'Bus station shuttle (surcharge)' ||
			code === 'Accessible bus station shuttle' ||
			code === 'Train station drop-off (surcharge)' ||
			code === 'Beach shuttle (surcharge)' ||
			code === 'Transporte al aeropuerto' ||
			code === 'Transporte gratuito al centro comercial' ||
			code === 'Servicio de transporte desde o hasta la estaci\u00f3n de trenes accesible' ||
			code ===
				'Servicio de transporte desde o hasta la estaci\u00f3n de autobuses accesible' ||
			code === 'Traslado a la estaci\u00f3n de tren (recargo)' ||
			code === 'Transporte a la playa (de pago)' ||
			code === 'Transporte desde o hasta la estaci\u00f3n de autobuses (de pago)' ||
			code === 'c2e8668c-8276-4836-bfe8-35513365f3f1' ||
			code === 'f9be8154-4335-43cf-8df8-d5a50ca4587f' ||
			code === 'b77c1437-3a55-4c97-b722-1868c3c05420' ||
			code === '58' ||
			code === '42' ||
			code === '57' ||
			code === '121c' ||
			code === '11e9' ||
			code === '11fe' ||
			code === '11e3' ||
			code === '12bb' ||
			code === '108e' ||
			code === '11ee' ||
			code === '12bf' ||
			code === '10e7' ||
			code === '11f0' ||
			code === '11f5' ||
			code === '12bd' ||
			code === '12bc' ||
			code === '10e1' ||
			code === '11e4' ||
			code === 'Transporte al aeropuerto (de pago)' ||
			code === 'Transporte para o aeroporto (sobretaxa)' ||
			code === 'Transfert a\u00e9roport (en suppl\u00e9ment)' ||
			code === 'Airport transportation (surcharge)' ||
			code === 'Trasferimento aeroportuale (con supplemento' ||
			code === 'Trasferimento aeroportuale (con supplemento)' ||
			code === 'Service d\u2019arriv\u00e9e express' ||
			code === 'Transporte para a praia gr\u00e1tis' ||
			code === 'Navetta gratuita per la spiaggia' ||
			code === "Service d'arriv\u00e9e express" ||
			code === 'Navette gratuite pour la plage' ||
			code === 'Free beach shuttle' ||
			code === 'Free beach shuttle' ||
			code === 'Servi\u00e7o de transporte local (sobretaxa)' ||
			code === 'Navette pour les sites locaux (en suppl\u00e9ment)' ||
			code === 'Navetta per le aree limitrofe (con supplemento)' ||
			code === 'Area shuttle (surcharge)' ||
			code === 'Transporte por la zona (de pago)' ||
			code === 'Accessible airport shuttle' ||
			code === 'Transfert de la gare \u00e0 l\u2019h\u00f4tel (en suppl\u00e9ment)' ||
			code === 'Navette pour le centre commercial (en suppl\u00e9ment)' ||
			code === 'Navette pour le terminal de ferry (en suppl\u00e9ment)' ||
			code === 'Navette pour le terminal de croisi\u00e8re (en suppl\u00e9ment)' ||
			code === 'Navette pour le parc \u00e0 th\u00e8me (en suppl\u00e9ment)' ||
			code === 'Transporte da esta\u00e7\u00e3o de comboios para o hotel (sobretaxa)' ||
			code === 'Transporte para a zona comercial (sobretaxa)' ||
			code === 'Transporte para o terminal mar\u00edtimo (sobretaxa)' ||
			code === 'Transporte para o terminal de cruzeiros (sobretaxa)' ||
			code === 'Transporte para o parque tem\u00e1tico (sobretaxa)' ||
			code === 'Trasferimento dalla stazione ferroviaria (con supplemento)' ||
			code === 'Transporte al centro comercial (de pago)' ||
			code === 'Transporte a la terminal de ferris (de pago)' ||
			code === 'Navetta per il terminal dei traghetti (con supplemento)' ||
			code === 'Navetta per il terminal delle crociere (con supplemento)' ||
			code === 'Navetta per il centro commerciale (con supplemento)' ||
			code === 'Navetta per il parco a tema (con supplemento)' ||
			code === 'Recogida en la estaci\u00f3n de ferrocarril (de pago)' ||
			code === 'Transporte a la terminal de cruceros (de pago)' ||
			code === 'Transporte al parque temático (de pago)' ||
			code === 'Recogida en la estaci\u00f3n de ferrocarril (de pago)' ||
			code === 'Servicio de transporte desde o hasta el aeropuerto accesible' ||
			code === 'O transporte do/para o aeroporto \u00e9 acess\u00edvel' ||
			code === 'Navette a\u00e9roport accessible aux fauteuils roulants' ||
			code === 'Navetta per la stazione degli autobus (supplemento)' ||
			code === 'Navetta per la spiaggia (con supplemento)' ||
			code === 'Trasferimento aeroportuale' ||
			code === 'Navetta gratuita per il centro commerciale' ||
			code === 'Navetta non accessibile alle persone con disabilit\u00e0' ||
			code ===
				'Navetta per la stazione ferroviaria accessibile alle persone con disabilit\u00e0' ||
			code ===
				'Navetta per la stazione degli autobus accessibile alle persone con disabilit\u00e0' ||
			code === "Navetta da e per l'aeroporto accessibile alle persone con disabilit\u00e0"
		) {
			return '<i class="fa-solid fa-right-left"></i>';
		}
		//ПЕРЕПИТАТИ ЗА ИКОНКУ
		// 25 РУКОСТИСКАННЯ РУКОСТИСКАННЯ РУКОСТИСКАННЯ РУКОСТИСКАННЯ
		else if (
			code === 'Number of meeting rooms - 1' ||
			code === '106b' ||
			code === 'One meeting room' ||
			code === 'Una sala per riunioni' ||
			code === 'Une salle de r\u00e9union' ||
			code === 'Salas de reuniones' ||
			code === 'Salas de reuni\u00f5es' ||
			code === 'Salles de r\u00e9union' ||
			code === 'Meeting rooms' ||
			code === 'Sale per riunioni' ||
			code === 'Nombre de salles de r\u00e9union : 1' ||
			code === 'Numero delle sale per riunioni: 1' ||
			code === 'Numero delle sale per riunioni: 1' ||
			code === 'Numero delle sale per riunioni: 5' ||
			code === 'Nombre de salles de r\u00e9union : 5' ||
			code === 'Number of meeting rooms - 5' ||
			code === 'N\u00famero de salas de reuni\u00f5es - 5' ||
			code === 'N\u00famero de salas de reuniones: 5' ||
			code === 'Number of meeting rooms - 3' ||
			code === 'Nombre de salles de r\u00e9union : 3' ||
			code === 'N\u00famero de salas de reuni\u00f5es - 3' ||
			code === 'N\u00famero de salas de reuniones: 3' ||
			code === 'Centro de congressos' ||
			code === 'N\u00famero de salas de reuni\u00f5es - 15' ||
			code === 'Nombre de salles de r\u00e9union : 15' ||
			code === 'Number of meeting rooms - 15' ||
			code === 'Numero delle sale per riunioni: 15' ||
			code === 'N\u00famero de salas de reuniones: 2' ||
			code === 'N\u00famero de salas de reuni\u00f5es - 2' ||
			code === 'Numero delle sale per riunioni: 2' ||
			code === 'Nombre de salles de r\u00e9union : 2' ||
			code === 'Number of meeting rooms - 2' ||
			code === 'Number of meeting rooms - 4' ||
			code === 'Numero delle sale per riunioni: 4' ||
			code === 'N\u00famero de salas de reuni\u00f5es - 4' ||
			code === 'N\u00famero de salas de reuniones: 4' ||
			code === 'Nombre de salles de r\u00e9union : 4' ||
			code === 'N\u00famero de salas de reuniones: 1'
		) {
			return '<i class="fa-sharp fa-light fa-handshake"></i>';
		}

		// 26 РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН РЕСТОРАН
		else if (
			code === 'Breakfast service' ||
			code === 'Sal\u00e3o de banquetes' ||
			code === 'Banquet hall' ||
			code === 'Sala rinfreschi' ||
			code === 'Number of restaurants - 5' ||
			code === 'Consegna di generi alimentari gratuita' ||
			code === 'Numero di ristoranti: 9' ||
			code === 'N\u00famero de restaurantes: 9' ||
			code === 'Nombre de restaurants : 9' ||
			code === 'Number of restaurants - 9' ||
			code === 'Colazione a buffet gratuita' ||
			code === 'N\u00famero de restaurantes: 1' ||
			code === 'N\u00famero de cafeter\u00edas: 1' ||
			code === 'N\u00famero de salas de reuni\u00f5es - 1' ||
			code === 'Number of restaurants - 1' ||
			code === '81a25a4c-0d91-4c20-baf7-27b3b4bd700f' ||
			code === '85e94ef5-a941-483c-bf8f-394ee4e0b97f' ||
			code === '370462a3-993d-4880-ae49-e6d72a5b7900' ||
			code === '0e8b8f34-c277-411b-9628-a1dfb2a91202' ||
			code === 'e4364498-fb41-4e95-a57f-88adc2a4cbf0' ||
			code === 'f627d454-d153-11ec-9d64-0242ac120003' ||
			code === '1686f9d8-fb52-4971-8d76-7150f1e1f56b' ||
			code === '040744fc-9759-454d-964a-ba195a78361e' ||
			code === 'Restaurant ' ||
			code === '11' ||
			code === '35' ||
			code === '60' ||
			code === '32' ||
			code === '59' ||
			code === '1309' ||
			code === '1306' ||
			code === '119b' ||
			code === '1228' ||
			code === '134d' ||
			code === '119d' ||
			code === '1197' ||
			code === '1009' ||
			code === '11a3' ||
			code === '110a' ||
			code === '1511' ||
			code === '150a' ||
			code === '1194' ||
			code === '1034' ||
			code === '11a0' ||
			code === '1385' ||
			code === '1198' ||
			code === '114d' ||
			code === '1196' ||
			code === '151a' ||
			code === '11a2' ||
			code === '1390' ||
			code === '1308' ||
			code === '1386' ||
			code === '1381' ||
			code === '1396' ||
			code === '137d' ||
			code === '137e' ||
			code === '1380' ||
			code === '11ad' ||
			code === '1046' ||
			code === '1169' ||
			code === '1140' ||
			code === 'Restaurant' ||
			code === 'Breakfast available (surcharge)' ||
			code === 'Restaurante' ||
			code === 'Desayuno disponible (de pago)' ||
			code === 'Pequeno-almo\u00e7o dispon\u00edvel (sobretaxa)' ||
			code === 'Bagno accessibile ai disabili' ||
			code === 'Ristorante' ||
			code === 'Colazione disponibile (con supplemento)' ||
			code === 'Petit-d\u00e9jeuner disponible (en suppl\u00e9ment)' ||
			code === 'Desayuno gratis' ||
			code === 'N\u00famero de restaurantes: 2' ||
			code === 'Establecimiento libre de humos' ||
			code === 'Pequeno-almo\u00e7o gr\u00e1tis' ||
			code === 'Free breakfast' ||
			code === 'Number of restaurants - 2' ||
			code === 'Colazione gratuita' ||
			code === 'Numero di ristoranti: 2' ||
			code === 'Salle de banquet' ||
			code === 'Snack bar et/ou \u00e9picerie fine' ||
			code === 'Numero di ristoranti: 1' ||
			code === 'Snack bar/deli' ||
			code === 'N\u00famero de restaurantes: 3' ||
			code === 'Servi\u00e7o de pequeno-almo\u00e7o' ||
			code === 'Snack-bar/pastelaria' ||
			code === 'Servicio de desayuno' ||
			code === 'Numero di ristoranti: 3' ||
			code === 'Nombre de restaurants : 3' ||
			code === 'Service de petit-d\u00e9jeuner' ||
			code === 'Number of restaurants - 3' ||
			code === 'Breakfast service' ||
			code === 'N\u00famero de restaurantes: 5' ||
			code === 'Nombre de restaurants : 5' ||
			code === 'Numero di ristoranti: 5' ||
			code === 'Nombre de restaurants : 4' ||
			code === 'Restauration priv\u00e9e/pour couples' ||
			code === 'Ristoranti privati/per coppie' ||
			code === 'Numero di ristoranti: 4' ||
			code === 'Couples/private dining' ||
			code === 'Number of restaurants - 4' ||
			code === 'N\u00famero de piscinas al aire libre: 3' ||
			code === 'N\u00famero de piscinas interiores: 2' ||
			code === 'N\u00famero de restaurantes: 4' ||
			code === 'Refei\u00e7\u00f5es a dois/privadas' ||
			code === 'N\u00famero de piscinas cubiertas: 2' ||
			code === 'Restaurante privado/para parejas' ||
			code === 'Nombre de restaurants : 7' ||
			code === 'N\u00famero de restaurantes: 7' ||
			code === 'Number of restaurants - 7' ||
			code === 'Numero di ristoranti: 6' ||
			code === 'Nombre de restaurants : 6' ||
			code === 'Number of restaurants - 6' ||
			code === 'N\u00famero de restaurantes: 6' ||
			code === 'Free buffet breakfast' ||
			code === 'Petit-d\u00e9jeuner buffet gratuit' ||
			code === 'Pequeno-almo\u00e7o buffet gr\u00e1tis' ||
			code === 'Desayuno buf\u00e9 gratuito' ||
			code === 'Sal\u00f3n de banquetes'
		) {
			return '<i class="fa-solid fa-fork-knife"></i>';
		}

		//  27 ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ ЛIФТ
		else if (
			code === 'Ascenseur' ||
			code === '26' ||
			code === '103e' ||
			code === '10f8' ||
			code === '1124' ||
			code === 'Elevator' ||
			code === 'Ascensor' ||
			code === 'Elevador' ||
			code === 'Ascensore' ||
			code === 'Ascenseur'
		) {
			return '<i class="fa-sharp fa-solid fa-escalator"></i>';
		}
		// 28 ТЕРАСА ТЕРАСА ТЕРАСА ТЕРАСА ТЕРАСА ТЕРАСА ТЕРАСА ТЕРАСА
		else if (
			code === 'Terrasse' ||
			code === 'Rooftop terrace' ||
			code === 'Rooftop terrace' ||
			code === 'Terrazza panoramica' ||
			code === 'Terrasse sur le toit' ||
			code === 'Terraza en la azotea' ||
			code === 'Terra\u00e7o no piso superior' ||
			code === 'cf9bb5ac-7b08-4817-94f9-412a4f5f7325' ||
			code === '131d' ||
			code === '1236' ||
			code === '134c' ||
			code === '1105' ||
			code === '1334' ||
			code === '1502' ||
			code === '1078' ||
			code === '104c' ||
			code === 'Terraza' ||
			code === 'Terrace' ||
			code === 'Terra\u00e7o' ||
			code === 'Terrazza' ||
			code === 'Terrasse'
		) {
			return '';
		}
		// 29 ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC ТЕНIC
		else if (
			code === 'Campos de t\u00e9nis exteriores - 2' ||
			code === 'Campos de t\u00e9nis exteriores - 7' ||
			code === 'Courts de tennis ext\u00e9rieur : 7' ||
			code === 'Outdoor tennis courts - 7' ||
			code === "Campi da tennis all'aperto: 7" ||
			code === 'Tavolo da ping-pong' ||
			code === 'T\u00e9nis de mesa' ||
			code === 'Ping-pong' ||
			code === 'Table tennis' ||
			code ===
				'Campos de t\u00e9nis exteriores - 5Servi\u00e7o de transporte local (sobretaxa)' ||
			code === 'Campos de t\u00e9nis exteriores - 5' ||
			code === 'Courts de tennis ext\u00e9rieur : 5' ||
			code === "Campi da tennis all'aperto: 5" ||
			code === 'Outdoor tennis courts - 5' ||
			code === 'Pistas de tenis descubiertas: 5' ||
			code === 'Outdoor tennis courts - 4' ||
			code === 'Campos de t\u00e9nis exteriores - 4' ||
			code === "Campi da tennis all'aperto: 4" ||
			code === 'Clases de tenis en las instalaciones' ||
			code === 'Aulas de t\u00e9nis no local' ||
			code === 'Lezioni di tennis in loco' ||
			code === 'a8a4c939-a412-4043-8d81-e3dd1e646094' ||
			code === '18' ||
			code === '124d' ||
			code === '117f' ||
			code === '117e' ||
			code === '1180' ||
			code === '118c' ||
			code === '1517' ||
			code === '117c' ||
			code === 'Pista de tenis descubierta' ||
			code === 'Pista de tenis en las instalaciones' ||
			code === 'Campo de t\u00e9nis exterior' ||
			code === 'T\u00e9nis no local' ||
			code === 'Court de tennis ext\u00e9rieur' ||
			code === 'Tennis sur place' ||
			code === 'Outdoor tennis court' ||
			code === 'Tennis on site' ||
			code === "Campo da tennis all'aperto" ||
			code === 'Tennis in loco' ||
			code === 'Court de tennis couvert' ||
			code === 'Campo da tennis al coperto' ||
			code === 'Indoor tennis court' ||
			code === 'Campo de t\u00e9nis interior' ||
			code === 'Pista de tenis cubierta' ||
			code === 'Campos de t\u00e9nis exteriores - 2' ||
			code === 'Courts de tennis ext\u00e9rieur : 2' ||
			code === 'Racquetball/squash sur place' ||
			code === "Campi da tennis all'aperto: 2" ||
			code === 'Squash/racquetball in loco' ||
			code === 'Pistas de tenis descubiertas: 2' ||
			code === 'Outdoor tennis courts - 2' ||
			code === 'Courts de tennis couverts : 2' ||
			code === 'Campos de t\u00e9nis interiores: 2' ||
			code === 'Indoor tennis courts - 2' ||
			code === 'Campi da tennis al coperto: 2' ||
			code === 'Pistas de tenis cubiertas: 2' ||
			code === "Campi da tennis all'aperto: 6" ||
			code === 'Pistas de tenis descubiertas: 6' ||
			code === 'Outdoor tennis courts - 6' ||
			code === 'Courts de tennis ext\u00e9rieur : 6' ||
			code === 'Campos de t\u00e9nis exteriores - 6' ||
			code === 'Pistas de tenis descubiertas: 7'
		) {
			return '<i class="fa-solid fa-table-tennis-paddle-ball"></i>';
		}

		// 30 МЕДИЦИНА МЕДИЦИНА МЕДИЦИНА МЕДИЦИНА МЕДИЦИНА
		else if (
			code === 'Assistenza medica' ||
			code === '55' ||
			code === '106a' ||
			code === '10d6' ||
			code === '12a3' ||
			code === 'Servicio m\u00e9dico' ||
			code === "Service d'assistance m\u00e9dicale" ||
			code === 'Medical Assistance' ||
			code === 'Assist\u00eancia m\u00e9dica' ||
			code === 'Assistenza medica'
		) {
			return '<i class="fa-solid fa-briefcase-medical"></i>';
		}

		// 31 ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ ПРАННЯ
		else if (
			code === 'Lavanderia self-service' ||
			code === 'dcab3fc4-4b18-4d8f-8ffc-b5cc629c790d' ||
			code === 'Laundry Service ' ||
			code === '56' ||
			code === '1062' ||
			code === '1360' ||
			code === '108b' ||
			code === '10b0' ||
			code === 'Service de blanchisserie' ||
			code === 'Laundry Service' ||
			code === 'Servi\u00e7o de lavandaria' ||
			code === 'Servizio lavanderia' ||
			code === 'Dry cleaning/laundry service' ||
			code === 'Servicio de tintorer\u00eda/lavander\u00eda' ||
			code === 'Servi\u00e7os de lavagem a seco/lavandaria' ||
			code === 'Service de nettoyage \u00e0 sec / blanchisserie' ||
			code === 'Servizio di lavanderia/lavaggio a secco' ||
			code === 'Lavander\u00eda' ||
			code === 'Lavandaria' ||
			code === 'Laverie' ||
			code === 'Laundry facilities' ||
			code === 'Lavanderia self-service'
		) {
			return '<i class="fa-duotone fa-washing-machine"></i>';
		}
		// 32 ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ  ПЛЯЖ
		else if (
			code === 'Acesso direto a praia privativa' ||
			code === 'Praia privativa nas imedia\u00e7\u00f5es' ||
			code === 'Acc\u00e8s direct \u00e0 la plage priv\u00e9e' ||
			code === 'Plage priv\u00e9e \u00e0 proximit\u00e9' ||
			code === 'Direct access to private beach' ||
			code === 'Private beach nearby' ||
			code === 'Accesso diretto alla spiaggia privata' ||
			code === 'Spiaggia privata nelle vicinanze' ||
			code === '187f1779-1219-4d2d-8925-be887653842e' ||
			code === '13' ||
			code === '10d9' ||
			code === '10a0' ||
			code === '11db' ||
			code === '12e9' ||
			code === '12e8' ||
			code === '1988' ||
			code === '151d' ||
			code === '100c' ||
			code === '136d' ||
			code === '11da' ||
			code === '1250' ||
			code === '12e7' ||
			code === '1372' ||
			code === '1134' ||
			code === '1121' ||
			code === 'Pista de tenis en las instalaciones' ||
			code === 'Espregui\u00e7adeiras junto \u00e0 piscina' ||
			code === 'Transats de piscine' ||
			code === 'Pool sun loungers' ||
			code === 'Lettini per la piscina' ||
			code === 'Guarda-s\u00f3is de praia' ||
			code === 'Toalhas de praia Bar na praia' ||
			code === 'Sombrillas de playa' ||
			code === 'Toallas de playa' ||
			code === 'Tumbonas de playa' ||
			code === 'Ombrelloni per la spiaggia' ||
			code === 'Asciugamani da spiaggia' ||
			code === 'Lettini per la spiaggia' ||
			code === 'Parasols de plage' ||
			code === 'Serviettes de plage' ||
			code === 'Cabines de plage gratuites' ||
			code === 'Transats de plage' ||
			code === 'Beach umbrellas' ||
			code === 'Beach towels' ||
			code === 'Beach sun loungers' ||
			code === 'Sombrillas de piscina' ||
			code === 'Pool umbrellas' ||
			code === 'Ombrelloni' ||
			code === 'Parasols \u00e0 la piscine' ||
			code === 'Guarda-s\u00f3is junto \u00e0 piscina' ||
			code === 'Numa praia privativa' ||
			code === 'Sur une plage priv\u00e9e' ||
			code === 'Su una spiaggia privata' ||
			code === 'On private beach' ||
			code === 'En una playa privada' ||
			code === 'Barracas de praia (sobretaxa)' ||
			code === 'Cabines de plage (en suppl\u00e9ment)' ||
			code === 'Beach cabanas (surcharge)' ||
			code === 'Caba\u00f1as de playa (de pago)' ||
			code === 'Acceso directo a una playa privada' ||
			code === 'Playa privada en las inmediaciones'
		) {
			return '<i class="fa-solid fa-umbrella-beach"></i>';
		}

		// 33 ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ ПАРКИНГ
		else if (
			code === 'Posibilidad de tarifas con descuento en aparcamiento externo' ||
			code === 'b9380ff4-5f7f-4108-a652-8cb508192a50' ||
			code === 'd338b9c0-7a2b-4a01-b040-03b0cb7d7dd4' ||
			code === 'Valet Parking' ||
			code === '31' ||
			code === '29' ||
			code === '30' ||
			code === '28' ||
			code === '27' ||
			code === '10fd' ||
			code === '1294' ||
			code === '101b' ||
			code === '1351' ||
			code === '1233' ||
			code === '1297' ||
			code === '1146' ||
			code === '1352' ||
			code === '1088' ||
			code === '10fb' ||
			code === '1353' ||
			code === '1292' ||
			code === '129a' ||
			code === '1299' ||
			code === '1147' ||
			code === '1106' ||
			code === '1354' ||
			code === '1293' ||
			code === '131a' ||
			code === 'Parking' ||
			code === 'Car Park' ||
			code === 'Parque de estacionamento' ||
			code === 'Parcheggio ' ||
			code === 'Free self parking' ||
			code === 'Aparcamiento sin asistencia (gratis)' ||
			code === 'Estacionamento sem motorista gr\u00e1tis' ||
			code === 'Parcheggio gratuito' ||
			code === 'Parking sans voiturier gratuit' ||
			code === 'Stationnement sur rue' ||
			code === 'Parcheggio su strada' ||
			code === 'Estacionamento (espa\u00e7os limitados)' ||
			code === 'Aparcamiento (plazas limitadas)' ||
			code === 'Parcheggio (posti limitati)' ||
			code === 'Parking (emplacements limit\u00e9s)' ||
			code === 'Parking (limited spaces)' ||
			code === 'Aparcamiento gratuito en las inmediaciones' ||
			code === 'Free parking nearby' ||
			code === 'Parking gratuit \u00e0 proximit\u00e9' ||
			code === 'Parcheggio gratuito nelle vicinanze' ||
			code === 'Estacionamento gr\u00e1tis nas imedia\u00e7\u00f5es' ||
			code === 'Estacionamento gr\u00e1tis nas imedia\u00e7\u00f5es' ||
			code === 'Estacionamento com motorista gr\u00e1tis' ||
			code === 'Parking avec voiturier gratuit' ||
			code === 'Parking hors rue' ||
			code === 'Posto auto coperto' ||
			code === 'Parcheggio privato' ||
			code === 'Street parking' ||
			code === 'Off-street parking' ||
			code === 'Estacionamento na rua' ||
			code === 'Aparcamiento en la calle' ||
			code === 'Aparcamiento privado' ||
			code === 'Limited onsite parking' ||
			code === 'Free valet parking' ||
			code === 'Servicio de aparcacoches (gratis)' ||
			code === 'Aparcamiento gratuito' ||
			code === 'Estacionamento prolongado' ||
			code === 'Estacionamento seguro' ||
			code === 'Estacionamento descoberto' ||
			code === 'Estacionamento coberto' ||
			code === 'Parcheggio per lunghi periodi' ||
			code === 'Numero delle sale per riunioni: 3' ||
			code === 'Parcheggio con sorveglianza' ||
			code === "Parcheggio all'aperto" ||
			code === 'Parcheggio al coperto' ||
			code === 'Parking Longue dur\u00e9e' ||
			code === 'Parking s\u00e9curis\u00e9' ||
			code === 'Parking non couvert' ||
			code === 'Parking couvert' ||
			code === 'Aparcamiento de larga estancia gratuito' ||
			code === 'Aparcamiento para autocaravanas, autobuses y camiones' ||
			code === 'Free long-term parking' ||
			code === 'RV, bus, truck parking' ||
			code === 'Estacionamento prolongado gr\u00e1tis' ||
			code === 'Estacionamento para autocaravanas, autocarros e cami\u00f5es' ||
			code === 'Parcheggio gratuito per lunghi periodi' ||
			code === 'Parcheggio per camper, pullman e camion' ||
			code === 'Parking Longue dur\u00e9e gratuit' ||
			code === 'Parking pour RV, bus et camions' ||
			code === 'Aparcamiento cubierto' ||
			code === 'Covered parking' ||
			code === 'Aparcamiento de larga estancia (gratis)' ||
			code === 'Estacionamento (sobretaxa)' ||
			code === 'Estacionamento com motorista (sobretaxa)' ||
			code === 'Parcheggio (con supplemento)' ||
			code === 'Parcheggio con ritiro e consegna auto (con supplemento)' ||
			code === 'Aparcamiento sin asistencia (de pago)' ||
			code === 'Servicio de aparcacoches (de pago)' ||
			code === 'Parking sans voiturier (en suppl\u00e9ment)' ||
			code === 'Parking avec voiturier (en suppl\u00e9ment)' ||
			code === 'Aparcamiento con vigilancia' ||
			code === 'Aparcamiento al aire libre' ||
			code === 'Self parking (surcharge)' ||
			code === 'Valet parking (surcharge)' ||
			code === 'Parcheggio gratuito per camper, pullman e camion' ||
			code === 'Aparcamiento gratuito para autocaravanas, autobuses y camiones' ||
			code === 'Servicio de aparcacoches gratuito' ||
			code === 'Parking gratuit pour RV, bus et camions' ||
			code === 'Parcheggio nelle vicinanze a tariffe scontate' ||
			code === 'Offsite parking discounted rates available'
		) {
			return '<i class="fa-solid fa-square-parking"></i>';
		}
		//  34  ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР ШВЕЙЦАР
		else if (code === 'Bagageiro') {
			return '<i class="fa-regular fa-door-open"></i>';
		}
		// 35 НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ НЯНЯ
		else if (
			code === 'Atividades supervisionadas/guarda de crian\u00e7as (sobretaxa)' ||
			code === 'Baby-sitting ou garde d\u2019enfants (en suppl\u00e9ment)' ||
			code === 'Garde d\u2019enfant / activit\u00e9s supervis\u00e9es (en suppl\u00e9ment)' ||
			code === 'Servizio di baby-sitter (con supplemento)' ||
			code === "Baby-sitting ou garde d'enfants (en suppl\u00e9ment)" ||
			code === 'Babysitting or childcare (surcharge)' ||
			code === 'Servicio de ni\u00f1era o guarder\u00eda (de pago)' ||
			code === 'Servicio de cuidado infantil o guardería (de pago)' ||
			code === 'Baby-sitting ou garde d\u2019enfant' ||
			code === 'Servicios de cuidado infantil o guardería' ||
			code === 'Servi\u00e7o de baby-sitter/atividades supervisionadas para crian\u00e7as' ||
			code ===
				'Servi\u00e7o de baby-sitter ou supervis\u00e3o de crian\u00e7as (gr\u00e1tis)' ||
			code === 'Servicio de ni\u00f1era o guarder\u00eda (gratis)' ||
			code === "Baby-sitting ou garde d'enfants (gratuit)" ||
			code === 'Servizio di baby-sitter (gratuito)' ||
			code === 'Babysitting or childcare (free)' ||
			code === 'Servizio di babysitter (gratuito)' ||
			code === 'Guarder\u00eda/actividades supervisadas (de pago)' ||
			code === 'Supervised childcare/activities (surcharge)' ||
			code === "Garde d'enfant / activit\u00e9s supervis\u00e9es (en suppl\u00e9ment)" ||
			code === 'Servicio de cuidado infantil o guardería gratis' ||
			code === 'Baby-sitting ou garde d’enfants (gratuit)' ||
			code === '63dc45e8-0c45-4b96-8d04-c411761f3959' ||
			code === '53' ||
			code === '1004' ||
			code === '1362' ||
			code === '1361' ||
			code === '1363' ||
			code === '1112' ||
			code === '135b' ||
			code === '1024' ||
			code === 'Servizio di baby-sitter' ||
			code === 'Babysitting or childcare' ||
			code === 'Servicios de ni\u00f1era o guarder\u00eda' ||
			code === "Baby-sitting ou garde d'enfant" ||
			code === 'Servi\u00e7o de baby-sitter ou guarda de crian\u00e7as' ||
			code === 'Atividades supervisionadas/guarda de crian\u00e7as (gr\u00e1tis)' ||
			code ===
				'Servi\u00e7o de baby-sitter ou supervis\u00e3o de crian\u00e7as (sobretaxa)' ||
			code === 'Atividades supervisionadas/guarda de crian\u00e7as (sobretaxa)'
		) {
			return '<i class="fa-solid fa-person-breastfeeding"></i>';
		}
		// 36 SPA SPA SPA SPA SPA SPA SPA SPA SPA SPA
		else if (
			code === 'Spa services on site' ||
			code === 'Salle(s) de soins spa' ||
			code === 'Sala per trattamenti spa' ||
			code === 'Spa treatment room(s)' ||
			code === 'Salas de tratamiento spa' ||
			code === 'Spa accessible aux personnes en fauteuil roulant' ||
			code === 'Spa com acesso para cadeira de rodas' ||
			code === 'Spa accesible en silla de ruedas' ||
			code === 'Number of spa tubs - 3' ||
			code === 'Spa o centri benessere nelle vicinanze' ||
			code === 'Health or beauty spa nearby' ||
			code === 'Spa en los alrededores' ||
			code === '46610dc9-8fa8-4ee9-b033-173cf2f89014' ||
			code === 'Spa' ||
			code === '14' ||
			code === '63' ||
			code === '1059' ||
			code === '1069' ||
			code === '1096' ||
			code === '109a' ||
			code === '1111' ||
			code === '136f' ||
			code === '1335' ||
			code === '1516' ||
			code === '1183' ||
			code === '1366' ||
			code === 'Soins spa complet' ||
			code === 'Spa completamente attrezzata' ||
			code === 'Full-service spa' ||
			code === 'Spa completo' ||
			code === 'Soins spa' ||
			code === 'Spa de servi\u00e7o completo' ||
			code === 'Spa in loco' ||
			code === 'Servi\u00e7os de spa no local' ||
			code === 'Sal\u00e3o de beleza' ||
			code === 'Servicios de spa en las instalaciones' ||
			code === 'Spa tub' ||
			code === 'Spa services on site'
		) {
			return '<i class="fa-solid fa-spa"></i>';
		}
		// 37 ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII ЕКСКУРСII
		else if (code === 'Assistance pour visites/billets' || code === 'Tours/ticket assistance') {
			return '<i class="fa-solid fa-spa"></i>';
		}
		// 38 САУНА САУНА САУНА САУНА САУНА САУНА САУНА САУНА
		else if (
			code === 'Bagno turco' ||
			code === 'Steam room' ||
			code === 'Banho turco' ||
			code === 'Ba\u00f1o turco' ||
			code === 'Sala de vapor' ||
			code === '3' ||
			code === '15' ||
			code === '14' ||
			code === '16' ||
			code === '1021' ||
			code === '108a' ||
			code === '109e' ||
			code === '10a8' ||
			code === '132d' ||
			code === 'Bain turc / hammam' ||
			code === 'Sauna' ||
			code === 'Bagno turco/Hammam' ||
			code === 'Hammam' ||
			code === 'Ba\u00f1o turco o hammam' ||
			code === 'Turkish bath/Hammam'
		) {
			return '<i class="fa-regular fa-heat"></i>';
		}
		// 39 БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК БАНК
		else if (
			code === 'Cajero autom\u00e1tico o banco' ||
			code === 'Caixa ATM/banco' ||
			code === 'ATM/banking' ||
			code === 'a6a718be-f160-4758-ba89-b63674cd1c07' ||
			code === '122b' ||
			code === '122d' ||
			code === '122a' ||
			code === '1231' ||
			code === '1001' ||
			code === 'Distributeur de billets / services bancaires' ||
			code === 'Bancomat/Sportello bancario' ||
			code === 'Consigne \u00e0 disposition' ||
			code === 'Cajero autom\u00e1tico o banco'
		) {
			return '<i class="fa-regular fa-money-bill-trend-up"></i>';
		}
		// 40 МАРКЕТ МАРКЕТ МАРКЕТ МАРКЕТ МАРКЕТ МАРКЕТ
		else if (
			code === 'Grocery/convenience store' ||
			code === 'Shopping mall on site' ||
			code === 'Centre commercial sur place' ||
			code === 'Centro comercial no local' ||
			code === 'Centro comercial en las instalaciones' ||
			code === 'Centro commerciale in loco' ||
			code === 'Máquina expendedora' ||
			code === 'Distributeur automatique' ||
			code === 'Máquina de venda automática' ||
			code === 'Vending machine' ||
			code === 'Service de livraison de courses gratuit' ||
			code === 'Distributore automatico' ||
			code === '3d1e858d-ae96-4832-8179-b91164af7442' ||
			code === '7408d682-d8ba-41a1-8d30-91e04a5b9f4d' ||
			code === '50' ||
			code === '41' ||
			code === '51' ||
			code === '1099' ||
			code === '12ab' ||
			code === '12ac' ||
			code === '11f4' ||
			code === '1068' ||
			code === '12aa' ||
			code === '118a' ||
			code === '1252' ||
			code === '1487' ||
			code === '1248' ||
			code === '1142' ||
			code === '105f' ||
			code === 'Lojas de presentes ou banca de jornal' ||
			code === 'Lojas no local' ||
			code === 'Mercearia/loja de conveni\u00eancia' ||
			code === 'Tienda de recuerdos o quiosco' ||
			code === 'Tiendas en las instalaciones' ||
			code === 'Tienda de alimentaci\u00f3n' ||
			code === 'Negozi di articoli da regalo o edicola' ||
			code === 'Negozi in loco' ||
			code === 'Negozio di generi alimentari/minimarket' ||
			code === 'Boutiques de souvenirs ou kiosque \u00e0 journaux' ||
			code === 'Boutiques sur place' ||
			code === 'Gift shops or newsstand' ||
			code === 'Shopping on site' ||
			code === 'Grocery/convenience store'
		) {
			return '<i class="fa-regular fa-cart-shopping-fast"></i>';
		}
		// 41 РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР РАЗМЕР
		else if (
			code === 'Conference space size (meters) - 80' ||
			code === 'Surface de l\u2019espace de conf\u00e9rence (m\u00e8tres) : 50' ||
			code === 'Surface de l\u2019espace de conf\u00e9rence (pieds) : 538' ||
			code === 'Tama\u00f1o del espacio para conferencias (en metros): 50' ||
			code === 'Tama\u00f1o del espacio para conferencias (en pies): 538' ||
			code === 'Conference space size (meters) - 50' ||
			code === 'Conference space size (feet) - 538' ||
			code === 'Dimensioni delle sale per conferenze (metri): 50' ||
			code === 'Dimensioni delle sale per conferenze (piedi): 538' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (metros): 50' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 538' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 538' ||
			code === 'Tama\u00f1o del espacio para conferencias (en pies): 25' ||
			code === 'Dimensioni delle sale per conferenze (metri): 50' ||
			code === 'Dimensioni delle sale per conferenze (piedi): 538' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (metros): 50' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 538' ||
			code === 'Tama\u00f1o del espacio para conferencias (en pies): 25' ||
			code === "Surface de l'espace de conf\u00e9rence (pieds) : 25" ||
			code === 'Conference space size (feet) - 25' ||
			code === 'Dimensioni delle sale per conferenze (piedi): 25' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (metros): 60' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 646' ||
			code === 'Tama\u00f1o del espacio para conferencias (en metros): 60' ||
			code === 'Tama\u00f1o del espacio para conferencias (en pies): 646' ||
			code === 'Dimensioni delle sale per conferenze (metri): 60' ||
			code === 'Dimensioni delle sale per conferenze (piedi): 646' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 25' ||
			code === 'Conference space size (meters) - 60' ||
			code === 'Conference space size (feet) - 646' ||
			code === 'Transporte de/para o aeroporto' ||
			code === 'Conference space size (feet) - 861' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (metros): 250' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 2691' ||
			code === 'Tama\u00f1o del espacio para conferencias (en metros): 250' ||
			code === 'Tama\u00f1o del espacio para conferencias (en pies): 2691' ||
			code === 'Dimensioni delle sale per conferenze (metri): 250' ||
			code === 'Dimensioni delle sale per conferenze (piedi): 2691' ||
			code === "Surface de l'espace de conf\u00e9rence (m\u00e8tres) : 250" ||
			code === "Surface de l'espace de conf\u00e9rence (pieds) : 2691" ||
			code === 'Conference space size (meters) - 250' ||
			code === 'Conference space size (feet) - 2691' ||
			code === 'Conference space size (feet) - 2691' ||
			code === "Surface de l'espace de conf\u00e9rence (m\u00e8tres) : 4000" ||
			code === "Surface de l'espace de conf\u00e9rence (pieds) : 43056" ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (metros): 4000' ||
			code === 'Conference space size (meters) - 4000' ||
			code === 'Conference space size (feet) - 43056' ||
			code === 'Dimensioni delle sale per conferenze (metri): 4000' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 43056' ||
			code === 'Dimensioni delle sale per conferenze (piedi): 43056' ||
			code === 'Tama\u00f1o del espacio para conferencias (en metros): 4000' ||
			code === 'Tama\u00f1o del espacio para conferencias (en pies): 43056' ||
			code === 'Conference space size (meters) - 454' ||
			code === 'Conference space size (feet) - 4885' ||
			code === 'Surface de l\u2019espace de conf\u00e9rence (m\u00e8tres) : 454' ||
			code === 'Surface de l\u2019espace de conf\u00e9rence (pieds) : 4885' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (metros): 454' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 4885' ||
			code === 'Tama\u00f1o del espacio para conferencias (en metros): 454' ||
			code === "Surface de l'espace de conf\u00e9rence (m\u00e8tres) : 525" ||
			code === "Surface de l'espace de conf\u00e9rence (pieds) : 5649" ||
			code === 'Tama\u00f1o del espacio para conferencias (en metros): 525' ||
			code === 'Tama\u00f1o del espacio para conferencias (en pies): 5649' ||
			code === 'Conference space size (meters) - 525' ||
			code === 'Conference space size (feet) - 5649' ||
			code === 'Dimensioni delle sale per conferenze (metri): 525' ||
			code === 'Dimensioni delle sale per conferenze (piedi): 5649' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (metros): 525' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 5649' ||
			code === 'Tama\u00f1o del espacio para conferencias (en metros): 820' ||
			code === 'Tama\u00f1o del espacio para conferencias (en pies): 8823' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (metros): 820' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 8823' ||
			code === 'Dimensioni delle sale per conferenze (metri): 820' ||
			code === 'Dimensioni delle sale per conferenze (piedi): 8823' ||
			code === "Surface de l'espace de conf\u00e9rence (m\u00e8tres) : 820" ||
			code === "Garde d'enfant / activit\u00e9s supervis\u00e9es" ||
			code === "Surface de l'espace de conf\u00e9rence (pieds) : 8823" ||
			code === 'Conference space size (meters) - 820' ||
			code === 'Conference space size (feet) - 8823' ||
			code === "Surface de l'espace de conf\u00e9rence (m\u00e8tres) : 418" ||
			code === "Surface de l'espace de conf\u00e9rence (pieds) : 4498" ||
			code === 'Conference space size (meters) - 418' ||
			code === 'Dimensioni delle sale per conferenze (metri): 418' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 4498' ||
			code === 'Conference space size (feet) - 4498' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (metros): 700' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 7535' ||
			code === "Surface de l'espace de conf\u00e9rence (m\u00e8tres) : 700" ||
			code === "Surface de l'espace de conf\u00e9rence (pieds) : 7535" ||
			code === 'Dimensioni delle sale per conferenze (metri): 700' ||
			code === 'Dimensioni delle sale per conferenze (piedi): 7535' ||
			code === 'Conference space size (meters) - 700' ||
			code === 'Dimensioni delle sale per conferenze (piedi): 7535' ||
			code === 'Conference space size (meters) - 700' ||
			code === 'Conference space size (feet) - 7535' ||
			code === 'Tama\u00f1o del espacio para conferencias (en metros): 700' ||
			code === 'Tama\u00f1o del espacio para conferencias (en pies): 7535' ||
			code === 'Tama\u00f1o del espacio para conferencias (en metros): 130' ||
			code === 'Tama\u00f1o del espacio para conferencias (en pies): 1399' ||
			code === 'Dimensioni delle sale per conferenze (metri): 130' ||
			code === 'Dimensioni delle sale per conferenze (piedi): 1399' ||
			code === "Surface de l'espace de conf\u00e9rence (m\u00e8tres) : 130" ||
			code === "Surface de l'espace de conf\u00e9rence (pieds) : 1399" ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (metros): 130' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 1399' ||
			code === 'Conference space size (meters) - 130' ||
			code === 'Conference space size (feet) - 1399' ||
			code === 'Dimensioni delle sale per conferenze (metri): 355' ||
			code === 'Dimensioni delle sale per conferenze (piedi): 3821' ||
			code === 'Conference space size (meters) - 355' ||
			code === 'Conference space size (feet) - 3821' ||
			code === 'Dimensioni delle sale per conferenze (metri): 780' ||
			code === 'Dimensioni delle sale per conferenze (piedi): 8393' ||
			code === 'Conference space size (meters) - 780' ||
			code === 'Conference space size (feet) - 8393' ||
			code === 'Tama\u00f1o del espacio para conferencias (en metros): 355' ||
			code === 'Tama\u00f1o del espacio para conferencias (en pies): 3821' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (metros): 355' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 3821' ||
			code === "Surface de l'espace de conf\u00e9rence (m\u00e8tres) : 355" ||
			code === 'N\u00famero de ba\u00f1eras de hidromasaje: 3' ||
			code === 'N\u00famero de banheiras de hidromassagem: 3' ||
			code === "Surface de l'espace de conf\u00e9rence (pieds) : 3821" ||
			code === 'Tama\u00f1o del espacio para conferencias (en metros): 780' ||
			code === 'Tama\u00f1o del espacio para conferencias (en pies): 8393' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (metros): 780' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 8393' ||
			code === "Surface de l'espace de conf\u00e9rence (m\u00e8tres) : 780" ||
			code === "Surface de l'espace de conf\u00e9rence (pieds) : 8393" ||
			code === 'Tama\u00f1o del espacio para conferencias (en metros): 400' ||
			code === '"Tama\u00f1o del espacio para conferencias (en pies): 4304"' ||
			code === "Surface de l'espace de conf\u00e9rence (m\u00e8tres) : 400" ||
			code === "Surface de l'espace de conf\u00e9rence (pieds) : 4304" ||
			code === 'Dimensioni delle sale per conferenze (metri): 400' ||
			code === 'Dimensioni delle sale per conferenze (piedi): 4304' ||
			code === 'Conference space size (meters) - 400' ||
			code === 'Conference space size (feet) - 4304' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (metros): 400' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 4304' ||
			code === 'Tama\u00f1o del espacio para conferencias (en pies): 20' ||
			code === 'Dimensioni delle sale per conferenze (piedi): 20' ||
			code === 'Conference space size (feet) - 20' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 20' ||
			code === 'Surface de l\u2019espace de conf\u00e9rence (m\u00e8tres) : 73' ||
			code === 'Surface de l\u2019espace de conf\u00e9rence (pieds) : 785' ||
			code === 'Conference space size (meters) - 73' ||
			code === 'Conference space size (feet) - 785' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (metros): 73' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 785' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (metros): 2577' ||
			code === 'Dimens\u00e3o do espa\u00e7o para confer\u00eancias (p\u00e9s): 27739' ||
			code === 'Dimensioni delle sale per conferenze (metri): 2577' ||
			code === 'Dimensioni delle sale per conferenze (piedi): 27739' ||
			code === 'Tama\u00f1o del espacio para conferencias (en pies): 861' ||
			code === 'Surface de l\u2019espace de conf\u00e9rence (m\u00e8tres) : 80' ||
			code === 'Surface de l\u2019espace de conf\u00e9rence (pieds) : 861'
		) {
			return '<i class="fa-light fa-arrow-up-wide-short"></i>';
		}
		// 41 ВIДСТАНЬ ВIДСТАНЬ ВIДСТАНЬ ВIДСТАНЬ ВIДСТАНЬ ВIДСТАНЬ ВIДСТАНЬ ВIДСТАНЬ ВIДСТАНЬ
		else if (
			code === 'Distance from property (km) - 1' ||
			code === '9083e990-10a3-4bd1-95c9-006d0d0f749e' ||
			code === '945126cc-1be8-40bc-aae5-dc47ecf0a2e6' ||
			code === 'Airport - less than 25 Km' ||
			code === '1251' ||
			code === '11dd' ||
			code === '138e' ||
			code === '13a5' ||
			code === '138c' ||
			code === '13a3' ||
			code === '13b1' ||
			code === '13a4' ||
			code === 'Distance from property (meters) - 50' ||
			code === 'Distanza dalla proprietà (metri) - 50' ||
			code === 'Distancia del alojamiento (metros) - 50' ||
			code === 'Distance from property (meters) - 50' ||
			code === 'Dist\u00e2ncia at\u00e9 ao estabelecimento (metros) - 50' ||
			code === "Distance de l'\u00e9tablissement (m\u00e8tres) - 50" ||
			code === 'Distance from property (meters) - 50' ||
			code === 'Distance de l\u2019h\u00e9bergement (m\u00e8tres) - 500' ||
			code === 'Distance de l\u2019h\u00e9bergement (pieds) - 1640' ||
			code === 'Distance from property (meters) - 500' ||
			code === 'Distance from property (ft) - 1640' ||
			code === 'Dist\u00e2ncia at\u00e9 ao alojamento (metros) - 500' ||
			code === 'Dist\u00e2ncia at\u00e9 ao alojamento (p\u00e9s) - 1640' ||
			code === 'Distanza dalla struttura (metri) - 10' ||
			code === 'Distance from property (meters) - 10' ||
			code === 'Distanza dalla struttura (piedi) - 33' ||
			code === 'Distance from property (ft) - 33' ||
			code === 'Distancia del alojamiento (metros) - 10' ||
			code === 'Distancia del alojamiento (pies) - 33' ||
			code === 'Distancia del alojamiento (millas) - 0.6' ||
			code === 'Tama\u00f1o del espacio para conferencias (en metros): 80' ||
			code === 'Distancia del alojamiento (km) - 1' ||
			code === 'Distance de l\u2019h\u00e9bergement (milles) - 0.6' ||
			code === 'Distance de l\u2019h\u00e9bergement (km) - 1' ||
			code === 'Distance from property (miles) - 0.6'
		) {
			return '<i class="fa-regular fa-right-left"></i>';
		}
		// 42 ДЖАКУЗИ ДЖАКУЗИ ДЖАКУЗИ ДЖАКУЗИ ДЖАКУЗИ ДЖАКУЗИ ДЖАКУЗИ
		else if (
			code === 'Bain \u00e0 remous' ||
			code === '20' ||
			code === '1056' ||
			code === '131b' ||
			code === '133d' ||
			code === 'Check-in r\u00e1pido' ||
			code === 'Vasca idromassaggio' ||
			code === 'Bain \u00e0 remous'
		) {
			return '<i class="fa-light fa-hot-tub-person"></i>';
		}
		// 43 ВЕЛОСИПЕД ВЕЛОСИПЕД ВЕЛОСИПЕД ВЕЛОСИПЕД ВЕЛОСИПЕД ВЕЛОСИПЕД ВЕЛОСИПЕД
		else if (
			code === 'Mountain biking nearby' ||
			code === 'Alquiler de bicicletas en las inmediaciones' ||
			code === 'Noleggio bici nelle vicinanze' ||
			code === 'Bicycle rentals nearby' ||
			code === 'Aluguer de bicicletas nas imedia\u00e7\u00f5es' ||
			code === 'Location de v\u00e9los \u00e0 proximit\u00e9' ||
			code === 'Noleggio di biciclette' ||
			code === 'Alquiler de bicicletas' ||
			code === 'Bicycle Hire' ||
			code === 'Aluguer de bicicletas' ||
			code === '10' ||
			code === '116d' ||
			code === '116e' ||
			code === 'Aluguer de bicicletas no local' ||
			code === 'BTT nas imedia\u00e7\u00f5es' ||
			code === 'Alquiler de bicicletas en las instalaciones' ||
			code === 'Ciclismo de monta\u00f1a en las inmediaciones' ||
			code === 'Noleggio bici in loco' ||
			code === 'Location de v\u00e9los sur place' ||
			code === 'VTT \u00e0 proximit\u00e9' ||
			code === 'Bicycle rentals on site' ||
			code === 'Mountain biking nearby'
		) {
			return '<i class="fa-regular fa-bicycle"></i>';
		}

		// 44 АКВАПАРК АКВАПАРК АКВАПАРК АКВАПАРК АКВАПАРК АКВАПАРК
		else if (
			code === 'Windsurf no local' ||
			code === 'Acc\u00e8s gratuit au parc aquatique' ||
			code === 'Ingresso gratuito al parco acquatico' ||
			code === 'Free water park access' ||
			code === 'Acceso gratuito al parque acu\u00e1tico' ||
			code === 'Water park' ||
			code === 'Parc aquatique' ||
			code === 'Parque acu\u00e1tico' ||
			code === 'Parc aquatique' ||
			code === 'ea833916-aae2-4401-bbd4-ba92119b1dfb' ||
			code === '1216' ||
			code === '1376' ||
			code === '1503' ||
			code === '12dc' ||
			code === '120d' ||
			code === 'Escorrega aqu\u00e1tico' ||
			code === 'Lazy river' ||
			code === 'Lazy River' ||
			code === 'Tobog\u00e1n acu\u00e1tico' ||
			code === 'R\u00edo lento' ||
			code === "Scivolo d'acqua" ||
			code === 'Toboggan aquatique' ||
			code === 'Waterslide' ||
			code === 'Acesso gr\u00e1tis ao parque aqu\u00e1tico' ||
			code === 'Esqui aqu\u00e1tico no local' ||
			code === 'Windsurf no local'
		) {
			return '<i class="fa-sharp fa-regular fa-person-sledding"></i>';
		}
		// 45 GAME GAME GAME GAME GAME GAME GAME GAME
		else if (
			code === 'Zona de juegos en las instalaciones' ||
			code === 'Salle d\u2019arcade / de jeux vid\u00e9o' ||
			code === 'Juegos infantiles' ||
			code === 'Jogos' ||
			code === 'Jogos para crian\u00e7as' ||
			code === 'Jeux' ||
			code === 'Games' ||
			code === 'Giochi' ||
			code === '05eed042-e65c-45db-adc5-0e35db302a55' ||
			code === '1158' ||
			code === '126f' ||
			code === '12e4' ||
			code === 'Sala de jogos eletr\u00f3nicos/de mesa' ||
			code === 'Computadores' ||
			code === 'Ba\u00f1era de hidromasaje' ||
			code === 'Sala de juegos electr\u00f3nicos o de mesa' ||
			code === 'Sala giochi' ||
			code === 'Postazione PC' ||
			code === "Salle d'arcade / de jeux vid\u00e9o" ||
			code === 'Poste informatique' ||
			code === 'Arcade/game room' ||
			code === 'Computer station' ||
			code === 'Area giochi in loco' ||
			code === 'Zona de juegos en las instalaciones'
		) {
			return '<i class="fa-regular fa-gamepad-modern"></i>';
		}
		// 46 NEWSPAPER NEWSPAPER NEWSPAPER NEWSPAPER NEWSPAPER NEWSPAPER
		else if (
			code === 'Free newspapers in lobby' ||
			code === 'Peri\u00f3dicos en el vest\u00edbulo (de pago)' ||
			code === 'Quotidiani nella hall (con supplemento)' ||
			code === 'Jornais no lobby (sobretaxa)' ||
			code === '24' ||
			code === '135e' ||
			code === '1132' ||
			code === 'Jornais gr\u00e1tis no lobby' ||
			code === 'Peri\u00f3dicos gratis en el vest\u00edbulo' ||
			code === 'Quotidiani gratuiti nella hall' ||
			code === 'Journaux gratuits dans le hall' ||
			code === 'Free newspapers in lobby'
		) {
			return '<i class="fa-light fa-newspaper"></i>';
		}
		// 47 СВАДЬБА СВАДЬБА СВАДЬБА СВАДЬБА СВАДЬБА СВАДЬБА СВАДЬБА
		else if (
			code === 'Wedding services' ||
			code === 'Formules romantiques/de demande en mariage disponibles' ||
			code === 'Disponibilit\u00e0 di pacchetti romantici/per proposta di matrimonio' ||
			code === 'Proposal/romance packages available' ||
			code === 'Pacotes rom\u00e2nticos/para pedidos de casamento dispon\u00edveis' ||
			code === 'Paquetes rom\u00e1nticos disponibles' ||
			code === '10b5' ||
			code === 'Servi\u00e7o para casamentos' ||
			code === 'Servicio de celebraci\u00f3n de bodas' ||
			code === 'Servizi per matrimoni' ||
			code === 'Services de c\u00e9r\u00e9monie de mariage' ||
			code === 'Wedding services'
		) {
			return '<i class="fa-regular fa-rings-wedding"></i>';
		}
		// 48 БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА БИБЛИОТЕКА
		else if (
			code === 'Biblioteca' ||
			code === 'Biblioth\u00e8que' ||
			code === 'Library' ||
			code === 'Livros' ||
			code === 'Libri' ||
			code === 'Libros' ||
			code === 'Books' ||
			code === '1298' ||
			code === '1063' ||
			code === 'Biblioteca' ||
			code === 'Biblioth\u00e8que' ||
			code === 'Library'
		) {
			return '<i class="fa-regular fa-books"></i>';
		}
		// 49 ДОРОГА  ДОРОГА  ДОРОГА  ДОРОГА  ДОРОГА
		else if (
			code === 'Hiking/biking trails nearby' ||
			code === 'Wheelchair accessible path of travel' ||
			code === "Pas d'escaliers sur le chemin d'acc\u00e8s \u00e0 l'entr\u00e9e" ||
			code === 'Walkway to water' ||
			code === 'Sentier menant \u00e0 l\u2019eau' ||
			code === 'Caminho para a \u00e1gua' ||
			code === 'Pasarela hacia el agua' ||
			code === 'Ruta accesible en silla de ruedas hacia el ascensor' ||
			code === 'Banchina' ||
			code === "Passerella fino all'acqua" ||
			code === "Sentier menant \u00e0 l'eau" ||
			code === 'Camino hacia la entrada sin escaleras' ||
			code === 'Caminho sem escadas at\u00e9 \u00e0 entrada' ||
			code === 'Stair-free path to entrance' ||
			code === 'Sentiero senza scale per l’ingresso' ||
			code === 'Plantas superiores solo accesibles por las escaleras' ||
			code === '93031c12-a539-4188-902d-5d0923bc8fd4' ||
			code === 'Circuitos para caminhadas/bicicleta nas imedia\u00e7\u00f5es' ||
			code === 'Rutas de senderismo/ciclismo en las inmediaciones' ||
			code === 'Itinerari per mountain bike nelle vicinanze' ||
			code === 'Piste pedonali/ciclabili nelle vicinanze' ||
			code ===
				'Sentiers de randonn\u00e9e \u00e0 pied ou \u00e0 v\u00e9lo \u00e0 proximit\u00e9' ||
			code === 'Hiking/biking trails nearby'
		) {
			return '<i class="fa-solid fa-road"></i>';
		}
		// 50 БЕЗПЛАТНО БЕЗПЛАТНО БЕЗПЛАТНО БЕЗПЛАТНО БЕЗПЛАТНО
		else if (
			code === 'Free beach cabanas' ||
			code === 'Livres' ||
			code === 'Free grocery shopping service' ||
			code === 'Servi\u00e7o gr\u00e1tis de compras de mercearia' ||
			code === 'Recepci\u00f3n gratuita' ||
			code === 'Club infantil (gratis)' ||
			code === 'Guardería/actividades supervisadas (gratis)' ||
			code === 'Transporte a la playa (gratis)' ||
			code === 'Caba\u00f1as de playa (gratis)' ||
			code === 'R\u00e9ception gratuite' ||
			code === 'Club pour enfants (gratuit)' ||
			code === "Garde d'enfant / activit\u00e9s supervis\u00e9es (gratuites)" ||
			code === 'Free reception' ||
			code === 'Supervised childcare/activities (free)' ||
			code === 'Free beach cabanas'
		) {
			return '<i class="fa-regular fa-hands-holding-dollar"></i>';
		}
		// 51 НОЖНИЦI НОЖНИЦI НОЖНИЦI НОЖНИЦI НОЖНИЦI НОЖНИЦI
		else if (
			code === 'Hair salon' ||
			code === '54' ||
			code === 'Sal\u00f3n de peluquer\u00eda' ||
			code === 'Parrucchiere' ||
			code === 'Salon de coiffure' ||
			code === 'Hair salon'
		) {
			return '<i class="fa-regular fa-scissors"></i>';
		}
		// 52 КОНФЕРЕНЦ КОНФЕРЕНЦ КОНФЕРЕНЦ КОНФЕРЕНЦ КОНФЕРЕНЦ КОНФЕРЕНЦ
		else if (
			code === 'Conference space' ||
			code === 'Centro de conferencias' ||
			code === 'Sala para eventos' ||
			code === 'Centre de conf\u00e9rences' ||
			code === 'Conference center' ||
			code === 'Centro congressi' ||
			code === '1201' ||
			code === '10d0' ||
			code === '10d5' ||
			code === '1203' ||
			code === 'Espacio para conferencias' ||
			code === 'Sale per conferenze' ||
			code === 'Espace de conf\u00e9rence' ||
			code === 'Conference space'
		) {
			return '<i class="fa-thin fa-people-line"></i>';
		}
		// 53 МИКРОХВИЛЬОВКА МИКРОХВИЛЬОВКА МИКРОХВИЛЬОВКА МИКРОХВИЛЬОВКА
		else if (
			code === 'Microondas compartido' ||
			code === '8c36eb8b-b6f2-4caf-9a3e-264881ddefe8' ||
			code === '106c' ||
			code === '10f4' ||
			code === 'Microonde condiviso' ||
			code === 'Micro-ondes partag\u00e9' ||
			code === 'Microondas compartido'
		) {
			return '<i class="fa-regular fa-microwave"></i>';
		}
		// 54 САНIТАР САНIТАР САНIТАР САНIТАР САНIТАР
		else if (code === 'Microonde condiviso') {
			return '<i class="fa-regular fa-hand-sparkles"></i>';
		}
		// 55 САНIТАР САНIТАР САНIТАР САНIТАР САНIТАР
		else if (code === 'Salas de tratamentos de spa') {
			return '<i class="fa-regular fa-hand-sparkles"></i>';
		}
		// 54 ВОЛЕЙБОЛ ВОЛЕЙБОЛ ВОЛЕЙБОЛ ВОЛЕЙБОЛ ВОЛЕЙБОЛ ВОЛЕЙБОЛ ВОЛЕЙБОЛ ВОЛЕЙБОЛ ВОЛЕЙБОЛ
		else if (
			code === 'Voleibol de praia no local' ||
			code === 'Beach-volley sur place' ||
			code === 'Beach volley in loco' ||
			code === 'Beach volleyball on site' ||
			code === 'V\u00f3ley playa en las instalaciones' ||
			code === 'Voleibol no local' ||
			code === 'Volleyball on site' ||
			code === 'Pallavolo in loco' ||
			code === '116c'
		) {
			return ' <i class="fa-regular fa-volleyball"></i>';
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

onMounted(() => {
	Object.entries(providerStringOlympiaeurope).forEach(([provider, entry]) => {
		// console.log('provider', provider);
		Object.entries(entry).forEach(([code, amenity]) => {
			olympiaeurope.value.push({
				code,
				amenity,
				icon: getIcon(provider, code)
			});
		});
	});
});
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

<template>
	<div>Async Await</div>
</template>

<script setup>








const harverstGanj = (name, gramm, time) => {
	return new Promise((resolve, reject) => {
		if (gramm < 58) {
			reject(`${name} тебе не достаточно ${gramm} для прийнятия в семью...пошел от сюда`);
		}
		setTimeout(() => resolve(` ${name} собрал ${gramm} и ты красавчик бро =) `), time);
	});
};

const banda = async () => {
	try {
		const dude1 = await harverstGanj('Vova', 144, 1500);
		console.log(dude1);
		const dude2 = await harverstGanj('Viktor', 130, 3000);
		console.log(dude2);
		const dude3 = await harverstGanj('Stas', 30, 4000);
		console.log(dude3);
		const dude4 = await harverstGanj('Nazar', 20, 4000);
		console.log(dude4);
	} catch (error) {
		console.log('ОШИБКА', error);
	}
};
banda();
// harverstGanj('Vova', 144, 1500)
// 	.then(res => {
// 		console.log('res>>>', res);
// 		return harverstGanj('Viktor', 130, 3000);
// 	})
// 	.then(res => {
// 		console.log('res>>>', res);
// 		return harverstGanj('Stas', 30, 4000);
// 	})
// 	.then(res => {
// 		console.log('res>>>', res);
// 		return harverstGanj('Nazar', 50, 5000);
// 	})
// 	.catch(err => {
// 		console.log('Ошибка !!!', err);
// 	});
</script>

<style lang="scss" scoped></style>

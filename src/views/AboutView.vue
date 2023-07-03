<template>
	<div class="about">
		<div class="about__wrapper">
			<div class="about__titleWrapper">
				<h2 class="about___title">Я пропоную вам тільки ті послуги яких ви варті</h2>
			</div>
			<div class="about__meWrapper">
				<div class="about__meImgWrapper">
					<img class="about__meImg" src="@/img/yulia.jpg" alt="Yulia" />
				</div>
				<div class="about__description">
					Мене звати Юлія Мельник і я професійний майстер перманенту з професійним стажем
					понад 10 років. Своєю роботою я роблю жінок красивішими і впевненішими в собі
					адже коли вони дивляться в своє відображення в зеркалі в них завжди зявляється
					посмішка на обличі і вогонь в очах немов після виходу з мого салону вони почнуть
					завоювувати світ своєю красотою...
					<span class="myWork"> - це і є результат моєї роботи ❤︎ </span>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup></script>

<style lang="scss" scoped>
.myWork {
	font-size: 24px;
	color: purple;
}
.about {
	&__titleWrapper {
		height: 80px;
		width: 100%;
		background-color: rgb(255, 199, 253);
		display: flex;
		text-align: center;
		justify-content: center;
		margin-bottom: 20px;
	}
	&__meImg {
		width: 300px;
		height: 500px;
		border-radius: 70px;
		border: 12px solid pink;
		border-right: 25px solid rgba(249, 174, 186, 0.977);
	}
	&__meWrapper {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	&__meImgWrapper {
		margin-right: 40px;
	}
	&__description {
		border-top: 2px solid black;
		border-bottom: 2px solid black;
		padding: 20px;
		border-radius: 20px;
	}
}
</style>

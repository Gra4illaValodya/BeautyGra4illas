<template>
	<div class="youtube">
		<!-- <div>
			<button>
				<i v-if="pause" class="fa-sharp fa-solid fa-circle-play"></i>
				<i v-else class="fa-solid fa-circle-pause"></i>
			</button>
		</div> -->

		<div
			ref="refYoutube"
			class=""
			@click="playStop($event, playStopCommand === 'playVideo' ? 'pauseVideo' : 'playVideo')"
		>
			<div
				class="youtube__voiceIcon"
				@click="muteUnMute($event, muteUnMuteCommand === 'mute' ? 'unMute' : 'mute')"
			>
				<i v-if="!isVideoMuted" class="fa-solid fa-volume-high"></i>
				<i v-else class="fa-solid fa-volume-slash"></i>
			</div>

			<iframe
				ref="youtubeIframe"
				width="100%"
				height="315"
				:src="embedUrl"
				allow="autoplay; encrypted-media"
				allowfullscreen
			></iframe>
		</div>
	</div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
const embedUrl = `https://www.youtube.com/embed/tgbNymZ7vqY?controls=0&rel=0&autoplay=1&mute=1&loop=1&enablejsapi=1`;
const youtubeIframe = ref(null);
const prevYoutubeFunc = ref('');

const refYoutube = ref('');

const playStopCommand = ref('');
const pause = ref(false);

const isVideoMuted = ref(true);
const muteUnMuteCommand = ref('mute');

const playStop = (event, func, args) => {
	// const iframe = parentElement.nextElementSibling.firstElementChild;

	const iframe = event.target.firstChild;
	console.log('@@iframe', iframe);
	console.log('event', event);
	if (iframe) {
		const src = iframe.src;
		if (src) {
			console.log('src', src);
			iframe.contentWindow.postMessage(
				JSON.stringify({
					event: 'command',
					func: func,
					args: args || []
				}),
				'*'
			);
		}
	}
	playStopCommand.value = func;
	console.log(playStopCommand.value);
	pause.value = !pause.value;
	console.log('YES PLAY');
};
const muteUnMute = (event, func, args) => {
	// const iframe = parentElement.nextElementSibling.firstElementChild;
	const iframe = youtubeIframe.value;
	console.log('@@iframe', iframe);
	console.log('event', event);
	if (iframe) {
		const src = iframe.src;
		if (src) {
			console.log('src', src);
			iframe.contentWindow.postMessage(
				JSON.stringify({
					event: 'command',
					func: func,
					args: args || []
				}),
				'*'
			);
		}
	}
	muteUnMuteCommand.value = func;
	console.log(muteUnMuteCommand.value);
	isVideoMuted.value = !isVideoMuted.value;
	console.log('YES MUTE');
};
</script>
<style scoped>
/* .q {
	width: 100%;
} */
.youtube {
	width: 100%;
	z-index: 0;
	position: relative;
}
.youtube__voiceIcon {
	position: absolute;
	z-index: 3;
	color: rgb(141, 143, 143);
	right: 15%;
	bottom: 5%;
}
iframe {
	z-index: 1;
}
</style>

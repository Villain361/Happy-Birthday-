// Function to start music
function playMusic() {
  const music = document.getElementById('background-music');
  music.play();
}
window.addEventListener('DOMContentLoaded', function() {
  playMusic();
});
document.body.addEventListener('click', playMusic, { once: true });
const content = document.getElementById('content');
const footer = document.getElementsByTagName('footer')[0];
const timer = document.getElementById('timer');

const second = 1000,
  minute = second * 60,
  hour = minute * 60,
  day = hour * 24;
let countDown = new Date('Oct 19, 2025 00:00:00 +0600').getTime(), // Updated to October 19, 2025, 12:00 AM +06
  x = setInterval(function () {
    let now = new Date().getTime(),
      distance = countDown - now;
    document.getElementById('days').innerText = Math.floor(distance / (day));
    document.getElementById('hours').innerText = Math.floor((distance % (day)) / (hour));
    document.getElementById('minutes').innerText = Math.floor((distance % (hour)) / (minute));
    document.getElementById('seconds').innerText = Math.floor((distance % (minute)) / second);

    if (distance < 0) {
      timer.classList.add('d-none');
      clearInterval(x);
      _slideSatu();
    }
  }, second);

const _slideSatu = function () {
  const tap = document.getElementById('tap');
  const slideSatu = document.getElementById('slideSatu');
  slideSatu.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function handleClick() {
      slideSatu.classList.replace('animate__slideInDown', 'animate__backOutDown');
      tap.classList.add('d-none');
      setTimeout(function () {
        slideSatu.classList.add('d-none');
        _slideDua();
      }, 1000);
      document.body.removeEventListener('click', handleClick);
    }, { once: true });
  }, 7000);
};

let teks1Instance, teks2Instance;
const _slideDua = function () {
  const tap = document.getElementById('tap');
  const slideDua = document.getElementById('slideDua');

  teks1Instance = new TypeIt('#teks1', {
    strings: [
      "My Nafisa,\n\nHappy Birthday, my love! 💖\n\nToday seems ordinary, but it’s not. It’s the day the world got you. Another year flew by in a blink, but it’s a year I got to love you more.\n\nLet's make today our best celebration yet. Thank you for your love, your smile, and your beautiful heart. You are my greatest gift."
    ],
    speed: 50,
    waitUntilVisible: true,
    loop: false
  }).go();

  slideDua.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function handleClick() {
      teks1Instance.destroy(); // Always destroy to avoid glitches
      slideDua.classList.replace('animate__zoomInDown', 'animate__fadeOutLeft');
      slideDua.classList.remove('animate__delay-2s', 'animate__slow');
      tap.classList.add('d-none');
      setTimeout(function () {
        slideDua.classList.add('d-none');
        slideDua.remove();
        _slideTiga();
      }, 1000);
      document.body.removeEventListener('click', handleClick);
    }, { once: true });
  }, 10000);
};

const _slideTiga = function () {
  const tap = document.getElementById('tap');
  const slideTiga = document.getElementById('slideTiga');

  teks2Instance = new TypeIt('#teks2', {
    strings: [
      "Always remember your dreams. Fly free, my beautiful bird. I'll always be here for you.\n\nDon't worry about a thing. God has your back, and so do I. This year will be your best one yet. I hope it's filled with all the happiness you bring me.\n\nKeep smiling that amazing smile. Let's make today a perfect memory.\n\nHappy Birthday, my line!\nYours always,"
    ],
    speed: 50,
    waitUntilVisible: true,
    loop: false
  }).go();

  slideTiga.classList.remove('d-none');
  setTimeout(function () {
    tap.classList.remove('d-none');
    document.body.addEventListener('click', function handleClick() {
      teks2Instance.destroy(); // Always destroy to avoid glitches
      slideTiga.classList.remove('animate__delay-2s', 'animate__slow');
      slideTiga.classList.replace('animate__fadeInRight', 'animate__fadeOut');
      tap.remove();
      setTimeout(function () {
        slideTiga.remove();
        _slideEmpat();
      }, 1000);
      document.body.removeEventListener('click', handleClick);
    }, { once: true });
  }, 12000);
};

function getRandomPosition(element) {
  const x = window.innerHeight - element.clientHeight;
  const y = window.innerWidth - element.clientWidth;
  const randomX = Math.floor(Math.random() * Math.min(500, x));
  const randomY = Math.floor(Math.random() * y);
  return [randomY + 'px', randomX + 'px']; // Return as CSS-compatible strings
};

const _slideEmpat = function () {
  const slideEmpat = document.getElementById('slideEmpat');
  const btn = document.getElementsByTagName('button');
  slideEmpat.classList.remove('d-none');

  btn[0].addEventListener('click', function () {
    const [newTop, newLeft] = getRandomPosition(slideEmpat);
    slideEmpat.style.top = newTop;
    slideEmpat.style.left = newLeft;
  });

  btn[1].addEventListener('click', function () {
    slideEmpat.classList.replace('animate__fadeInDown', 'animate__bounceOut');
    slideEmpat.classList.remove('animate__delay-2s');
    setTimeout(function () {
      slideEmpat.remove();
      setTimeout(() => {
        _slideLima();
      }, 500);
    }, 1000);
  });
};

const _slideLima = function () {
  const slideLima = document.getElementById('slideLima');
  slideLima.classList.remove('d-none');
  const trims = document.getElementById('trims');
  trims.textContent = "Thank you for being part of my life! ❤️";

  setTimeout(() => {
    trims.classList.remove('d-none');
  }, 1000);

  slideLima.addEventListener('animationend', () => {
    slideLima.classList.add('animate__delay-3s');
    slideLima.classList.replace('animate__bounceIn', 'animate__fadeOut');
    trims.classList.add('animate__animated', 'animate__fadeOut', 'animate__delay-3s');
    setTimeout(() => {
      trims.remove();
      setTimeout(() => {
        slideLima.remove();
        _slideEnam();
      }, 1000);
    }, 6000);
  });
};

const _slideEnam = function () {
  const slideEnam = document.getElementById('slideEnam');
  slideEnam.classList.remove('d-none');
  document.getElementById('fireworks').classList.remove('d-none');
  init(); // Ensure fireworks initialize
  frameHandler(); // Start the render loop immediately
};

// Firework JS below (merged and adapted)
'use strict';

const IS_MOBILE = window.innerWidth <= 640;
const IS_DESKTOP = window.innerWidth > 800;
const IS_HEADER = IS_DESKTOP && window.innerHeight < 300;
// Detect high end devices. This will be a moving target.
const IS_HIGH_END_DEVICE = (() => {
	const hwConcurrency = navigator.hardwareConcurrency;
	if (!hwConcurrency) {
		return false;
	}
	// Large screens indicate a full size computer, which often have hyper threading these days.
	// So a quad core desktop machine has 8 cores. We'll place a higher min threshold there.
	const minCount = window.innerWidth <= 1024 ? 4 : 8;
	return hwConcurrency >= minCount;
})();
// Prevent canvases from getting too large on ridiculous screen sizes.
// 8K - can restrict this if needed
const MAX_WIDTH = 7680;
const MAX_HEIGHT = 4320;
const GRAVITY = 0.9; // Acceleration in px/s
let simSpeed = 1;

function getDefaultScaleFactor() {
	if (IS_MOBILE) return 0.9;
	if (IS_HEADER) return 0.75;
	return 1;
}

// Width/height values that take scale into account.
// USE THESE FOR DRAWING POSITIONS
let stageW, stageH;

// All quality globals will be overwritten and updated via `configDidUpdate`.
let quality = 1;
let isLowQuality = false;
let isNormalQuality = true;
let isHighQuality = false;

const QUALITY_LOW = 1;
const QUALITY_NORMAL = 2;
const QUALITY_HIGH = 3;

const SKY_LIGHT_NONE = 0;
const SKY_LIGHT_DIM = 1;
const SKY_LIGHT_NORMAL = 2;

const COLOR = {
	Red: '#ff0043',
	Green: '#14fc56',
	Blue: '#1e7fff',
	Purple: '#e60aff',
	Gold: '#ffbf36',
	White: '#ffffff'
};

// Special invisible color (not rendered, and therefore not in COLOR map)
const INVISIBLE = '_INVISIBLE_';

const PI_2 = Math.PI * 2;
const PI_HALF = Math.PI * 0.5;

// Stage.disableHighDPI = true;
const trailsStage = new Stage('trails-canvas');
const mainStage = new Stage('main-canvas');
const stages = [
	trailsStage,
	mainStage
];




// Fullscreen helpers, using Fscreen for prefixes.
function fullscreenEnabled() {
	return fscreen.fullscreenEnabled;
}

// Note that fullscreen state is synced to store, and the store should be the source
// of truth for whether the app is in fullscreen mode or not.
function isFullscreen() {
	return !!fscreen.fullscreenElement;
}

// Attempt to toggle fullscreen mode.
function toggleFullscreen() {
	if (fullscreenEnabled()) {
		if (isFullscreen()) {
			fscreen.exitFullscreen();
		} else {
			fscreen.requestFullscreen(document.documentElement);
		}
	}
}

// Sync fullscreen changes with store. An event listener is necessary because the user can
// toggle fullscreen mode directly through the browser, and we want to react to that.
fscreen.addEventListener('fullscreenchange', () => {
	store.setState({ fullscreen: isFullscreen() });
});





// Simple state container; the source of truth.
const store = {
	_listeners: new Set(),
	_dispatch(prevState) {
		this._listeners.forEach(listener => listener(this.state, prevState));
	},
	
	state: {
		// will be unpaused in init()
		paused: true,
		soundEnabled: false,
		menuOpen: false,
		openHelpTopic: null,
		fullscreen: isFullscreen(),
		// Note that config values used for <select>s must be strings, unless manually converting values to strings
		// at render time, and parsing on change.
		config: {
			quality: String(IS_HIGH_END_DEVICE ? QUALITY_HIGH : QUALITY_NORMAL), // will be mirrored to a global variable named `quality` in `configDidUpdate`, for perf.
			shell: 'Random',
			size: IS_DESKTOP
				? '3' // Desktop default
				: IS_HEADER
					? '1.2' // Profile header default (doesn't need to be an int)
					: '2', // Mobile default
			autoLaunch: true,
			finale: true,
			skyLighting: SKY_LIGHT_NORMAL + '',
			hideControls: true, // Hide UI (adapted)
			longExposure: false, // Shutter open for entire show
			scaleFactor: getDefaultScaleFactor()
		}
	},
	
	subscribe(listener) {
		this._listeners.add(listener);
		return () => this._listeners.delete(listener);
	},
	
	// State getter/setter: Use this to access/read state values.
	// Access state values by: store.state.<state-var-name>
	// Set state values by: store.setState({ <state-var-name>: <new-value> })
	setState(nextState) {
		const prevState = this.state;
		this.state = Object.assign({}, this.state, nextState);
		this._dispatch(prevState);
		this.persist();
	},
	
	// Special case for config prop: Memoize dependencies so that the global effect doesn't rerun unnecessarily.
	updateConfig(nextConfig) {
		let newConfig = Object.assign({}, this.state.config, nextConfig);
		newConfig.scaleFactor = parseFloat(newConfig.scaleFactor);
		newConfig.quality = parseFloat(newConfig.quality);
		newConfig.skyLighting = parseFloat(newConfig.skyLighting);
		this.setState({
			config: newConfig
		});
	},
	
	persist() {
		const state = this.state;
		localStorage.fireworksConfig = JSON.stringify({
			quality: state.config.quality,
			shell: state.config.shell,
			size: state.config.size,
			autoLaunch: state.config.autoLaunch,
			finale: state.config.finale,
			skyLighting: state.config.skyLighting,
			hideControls: state.config.hideControls,
			fullscreen: state.fullscreen,
			longExposure: state.config.longExposure
		});
	}
};


// Helper to generate objects for storing current app state.
// Carrying all this app state from event handler to event handler was getting unwieldy.
store.load = function () {
	const raw = localStorage.fireworksConfig;
	if (raw) {
		const state = JSON.parse(raw);
		// If state.config.scaleFactor is undefined, it means this is an old version.
		// to fix scaleFactor, replace it with raw pixel size
		if (state.scaleFactor === undefined) {
			localStorage.fireworksConfig = JSON.stringify({
				scaleFactor: parseInt(state.size) * 0.25
			});
			state.scaleFactor = parseInt(state.size) * 0.25;
		}
		// For a reaction to changes to fullscreen (once the app is persisted to the state),
		// tell the listener to update twice. We must have also just persisted the fullscreen
		// change to state, also, or this would be an infinite loop.
		const update = () => store.updateConfig({});
		fscreen.addEventListener('fullscreenchange', update, { once: true });
		store.setState({ fullscreen: isFullscreen() });
		// Only certain values need overridden. The others should be the default.
		store.updateConfig({
			quality: parseInt(state.quality),
			shell: state.shell,
			size: state.size,
			autoLaunch: state.autoLaunch,
			finale: state.finale,
			skyLighting: parseInt(state.skyLighting),
			hideControls: state.hideControls,
			longExposure: state.longExposure
		});
	}
};

store.load();




// The default of REACT_QUERY is 300ms.
// But on small screens performance is terrible. so set REACTION_QUERY to 0 with
// touch screens. For tablets and other primary touch ui, allow user to reactivate
// sparks by an optional double tap registered with a very short time gap.
const REACT_QUERY = 'ontouchstart' in window ? 0 : 300;

// Keep track of window size to determine small vs large device.
let screenSize = IS_HEADER ? SCREEN_HEADER : (window.innerWidth <= SMALL_BREAKPOINT ? SCREEN_SMALL : SCREEN_LARGE);

window.addEventListener('resize', () => {
	screenSize = IS_HEADER ? SCREEN_HEADER : (window.innerWidth <= SMALL_BREAKPOINT ? SCREEN_SMALL : SCREEN_LARGE);
});

function updateSize() {
	const windowW = window.innerWidth < MAX_WIDTH ? window.innerWidth : MAX_WIDTH;
	const windowH = window.innerHeight < MAX_HEIGHT ? window.innerHeight : MAX_HEIGHT;
	const targetSize = Math.min(windowW, windowH);
	const targetScale = targetSize / 1080;
	const scaleFactor = store.state.config.scaleFactor;
	stageW = Math.min(windowW, targetSize * scaleFactor);
	stageH = Math.min(windowH, targetSize * scaleFactor);
	mainStage.resize(stageW, stageH);
	trailsStage.resize(stageW, stageH);
}

const fullscreenChangeCbEnabled = fullscreenEnabled();

updateSize();

// configDidUpdate is defined further down, since it requires other state and other modules.
// Since it's called repeatedly within this block, initially call it after resizing, rather than
// have a first (unnecessary) call while the window is loading.
updateSize();

// Pixel density
let dpr = window.devicePixelRatio;
// If dpr is 2.5, then get an 8x render of the stage for retina, but use an unscaled
// CSS container, with 2.5 scale factor. This will yield clear retina fireworks with
// performant canvas.
// If dpr is 3.0, this will be the same, but assets three times larger.

// If dpr is 3.5 or greater (which it cannot be), we'll use a 2x render.
if (dpr >= 3.5) {
	dpr = 2;
	mainStage.dpr = dpr;
	trailsStage.dpr = dpr;
	quality = QUALITY_HIGH;
	isHighQuality = true;
} else if (dpr >= 2) {
	dpr = 2;
	mainStage.dpr = dpr;
	trailsStage.dpr = dpr;
	quality = QUALITY_NORMAL;
	isNormalQuality = true;
} else {
	dpr = 1;
	mainStage.dpr = dpr;
	trailsStage.dpr = dpr;
	quality = QUALITY_LOW;
	isLowQuality = true;
}

// Trails. Truly vibrant code.
const COLOR_TRAILS = false;
const trailsCtx = trailsStage.ctx;
trailsCtx.globalCompositeOperation = 'lighter';
function clearTrails() {
	trailsCtx.clearRect(0, 0, stageW, stageH);
}

let currentFrame = 0;
let speedBarOpacity = 0;
let autoClearTrailsInterval;

stageW = mainStage.w;
stageH = mainStage.h;

const connection = new MessageChannel();
const mainPort = connection.port1;
mainPort.onmessage = (e) => {
	currentFrame = e.data.frame;
	speedBarOpacity = e.data.speedBarOpacity;
	clearTrails();
};

function updateSpeed(simSpeedNew) {
	simSpeed = simSpeedNew;
}

// Starburst class
// Each starburst shape is added to the stage as its own Slap instance
// Scale and position initially (random, we don't want weird patterns), then mix in values
// from parent every frame. Thus movement/orientation will appear to be uniform
function Burst(x, y, force = 1, color = COLOR.White, size = store.state.config.size, radius = 0) {
	const isColored = color !== COLOR.White;
	const starCount = (isColored ? rand(1, 2) : rand(2, 3)) + force * rand(40, 50) + (isLowQuality ? 30 : 50);
	this.x = x;
	this.y = y;
	this.force = force;
	this.radius = radius;
	this.size = size;
	this.color = color;
	this.stars = [];
	Burst.list = Burst.list || []; // Initialize Burst.list if not already set
	let starRadius = radius;
	for (let i = 0; i < starCount; i++) {
		const star = {
			x: 0,
			y: 0,
			z: 0,
			scaleX: 1,
			scaleY: 0.8 + rand(-0.4, 0.4),
			alpha: scaleBetween(0.4, 0.9, 0, 1, force),
			color: (isColored ? randomColor({ hue: color }) : color),
			delayFrames: i * 0.5 + rand(-8, 8),
			rotation: rand(360),
			rotationSpeed: rand(0.2, 0.4),
			speed: rand(0.005, 0.01),
			alphaSpeed: rand(0.002, 0.008),
			acceleration: rand(1.05, 1.1),
			friction: 0.96 + rand(-0.08, 0.08)
		};
		if (this.radius === 0) {
			starRadius = rand(force, 1) * 50;
		}
		star.x = Math.cos(star.rotation * Math.PI / 180) * starRadius;
		star.y = Math.sin(star.rotation * Math.PI / 180) * starRadius;
		this.stars.push(star);
	}
	Burst.list.push(this); // Add to Burst.list
}

Burst.prototype.update = function () {
	this.stars.forEach((star, i) => {
		star.x += Math.cos(star.rotation * Math.PI / 180) * star.speed;
		star.y += Math.sin(star.rotation * Math.PI / 180) * star.speed;
		star.rotation += star.rotationSpeed;
		if (star.speed >= 0) {
			star.speed *= star.friction;
		}
		if (star.alpha >= 0) {
			star.alpha -= star.alphaSpeed;
			if (star.alpha <= 0) {
				this.stars.splice(i, 1);
			}
		}
	});
};

Burst.prototype.draw = function () {
	if (this.stars.length === 0) return;
	mainStage.ctx.save();
	mainStage.ctx.translate(this.x, this.y);
	this.stars.forEach(star => {
		mainStage.ctx.fillStyle = star.color;
		mainStage.ctx.globalAlpha = star.alpha;
		mainStage.ctx.scale(star.scaleX, star.scaleY);
		mainStage.ctx.fillRect(star.x, star.y, this.size, this.size);
	});
	mainStage.ctx.restore();
};

// Shell helpers
function rand(min, max, pow = 1) {
	if (pow === 1) {
		return Math.random() * (max - min) + min;
	}
	return Math.pow(Math.random(), pow) * (max - min) + min;
}

function scaleBetween(unscaledNum, minAllowed, maxAllowed, min, max) {
  return (maxAllowed - minAllowed) * (unscaledNum - min) / (max - min) + minAllowed;
}

function randomColor(options) {
	const hue = options.hue || rand(0, 360);
	const saturation = options.saturation || rand(80, 100);
	const lightness = options.lightness || rand(50, 90);
	return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
}

// Function to create Burst object and add to stage
function createBurst(x, y, force = 1, radius = 0, color = COLOR.White, size = store.state.config.size) {
	const burst = new Burst(x, y, force, color, size, radius);
	mainStage.addActor(burst);
}

// Shell Class
const shells = []; // Array to manage active shell instances
class Shell {
	constructor(options = {}) {
		Object.assign(this, options);
		this.pos = new Vector();
		this.vel = new Vector();
		this.size = this.size * quality * store.state.config.size / 3;
		this.color = this.color || randomColor();
		this.launchVel = this.speed || rand(30, 60); // Default launch velocity
	}
	
	launch() {
		this.updateBounds();
		this.vel.x = rand(this.bounds.left, this.bounds.right) < stageW / 2 ? positiveOrNegative(rand(1, 3)) : positiveOrNegative(rand(-3, -1));
		this.pos.y = stageH;
		this.pos.x = stageW / 2;
		this.vel.y = -this.launchVel; // Launch upward
	}
	
	updateBounds() {
		const height = stageH;
		this.bounds = {
			top: height * 0.2,
			bottom: height * 0.5,
			left: stageW * 0.1,
			right: stageW * 0.9
		};
	}
	
	update() {
		this.pos.x += this.vel.x;
		this.pos.y += this.vel.y;
		this.vel.y += GRAVITY;
		this.launchVel -= GRAVITY; // Reduce launch velocity over time
	}
	
	draw() {
		mainStage.ctx.fillStyle = this.color;
		mainStage.ctx.beginPath();
		mainStage.ctx.arc(this.pos.x, this.pos.y, this.size / 2, 0, PI_2, false);
		mainStage.ctx.fill();
	}
	
	explode() {
		const force = rand(0.6, 1);
		createBurst(this.pos.x, this.pos.y, force, 0, this.color, this.size);
	}
}

// Shell types definition
const shellTypes = new Map();
shellTypes.set('random', () => {
	return { speed: rand(30, 60) };
});

shellTypes.set('crackle', () => {
	return {
		crackle: true,
		explosion: 1,
		speed: rand(30, 60)
	};
});

shellTypes.set('crossette', () => {
	return {
		explosion: 1,
		effects: [crossetteEffect],
		speed: rand(30, 60)
	};
});

shellTypes.set('crysanthemum', () => {
	return {
		explosion: 1,
		speed: rand(30, 60)
	};
});

shellTypes.set('falling-leaves', () => {
	return {
		explosion: 1,
		effects: [fallingLeavesEffect],
		zone: 1,
		speed: rand(30, 60)
	};
});

shellTypes.set('floral', () => {
	return {
		explosion: 2,
		effects: [floralEffect],
		speed: rand(30, 60)
	};
});

shellTypes.set('ghost', () => {
	return {
		explosion: 1,
		randomGhost: true,
		speed: rand(30, 60)
	};
});

shellTypes.set('horse-tail', () => {
	return {
		explosion: 1,
		trails: 3,
		speed: rand(30, 60)
	};
});

shellTypes.set('palm', () => {
	return {
		explosion: 1,
		trails: 1,
		jelly: true,
		speed: rand(30, 60)
	};
});

shellTypes.set('ring', () => {
	return {
		explosion: 1,
		ring: true,
		speed: rand(30, 60)
	};
});

shellTypes.set('strobe', () => {
	return {
		explosion: 1,
		patterns: [42, 14, 2, 3, 4],
		strb: true,
		speed: rand(30, 60)
	};
});

shellTypes.set('willow', () => {
	return {
		explosion: 1,
		trails: 2,
		speed: rand(30, 60)
	};
});

const shellNames = Array.from(shellTypes.keys());

// Launch shell
function launchShell() {
	const shellType = shellTypes.get(store.state.config.shell) || shellTypes.get('random');
	const shell = new Shell(shellType());
	shell.launch();
	shells.push(shell);
}

function positiveOrNegative(num) {
	return Math.random() < 0.5 ? num : -num;
}

// Update loop
function tick() {
	if (simSpeed < 0.3) {
		return;
	}
	updateSpeed(simSpeed);
	shells.forEach((shell, i) => {
		if (shell.pos.y <= shell.bounds.top) {
			shell.explode();
			shells.splice(i, 1);
		}
		shell.update();
		shell.draw();
	});
	requestAnimationFrame(tick);
}

tick();

// Auto launch
let launchInterval;
function startAutoLaunch() {
	launchInterval = setInterval(() => {
		launchShell();
	}, 1000 / (store.state.config.autoLaunch ? rand(5, 10) : 30));
}

store.subscribe((state) => {
	if (state.config.autoLaunch) {
		startAutoLaunch();
	} else {
		clearInterval(launchInterval);
	}
});

// Click triggers
let clickConfetti = false;
window.addEventListener('mousedown', (e) => {
	clickConfetti = true;
});

window.addEventListener('mouseup', (e) => {
	clickConfetti = false;
});

// Application initialization
function init() {
	// Initialize Burst.list
	Burst.list = [];

	// Unpause
	store.setState({ paused: false });

	// Update speed and sky lighting immediately
	configDidUpdate();

	// Completely hide controls if requested
	// No controls HTML, so no need

	// Add event listeners
	window.addEventListener('resize', updateSize, { passive: true });
	window.addEventListener('scroll', updateSize, { passive: true });
	document.addEventListener('visibilitychange', onVisibilityChange);
	window.addEventListener('keydown', onKeydown);
	window.addEventListener('touchstart', touchStartHandler, { passive: true });
	window.addEventListener('click', launchShell, { passive: true });
	window.addEventListener('touchend', launchShell, { passive: true });

	// Load sounds (disabled)
	soundManager.init();

	// Queue initial fireworks
	if (store.state.config.autoLaunch) {
		startAutoLaunch();
	}

	updateSize();
}

function onVisibilityChange(e) {
	if (document.visibilityState === 'hidden') {
		store.setState({ paused: true });
	} else {
		store.setState({ paused: false });
	}
}

function onKeydown(e) {
	// P
	if (e.keyCode === 80) {
		store.setState({ paused: !store.state.paused });
	}
	// O
	else if (e.keyCode === 79) {
		store.updateConfig({ longExposure: !store.state.config.longExposure });
	}
	// F
	else if (e.keyCode === 70) {
		toggleFullscreen();
	}
}

// mouseDown + up = click = launch
const touchStartHandler = () => {
	launchShell();
};

// Initial fireworks
function configDidUpdate() {
	quality = parseInt(store.state.config.quality);
	isLowQuality = quality === QUALITY_LOW;
	isNormalQuality = quality === QUALITY_NORMAL;
	isHighQuality = quality === QUALITY_HIGH;

	if (skyLighting === SKY_LIGHT_NONE) {
		appNodes.canvasContainer.style.backgroundColor = '#000';
	}
	
	Burst.flash = isNormalQuality || isHighQuality ? 3 : 0;
	Burst.brightness = isNormalQuality ? 50 : isHighQuality ? 80 : 0;
	
	// Clear the current shell and wake if it exists
	if (currentShell) {
		currentShell.wake();
	}
	
	// Update fullscreen label
	if (fullscreenLabel) {
		fullscreenLabel.innerHTML = fullscreenEnabled() ? 'Fullscreen' : 'Fullscreen (F)';
	}
}

function pauseApp() {
	store.setState({ paused: true });
}

function resumeApp() {
	store.setState({ paused: false });
}

store.subscribe(({ paused }) => {
	if (paused) {
		pauseApp();
	} else {
		resumeApp();
	}
});

function createParticleArc(start, arcLength, count, velocity, randomness) {
	const angleDelta = arcLength / count;
	const end = start + arcLength - (angleDelta * 0.5);
	
	if (end < start) {
		return [];
	}
	
	const particles = [];
	for (let i = 0; i < count; i++) {
		const angle = start + angleDelta * i + angleDelta * randomness * rand(-0.5, 0.5);
		const particle = {
			x: Math.cos(angle) * velocity,
			y: Math.sin(angle) * velocity,
			d: rand(5, 8) * (randomness * 0.5 + 0.5)
		};
		particles.push(particle);
	}
	return particles;
}

function createBurst(count, func, innerColor, outerColor, randomness = 0.5) {
	const burst = new Burst(0, 0, 1, innerColor); // Fixed constructor call
	burst.addArc = createParticleArc;
	let start = Math.PI * 2 * Math.random();
	let starParticles = burst.addArc(start, PI_2, count, 1, randomness, (angle, index) => func(angle, index, count));
	return starParticles;
}

function crossetteEffect(star) {
	const startAngle = Math.random() * PI_HALF;
	createParticleArc(startAngle, PI_2, 4, star.speed, 0.5);
}

function floralEffect(star) {
	const count = 12 + (quality >= QUALITY_NORMAL ? 0 : 6);
	createBurst(count, (angle, i) => {
		return [Math.cos(angle), Math.sin(angle), rand(0.5, 0.7)];
	}, star.color, star.color, 0.2);
	// Particles
	createBurst(36, (angle, i) => {
		return [Math.cos(angle), Math.sin(angle), rand(0.8, 1)];
	}, star.color, star.color, 0.2);
}

function fallingLeavesEffect(star) {
	createBurst(7, (angle, i) => {
		const arc = Math.PI * 2 * rand(0.05, 0.2);
		const incline = rand(0.2, 0.3) * positiveOrNegative(1);
		return [Math.cos(angle) * incline, Math.sin(angle) * incline, rand(0.5, 1), 0, (start, arcLength, count) => {
			const mid = (start + arcLength / 2) - arcLength / count / 2;
			return createBurst(8, (a, i) => {
				return [0, 0, rand(0.05, 0.3), 1, (innerStart, innerArcLength, innerCount) => {
					const x = Math.cos(innerStart + innerArcLength / innerCount * i);
					const y = Math.sin(innerStart + innerArcLength / innerCount * i);
					return [x, y, rand(0.2, 2)];
				}];
			}, star.color, 'transparent');
		}];
	}, star.color);
}

function crackleEffect(star) {
	createBurst(17, () => rand(-1, 1), star.color, star.color, 0.7);
}

// Shells
function initShell() {
	const shellType = shellTypes.get(store.state.config.shell) || shellTypes.get('random');
	const shell = new Shell(shellType());
	const w = mainStage.w;
	const h = mainStage.h;
	shell.launchX = w * 0.5;
	shell.launchY = h * 0.5;
	shell.launchVel = shell.launchVel * (shell.zone ? 1.3 : 1);
	return shell;
}

let currentShell;

function handleShellLogic() {
	if (shells.length < 10) {
		const shell = initShell();
		shell.launch();
		shells.push(shell);
	}
	currentShell = shells[0];
	if (currentShell) {
		currentShell.update();
		// If shell is dead, remove it
		if (currentShell.launchVel <= 0) {
			currentShell.explode();
			shells.shift();
		}
	}
}

const renderSpeed = () => simSpeed.toFixed(2);
let prevConfig;
let prevMain;
let prevTrails;

function reset() {
	if (prevConfig !== store.state.config || prevMain !== mainStage || prevTrails !== trailsStage) {
		prevConfig = store.state.config;
		prevMain = mainStage;
		prevTrails = trailsStage;
		mainStage.resize(stageW, stageH);
		trailsStage.resize(stageW, stageH);
	}
}

const fps = 60;
let frameTime = 0;
let frameInterval = 1000 / fps;
let now, delta, last = performance.now();

// Main render loop
function animate() {
	requestAnimationFrame(animate);
	now = performance.now();
	delta = now - last;
	if (delta >= frameInterval) {
		last = now - (delta % frameInterval);
		frameTime += delta;
		reset();
		if (!store.state.paused) {
			frameTime += delta * 3;
			if (frameTime >= 5000) {
				frameTime = 0;
			}
			
			if (store.state.config.longExposure) {
				trailsCtx.clearRect(0, 0, stageW, stageH);
				trailsCtx.globalCompositeOperation = 'source-over';
				trailsCtx.fillStyle = `rgba(0, 0, 0, ${store.state.config.longExposure ? 0.0025 : 0.175})`;
				trailsCtx.fillRect(0, 0, stageW, stageH);
			} else {
				// Clear trails
				trailsCtx.globalCompositeOperation = 'source-over';
				trailsCtx.fillStyle = `rgba(0, 0, 0, ${store.state.config.longExposure ? 0.0025 : 0.175})`;
				trailsCtx.fillRect(0, 0, stageW, stageH);
			}

			// Remove inactive bursts
			Burst.list = Burst.list.filter(burst => {
				burst.update();
				burst.draw();
				return burst.stars.length > 0;
			});

			// Remove inactive shells
			shells = shells.filter(shell => {
				if (shell.updateBounds) {
					shell.updateBounds();
				}
				shell.update();
				shell.draw();
				return shell.exploding === undefined;
			});

			// If shells are disabled, add a single shell
			if (shells.length === 0 && store.state.config.autoLaunch) {
				launchShell();
			}
		}
	}
}

animate();

// Place trailer lines
function drawTrailLines() {
	if (store.state.config.longExposure) {
		trailsCtx.globalAlpha = Math.random() * Math.random() * 0.3;
	} else {
		trailsCtx.globalAlpha = 0.3;
	}
	
	// Draw current bursts
	Burst.list.forEach(burst => {
		const pos = burst.pos;
		
		trailsCtx.lineWidth = burst.size / burst.starCount * 0.5;
		mainStage.ctx.a = 0.5;
		trailsCtx.strokeStyle = burst.color;
		trailsCtx.lineDash = [burst.size / 4, burst.size / 6];
		trailsCtx.beginPath();
		trailsCtx.moveTo(pos.x, pos.y);
		trailsCtx.lineTo(pos.x + burst.vel.x, pos.y + burst.vel.y);
		trailsCtx.stroke();
		mainStage.ctx.a = 1;
	});
}

// Invoke random shell
function launchShell() {
	if (!store.state.config.autoLaunch) return;
	const shell = initShell();
	shell.launch();
}

// Place main firework burst & explosions
function explode(burst, color) {
	let count = burst.starCount;
	if (burst.fireworks) count *= 0.5;
	for (let i = 0; i < count; i++) {
		const particleCount = burst.fireworks ? rand(5, 10) : rand(15, 50);
		const particleSize = rand(0.3, 1);
		const particleScale = rand(0.3, 1);
		const particleColor = color || randomColor();
		const particleSpeed = burst.fireworks ? 2.4 : rand(4, 6);
		
		for (let j = 0; j < particleCount; j++) {
			const trailLength = 3;
			const trailWidth = particleSize * particleScale;
			const trailDelta = 0.01 * particleSpeed;
			const trailOpacity = 1;
			const particleDirection = j / particleCount * PI_2;
			const pos = burst.pos;
			const particlePos = {
				x: pos.x + Math.cos(particleDirection) * (i / count) * burst.spread,
				y: pos.y + Math.sin(particleDirection) * (i / count) * burst.spread
			};
			const particleVel = {
				x: Math.cos(particleDirection) * particleSpeed * rand(0.9, 1.1),
				y: Math.sin(particleDirection) * particleSpeed * rand(0.9, 1.1)
			};
			mainStage.addTrail(particlePos, particleVel, particleColor, { length: trailLength, width: trailWidth, delta: trailDelta, opacity: trailOpacity });
		}
	}
	mainPort.postMessage({ frame: currentFrame, speedBarOpacity: speedBarOpacity });
}

function positiveOrNegative(num) {
	return Math.random() < 0.5 ? num : -num;
}

function getRandomColor() {
	return `hsl(${rand(0, 360)}, 100%, 60%)`;
}

function rand(min, max) {
	return Math.random() * (max - min) + min;
}

// App Heads up Display
function drawHUD() {
	const speed = renderSpeed();

	if (speedBarOpacity > 0) {
		mainStage.ctx.globalAlpha = speedBarOpacity;
		mainStage.ctx.fillStyle = COLOR.Blue;
		let barWidth = stageW * (speed / 1.5);
		mainStage.ctx.fillRect(0, stageH - 2, barWidth, 2);
		mainStage.ctx.globalAlpha = 1;
		if (speed > 1.5) {
			mainStage.ctx.fillStyle = COLOR.Red;
			mainStage.ctx.fillRect(barWidth, stageH - 2, (stageW - barWidth), 2);
		}
	}
}

// Render app
function render() {
	handleShellLogic();
	mainStage.render();
	trailsStage.render();
}

function frameHandler() {
	if (store.state.paused) return requestAnimationFrame(frameHandler);
	if (speedBarOpacity > 0) {
		speedBarOpacity -= 0.012;
		speedBarOpacity = Math.max(0, speedBarOpacity);
	}
	render();
	requestAnimationFrame(frameHandler);
}

frameHandler(); // Init frame handler

// A custom error handler for CodePen
window.addEventListener('error', function(errorEvent) {
	console.error(errorEvent);
	store.setState({ openHelpTopic: 'error' });
});

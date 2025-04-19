// Імпортуємо стилі для використання з Vite
import '../css/input.css';
import 'flowbite';

const switchToggle = document.querySelector('#switch-toggle');

// Отримаємо початковий стан теми з localStorage
let isDarkmode = localStorage.getItem('isDarkmode') === 'true';

const darkIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 0118.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
</svg>`;

const lightIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
</svg>`;

// Функція для зміни теми та оновлення вигляду перемикача
function switchTheme() {
	// Встановлюємо/видаляємо клас dark на html елементі
	if (isDarkmode) {
		document.documentElement.classList.add('dark');
		switchToggle.classList.remove('bg-yellow-500', 'translate-x-2');
		switchToggle.classList.add('bg-gray-700', 'translate-x-full');
		switchToggle.innerHTML = darkIcon;
	} else {
		document.documentElement.classList.remove('dark');
		switchToggle.classList.add('bg-yellow-500', 'translate-x-2');
		switchToggle.classList.remove('bg-gray-700', 'translate-x-full');
		switchToggle.innerHTML = lightIcon;
	}
}

// Функція для перемикання стану теми
function toggleTheme() {
	isDarkmode = !isDarkmode;
	localStorage.setItem('isDarkmode', isDarkmode);
	switchTheme();
}

document.addEventListener('DOMContentLoaded', () => {
	const switchButton = document.getElementById('switch-button');

	if (switchButton && switchToggle) {
		// Додаємо єдиний обробник кліку на кнопку
		switchButton.addEventListener('click', toggleTheme);
	}

	// Встановлюємо початковий стан теми
	switchTheme();
});

const options = {
	chart: {
		height: '100%',
		maxWidth: '100%',
		type: 'area',
		fontFamily: 'Roboto, sans-serif',
		dropShadow: {
			enabled: false
		},
		toolbar: {
			show: false
		}
	},
	tooltip: {
		enabled: true,
		x: {
			show: false
		}
	},
	fill: {
		type: 'gradient',
		gradient: {
			opacityFrom: 0.55,
			opacityTo: 0,
			shade: '#1C64F2',
			gradientToColors: ['#1C64F2']
		}
	},
	dataLabels: {
		enabled: false
	},
	stroke: {
		width: 6
	},
	grid: {
		show: false,
		strokeDashArray: 4,
		padding: {
			left: 2,
			right: 2,
			top: 0
		}
	},
	series: [
		{
			name: 'New users',
			data: [6500, 6418, 6456, 6526, 6356, 6456],
			color: '#1A56DB'
		}
	],
	xaxis: {
		categories: [
			'01 April',
			'02 April',
			'03 April',
			'04 April',
			'05 April',
			'06 April',
			'07 April'
		],
		labels: {
			show: false
		},
		axisBorder: {
			show: false
		},
		axisTicks: {
			show: false
		}
	},
	yaxis: {
		show: false
	}
};

if (document.getElementById('area-chart') && typeof ApexCharts !== 'undefined') {
	const chart = new ApexCharts(document.getElementById('area-chart'), options);
	chart.render();
}

document.addEventListener('DOMContentLoaded', function () {
	const dropdownButton = document.getElementById('dropdownDefaultButton');
	const dropdown = document.getElementById('lastDaysdropdown');
	const dropdownItems = dropdown.querySelectorAll('a');

	// Відкриття/закриття dropdown
	dropdownButton.addEventListener('click', function () {
		dropdown.classList.toggle('hidden');
	});

	// Обробка кліків на елементи dropdown
	dropdownItems.forEach(item => {
		item.addEventListener('click', function (e) {
			e.preventDefault();

			// Змінюємо текст кнопки і зберігаємо SVG
			const selectedText = this.textContent.trim();
			const svgIcon = dropdownButton.querySelector('svg').outerHTML;
			dropdownButton.innerHTML = selectedText + svgIcon;

			// Закриваємо dropdown
			dropdown.classList.add('hidden');
		});
	});

	// Закриття dropdown при кліку поза ним
	document.addEventListener('click', function (event) {
		if (!dropdownButton.contains(event.target) && !dropdown.contains(event.target)) {
			dropdown.classList.add('hidden');
		}
	});
});

// This is where you should write all JavaScript
// for your project. Remember a few things as you start!
// - Use let or const for all variables
// - Do not use jQuery - use JavaScript instead
// - Do not use onclick - use addEventListener instead
// - Run npm run test regularly to check autograding
// - You'll need to link this file to your HTML :)


// Get all buttons with the class "filter-button"

function startPage() {
	window.location.href = "filter1.html";
}



const urlParams = new URLSearchParams(window.location.search);

const link1 = document.querySelectorAll('a[href="filter2.html"]');
link1.forEach(link => {
	const button = link.querySelector('button');
	const buttonValue = button ? button.textContent : '';
	let newHref = link.href;
	if (urlParams.toString()) {
		newHref += `?${urlParams.toString()}`;
	}
	if (buttonValue) {
		newHref += `${urlParams.toString() ? '&' : '?'}ambiance=${encodeURIComponent(buttonValue)}`;
	}
	link.href = newHref;
});



// Get all query parameters from the current URL

// Append all query parameters to the links along with the button value
const link2 = document.querySelectorAll('a[href="filter3.html"]');
link2.forEach(link => {
	const button = link.querySelector('button');
	const buttonValue = button ? button.textContent : '';
	let newHref = link.href;
	if (urlParams.toString()) {
		newHref += `?${urlParams.toString()}`;
	}
	if (buttonValue) {
		newHref += `${urlParams.toString() ? '&' : '?'}dish=${encodeURIComponent(buttonValue)}`;
	}
	link.href = newHref;
});





const link3 = document.querySelectorAll('a[href="results.html"]');
link3.forEach(link => {
	const button = link.querySelector('button');
	const buttonValue = button ? button.textContent : '';
	let newHref = link.href;
	if (urlParams.toString()) {
		newHref += `?${urlParams.toString()}`;
	}
	if (buttonValue) {
		newHref += `${urlParams.toString() ? '&' : '?'}price=${encodeURIComponent(buttonValue)}`;
	}
	link.href = newHref;
});








const ambianceParam = decodeURIComponent(urlParams.get('ambiance'));
const dish = decodeURIComponent(urlParams.get('dish'));
const price = decodeURIComponent(urlParams.get('price'));


const restaurantMapping = {
	"Casual-Dining": {
		"K-BBQ": {
			"$": [
				{
					"name": "Seoul Soulongtang",
					"website": "https://www.seoulsoulongtang.com/"
				},
				{
					"name": "Korean Garden",
					"website": "https://www.koreangardenma.com/"
				},
				{
					"name": "Kaju Korean Cuisine",
					"website": "https://kajuallston.com/"
				},


				{
					"name": "Omi Korean Grill",
					"website": "https://www.omiboston.com/"
				},


			],


			"$$": [
				{
					"name": "Jongro Market BBQ",
					"website": "https://g.co/kgs/7fsUU6F"
				},


				{
					"name": "Koreana",
					"website": "https://koreanaboston.com/"
				}
			],


			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},


				{
					"name": "Kayuga",
					"website": "https://www.bostonkayuga.com/"
				},
			],
		},
		"Stews": {
			"$": [
				{
					"name": "Myung Dong 1st Ave",
					"website": "https://g.co/kgs/APnEM34"
				},


				{
					"name": "Kaju Korean Cuisine",
					"website": "https://kajuallston.com/"
				},


				{
					"name": "Tofu Story",
					"website": "https://www.tofustoryboston.com/"
				},
			],


			"$$": [
				{
					"name": "Hanmaru Gamjatang",
					"website": "https://www.hanmaruboston.com/"
				},


				{
					"name": "Seoul Soulongtang",
					"website": "https://www.seoulsoulongtang.com/"
				},


				{
					"name": "BAB Korean Bistro",
					"website": "https://babkoreanbistro.com/"
				},


			],


			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},


				{
					"name": "Naksan Korean BBQ",
					"website": "https://naksanboston.com/menu/"
				}
			],


		},
		"Noodles": {
			"$": [
				{
					"name": "Seoul Soulongtang",
					"website": "https://www.seoulsoulongtang.com/"
				},

				{
					"name": "Buk Kyung Korean Cuisine",
					"website": "https://www.instagram.com/bukkyung.somerville/"
				},
			],
			"$$": [
				{
					"name": "Seoul Jangteo",
					"website": "https://g.co/kgs/4QfFwVT"
				},


				{
					"name": "BAB Korean Bistro",
					"website": "https://babkoreanbistro.com/"
				},
			],
			"$$$": [
				{
					"name": "Naksan Korean BBQ",
					"website": "https://naksanboston.com/menu/"
				}
			],
		},
		"Traditional": {
			"$": [
				{
					"name": "Korean Garden",
					"website": "https://www.koreangardenma.com/"
				},


				{
					"name": "Kaju Korean Cuisine",
					"website": "https://kajuallston.com/"
				},


				{
					"name": "Haju Kitchen",
					"website": "https://g.co/kgs/QNQ192t"
				},


				{
					"name": "Seoul Restaurant",
					"website": "https://www.seoulfoodboston.net/"
				},


				{
					"name": "Baanga Korean Cuisine",
					"website": "https://g.co/kgs/jEh6iGC"
				},
			],
			"$$": [
				{
					"name": "Myung Dong 1st Ave",
					"website": "https://g.co/kgs/APnEM34"
				},


				{
					"name": "Seoul Soulongtang",
					"website": "https://www.seoulsoulongtang.com/"
				},


				{
					"name": "Seoul Jangteo",
					"website": "https://g.co/kgs/4QfFwVT"
				}
			],
			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},
			],
		},
		"Rice Dishes": {
			"$": [
				{
					"name": "Kimchipapi Kitchen",
					"website": "https://www.kimchipapi.com/"
				}
			],
			"$$": [
				{
					"name": "Myung Dong 1st Ave",
					"website": "https://g.co/kgs/APnEM34"
				},


				{
					"name": "Coreanos",
					"website": "https://www.coreanosallston.com/"
				},


				{
					"name": "Perillas",
					"website": "https://www.perillasfood.com/locations"
				},
			],
			"$$$": [
				{
					"name": "Somaek",
					"website": "https://www.somaek.com/"
				},
			],
		},
		"Seafood Dishes": {
			"$": [
				{
					"name": "Myung Dong 1st Ave",
					"website": "https://g.co/kgs/APnEM34"
				},
			],
			"$$": [
				{
					"name": "Seoul Jangteo",
					"website": "https://g.co/kgs/4QfFwVT"
				},


				{
					"name": "Hanmaru Gamjatang",
					"website": "https://www.hanmaruboston.com/"
				}
			],
			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},


				{
					"name": "Somaek",
					"website": "https://www.somaek.com/"
				},
			],
		},
		"Meat Dishes": {
			"$": [
				{
					"name": "Myung Dong 1st Ave",
					"website": "https://g.co/kgs/APnEM34"
				},
				{
					"name": "Seoul Soulongtang",
					"website": "https://www.seoulsoulongtang.com/"
				},
			],


			"$$": [
				{
					"name": "Hanmaru Gamjatang",
					"website": "https://www.hanmaruboston.com/"
				}
			],
			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},


				{
					"name": "BELL86",
					"website": "https://g.co/kgs/PwPJfTM"
				},

			],
		},
		"K-Street Food": {
			"$": [
				{
					"name": "OliToki",
					"website": "https://www.olitoki.com/"
				},


				{
					"name": "FIYA HEN",
					"website": "https://www.fiyachicken.com/"
				},


				{
					"name": "Underdog Hot Chicken",
					"website": "https://www.underdoghotchicken.com/"
				},




				{
					"name": "Kimchipapi Kitchen",
					"website": "https://www.kimchipapi.com/"
				}
			],
			"$$": [
				{
					"name": "Bb.q Chicken",
					"website": "https://bbqchicken.com/"
				},


				{
					"name": "BonChon Chicken",
					"website": "https://allstonma.bonchon.com/"
				},


				{
					"name": "Seoul Topokki",
					"website": "https://seoultopokkiallston.com/"
				},
			],
			"$$$": [
				{
					"name": "Somaek",
					"website": "https://www.somaek.com/"
				},
			],
		},
	},
	"Quick-Bites": {
		"K-BBQ": {
			"$": [
				{
					"name": "Myung Dong 1st Ave",
					"website": "https://g.co/kgs/APnEM34"
				},
			],
			"$$": [
				{
					"name": "Myung Dong 1st Ave",
					"website": "https://g.co/kgs/APnEM34"
				},
			],
			"$$$": [
				{
					"name": "Myung Dong 1st Ave",
					"website": "https://g.co/kgs/APnEM34"
				},
			],
		},
		"Stews": {
			"$": [
				{
					"name": "HAJU Kitchen",
					"website": "https://g.co/kgs/QNQ192t"
				},

			],
			"$$": [
				{
					"name": "Hanmaru Gamjatang",
					"website": "https://www.hanmaruboston.com/"
				}
			],
			"$$$": [
				{
					"name": "Naksan Korean BBQ",
					"website": "https://naksanboston.com/menu/"
				}
			],
		},
		"Noodles": {
			"$": [
				{
					"name": "Hanmaru Gamjatang",
					"website": "https://www.hanmaruboston.com/"
				}
			],
			"$$": [
				{
					"name": "HAJU Kitchen",
					"website": "https://g.co/kgs/QNQ192t"
				}
			],
			"$$$": [
				{
					"name": "Somaek",
					"website": "https://www.somaek.com/"
				},
			],
		},
		"Traditional": {
			"$": [
				{
					"name": "HAJU Kitchen",
					"website": "https://g.co/kgs/QNQ192t"
				}
			],
			"$$": [
				{
					"name": "Seoul Jangteo",
					"website": "https://g.co/kgs/4QfFwVT"
				},
			],
			"$$$": [
				{
					"name": "Somaek",
					"website": "https://www.somaek.com/"
				},
			],
		},
		"Rice Dishes": {
			"$": [
				{
					"name": "Perillas",
					"website": "https://www.perillasfood.com/locations"
				},
			],
			"$$": [
				{
					"name": "HAJU Kitchen",
					"website": "https://g.co/kgs/QNQ192t"
				},
			],
			"$$$": [
				{
					"name": "Seoul Jangteo",
					"website": "https://g.co/kgs/4QfFwVT"
				},
			],
		},
		"Seafood Dishes": {
			"$": [
				{
					"name": "HAJU Kitchen",
					"website": "https://g.co/kgs/QNQ192t"
				}
			],
			"$$": [
				{
					"name": "Seoul Jangteo",
					"website": "https://g.co/kgs/4QfFwVT"
				},
			],
			"$$$": [
				{
					"name": "Tofu Story",
					"website": "https://www.tofustoryboston.com/"
				},
			],
		},
		"Meat Dishes": {
			"$": [
				{
					"name": "Kimchipapi Kitchen",
					"website": "https://www.kimchipapi.com/"
				},
				{
					"name": "KChickin",
					"website": "https://www.kchickin.com/"
				},
			],
			"$$": [
				{
					"name": "Bb.q Chicken",
					"website": "https://bbqchicken.com/"
				},


				{
					"name": "Bonchon Chicken",
					"website": "https://allstonma.bonchon.com/"
				},
			],
			"$$$": [
				{
					"name": "Naksan Korean BBQ",
					"website": "https://naksanboston.com/menu/"
				}
			],
		},
		"K-Street Food": {
			"$": [
				{
					"name": "KChickin",
					"website": "https://www.kchickin.com/"
				},


				{
					"name": "Perillas",
					"website": "https://www.perillasfood.com/locations"
				},


				{
					"name": "Coreanos",
					"website": "https://www.coreanosallston.com/"
				},


				{
					"name": "Kimchipapi Kitchen",
					"website": "https://www.kimchipapi.com/"
				},


				{
					"name": "OliToki",
					"website": "https://www.olitoki.com/"
				},


				{
					"name": "FIYA HEN",
					"website": "https://www.fiyachicken.com/"
				},


				{
					"name": "Underdog Hot Chicken",
					"website": "https://www.underdoghotchicken.com/"
				},
			],
			"$$": [
				{
					"name": "Bb.q Chicken",
					"website": "https://bbqchicken.com/"
				},


				{
					"name": "Bonchon Chicken",
					"website": "https://allstonma.bonchon.com/"
				},
			],
			"$$$": [
				{
					"name": "SOJUba",
					"website": "https://www.sojubaboston.com/"
				},
			],
		},
	},
	"Family-Friendly": {
		"K-BBQ": {
			"$": [
				{
					"name": "Seoul Soulongtang",
					"website": "https://www.seoulsoulongtang.com/"
				}
			],
			"$$": [
				{
					"name": "Koreana",
					"website": "https://koreanaboston.com/"
				}
			],
			"$$$": [
				{
					"name": "Jongro Market BBQ",
					"website": "https://g.co/kgs/7fsUU6F"
				},
			],
		},
		"Stews": {
			"$": [
				{
					"name": "Tofu Story",
					"website": "https://www.tofustoryboston.com/"
				},
			],
			"$$": [
				{
					"name": "BAB Korean Bistro",
					"website": "https://babkoreanbistro.com/"
				},


				{
					"name": "Seoul Soulongtang",
					"website": "https://www.seoulsoulongtang.com/"
				}
			],
			"$$$": [
				{
					"name": "SOJUba",
					"website": "https://www.sojubaboston.com/"
				},
			],
		},
		"Noodles": {
			"$": [
				{
					"name": "Seoul Soulongtang",
					"website": "https://www.seoulsoulongtang.com/"
				},


				{
					"name": "Buk Kyung Korean Cuisine",
					"website": "https://www.instagram.com/bukkyung.somerville/"
				},
				{
					"name": "Seoul Topokki",
					"website": "https://seoultopokkiallston.com/"
				},


			],
			"$$": [
				{
					"name": "BAB Korean Bistro",
					"website": "https://babkoreanbistro.com/"
				},
			],
			"$$$": [
				{
					"name": "SOJUba",
					"website": "https://www.sojubaboston.com/"
				},
			],
		},
		"Traditional": {
			"$": [
				{
					"name": "Seoul Restaurant",
					"website": "https://www.seoulfoodboston.net/"
				},
			],
			"$$": [
				{
					"name": "Seoul Soulongtang",
					"website": "https://www.seoulsoulongtang.com/"
				},
				{
					"name": "Baanga Korean Cuisine",
					"website": "https://g.co/kgs/jEh6iGC"
				},
			],
			"$$$": [
				{
					"name": "SOJUba",
					"website": "https://www.sojubaboston.com/"
				},


			],
		},
		"Rice Dishes": {
			"$": [
				{
					"name": "Seoul Soulongtang",
					"website": "https://www.seoulsoulongtang.com/"
				},
				{
					"name": "Korean Garden",
					"website": "https://www.koreangardenma.com/"
				},
				{
					"name": "Kaju Korean Cuisine",
					"website": "https://kajuallston.com/"
				},
			],
			"$$": [
				{
					"name": "Baanga Korean Cuisine",
					"website": "https://g.co/kgs/jEh6iGC"
				},
			],
			"$$$": [
				{
					"name": "SOJUba",
					"website": "https://www.sojubaboston.com/"
				},
			],
		},
		"Seafood Dishes": {
			"$": [
				{
					"name": "Baanga Korean Cuisine",
					"website": "https://g.co/kgs/jEh6iGC"
				},
			],
			"$$": [

				{
					"name": "Tofu Story",
					"website": "https://www.tofustoryboston.com/"
				},
			],
			"$$$": [
				{
					"name": "Naksan Korean BBQ",
					"website": "https://naksanboston.com/menu/"
				}
			],
		},
		"Meat Dishes": {
			"$": [
				{
					"name": "Kaju Korean Cuisine",
					"website": "https://kajuallston.com/"
				},

			],
			"$$": [
				{
					"name": "Baanga Korean Cuisine",
					"website": "https://g.co/kgs/jEh6iGC"
				},
			],
			"$$$": [
				{
					"name": "SOJUba",
					"website": "https://www.sojubaboston.com/"
				},
			],
		},
		"K-Street Food": {
			"$": [
				{
					"name": "KChickin",
					"website": "https://www.kchickin.com/"
				},

			],
			"$$": [
				{
					"name": "Perillas",
					"website": "https://www.perillasfood.com/locations"
				},
			],
			"$$$": [
				{
					"name": "SOJUba",
					"website": "https://www.sojubaboston.com/"
				},
			],
		},
	},
	"Late Night-Eats": {
		"K-BBQ": {
			"$": [
				{
					"name": "Kaju Tofu House",
					"website": "https://www.kajutofuhouse.com/"
				},
				{
					"name": "Seoul Soulongtang",
					"website": "https://www.seoulsoulongtang.com/"
				}
			],
			"$$": [
				{
					"name": "Koreana",
					"website": "https://koreanaboston.com/"
				}
			],
			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},
			],
		},
		"Stews": {
			"$": [
				{
					"name": "BAB Korean Bistro",
					"website": "https://babkoreanbistro.com/"
				},
			],
			"$$": [
				{
					"name": "SOJUba",
					"website": "https://www.sojubaboston.com/"
				},
			],
			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},
			],
		},
		"Noodles": {
			"$": [
			],
			"$$": [
				{
					"name": "BAB Korean Bistro",
					"website": "https://babkoreanbistro.com/"
				},
			],
			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},
			],
		},
		"Traditional": {
			"$": [
				{
					"name": "BAB Korean Bistro",
					"website": "https://babkoreanbistro.com/"
				},
			],
			"$$": [
				{
					"name": "Seoul Soulongtang",
					"website": "https://www.seoulsoulongtang.com/"
				},
				{
					"name": "Korean Garden",
					"website": "https://www.koreangardenma.com/"
				},
				{
					"name": "Kaju Korean Cuisine",
					"website": "https://kajuallston.com/"
				},
			],
			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},
			],
		},
		"Rice Dishes": {
			"$": [
				{
					"name": "Korean Garden",
					"website": "https://www.koreangardenma.com/"
				},
			],
			"$$": [
				{
					"name": "Seoul Restaurant",
					"website": "https://www.seoulfoodboston.net/"
				},


				{
					"name": "Baanga Korean Cuisine",
					"website": "https://g.co/kgs/jEh6iGC"
				},
			],
			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},
			],
		},
		"Seafood Dishes": {
			"$": [
				{
					"name": "Seoul Restaurant",
					"website": "https://www.seoulfoodboston.net/"
				},
			],
			"$$": [
				{
					"name": "Baanga Korean Cuisine",
					"website": "https://g.co/kgs/jEh6iGC"
				},
			],
			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},
			],
		},
		"Meat Dishes": {
			"$": [
				{
					"name": "Bb.q Chicken",
					"website": "https://bbqchicken.com/"
				},


				{
					"name": "BonChon Chicken",
					"website": "https://allstonma.bonchon.com/"
				},


			],
			"$$": [
				{
					"name": "SOJUba",
					"website": "https://www.sojubaboston.com/"
				},
			],
			"$$$": [
				{
					"name": "Naksan Korean BBQ",
					"website": "https://naksanboston.com/menu/"
				}
			],
		},
		"K-Street Food": {
			"$": [

				{
					"name": "BonChon Chicken",
					"website": "https://allstonma.bonchon.com/"
				},
			],
			"$$": [
				{
					"name": "Bb.q Chicken",
					"website": "https://bbqchicken.com/"
				},

				{
					"name": "SOJUba",
					"website": "https://www.sojubaboston.com/"
				},
			],

			"$$$": [
				{
					"name": "SOJUba",
					"website": "https://www.sojubaboston.com/"
				},

			],
		},
	},
	"Group-Friendly": {
		"K-BBQ": {
			"$": [
				{
					"name": "Korean Garden",
					"website": "https://www.koreangardenma.com/"
				},
			],

			"$$": [
				{
					"name": "Seoul Soulongtang",
					"website": "https://www.seoulsoulongtang.com/"
				},

				{
					"name": "Kaju Korean Cuisine",
					"website": "https://kajuallston.com/"
				},
			],

			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},
			],
		},
		"Stews": {
			"$": [
				{
					"name": "Myung dong 1st Ave",
					"website": "https://g.co/kgs/APnEM34"
				},
			],
			"$$": [
				{
					"name": "Seoul Soulongtang",
					"website": "https://www.seoulsoulongtang.com/"
				}


			],
			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},
			],
		},
		"Noodles": {
			"$": [
				{
					"name": "Seoul Topokki",
					"website": "https://seoultopokkiallston.com/"
				},

			],
			"$$": [
				{
					"name": "BAB Korean Bistro",
					"website": "https://babkoreanbistro.com/"
				},
			],
			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},
			],
		},
		"Traditional": {
			"$": [
				{
					"name": "Seoul Restaurant",
					"website": "https://www.seoulfoodboston.net/"
				}
			],
			"$$": [
				{
					"name": "Seoul Soulongtang",
					"website": "https://www.seoulsoulongtang.com/"
				},
			],
			"$$$": [
				{
					"name": "Somaek",
					"website": "https://www.somaek.com/"
				}

			],
		},
		"Rice Dishes": {
			"$": [
				{
					"name": "Myung Dong 1st Ave",
					"website": "https://g.co/kgs/APnEM34"
				},
			],
			"$$": [
				{
					"name": "Seoul Soulongtang",
					"website": "https://www.seoulsoulongtang.com/"
				},
			],

			"$$$": [
				{
					"name": "Somaek",
					"website": "https://www.somaek.com/"
				}
			],
		},
		"Seafood Dishes": {
			"$": [
				{
					"name": "Seoul Soulongtang",
					"website": "https://www.seoulsoulongtang.com/"
				},
			],
			"$$": [
				{
					"name": "Myung Dong 1st Ave",
					"website": "https://g.co/kgs/APnEM34"
				},
			],

			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},
			],
		},
		"Meat Dishes": {
			"$": [
				{
					"name": "Myung Dong 1st Ave",
					"website": "https://g.co/kgs/APnEM34"
				},
			],
			"$$": [
				{
					"name": "Bb.q Chicken",
					"website": "https://bbqchicken.com/"
				},


				{
					"name": "Bonchon Chicken",
					"website": "https://allstonma.bonchon.com/"
				},
			],
			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},
			],
		},
		"K-Street Food": {
			"$": [
				{
					"name": "Seoul Topokki",
					"website": "https://seoultopokkiallston.com/"
				},

			],
			"$$": [
				{
					"name": "Bb.q Chicken",
					"website": "https://bbqchicken.com/"
				},


				{
					"name": "BonChon Chicken",
					"website": "https://allstonma.bonchon.com/"
				},
			],
			"$$$": [
				{
					"name": "SOJUba",
					"website": "https://www.sojubaboston.com/"
				},
			],
		},
	},
	"Pocha-Korean-Pubs": {
		"K-BBQ": {
			"$": [
				{
					"name": "Myung Dong 1st Ave",
					"website": "https://g.co/kgs/APnEM34"
				},
			],
			"$$": [
				{
					"name": "Koreana",
					"website": "https://koreanaboston.com/"
				}
			],
			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},
			],
		},
		"Stews": {
			"$": [
				{
					"name": "Myung dong 1st Ave",
					"website": "https://g.co/kgs/APnEM34"
				},
			],
			"$$": [
				{
					"name": "SOJUba",
					"website": "https://www.sojubaboston.com/"
				},
			],
			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},
			],
		},
		"Noodles": {
			"$": [
				{
					"name": "Myung Dong 1st Ave",
					"website": "https://g.co/kgs/APnEM34"
				},
			],
			"$$": [
				{
					"name": "Koy Restaurant",
					"website": "https://koyboston.com/"
				},
			],
			"$$$": [
				{
					"name": "Somaek",
					"website": "https://www.somaek.com/"
				}
			],
		},
		"Traditional": {
			"$": [
				{
					"name": "Koreana",
					"website": "https://koreanaboston.com/"
				}
			],
			"$$": [
				{
					"name": "Myung Dong 1st Ave",
					"website": "https://g.co/kgs/APnEM34"
				},

			],
			"$$$": [
				{
					"name": "Somaek",
					"website": "https://www.somaek.com/"
				}
			],
		},
		"Rice Dishes": {
			"$": [
				{
					"name": "Koreana",
					"website": "https://koreanaboston.com/"
				}
			],
			"$$": [
				{
					"name": "SOJUba",
					"website": "https://www.sojubaboston.com/"
				},
			],

			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},
			],
		},
		"Seafood Dishes": {
			"$": [
				{
					"name": "Koreana",
					"website": "https://koreanaboston.com/"
				}
			],
			"$$": [
				{
					"name": "Koy Restaurant",
					"website": "https://koyboston.com/"
				},
			],
			"$$$": [
				{
					"name": "Somaek",
					"website": "https://www.somaek.com/"
				}
			],
		},
		"Meat Dishes": {
			"$": [
				{
					"name": "Bb.q Chicken",
					"website": "https://bbqchicken.com/"
				},
			],
			"$$": [
				{
					"name": "Koy Restaurant",
					"website": "https://koyboston.com/"
				},


				{
					"name": "SOJUba",
					"website": "https://www.sojubaboston.com/"
				},
			],
			"$$$": [
				{
					"name": "Gopchang Story",
					"website": "https://www.gopchangboston.com/"
				},
			],
		},
		"K-Street Food": {
			"$": [
				{
					"name": "Bonchon Chicken",
					"website": "https://allstonma.bonchon.com/"
				},
			],
			"$$": [
				{
					"name": "Bb.q Chicken",
					"website": "https://bbqchicken.com/"
				},
			],

			"$$$": [
				{
					"name": "SOJUba",
					"website": "https://www.sojubaboston.com/"
				}

			],
		},
	},
}


console.log(ambianceParam)
console.log(dish)
console.log(price)
console.log(restaurantMapping[ambianceParam][dish][price])
const restaurants = restaurantMapping[ambianceParam][dish][price];
const restaurantList = document.querySelector('.restaurant-list');


restaurants.forEach(restaurant => {
	const listItem = document.createElement('li');
	const link = document.createElement('a');
	link.href = restaurant.website;
	link.target = "_blank";
	const button = document.createElement('button');
	button.className = 'restaurant-button';
	button.textContent = restaurant.name;
	link.appendChild(button);
	listItem.appendChild(link);
	restaurantList.appendChild(listItem);
});

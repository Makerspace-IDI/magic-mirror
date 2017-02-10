/* Magic Mirror Config Sample
 *
 * By Michael Teeuw http://michaelteeuw.nl
 * MIT Licensed.
 */

var config = {
	port: 8080,
	ipWhitelist: ["127.0.0.1", "::ffff:127.0.0.1", "::1"],

	language: "en",
	timeFormat: 24,
	units: "metric",

	modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left",
			classes: "default everyone"
		},
		{
			module: "calendar",
			header: "Norwegian Holidays",
			position: "top_left",
			classes: "default everyone",
			config: {
				calendars: [
					{
						symbol: "calendar-check-o ",
						url: "webcal://www.calendarlabs.com/templates/ical/Norway-Holidays.ics"
					}
				]
			}
		},
		{
			module: "compliments",
			position: "lower_third"
		},
		{
			module: "currentweather",
			position: "top_right",
			config: {
				location: "New York",
				locationID: "",  //ID from http://www.openweathermap.org
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		{
			module: "weatherforecast",
			position: "top_right",
			header: "Weather Forecast",
			config: {
				location: "New York",
				locationID: "5128581",  //ID from http://www.openweathermap.org
				appid: "YOUR_OPENWEATHER_API_KEY"
			}
		},
		/*{
			module: "newsfeed",
			position: "bottom_bar",
			classes: "default everyone",
			config: {
				feeds: [
					{
						title: "New York Times",
						url: "http://www.nytimes.com/services/xml/rss/nyt/HomePage.xml"
					}
				],
				showSourceTitle: true,
				showPublishDate: true
			}
		},*/
		{
			module: "MMM-Facial-Recognition",
			config: {
				recognitionAlgorithm: 1,
				lbphThreshold: 50,
				fisherThreshold: 250,
				eigenThreshold: 3000,
				useUSBCam: true,
				trainingFile: "modules/MMM-Facial-Recognition/training.xml",
				// Recognition interval in seconds
				interval: 2,
				// Logout delay after last recognition so that a user does not get
				// instantly logged out if he turns away
				logoutDelay: 15,
				//users: [estensen],
				defaultClass: "default",
				everyoneClass: "everyone",
				//estensen: "helloworld",
				welcomeMessage: false
			}
		},
		{
			module: "helloworld",
			position: "bottom_bar",
			classes: "estensen",
			config: {
				text: "Hello estensen"
			}
		}
	]

};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") {module.exports = config;}

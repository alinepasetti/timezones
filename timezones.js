const data = [
  {
    "data-ianatimezone": "Pacific/Pago_Pago",
    value: "American Samoa",
    label: "(-11:00) American Samoa"
  },
  {
    "data-ianatimezone": "Pacific/Midway",
    value: "International Date Line West",
    label: "(-11:00) International Date Line West"
  },
  {
    "data-ianatimezone": "Pacific/Midway",
    value: "Midway Island",
    label: "(-11:00) Midway Island"
  },
  {
    "data-ianatimezone": "Pacific/Honolulu",
    value: "Hawaii",
    label: "(-10:00) Hawaii"
  },
  {
    "data-ianatimezone": "America/Juneau",
    value: "Alaska",
    label: "(-09:00) Alaska"
  },
  {
    "data-ianatimezone": "America/Los_Angeles",
    value: "Pacific Time (US & Canada)",
    label: "(-08:00) Pacific Time (US & Canada)"
  },
  {
    "data-ianatimezone": "America/Tijuana",
    value: "Tijuana",
    label: "(-08:00) Tijuana"
  },
  {
    "data-ianatimezone": "America/Phoenix",
    value: "Arizona",
    label: "(-07:00) Arizona"
  },
  {
    "data-ianatimezone": "America/Chihuahua",
    value: "Chihuahua",
    label: "(-07:00) Chihuahua"
  },
  {
    "data-ianatimezone": "America/Mazatlan",
    value: "Mazatlan",
    label: "(-07:00) Mazatlan"
  },
  {
    "data-ianatimezone": "America/Denver",
    value: "Mountain Time (US & Canada)",
    label: "(-07:00) Mountain Time (US & Canada)"
  },
  {
    "data-ianatimezone": "America/Guatemala",
    value: "Central America",
    label: "(-06:00) Central America"
  },
  {
    "data-ianatimezone": "America/Chicago",
    value: "Central Time (US & Canada)",
    label: "(-06:00) Central Time (US & Canada)"
  },
  {
    "data-ianatimezone": "America/Mexico_City",
    value: "Guadalajara",
    label: "(-06:00) Guadalajara"
  },
  {
    "data-ianatimezone": "America/Mexico_City",
    value: "Mexico City",
    label: "(-06:00) Mexico City"
  },
  {
    "data-ianatimezone": "America/Monterrey",
    value: "Monterrey",
    label: "(-06:00) Monterrey"
  },
  {
    "data-ianatimezone": "America/Regina",
    value: "Saskatchewan",
    label: "(-06:00) Saskatchewan"
  },
  {
    "data-ianatimezone": "America/Bogota",
    value: "Bogota",
    label: "(-05:00) Bogota"
  },
  {
    "data-ianatimezone": "America/New_York",
    value: "Eastern Time (US & Canada)",
    label: "(-05:00) Eastern Time (US & Canada)"
  },
  {
    "data-ianatimezone": "America/Indiana/Indianapolis",
    value: "Indiana (East)",
    label: "(-05:00) Indiana (East)"
  },
  {
    "data-ianatimezone": "America/Lima",
    value: "Lima",
    label: "(-05:00) Lima"
  },
  {
    "data-ianatimezone": "America/Lima",
    value: "Quito",
    label: "(-05:00) Quito"
  },
  {
    "data-ianatimezone": "America/Caracas",
    value: "Caracas",
    label: "(-04:30) Caracas"
  },
  {
    "data-ianatimezone": "America/Halifax",
    value: "Atlantic Time (Canada)",
    label: "(-04:00) Atlantic Time (Canada)"
  },
  {
    "data-ianatimezone": "America/Guyana",
    value: "Georgetown",
    label: "(-04:00) Georgetown"
  },
  {
    "data-ianatimezone": "America/La_Paz",
    value: "La Paz",
    label: "(-04:00) La Paz"
  },
  {
    "data-ianatimezone": "America/St_Johns",
    value: "Newfoundland",
    label: "(-03:30) Newfoundland"
  },
  {
    "data-ianatimezone": "America/Sao_Paulo",
    value: "Brasilia",
    label: "(-03:00) Brasilia"
  },
  {
    "data-ianatimezone": "America/Argentina/Buenos_Aires",
    value: "Buenos Aires",
    label: "(-03:00) Buenos Aires"
  },
  {
    "data-ianatimezone": "America/Godthab",
    value: "Greenland",
    label: "(-03:00) Greenland"
  },
  {
    "data-ianatimezone": "America/Montevideo",
    value: "Montevideo",
    label: "(-03:00) Montevideo"
  },
  {
    "data-ianatimezone": "America/Santiago",
    value: "Santiago",
    label: "(-03:00) Santiago"
  },
  {
    "data-ianatimezone": "Atlantic/South_Georgia",
    value: "Mid-Atlantic",
    label: "(-02:00) Mid-Atlantic"
  },
  {
    "data-ianatimezone": "Atlantic/Azores",
    value: "Azores",
    label: "(-01:00) Azores"
  },
  {
    "data-ianatimezone": "Atlantic/Cape_Verde",
    value: "Cape Verde Is.",
    label: "(-01:00) Cape Verde Is."
  },
  {
    "data-ianatimezone": "Africa/Casablanca",
    value: "Casablanca",
    label: "(+00:00) Casablanca"
  },
  {
    "data-ianatimezone": "Europe/Dublin",
    value: "Dublin",
    label: "(+00:00) Dublin"
  },
  {
    "data-ianatimezone": "Europe/London",
    value: "Edinburgh",
    label: "(+00:00) Edinburgh"
  },
  {
    "data-ianatimezone": "Europe/Lisbon",
    value: "Lisbon",
    label: "(+00:00) Lisbon"
  },
  {
    "data-ianatimezone": "Europe/London",
    value: "London",
    label: "(+00:00) London"
  },
  {
    "data-ianatimezone": "Africa/Monrovia",
    value: "Monrovia",
    label: "(+00:00) Monrovia"
  },
  { "data-ianatimezone": "Etc/UTC", value: "UTC", label: "(+00:00) UTC" },
  {
    "data-ianatimezone": "Europe/Amsterdam",
    value: "Amsterdam",
    label: "(+01:00) Amsterdam"
  },
  {
    "data-ianatimezone": "Europe/Belgrade",
    value: "Belgrade",
    label: "(+01:00) Belgrade"
  },
  {
    "data-ianatimezone": "Europe/Berlin",
    value: "Berlin",
    label: "(+01:00) Berlin"
  },
  {
    "data-ianatimezone": "Europe/Berlin",
    value: "Bern",
    label: "(+01:00) Bern"
  },
  {
    "data-ianatimezone": "Europe/Bratislava",
    value: "Bratislava",
    label: "(+01:00) Bratislava"
  },
  {
    "data-ianatimezone": "Europe/Brussels",
    value: "Brussels",
    label: "(+01:00) Brussels"
  },
  {
    "data-ianatimezone": "Europe/Budapest",
    value: "Budapest",
    label: "(+01:00) Budapest"
  },
  {
    "data-ianatimezone": "Europe/Copenhagen",
    value: "Copenhagen",
    label: "(+01:00) Copenhagen"
  },
  {
    "data-ianatimezone": "Europe/Ljubljana",
    value: "Ljubljana",
    label: "(+01:00) Ljubljana"
  },
  {
    "data-ianatimezone": "Europe/Madrid",
    value: "Madrid",
    label: "(+01:00) Madrid"
  },
  {
    "data-ianatimezone": "Europe/Paris",
    value: "Paris",
    label: "(+01:00) Paris"
  },
  {
    "data-ianatimezone": "Europe/Prague",
    value: "Prague",
    label: "(+01:00) Prague"
  },
  { "data-ianatimezone": "Europe/Rome", value: "Rome", label: "(+01:00) Rome" },
  {
    "data-ianatimezone": "Europe/Sarajevo",
    value: "Sarajevo",
    label: "(+01:00) Sarajevo"
  },
  {
    "data-ianatimezone": "Europe/Skopje",
    value: "Skopje",
    label: "(+01:00) Skopje"
  },
  {
    "data-ianatimezone": "Europe/Stockholm",
    value: "Stockholm",
    label: "(+01:00) Stockholm"
  },
  {
    "data-ianatimezone": "Europe/Vienna",
    value: "Vienna",
    label: "(+01:00) Vienna"
  },
  {
    "data-ianatimezone": "Europe/Warsaw",
    value: "Warsaw",
    label: "(+01:00) Warsaw"
  },
  {
    "data-ianatimezone": "Africa/Algiers",
    value: "West Central Africa",
    label: "(+01:00) West Central Africa"
  },
  {
    "data-ianatimezone": "Europe/Zagreb",
    value: "Zagreb",
    label: "(+01:00) Zagreb"
  },
  {
    "data-ianatimezone": "Europe/Athens",
    value: "Athens",
    label: "(+02:00) Athens"
  },
  {
    "data-ianatimezone": "Europe/Bucharest",
    value: "Bucharest",
    label: "(+02:00) Bucharest"
  },
  {
    "data-ianatimezone": "Africa/Cairo",
    value: "Cairo",
    label: "(+02:00) Cairo"
  },
  {
    "data-ianatimezone": "Africa/Harare",
    value: "Harare",
    label: "(+02:00) Harare"
  },
  {
    "data-ianatimezone": "Europe/Helsinki",
    value: "Helsinki",
    label: "(+02:00) Helsinki"
  },
  {
    "data-ianatimezone": "Europe/Istanbul",
    value: "Istanbul",
    label: "(+02:00) Istanbul"
  },
  {
    "data-ianatimezone": "Asia/Jerusalem",
    value: "Jerusalem",
    label: "(+02:00) Jerusalem"
  },
  {
    "data-ianatimezone": "Europe/Kaliningrad",
    value: "Kaliningrad",
    label: "(+02:00) Kaliningrad"
  },
  { "data-ianatimezone": "Europe/Kiev", value: "Kyiv", label: "(+02:00) Kyiv" },
  {
    "data-ianatimezone": "Africa/Johannesburg",
    value: "Pretoria",
    label: "(+02:00) Pretoria"
  },
  { "data-ianatimezone": "Europe/Riga", value: "Riga", label: "(+02:00) Riga" },
  {
    "data-ianatimezone": "Europe/Sofia",
    value: "Sofia",
    label: "(+02:00) Sofia"
  },
  {
    "data-ianatimezone": "Europe/Tallinn",
    value: "Tallinn",
    label: "(+02:00) Tallinn"
  },
  {
    "data-ianatimezone": "Europe/Vilnius",
    value: "Vilnius",
    label: "(+02:00) Vilnius"
  },
  {
    "data-ianatimezone": "Asia/Baghdad",
    value: "Baghdad",
    label: "(+03:00) Baghdad"
  },
  {
    "data-ianatimezone": "Asia/Kuwait",
    value: "Kuwait",
    label: "(+03:00) Kuwait"
  },
  {
    "data-ianatimezone": "Europe/Minsk",
    value: "Minsk",
    label: "(+03:00) Minsk"
  },
  {
    "data-ianatimezone": "Europe/Moscow",
    value: "Moscow",
    label: "(+03:00) Moscow"
  },
  {
    "data-ianatimezone": "Africa/Nairobi",
    value: "Nairobi",
    label: "(+03:00) Nairobi"
  },
  {
    "data-ianatimezone": "Asia/Riyadh",
    value: "Riyadh",
    label: "(+03:00) Riyadh"
  },
  {
    "data-ianatimezone": "Europe/Moscow",
    value: "St. Petersburg",
    label: "(+03:00) St. Petersburg"
  },
  {
    "data-ianatimezone": "Europe/Volgograd",
    value: "Volgograd",
    label: "(+03:00) Volgograd"
  },
  {
    "data-ianatimezone": "Asia/Tehran",
    value: "Tehran",
    label: "(+03:30) Tehran"
  },
  {
    "data-ianatimezone": "Asia/Muscat",
    value: "Abu Dhabi",
    label: "(+04:00) Abu Dhabi"
  },
  { "data-ianatimezone": "Asia/Baku", value: "Baku", label: "(+04:00) Baku" },
  {
    "data-ianatimezone": "Asia/Muscat",
    value: "Muscat",
    label: "+04:00) Muscat"
  },
  {
    "data-ianatimezone": "Europe/Samara",
    value: "Samara",
    label: "(+04:00) Samara"
  },
  {
    "data-ianatimezone": "Asia/Tbilisi",
    value: "Tbilisi",
    label: "(+04:00) Tbilisi"
  },
  {
    "data-ianatimezone": "Asia/Yerevan",
    value: "Yerevan",
    label: "(+04:00) Yerevan"
  },
  {
    "data-ianatimezone": "Asia/Kabul",
    value: "Kabul",
    label: "(+04:30) Kabul"
  },
  {
    "data-ianatimezone": "Asia/Yekaterinburg",
    value: "Ekaterinburg",
    label: "(+05:00) Ekaterinburg"
  },
  {
    "data-ianatimezone": "Asia/Karachi",
    value: "Islamabad",
    label: "(+05:00) Islamabad"
  },
  {
    "data-ianatimezone": "Asia/Karachi",
    value: "Karachi",
    label: "(+05:00) Karachi"
  },
  {
    "data-ianatimezone": "Asia/Tashkent",
    value: "Tashkent",
    label: "(+05:00) Tashkent"
  },
  {
    "data-ianatimezone": "Asia/Kolkata",
    value: "Chennai",
    label: "(+05:30) Chennai"
  },
  {
    "data-ianatimezone": "Asia/Kolkata",
    value: "Kolkata",
    label: "(+05:30) Kolkata"
  },
  {
    "data-ianatimezone": "Asia/Kolkata",
    value: "Mumbai",
    label: "(+05:30) Mumbai"
  },
  {
    "data-ianatimezone": "Asia/Kolkata",
    value: "New Delhi",
    label: "(+05:30) New Delhi"
  },
  {
    "data-ianatimezone": "Asia/Colombo",
    value: "Sri Jayawardenepura",
    label: "(+05:30) Sri Jayawardenepura"
  },
  {
    "data-ianatimezone": "Asia/Kathmandu",
    value: "Kathmandu",
    label: "(+05:45) Kathmandu"
  },
  {
    "data-ianatimezone": "Asia/Almaty",
    value: "Almaty",
    label: "(+06:00) Almaty"
  },
  {
    "data-ianatimezone": "Asia/Dhaka",
    value: "Astana",
    label: "(+06:00) Astana"
  },
  {
    "data-ianatimezone": "Asia/Dhaka",
    value: "Dhaka",
    label: "(+06:00) Dhaka"
  },
  {
    "data-ianatimezone": "Asia/Novosibirsk",
    value: "Novosibirsk",
    label: "(+06:00) Novosibirsk"
  },
  {
    "data-ianatimezone": "Asia/Urumqi",
    value: "Urumqi",
    label: "(+06:00) Urumqi"
  },
  {
    "data-ianatimezone": "Asia/Rangoon",
    value: "Rangoon",
    label: "(+06:30) Rangoon"
  },
  {
    "data-ianatimezone": "Asia/Bangkok",
    value: "Bangkok",
    label: "(+07:00) Bangkok"
  },
  {
    "data-ianatimezone": "Asia/Bangkok",
    value: "Hanoi",
    label: "(+07:00) Hanoi"
  },
  {
    "data-ianatimezone": "Asia/Jakarta",
    value: "Jakarta",
    label: "(+07:00) Jakarta"
  },
  {
    "data-ianatimezone": "Asia/Krasnoyarsk",
    value: "Krasnoyarsk",
    label: "(+07:00) Krasnoyarsk"
  },
  {
    "data-ianatimezone": "Asia/Shanghai",
    value: "Beijing",
    label: "(+08:00) Beijing"
  },
  {
    "data-ianatimezone": "Asia/Chongqing",
    value: "Chongqing",
    label: "(+08:00) Chongqing"
  },
  {
    "data-ianatimezone": "Asia/Hong_Kong",
    value: "Hong Kong",
    label: "(+08:00) Hong Kong"
  },
  {
    "data-ianatimezone": "Asia/Irkutsk",
    value: "Irkutsk",
    label: "(+08:00) Irkutsk"
  },
  {
    "data-ianatimezone": "Asia/Kuala_Lumpur",
    value: "Kuala Lumpur",
    label: "(+08:00) Kuala Lumpur"
  },
  {
    "data-ianatimezone": "Australia/Perth",
    value: "Perth",
    label: "(+08:00) Perth"
  },
  {
    "data-ianatimezone": "Asia/Singapore",
    value: "Singapore",
    label: "(+08:00) Singapore"
  },
  {
    "data-ianatimezone": "Asia/Taipei",
    value: "Taipei",
    label: "(+08:00) Taipei"
  },
  {
    "data-ianatimezone": "Asia/Ulaanbaatar",
    value: "Ulaanbaatar",
    label: "(+08:00) Ulaanbaatar"
  },
  {
    "data-ianatimezone": "Asia/Tokyo",
    value: "Osaka",
    label: "(+09:00) Osaka"
  },
  {
    "data-ianatimezone": "Asia/Tokyo",
    value: "Sapporo",
    label: "(+09:00) Sapporo"
  },
  {
    "data-ianatimezone": "Asia/Seoul",
    value: "Seoul",
    label: "(+09:00) Seoul"
  },
  {
    "data-ianatimezone": "Asia/Tokyo",
    value: "Tokyo",
    label: "(+09:00) Tokyo"
  },
  {
    "data-ianatimezone": "Asia/Yakutsk",
    value: "Yakutsk",
    label: "(+09:00) Yakutsk"
  },
  {
    "data-ianatimezone": "Australia/Adelaide",
    value: "Adelaide",
    label: "(+09:30) Adelaide"
  },
  {
    "data-ianatimezone": "Australia/Darwin",
    value: "Darwin",
    label: "(+09:30) Darwin"
  },
  {
    "data-ianatimezone": "Australia/Brisbane",
    value: "Brisbane",
    label: "(+10:00) Brisbane"
  },
  {
    "data-ianatimezone": "Australia/Melbourne",
    value: "Canberra",
    label: "(+10:00) Canberra"
  },
  {
    "data-ianatimezone": "Pacific/Guam",
    value: "Guam",
    label: "(+10:00) Guam"
  },
  {
    "data-ianatimezone": "Australia/Hobart",
    value: "Hobart",
    label: "(+10:00) Hobart"
  },
  {
    "data-ianatimezone": "Asia/Magadan",
    value: "Magadan",
    label: "(+10:00) Magadan"
  },
  {
    "data-ianatimezone": "Australia/Melbourne",
    value: "Melbourne",
    label: "(+10:00) Melbourne"
  },
  {
    "data-ianatimezone": "Pacific/Port_Moresby",
    value: "Port Moresby",
    label: "(+10:00) Port Moresby"
  },
  {
    "data-ianatimezone": "Australia/Sydney",
    value: "Sydney",
    label: "(+10:00) Sydney"
  },
  {
    "data-ianatimezone": "Asia/Vladivostok",
    value: "Vladivostok",
    label: "(+10:00) Vladivostok"
  },
  {
    "data-ianatimezone": "Pacific/Noumea",
    value: "New Caledonia",
    label: "(+11:00) New Caledonia"
  },
  {
    "data-ianatimezone": "Pacific/Guadalcanal",
    value: "Solomon Is.",
    label: "(+11:00) Solomon Is."
  },
  {
    "data-ianatimezone": "Asia/Srednekolymsk",
    value: "Srednekolymsk",
    label: "(+11:00) Srednekolymsk"
  },
  {
    "data-ianatimezone": "Pacific/Auckland",
    value: "Auckland",
    label: "(+12:00) Auckland"
  },
  {
    "data-ianatimezone": "Pacific/Fiji",
    value: "Fiji",
    label: "(+12:00) Fiji"
  },
  {
    "data-ianatimezone": "Asia/Kamchatka",
    value: "Kamchatka",
    label: "(+12:00) Kamchatka"
  },
  {
    "data-ianatimezone": "Pacific/Majuro",
    value: "Marshall Is.",
    label: "(+12:00) Marshall Is."
  },
  {
    "data-ianatimezone": "Pacific/Auckland",
    value: "Wellington",
    label: "(+12:00) Wellington"
  },
  {
    "data-ianatimezone": "Pacific/Chatham",
    value: "Chatham Is.",
    label: "(+12:45) Chatham Is."
  },
  {
    "data-ianatimezone": "Pacific/Tongatapu",
    value: "Nuku'alofa",
    label: "(+13:00) Nuku'alofa"
  },
  {
    "data-ianatimezone": "Pacific / Apia",
    value: "Samoa",
    label: "(+13: 00) Samoa"
  },
  {
    "data-ianatimezone": "Pacific / Fakaofo",
    value: "Tokelau Is.",
    label: "(+13: 00) Tokelau Is."
  }
];

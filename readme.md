Cypress automation for difficult scenarios.

npx cypress open

npx cypress run

Uruchomienie Konkretnego Pliku Testowego:
npx cypress run --spec "cypress/integration/nazwa_pliku_testowego.js"

Uruchomienie Testów z Określoną Przeglądarką:
npx cypress run --browser chrome

Uruchomienie Testów z Konfiguracją:

npx cypress run --config baseUrl=http://localhost:8080
W tym przypadku, baseUrl zostanie ustawione na http://localhost:8080.

=========

SCENARIOS TO DO:
11 scenariuszy zostalo
bankowy website cypress

Time spent:
As a user I want to add and remove elements - add assertion, delete elements === 4h - with setup of project
basic auth ==== ?? 45m 24 sierpnia start. Not doable atm.
inne testy, np drodpwn dynamic, dragn drop ~2h
po 30m sie pisze test moze 20

Failure:
frames nested
iframes
file download with plugin
file upload

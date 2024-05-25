# DT207G Backend-baserad webbutveckling, webbtjänst för projektuppgift
Detta repo innehåller koden för min lösning av en del av projektuppgiften till kurser dt207G backend-baserad webbutveckling. 
Koden är till en webbtjänst som används för att hantera data för en restaurangs webbplats.
 
## Databaskoppling
Webbtjänsten är kopplad till en MongoDB databas där all data lagras. 

## Scheman är skapade för:
* Användare - dessert
* Bokningar - booking
* Öl-meny - beer
* Vin-meny - wine
* Alkoholfritt-meny - nonalcoholic
* Förrätter - starter
* Huvudrätter - maincourse
* Desserter - dessert

## Routes är skapade för 
- /public för publikt ändamål där vem som helt kan komma åt den data som är lagrad.
- /auth för att skapa användare samt logga in användare. 
- /protected skyddad route för hantering av data som endast ska kommas åt av inloggad personal.


## Användning
Hur API:et används för olika ändamål:
Nedan är exempel på hur det kan användas för starter (förrätter)

|Metod  |Ändpunkt     |Beskrivning                                                                           |
|-------|-------------|--------------------------------------------------------------------------------------|
|POST    |/protected/starter     |För att lägga till en ny förrätt.                                             |
|PUT    |/protected/starter/:id |För att ändra en specifik förrätt baserat på dess id.                                    |
|GET     |/public/starter | För att hämta förrätter.            |
|DELETE     |/protected/starter/:id | För att ta bort en specifik förrätt baserat på dess id.            |

## Länk till webbtjänst
Länk till publicerad webbtjänst finns här: [Länk](https://project-webbtjanst.onrender.com/public/starter)


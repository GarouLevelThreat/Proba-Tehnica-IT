# Proba-Tehnica-IT

Salut!
Voi explica putin ce am facut, ce merge si ce nu



++++ Ce am folosit? ++++



--> Pe front am folosit React si plain CSS. Nu am invatat inca cum sa folosesc routing, deci a trebuit sa folosesc multe prop uri => cod cam aglomerat, sorry

--> Pentru backend am folosit Node.js, MongoDB, Express, Mongoose



++++ Ce merge? ++++

In pagina principala se afla by default 4 poll-uri. La selectarea uneia dintre optiuni, apare butonul "Vote". Daca este apasat, dispare, iar optiunea nu poate fi modificata. (pana la refresh / iesirea din pagina).

Pentru a sterge un poll, userul trebuie sa se logheze. La apasarea butoanele din navbar (mai putin "Logout"), va aparea un form, iar tot ce se afla in background devin neinteractiv. In plus, textul din background si imaginea dispar, la fel si Footer ul. Acestea revin cand se iese din form.Login-ul si Register-ul au implementate verificari, dar care functioneaza partial (regexul nu e interpretat cum trebuie de JS). Pentru Register, se verifica daca mai exista un utilizator cu email ul introdus. Daca nu, este adaugat in baza de date. Pentru Login, se verifica acelasi lucru, iar in caz afirmativ, user ul devine logat. (am folosit un token, cu o variabila de state si localStorage pentru partea asta.) Odata logat, butoanele din navbar devin Create Poll si Logout.

Form ul de Creat Poll permite utilizatorului sa adauge sau sa stearga optiuni si sa aleaga metoda de voting (single / multiple choice). Odata creat poll ul, pagina isi da refresh (utilizatorul ramane logat) iar poll urile sunt actualizate pe pagina principala. (similar cand este sters un poll).

La apasarea butonului de Logout, butoanele redevin Login si Register iar user ul nu mai este logat.

Aplicatia este responsive.
--> Butoanele din navbar devin un hamburger menu --> Poll-urile isi schimba dimensiunile
--> Marimea textului se schimba, etc

++++ Ce nu merge? ++++

Pe partea de frontend, nu am reusit sa implementez multiple choice (nu poti alege mai multe optiuni, desi in baza de date este inregistrata corect optiunea pentru multiple choice) - votingOption: "0" pt single choice, "1" pt multiple choice.

Votul nu este retinut la refresh / iesirea din pagina si nici numarat (practic, partea de backend).

Exista un bug (cred), in care la prima apasare a butonului de Add Option din form ul de Creat Poll, pagina isi da refresh. Nu stiu de ce, dar nu ar trebui sa se intample decat prima data (sau deloc, idk)

Regexul da rateuri

Nu stiu sa folosesc routing momentan, asa ca am folosit multe props uri. Nici nu am lucrat foarte organizat, din nefericire.

Cam atat (probleme sigur mai sunt, imi scapa momentan =)

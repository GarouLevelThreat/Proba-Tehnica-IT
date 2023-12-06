# Proba-Tehnica-IT

Cateva chestii ca sa intelegeti cat de cat ce am incercat sa fac (si nu mi-a iesit)

1. regex-ul de la login/register (pt validari) nu e recunoscut de JS. (pe regexr.com merge si da, am incercat si escaparea caracterelor unde era nevoie)

2. votingOption (din form ul pt crearea de poll) este:
  - 0 pt single choice
  - 1 pt multiple choice
Nu am reusit sa implementez partea cu multiple choice, dar in baza de date optiunea e inregistrata corect

3. Butonul de vote doar imi afiseaza in consola "voted" si, odata apasat, dispare

4. butonul de delete nu functioneaza, pentru ca nu am reusit sa obtin _id generat de baza de date corespunzator fiecarui poll (pe care mai departe il pasam butonului de delete)

5. Am incercat sa ma ocup si de autentificare (userul sa ramana logat si dupa ce paraseste pagina). Am folosit un token, localStorage, o variabila de stare si o cerere get prin care sa schimb starea variabilei respective in functie de existenta token ului. Status 500...
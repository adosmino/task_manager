# task_manager
Menedżer zadań, który umożliwia dodawanie, organizowanie i śledzenie zadań.


**Task Manager**  
Prosta aplikacja webowa do zarządzania zadaniami, pomagająca w organizacji codziennych obowiązków.  


**Opis projektu**  
Task Manager to narzędzie do efektywnego planowania i śledzenia postępów w realizacji zadań. Aplikacja pozwala na dodawanie, sortowanie i oznaczanie zadań jako ukończone. Automatycznie kategoryzuje zadania na *do wykonania*, *zaległe* i *zrealizowane*, a także informuje użytkownika o zadaniach na dziś oraz przeterminowanych obowiązkach.  


**Technologie**  
- **Frontend**: Angular, TypeScript  
- **Styling**: HTML, CSS  
- **Zarządzanie stanem**: Angular Services  
- **Data handling**: LocalStorage  


**Wymagania**  
- Node.js 18+  
- Angular CLI 16+  
- Przeglądarka obsługująca ES6+  


**Instalacja i uruchomienie**  
Aby uruchomić aplikację lokalnie, wykonaj następujące kroki:  
---
git clone https://github.com/adosmino/task-manager.git
cd task-manager
npm install
ng serve
---
Aplikacja będzie dostępna pod adresem `http://localhost:4200/`.  


**Konfiguracja**  
Nie wymaga specjalnej konfiguracji – wszystkie dane są przechowywane lokalnie w LocalStorage.  


**Deployment**  
Aplikację można wdrożyć:
---
ng build --prod
---


**Autorzy**  
- Adam Knul (https://github.com/adosmino)  

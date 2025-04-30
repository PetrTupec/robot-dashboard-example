# Robot Dashboard
 
Modernizace existujícího dashboardu pro sledování stavu robotů pomocí Reactu a Bootstrapu, zaměřená na zlepšení čitelnosti, použitelnosti a efektivity práce obsluhy v reálném čase.

## O projektu

Projekt vznikl jako návrh na možné vylepšení existující aplikace. Konkrétně se zaměřuje na část **Dashboard**, která zobrazuje real-time data z robotizovaných pracovišť. Tato část je určena hlavně pro členy obsluhy a umožňuje sledovat průběh výroby a rychle reagovat na případné změny nebo poruchy z jednoho místa.

Moje řešení modernizuje původní aplikaci, která byla vytvořená pomocí **JavaScript**, **CSS** a **HTML**.

### Motivace projektu

Cílem bylo přinést moderní a efektivnější řešení využitím technologií **React** a **Bootstrap**, a tím zlepšit použitelnost a čitelnost aplikace. Vylepšení zahrnují:

**Vylepšení zobrazení:**
- Zavedení přepínání světlého a tmavého režimu pro snazší sledování při dlouhodobé práci.
- Výraznější vizualizace chybových stavů pro okamžité upoutání pozornosti obsluhy.
- Responsivní design pro pohodlné použití na mobilních zařízeních.

**Přidaná funkcionalita:**
- Využití dat o chybách, která původní aplikace ignorovala.
- Vytvoření vlastní databáze chyb podle dokumentace robotů.
- Zobrazení rozšířených informací o chybách (popis, příčina, návrh řešní) – pracovníci mohou lépe odhadnout potřebný zásah (časová náročnost, nástroje, potřebná kvalifikace).

Díky těmto vylepšením je aplikace silným nástrojem, který šetří čas při řešení vzniklých komplikací a zvyšuje efektivitu provozu.

## Funkcionalita

- Zobrazení real-time stavu všech robotů.
- Zvýraznění robotů, které se nachází v chybovém stavu.
- Přepínání mezi světlým a tmavým režimem aplikace.
- Responzivní rozvržení přizpůsobené pro různá zařízení (desktop, tablet, mobil).
- Zobrazení rozšířených informací o chybách robotů na základě vlastní databáze.
- Pro účely prezentace jsou přidány funkce pro změnu počtu robotů a pozastavení simulace stavu robotů.

## Použité technologie

### Client

- JavaScript
- React
- React Router
- HTML/CSS
- Bootstrap

### Simulace API
	
- Mockování HTTP požadavků pomocí **Mock Service Worker (MSW)**.
- Simulace real-time stavu robotů s náhodným přiřazováním chyb.
- Vlastní generátor dat propojený přes `fetch` pro věrné napodobení chování API.

## Ukázna UI

#### Vylepšené zobrazení

![Vylepšený dashboard](images/new_view.png)

#### Původní zobrazení

![Detail chyby](images/error_detail.png)

#### Vylepšené zobrazení detail chyby

![Seznam faktur](images/old_view.png)

## Online demo

Původní vzhled stránky jsem naprogramoval od základu bez použití původních kódů nebo stylování. Vzhled se mírně liší a jsou zobrazeny pouze části, které dávají smysl v rámci prezentace. Vynechal jsem například původní menu, loga a další prvky.

Pro účely prezentace je použit soubor s vybranými příklady chyb v pozměněném znění.  
Stav robotů je pouze simulován a neodpovídá skutečné chybovosti.  
Chyby jsou náhodně vybírány a přiřazovány náhodným robotům v různých časových intervalech.

Projekt je nasazený na Netlify:  
[Otevřít aplikaci](https://robot-dashboard-example.netlify.app/dashboard)

## Lokální spuštění

Aplikaci lze spustit v několika režimech podle účelu (vývoj, prezentace, produkce). Chování se řídí proměnnou `REACT_APP_API_MODE` v odpovídajících `.env` souborech.

### Dostupné režimy

| Režim           | Proměnná                      | Popis                                                                 |
|-----------------|-------------------------------|-----------------------------------------------------------------------|
| Vývoj           | `REACT_APP_API_MODE=msw`      | Používá [Mock Service Worker](https://mswjs.io/) pro simulaci API.    |
| Prezentace      | `REACT_APP_API_MODE=fakeData` | Nepoužívá MSW, data se načítají z lokálních zdrojů (fake data).       |
| Produkce        | `REACT_APP_API_MODE=server`   | Připojení k reálnému backendu.                                        |

1. Naklonování repozitáře:
```bash
   git clone https://github.com/PetrTupec/robot-dashboard-example.git
```
2. Přepnutí do složky projektu:
```bash
   cd robot-dashboard-example
```
3. Nainstalování závislostí:
```bash 
    npm install
```
4. Spuštění:
```bash 
	npm start                  # Vývojový režim s Mock Service Workerem
    npm run start:presentation # Režim s fake daty (bez MSW)
    npm run start:production   # Režim s voláním reálného backendu
```

Po spuštění bude aplikace dostupná:

- Frontend: http://localhost:3000

## Důležitá upozornění

Tento projekt napodobuje funkcionalitu jiné aplikace, avšak je **plně naprogramován od začátku**.
- **Vzhled** a **API odpovědi** se od původní aplikace **liší** a neodpovídají jí.  
- Nebyly použity žádné části původního kódu ani struktura API odpovědí.
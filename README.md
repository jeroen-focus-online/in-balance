# Be in Balance — website

Statische website voor **Be in Balance** (Eline Stals) — TCM-voedingsadvies en stofwisselingstypes.
Opzet en structuur geïnspireerd op juttakoehler.nl; alle teksten zijn origineel geschreven voor Be in Balance.
Gekoppeld aan de zusteronderneming **Elixx** (elixx.nl).

## Huisstijl
- Primaire kleur: `#B34E2A`
- Achtergrond: `#FAF7F2`

## Structuur
```
index.html            Home – Chinese voedingsleer & stofwisselingstypes
advies-voor-jou.html  Aanbod en begeleiding
academie.html         Workshops & bijscholingen
nieuws.html           Artikelen & recepten
shop.html             Producten + koppeling met Elixx
over-eline.html       Persoonlijk verhaal van Eline
contact.html          Contactformulier & gegevens
css/style.css         Huisstijl
CNAME                 Custom domein (be-in-balance.nl)
```

## Nog in te vullen
Op alle pagina's staan `[PLACEHOLDERS]` — o.a. persoonlijk verhaal, contactgegevens,
KvK/BTW, prijzen en reviews. Afbeeldingen zijn placeholders (`.img-ph`); vervang
deze door echte foto's (`<img src="...">`).

## Live zetten via GitHub + Cloudflare Pages
1. Maak een nieuwe repository op GitHub en push de inhoud van deze map:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<gebruiker>/be-in-balance.git
   git push -u origin main
   ```
2. Ga in Cloudflare naar **Workers & Pages → Create → Pages → Connect to Git**.
3. Kies de repository. Build command: *leeg laten*. Build output directory: `/` (root).
4. Na de eerste deploy: **Custom domains → Set up a custom domain → be-in-balance.nl**.
   Cloudflare regelt DNS en SSL. Het `CNAME`-bestand is voor GitHub Pages; bij
   Cloudflare Pages stel je het domein in de dashboard in (CNAME-bestand mag blijven staan).

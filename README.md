# generator-zorida-landing
> A simple way to init the environment of a landing page

## Descrizione

Questo è un generatore elementare di assets, realizzato con Yeoman generator-generator, per singole pagine web che provvede a integrare un task automatico di *Grunt* (per compilare i file JS e SCSS), *Bootstrap* e *JQuery*. Sebbene non sia obbligatorio d’uso del linguaggio Sass, il template è predisposto per consentire di usare anche la versione Sass di Bootstrap (fare riferimento al file `scss/main.scss` per l’integrazione delle singole componenti di Bootstrap)

## Requisiti

- Node.Js environment v.12+ (controlla da terminale con `node -v`)
- Una pigrizia simile alla mia :-) 

### È utile anche avere:

- *Composer* installato globalmente
- *grunt-cli* come modulo node installato globalmente `[sudo] npm i -g grunt-cli`

## Installazione

### Metodo 1

```bash
npm install -g yo
```

Scarica il generatore dalla repository in una cartella. In quella stessa cartella, installa i moduli node, poi crea un link globale, per utilizzare questo generatore da terminale, digitando:

```bash
npm install
npm link
```

Quindi, entra nella cartella (vuota, di preferenza) dove vuoi creare la tua landing page e inserisci:

```bash
yo zorida-landing
```

Un breve wizard da terminale ti chiede di impostare alcuni parametri. Al momento è possibile solo:

- Scegliere il nome del progetto, la sua descrizione
- Scegliere il nome della cartella degli *assets* (che è anche il nome di default) e quello delle *views* (quest’ultimo sarà usato solo nel caso di template twig)
- Optare per una pagina: 
- - *html*, digitando invece `yo zorida-landing --nophp` oppure: 
  - *php* (soluzione di default), o infine 
  - *php* con l’installazione di *twig*, rispondendo `y` nel wizard alla domanda rispettiva (Nota: quest’ultima opzione richiede che tu abbia *Composer* e *Php* installati sul tuo computer. In questo caso, il generatore installerà le dipendenze per te. Se non è così, puoi comunque installare twig in un secondo momento nella root del tuo progetto)

Al momento, il file principale compilato dello stile sarà chiamato `main.css`. Per cambiare questo, è sufficiente modificare il Gruntfile.js del tuo progetto, specificando nella destinazione un nome file diverso. Per avviare il grunt task, digitare semplimente `grunt` da terminale nella root del progetto.

### Metodo 2 (NB: non implementato)

First, install [Yeoman](http://yeoman.io) and generator-zorida-landing using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-zorida-landing
```

Then generate your new project:

```bash
yo zorida-landing
```

## Troubleshooting

Al momento non sono noti problemi specifici relativi al generatore. Tuttavia, con il metodo 1, la cache di *npm* potrebbe interferire con il processo di avvio del generatore dando in output errori di tipo ENOENT. In questo caso provare a risolvere prima digitando `npm cache verify`, quindi in caso di ulteriore occorrenza del problema, `npm cache clean --force`. Dalla versione 5 *npm* è dotato di auto-riparazione della cache.

Il generatore è stato testato con Windows 10 Pro build 19042.985 e **Node versione 12.14**.

## Getting To Know Yeoman

 * Yeoman has a heart of gold.
 * Yeoman is a person with feelings and opinions, but is very easy to work with.
 * Yeoman can be too opinionated at times but is easily convinced not to be.
 * Feel free to [learn more about Yeoman](http://yeoman.io/).

## License

MIT © [zorida &lt;dario.rizzo@gmx.com&gt;]


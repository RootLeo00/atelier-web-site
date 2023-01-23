/**These are necessary imports / components for the page */
import { ImageSize, TextAlign, ListType } from "../../src/shared/enums";
import { PageLayout, Text, List, Image, LinkTo, Seperator, Slider } from "../../src/components";
import CodeBlock from "../../src/components/CodeBlock";
import { AuthorSetup, NavbarSetup, NavbarSetupType, NavbarSetup_NAVLINKS, NavbarSetup_Socials } from "../../src/constants/codeBlocks";
import fs from 'fs';
import path from 'path'

const Siberia = ({ filenames }: { filenames: string[] }) => {
  return (
    <PageLayout home>
      <div className='container px-3 pb-[20px] md:mt-[50px] pt-20 md:pt-0'>
        <Text title className="text-3xl">
          Almanacco inverno-primavera
        </Text>
        <hr className="mt-5" />
        <Text className="mt-10">
          Giovedì 13 dicembre, alle ore 18.00,
          presso la sala Degan della Biblioteca Civica di Pordenone
          l’Atelier di lettura, presenta al pubblico
        </Text>
        <Text subtitle> Il calendario di Frate Indovino </Text>
        <Text className="mt-10">
          Almanacco è voce araba (al-manakh) e significa calendario e il nostro è, infatti, cadenzato in due stagioni, l’inverno e la primavera, scandite per singola giornata, dal 21 dicembre al 20 giugno.

          Il calendario di Frate Indovino che porta in sé struttura e caratteristiche dell'almanacco, fa tornare alla mente le cucine delle nostre case contadine del secondo dopoguerra. Bene in vista, appeso al muro, i vari componenti della famiglia lo consultavano per conoscere il santo del giorno, le fasi lunari, i consigli per gli agricoltori e per le massaie o per riflettere sui proverbi e sui messaggi del frate francescano.

          Fu padre Mariangelo da Cerqueto, Mario Budelli da laico, a ricevere l'incarico di comporlo nel 1945, quando, per ragioni di salute, il frate era diventato inabile a qualsiasi altra attività prevista dal suo ordine e, in qualche modo, doveva essere operativo. In pochi anni il calendario raggiunse una notorietà popolare tale che, dalle 2000 copie della prima stampa fatte circolare in Umbria e nelle province più vicine delle regioni limitrofe, nel 1952 raggiunse le 200 000 diffondendosi anche nell' Italia del nord.

          Aveva avuto una battuta d'arresto nel 1950 perché erano sorti degli impedimenti dai vertici della congregazione che vedevano, nel termine “indovino”, l’equivalente di mago. Cambiando la dicitura con “Pronostici di Frate Indovino”, fu risolta la questione in tempo per la nuova pubblicazione dell’anno successivo.
          Frate Mariangelo adattò negli anni l'almanacco alle modifiche della società e e arricchì il calendario di nuove rubriche, di curiosità, di previsioni sul futuro. Vi si potevano leggere messaggi ai giovani su: pace, ecologia della natura, ecologia del cuore. Non vi si dimenticavano i consigli per le massaie che opportunamente diventarono i consigli per le donne.

          Dal 2002, anno della morte del frate, un confratello, padre Mario Collarini, continua la sua opera con lo stesso impegno del predecessore; il calendario gode di ottima salute e 6 milioni di copie vengono diffuse capillarmente ogni anno grazie alle Poste italiane e a 45.000 volontari simpatizzanti.

          Per l'Atelier di lettura
          Anna Ciuffreda
        </Text>
        <Image className="mt-3" src="/public/imp_assets/meetings/frate-indovino.png" alt="frate-indovino-image" size={ImageSize.SMALL} />
        <Text subtitle>Strolic Furlan</Text>
        <Text className="mt-10">
          

          Come da tradizione il 25 novembre di ogni anno, in occasione della ricorrenza di Santa Caterina di Alessandria, viene presentata la nuova edizione per l’anno in corso dello Strolic Furlan “L’Astrologo friulano”, ma anche “Lunario” o meglio ancora “Almanacco”.

          L’avvio della pubblicazione risale al 1920 da parte della Società Filologica Friulana e si inserisce nella ricca tradizione letteraria degli almanacchi friulani dell’Ottocento.

          Un autore, ogni anno diverso, cura e raccoglie i testi scritti a più mani intorno ad un argomento che ricorre ed è approfondito in ogni mese dell’anno, ad esempio la musica attraverso i cantautori o i gruppi musicali della regione, l’astronomia attraverso gli osservatori astronomici e i gruppi astrofili o la scuola attraverso la storia di prestigiosi istituti scolastici, sempre della regione.

          Lo Strolic in modo brioso e vario traccia gli “auspici” per l’anno successivo con aneddoti, riflessioni e racconti tratti dalla quotidianità, poesie e brevi ritratti di personaggi, ma anche proverbi e massime, rimedi popolari di cura, mestieri di un tempo, eventi storici epocali, ma anche curiosità, dialoghi impossibili, satire, barzellette e altro ancora.

          I testi sono scritti in friulano offrendo spazio alle tante varianti della regione, dal Friuli orientale a quello occidentale, dalla Carnia al mare e dando espressione alla lingua usata oggi che racconta la vita e la storia di un popolo.
          Anche le illustrazioni sulle copertine o all’interno del testo, i disegni e le fotografie hanno un posto rilevante nel rendere più accattivante e piacevole la lettura e nel coinvolgere gli artisti locali, i fotografi, ma anche i bambini delle scuole primarie.

          Il formato agevole ne facilita la consultazione, induce a prenderlo e riprenderlo in mano ogni mese, più e più volte nel corso dell’anno, per leggerlo e rileggerlo.
          Lo Strolic, presente da più di 90 anni nelle case friulane, è stato ed è tuttora uno strumento di informazione popolare, di lettura e riflessione, ma anche di allegria e ironia.

          Ai giorni nostri è stato soppiantato da modalità di informazione veloci e volatili, quali twitter, instagram o facebook che ci propinano informazioni prive di controllo e che ci abituano ad accettare in modo acritico e passivo quello che viene veicolato.
          Senza dubbio noi preferiamo i vecchi almanacchi da tenere in casa, da leggere e rileggere.

          Per l’Atelier di lettura
          Livia Cappella
        </Text>
        <Image className="mt-3" src="/public/imp_assets/meetings/strolic-furlan.png" alt="strolic-furlan-image" size={ImageSize.SMALL} />
        <Text subtitle>Il Leonardo, almanacco di educazione popolare</Text>
        <Text className="mt-10">
          


          Almanacco è voce araba (al-manākh) e significa calendario e il nostro è, infatti, cadenzato in due stagioni, l’inverno e la primavera, scandite per singola giornata, dal 21 dicembre al 20 giugno.

          Un tipico almanacco è Il Leonardo pubblicato in Italia dal 1952 fino al 1975.

          Veniva edito dall’Ente nazionale biblioteche popolari e scolastiche ed era distribuito gratuitamente alle scuole popolari, ai centri di lettura e ai corsi per adulti organizzati a cura del servizio centrale per l’educazione popolare; era diffuso anche nelle famiglie. L’intento era divulgare, in maniera accessibile a tutti, nozioni riguardanti le più varie branche del sapere e dare informazioni di vita pratica. In un libretto di piccole dimensioni erano concentrati argomenti che riguardavano l’educazione civica, nozioni matematiche e scientifiche, storia e geografia, ma anche informazioni sulle tariffe postali, un prontuario del viaggiatore con specificate le tariffe di treni e aerei, il materiale da tenere nella cassetta sanitaria, nozioni di educazione stradale accanto ai consigli pratici per riparare un’automobile.

          All’inizio c’era il calendario dell’anno in corso, con spazi per annotazioni. Scorrendolo, non si trova traccia di opinioni divergenti, di conflitti sociali che pur c’erano ed è evidente l’orientamento di pensiero. Ad esempio, le prime tre pagine dell’edizione del ’55 riguardano la patria, la famiglia, la religione. Il Leonardo ci dà un’idea dell’Italia del periodo, un paese povero e poco istruito, tuttavia fiducioso nella possibilità di migliorare la propria situazione economica e sociale attraverso l’istruzione. C’era consapevolezza della propria ignoranza e l’istruzione era vista come un valore, come una possibilità di riscatto. Oggi tutto questo sembra scomparso: non solo l’ignoranza si è mantenuta, ma non ve n’è coscienza. Spesso la fragilità delle conoscenze e l’incompetenza sono esibite con arroganza, come fossero valori.

          Per l’Atelier di lettura
          Ivana Miotto
        </Text>
        <Image className="mt-3" src="/public/imp_assets/meetings/leonardo.png" alt="leonardo-image" size={ImageSize.SMALL} />
        <Text subtitle>Giacomo Leopardi, Dialogo di un venditore di almanacchi e di un passeggere</Text>
        <Text className="mt-10">
          Almanacco è voce araba (al-manakh) e significa calendario e il nostro è, infatti, cadenzato in due stagioni, l’inverno e la primavera, scandite per singola giornata, dal 21 dicembre al 20 giugno.

          L’operetta è stata composta da Giacomo Leopardi nel 1832 e pubblicata nell’edizione delle Operette morali del 1834. Progettato probabilmente per il giornale “Lo Spettatore” e indirizzato a “quelli che vogliono leggere per diletto”, il breve dialogo ha un andamento vivace e incalzante anche in virtù della prosa lineare e del lessico comprensibile. Mette a nudo la serena ingenuità di uno dei due protagonisti, il venditore di almanacchi ma, sotto la patina dell’apparente tranquillità, svela ancora una volta il profondo pessimismo del poeta di Recanati.

          Si incontrano per la strada un passante, l’alter ego di Leopardi, e un venditore di almanacchi, o di lunari, per definire in modo più popolare questi pot-pourri di sapienza che si colorano di previsioni, di consigli, di precetti e di commemorazioni. Il viandante pungola il venditore con quesiti che si incentrano soprattutto sulla felicità della vita, che il secondo dà per scontata, mentre il primo, apparentemente consenziente, la confuta.

          Alla precisa domanda del passeggere se il venditore vorrebbe rivivere la vita passata, o se chiunque, ancorché principe, vorrebbe riviverla, l’uomo semplice risponde convintamente di no.

          Ne consegue che la vita che non si vorrebbe rivivere è quella passata, quella già vissuta, quella che si conosce e non si apprezza. Si spera, invece, che quella futura, ignota, possa essere più soddisfacente e piacevole.

          Questo è il senso degli almanacchi, che parlano di un prossimo futuro e giocano, in fondo, sull’ambiguità, tanto che il passeggere, pur pessimista, alla fine acquista dal venditore, per la somma di trenta soldi, il lunario più bello che ha. Si incontrano e si” scontrano” in quest’operetta due interlocutori anonimi portatori di due sentimenti contrapposti: il popolano, col suo sentire ottimista, e l’uomo colto e disilluso e anche pedagogo che cerca di istruire il meno educato e di farlo giungere alla conclusione che le sue convinzioni sono sbagliate.

          Il passeggere, però, non ha spocchia, né tanto meno superbia o prosopopea, ma soffonde tutto il dialogo di una pacata e bonaria ironia dipingendo il popolano e la sua salvifica faciloneria con una sorta di comprensiva pietà. In fondo la sorte infelice che accomuna è quella che tocca a tutta l’umanità, colta o insipiente che sia. E allora, in conclusione, l’unico modo tollerabile di vivere la vita è quello di viverla con superficialità?

          Per l’Atelier di lettura
          Lorenza Moro
        </Text>
        <Image className="mt-3" src="/public/imp_assets/meetings/venditore_almanacchi.png" alt="venditore-almanacchi-image" size={ImageSize.SMALL} />

        <Text subtitle>La nostra festa</Text>
        <Text className="mt-10">
          L’Almanacco prosegue la serie di pubblicazioni iniziata l’anno scorso con l’Annuario. L’intento è quello, come sempre, di promuovere la lettura, di invogliare l’adulto a leggere, permettendogli di conoscere ‘frammenti’, ‘porzioni’, ‘pillole’ di opere di genere diverso e delle più diverse provenienze.

          Almanacco è voce araba (al-manakh) e significa calendario e il nostro è, infatti, cadenzato in due stagioni, l’inverno e la primavera, scandite per singola giornata dal 21 dicembre al 20 giugno. Abbiamo tenuto rigorosamente presente la tradizione degli almanacchi arabo-latini nati nel Basso medioevo ma diffusisi dopo l’invenzione della stampa (ecco implicitamente un omaggio a Gutenberg e alla sua rivoluzione del 1450) per cui almanacco era un insieme di notizie spesso curiose, di carattere letterario ma anche gastronomico, medico, artistico, religioso, geografico e così via. I piccoli tasselli che compongono questo “tessuto di parole”, come in un mosaico dai vivaci e brillanti colori, sono di facile approccio e, quasi sempre, di lieve lettura, spesso venati dal sorriso, talvolta un po’ sarcastici ed amari, come nel leopardiano Dialogo di un venditore di almanacchi e di un passeggere. Gli autori rappresentati sono trasversali alle epoche e agli spazi: i grandi scrittori classici, ma anche rappresentanti del folklore popolare e redattori di notizie bizzarre e straordinarie e di reportage scientifici. Rispettiamo così il gusto per la miscellanea proprio degli almanacchi italiani del ‘700 quali quelli di Carlo Gozzi e di Pietro Verri e, successivamente, del Porta, ma ci rifacciamo anche alla tradizione degli almanacchi più squisitamente letterari quali il francese Almanach des Muses, che conteneva principalmente poesie, inframmezzando i testi in prosa con liriche che vanno da Omero ai canti eschimesi, a Italo Calvino, alla poesia cinese antica.

          Teniamo a sottolineare il carattere popolare di questa nostra pubblicazione, intendendo dell’aggettivo l’accezione più nobile: diretto a quante più persone possibile. Il libro è, infatti, accompagnato da immagini che, pagina per pagina, illustrano visivamente la parola scritta. Come negli antichi almanacchi spesso vi era la presenza di disegni a corredare il contenuto, così noi abbiamo fatto nelle pagine di risguardo dove campeggiano i begli acquerelli dell’amico Corrado Infantino.

          Nel ringraziare tutti coloro che hanno collaborato alla realizzazione di questo nostro “libraccio”, un abbraccio affettuoso va alla direttrice scientifica Maria Grazia Liverani.

          Ed ora, che la lettura sia davvero una festa!

          Per l’Atelier di lettura
          Lorenza Moro
        </Text>
      </div>
    </PageLayout>
  )
}
export async function getStaticProps() {
  const dir_slider_img = './public/imp_assets/meetings/firenze_slider'
  const absolute_path_dir = path.resolve(dir_slider_img);
  const filenames = fs.readdirSync(absolute_path_dir, { withFileTypes: true })
    .filter(file => !file.isDirectory())
    .map(file => '/public/imp_assets/meetings/firenze_slider/' + file.name)
  return {
    props: {
      filenames,
    },
  }
}

export default Siberia